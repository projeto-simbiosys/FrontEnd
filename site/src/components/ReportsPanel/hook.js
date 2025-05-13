import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getReportsByYear } from "../../services/reportsService";
import reportsListAdapter from "../../adapters/reportsListAdapter";
import availableYearsListAdapter from "../../adapters/availableYearsListAdapter";
import { useNavigate } from "react-router";

export default function useReportsPanel() {
  const availableYearsAdapted = availableYearsListAdapter();

  const [showPeriodModal, setShowPeriodModal] = useState(false);
  const [selectedYearTab, setSelectedYearTab] = useState(
    availableYearsAdapted[0]
  );
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
      isLoading: reportsDataLoading || reportsDataFetching,
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
    reportPeriodModal: {
      show: showPeriodModal,
      handleClose: () => setShowPeriodModal(false),
      handleOpen: () => setShowPeriodModal(true),
    },
    isOnline: navigator.onLine,
    navigate,
  };
}
