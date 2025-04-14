import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../../services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "../../validators/loginSchema";

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
    onSuccess: () => {
      triggerNotification(1500);
      setTimeout(() => {
        navigate("/dashboard");
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
    mutation.mutate(data);
  };

  function getInputProps(fieldName) {
    const fieldError = errors[fieldName];
    return {
      hasError: !!fieldError,
      errorMessage: fieldError?.message || "error",
    };
  }

  return {
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
          isLoading: mutation.isLoading,
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
