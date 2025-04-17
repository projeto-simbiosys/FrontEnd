import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getAvailableYears,
  getReportsByYear,
} from "../../services/reportsService";
import reportsListAdapter from "../../adapters/reportsListAdapter";
import availableYearsListAdapter from "../../adapters/availableYearsListAdapter";

export default function useReportsTable() {
  const [selectedYearTab, setSelectedYearTab] = useState();

  const queryClient = useQueryClient();

  const { data: reportsYears, isSuccess: reportsYearsSuccess } = useQuery({
    queryKey: ["availableYears"],
    queryFn: getAvailableYears,
  });
  const availableYearsAdapted = availableYearsListAdapter(reportsYears?.data);

  useEffect(() => {
    if (reportsYearsSuccess) {
      setSelectedYearTab(availableYearsAdapted[0]);
    }
  }, [reportsYearsSuccess]);

  const {
    data: reportsData,
    error: reportsDataError,
    isLoading: reportsDataLoading,
    isSuccess: reportsDataSuccess,
  } = useQuery({
    queryKey: ["reportsByYear", selectedYearTab],
    queryFn: () => getReportsByYear(selectedYearTab),
    enabled: selectedYearTab !== undefined,
  });

  const reportsAdapted = reportsListAdapter(reportsData?.data);

  useEffect(() => {
    queryClient.refetchQueries({
      queryKey: ["reportsByYear", selectedYearTab],
    });
  }, [selectedYearTab]);

  return {
    tabs: {
      values: availableYearsAdapted,
      active: selectedYearTab,
      handleTabChange: setSelectedYearTab,
    },
    reports: {
      data: reportsAdapted,
      error: reportsDataError,
      isLoading: reportsDataLoading,
      isSuccess: reportsDataSuccess,
      isEmpty: reportsAdapted?.length === 0,
      countClosed: reportsAdapted?.filter(report => report.isClosed)?.length,
    },
  };
}
