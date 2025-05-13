import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "@/services/authService";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "@/validators/loginSchema";
import userLoginAdapter from "@/adapters/userLoginAdapter";

export default function useRegister() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const triggerNotification = time => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };

  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onError: error => {
      error.message =
        error.code == "ERR_NETWORK" ? "Erro de conexão" : error.message;
      triggerNotification(3000);
    },
    onSuccess: data => {
      localStorage.setItem("token", data.data.token);
      localStorage.setItem(
        "user",
        JSON.stringify([data.data.email, data.data.nome, data.data.userId])
      );

      triggerNotification(1500);
      setTimeout(() => {
        navigate("/admin/reports");
      }, 1500);
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const onSubmit = data => {
    const userLoginAdapted = userLoginAdapter(data);
    mutation.mutate(userLoginAdapted);
  };

  function getInputProps(fieldName) {
    const fieldError = errors[fieldName];
    return {
      hasError: !!fieldError,
      errorMessage: fieldError?.message || "error",
    };
  }

  return {
    navigate,
    form: {
      register,
      handleSubmit,
      onSubmit,
      inputs: {
        email: getInputProps("email"),
        password: getInputProps("password"),
      },
      request: {
        status: {
          isLoading: mutation.isPending,
          isSuccess: mutation.isSuccess,
          type: mutation.status,
          message: mutation.error
            ? mutation.error.message
            : "Login realizado com sucesso!",
        },
      },
      showNotification,
    },
  };
}
