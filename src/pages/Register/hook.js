import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "../../validators/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useRegister() {
  const navigate = useNavigate();
  const [showNotification, setShowNotification] = useState(false);

  const triggerNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: createUser,
    onSettled: triggerNotification,
    onError: error => {
      error.message =
        error.code == "ERR_NETWORK" ? "Erro de conexão" : error.message;
    },
    onSuccess: () => {
      setTimeout(() => {
        navigate("/login");
      }, 3000);
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
        firstName: getInputProps("firstName"),
        lastName: getInputProps("lastName"),
        role: getInputProps("role"),
        email: getInputProps("email"),
        password: getInputProps("password"),
        confirmPassword: getInputProps("confirmPassword"),
      },
      request: {
        status: {
          isLoading: mutation.isLoading,
          isSuccess: mutation.isSuccess,
          type: mutation.status,
          message: mutation.error
            ? mutation.error.message
            : "Usuário criado com sucesso!",
        },
      },
      showNotification,
    },
  };
}
