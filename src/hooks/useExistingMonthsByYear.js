import { useQueryClient } from "@tanstack/react-query";
import capitalizeWords from "../utils/capitalizeWords";

export default function useExistingMonthsByYear(year) {
  const months = {
    "01": "janeiro",
    "02": "fevereiro",
    "03": "março",
    "04": "abril",
    "05": "maio",
    "06": "junho",
    "07": "julho",
    "08": "agosto",
    "09": "setembro",
    10: "outubro",
    11: "novembro",
    12: "dezembro",
  };

  const queryClient = useQueryClient();

  const reports = queryClient.getQueryData(["reportsByYear", year]);

  if (reports?.data?.content) {
    const monthsToSelect = reports.data.content.map(report => {
      const monthYear = report.mesAno.split("/");

      return {
        id: report.id,
        value: capitalizeWords(months[monthYear[0]]),
      };
    });
    return monthsToSelect;
  }
}
