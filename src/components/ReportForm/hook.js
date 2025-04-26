import { useMutation, useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import {
  createReport,
  getReportDataById,
  updateReport,
} from "../../services/reportsService";
import reportInfosAdapter from "../../adapters/reportInfosAdapter";
import reportInfosToUpdateAdapter from "../../adapters/reportInfosToUpdateAdapter";
import { handleApiError } from "../../utils/handleApiError";
import reportInfosToCreate from "../../adapters/reportInfosToCreate";

export default function useReportForm(year, month) {
  const [activeTab, setActiveTab] = useState("referrals");
  const [prevTab, setPrevTab] = useState("referrals");
  const [showNotification, setShowNotification] = useState(false);
  const [showSaveAndCloseModal, setShowSaveAndCloseModal] = useState(false);
  const { id } = useParams();
  const { reset, handleSubmit } = useFormContext();

  const navigate = useNavigate();

  const onSubmit = (data, statusReport) => {
    if (id) {
      const reportInfosToUpdateAdapted = reportInfosToUpdateAdapter(
        data,
        statusReport
      );
      mutationUpdate.mutate({ id, details: reportInfosToUpdateAdapted });
    } else {
      const reportInfosToCreateAdapted = reportInfosToCreate(
        year,
        month,
        data,
        statusReport
      );
      mutationCreate.mutate(reportInfosToCreateAdapted);
    }
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

  const mutationUpdate = useMutation({
    mutationKey: ["updateReport"],
    mutationFn: updateReport,
    onSuccess: handleSuccess,
    onError: handleError,
  });

  const mutationCreate = useMutation({
    mutationKey: ["createReport"],
    mutationFn: createReport,
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

  const getNotification = type => {
    const mutation = type === "update" ? mutationUpdate : mutationCreate;

    return {
      show: showNotification,
      type: mutation.status,
      title: mutation.status === "success" ? "Sucesso!" : "Erro!",
      message: mutation.error
        ? handleApiError(mutation.error)
        : type === "update"
        ? "Dados editados com sucesso!"
        : "Relatório criado com sucesso!",
    };
  };

  const handleFormSubmit = statusReport =>
    handleSubmit(data => onSubmit(data, statusReport));

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
    notification: getNotification(id ? "update" : "create"),
    modal: {
      open: () => setShowSaveAndCloseModal(true),
      show: showSaveAndCloseModal,
      month,
      onClose: () => setShowSaveAndCloseModal(false),
      onConfirm: () => {
        handleFormSubmit("close")();
      },
    },
    saveButton: {
      isLoading: id ? mutationUpdate.isPending : mutationCreate.isPending,
      isSuccess: id ? mutationUpdate.isSuccess : mutationCreate.isSuccess,
    },
    saveAndCloseButton: {
      isLoading: id ? mutationUpdate.isPending : mutationCreate.isPending,
      isSuccess: id ? mutationUpdate.isSuccess : mutationCreate.isSuccess,
    },
    saveReport: handleFormSubmit("open"),
  };
}
