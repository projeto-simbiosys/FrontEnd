import * as yup from "yup";

const commonMessage = "Preencha para continuar!";

export const schemaValidation = yup
  .object({
    firstName: yup.string().required(commonMessage),
    lastName: yup.string().required(commonMessage),
    role: yup.string().required("Escolha um cargo!"),
    email: yup
      .string()
      .email("Preencha um e-mail válido!")
      .required(commonMessage),
    password: yup
      .string()
      .required(commonMessage)
      .matches(/[0-9]/, "No minimo um número")
      .matches(/[A-Z]/, "No minimo uma letra maiúscula")
      .matches(/[a-z]/, "No minimo uma letra minúscula")
      .matches(/[!@#$%&]/, "No minimo um caractere especial: !@#$%&")
      .min(6, "No minimo 6 caracteres"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  })
  .required();
