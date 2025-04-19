import { useMemo } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function useAvailablePeriods() {
  const queryClient = useQueryClient();

  const allQueries = queryClient.getQueryCache().findAll();
  const allQueryKeys = allQueries.map(query => query.queryKey);
  console.log("allQueryKeys", allQueryKeys);

  const periods = useMemo(() => {
    const reports = queryClient.getQueryData(["reportsByYear"]);
    console.log("reports", reports);
    return reports?.data;
  }, [queryClient]);
  return periods;
}
