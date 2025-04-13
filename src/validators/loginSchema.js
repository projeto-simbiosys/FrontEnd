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
      .min(6, "No minmo 6 caracteres")
      .required(commonMessage),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "As senhas não conferem"),
  })
  .required();
