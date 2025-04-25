import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  getReportDataById,
  updateAndSaveReport,
} from "../../services/reportsService";
import reportInfosAdapter from "../../adapters/reportInfosAdapter";
import reportInfosToUpdateAdapter from "../../adapters/reportInfosToUpdateAdapter";
import { handleApiError } from "../../utils/handleApiError";

export default function useReportForm() {
  const [activeTab, setActiveTab] = useState("referrals");
  const [prevTab, setPrevTab] = useState("referrals");
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams();
  const { reset, handleSubmit } = useFormContext();

  const navigate = useNavigate();

  const onSubmit = data => {
    const reportInfosToUpdateAdapted = reportInfosToUpdateAdapter(data);
    mutation.mutate({ id, reportInfosToUpdateAdapted });
  };

  const triggerNotification = time => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, time);
  };

  const handleSuccess = () => {
    triggerNotification(2000);

    setTimeout(() => {
      navigate("/admin/reports");
    }, 2000);
  };

  const handleError = () => {
    triggerNotification(3000);
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
    onSuccess: handleSuccess,
    onError: handleError,
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
    notification: {
      show: showNotification,
      type: mutation.status,
      title: mutation.status === "success" ? "Sucesso!" : "Erro!",
      message: mutation.error
        ? handleApiError(mutation.error)
        : "Dados editados com sucesso!",
    },
    saveButton: {
      isLoading: mutation.isPending,
      isSuccess: mutation.isSuccess,
    },
    updateAndSaveReport: handleSubmit(onSubmit),
  };
}
