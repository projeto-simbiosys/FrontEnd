import { useQueryClient } from "@tanstack/react-query";
import capitalizeWords from "../utils/capitalizeWords";

export default function useExistingMonthsByYear(year) {
  const queryClient = useQueryClient();

  const reports = queryClient.getQueryData(["reportsByYear", year]);

  const months = reports?.data?.map(report => {
    return {
      id: report.id,
      value: capitalizeWords(report.month),
    };
  });

  return months;
}
