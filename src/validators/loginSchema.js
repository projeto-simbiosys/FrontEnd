import * as yup from "yup";

const commonMessage = "Preencha para continuar!";

export const schemaValidation = yup
  .object({
    email: yup
      .string()
      .email("Preencha um e-mail válido!")
      .required(commonMessage),
    password: yup.string().required(commonMessage),
  })
  .required();
