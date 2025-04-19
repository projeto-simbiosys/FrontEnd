import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  getAvailableYears,
  getReportsByYear,
} from "../../services/reportsService";
import reportsListAdapter from "../../adapters/reportsListAdapter";
import availableYearsListAdapter from "../../adapters/availableYearsListAdapter";
import { useNavigate } from "react-router";

export default function useReportsPanel() {
  const [selectedYearTab, setSelectedYearTab] = useState();
  const [filters, setFilters] = useState({
    open: true,
    closed: true,
  });

  const navigate = useNavigate();

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;

    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const queryClient = useQueryClient();

  const {
    data: reportsYears,
    isLoading: reportsYearsLoading,
    isSuccess: reportsYearsSuccess,
  } = useQuery({
    queryKey: ["availableYears"],
    queryFn: getAvailableYears,
    enabled: navigator.onLine,
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
    isFetching: reportsDataFetching,
    isSuccess: reportsDataSuccess,
  } = useQuery({
    queryKey: ["reportsByYear", selectedYearTab],
    queryFn: () => getReportsByYear(selectedYearTab),
    enabled: selectedYearTab !== undefined,
  });

  const reportsListAdapted = reportsListAdapter(reportsData?.data);

  useEffect(() => {
    queryClient.refetchQueries({
      queryKey: ["reportsByYear", selectedYearTab],
    });
  }, [selectedYearTab]);

  return {
    tabs: {
      values: availableYearsAdapted ? availableYearsAdapted : [],
      active: selectedYearTab,
      isLoading: reportsYearsLoading,
      handleTabChange: setSelectedYearTab,
    },
    reports: {
      data: reportsListAdapted ? reportsListAdapted : [],
      error: reportsDataError,
      isLoading: reportsDataLoading || reportsDataFetching,
      isSuccess: reportsDataSuccess,
      isEmpty: reportsListAdapted?.length === 0,
      countClosed: reportsListAdapted?.filter(report => report.isClosed)
        ?.length,
    },
    filter: {
      values: filters,
      handleCheckboxChange,
    },
    isOnline: navigator.onLine,
    navigate,
  };
}
