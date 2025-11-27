import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaValidation } from "../../validators/PeriodModalSchema";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  downloadReport,
  generateUrlToDownloadPeriodReport,
} from "../../services/reportsService";
import { useEffect, useState } from "react";
import downloadFileReport from "../../utils/downloadFileReport";

export default function useReportPeriodModal(year) {
  const monthsOrder = {
    Janeiro: "01",
    Fevereiro: "02",
    Março: "03",
    Abril: "04",
    Maio: "05",
    Junho: "06",
    Julho: "07",
    Agosto: "08",
    Setembro: "09",
    Outubro: "10",
    Novembro: "11",
    Dezembro: "12",
  };

  const [startMonth, setStartMonth] = useState();
  const [endMonth, setEndMonth] = useState();

  const queryClient = useQueryClient();

  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const {
    data: urlGeneratedPeriod,
    isFetching: urlGeneratedPeriodFetching,
    refetch,
  } = useQuery({
    queryKey: ["generateUrlPeriod"],
    queryFn: () => generateUrlToDownloadPeriodReport(startMonth, endMonth),
    enabled: false,
  });
  const generatedUrl = urlGeneratedPeriod?.data;
  console.log("generatedUrl", generatedUrl);

  const { data: dataFileReport, isFetching: dataFileReportFetching } = useQuery(
    {
      queryKey: ["downloadReport"],
      queryFn: () => downloadReport(generatedUrl),
      enabled: !!generatedUrl,
    }
  );

  const onSubmit = () => {
    setStartMonth(`${monthsOrder[getValues("startMonth")]}/${year}`);
    setEndMonth(`${monthsOrder[getValues("endMonth")]}/${year}`);

    queryClient.invalidateQueries(["generateUrlPeriod"]);

    refetch();
  };

  useEffect(() => {
    if (dataFileReport) {
      const blobResponse = dataFileReport.data;
      downloadFileReport(
        blobResponse,
        `relatorio_periodo_${startMonth}_${endMonth}.xlsx`
      );
    }
  }, [dataFileReport]);

  return {
    select: {
      errors,
      register,
    },
    buttonModal: {
      disabled: dataFileReportFetching || urlGeneratedPeriodFetching,
    },
    showLoadingModal: dataFileReportFetching || urlGeneratedPeriodFetching,
    handleClickGenerateReport: handleSubmit(data => onSubmit(data)),
  };
}
