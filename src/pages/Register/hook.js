import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaValidation } from "../../validators/loginSchema";
import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/api";

export default function useRegister() {
  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: createUser,
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
        isLoading: mutation.isLoading,
        isError: mutation.isError,
        isSuccess: mutation.isSuccess,
      },
    },
  };
}
