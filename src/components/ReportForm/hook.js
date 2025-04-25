import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";
import {
  getReportDataById,
  updateAndSaveReport,
} from "../../services/reportsService";
import reportInfosAdapter from "../../adapters/reportInfosAdapter";
import reportInfosToUpdateAdapter from "../../adapters/reportInfosToUpdateAdapter";

export default function useReportForm() {
  const [activeTab, setActiveTab] = useState("referrals");
  const [prevTab, setPrevTab] = useState("referrals");
  const { id } = useParams();
  const { reset, handleSubmit } = useFormContext();

  const onSubmit = data => {
    const reportInfosToUpdateAdapted = reportInfosToUpdateAdapter(data);
    mutation.mutate({ id, reportInfosToUpdateAdapted });
  };

  const {
    data: reportInfosData,
    isLoading: reportInfosLoading,
    isSuccess: reportInfosSuccess,
  } = useQuery({
    queryKey: ["reportInfos", id],
    queryFn: () => getReportDataById(id),
    enabled: !!id,
  });

  const mutation = useMutation({
    mutationKey: ["updateAndSaveReport"],
    mutationFn: updateAndSaveReport,
  });

  useEffect(() => {
    if (reportInfosSuccess && reportInfosData) {
      const reportInfosAdapted = reportInfosAdapter(reportInfosData.data);
      reset(reportInfosAdapted);
    }
  }, [reportInfosSuccess, reportInfosData, reset]);

  const tabOrder = ["referrals", "actions", "others"];

  const direction =
    tabOrder.indexOf(activeTab) > tabOrder.indexOf(prevTab) ? 1 : -1;

  const variants = {
    enter: dir => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: dir => ({
      x: dir > 0 ? -100 : 100,
      opacity: 0,
    }),
  };

  return {
    tabs: {
      activeTab,
      variants: {
        referrals: activeTab === "referrals" ? "sys-primary" : "sys-light",
        actions: activeTab === "actions" ? "sys-primary" : "sys-light",
        others: activeTab === "others" ? "sys-primary" : "sys-light",
      },
      handleTabChange: tab => {
        setPrevTab(activeTab);
        setActiveTab(tab);
      },
    },
    formAnimation: {
      direction,
      variants,
    },
    reportInfosLoading,
    updateAndSaveReport: handleSubmit(onSubmit),
  };
}
