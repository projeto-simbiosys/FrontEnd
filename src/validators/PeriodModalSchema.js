import * as yup from "yup";

const monthsOrder = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

export const schemaValidation = yup
  .object({
    startMonth: yup.string(),
    endMonth: yup
      .string()
      .test(
        "is-after-start",
        "O mês final deve ser depois do mês inicial",
        function (end) {
          const { startMonth } = this.parent;

          const startIndex = monthsOrder.indexOf(startMonth);
          const endIndex = monthsOrder.indexOf(end);

          return endIndex > startIndex;
        }
      ),
  })
  .required();
