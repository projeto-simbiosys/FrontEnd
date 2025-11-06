import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { getAllReports, getReportsByYear } from "../../services/reportsService";
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
  const [page, setPage] = useState(0);

  const navigate = useNavigate();

  const handleCheckboxChange = event => {
    const { name, checked } = event.target;

    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const isAllYears = selectedYearTab === "todos";

  const {
    data: reportsData,
    error: reportsDataError,
    isLoading: reportsDataLoading,
    isFetching: reportsDataFetching,
    isSuccess: reportsDataSuccess,
    refetch: refetchReports,
  } = useQuery({
    queryKey: ["reportsByYear", isAllYears ? "todos" : selectedYearTab],
    queryFn: () =>
      isAllYears ? getAllReports(page) : getReportsByYear(selectedYearTab),
    enabled: selectedYearTab !== undefined,
  });

  const reportsListAdapted = reportsListAdapter(reportsData?.data);
  console.log(reportsListAdapted);

  useEffect(() => {
    if (selectedYearTab !== undefined) {
      refetchReports();
    }
  }, [selectedYearTab, refetchReports, page]);

  return {
    tabs: {
      values: availableYearsAdapted ? availableYearsAdapted : [],
      active: selectedYearTab,
      isLoading: reportsDataLoading || reportsDataFetching,
      handleTabChange: setSelectedYearTab,
    },
    pagination: {
      ActualPage: page + 1,
      onChange: page => setPage(page),
      totalPages: reportsListAdapted.totalPages,
    },
    reports: {
      showAll: isAllYears,
      data: reportsListAdapted ? reportsListAdapted : [],
      error: reportsDataError,
      isLoading: reportsDataLoading || reportsDataFetching,
      isSuccess: reportsDataSuccess,
      isEmpty: reportsListAdapted?.length === 0,
      countClosed: reportsListAdapted?.list?.filter(report => report.isClosed)
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
