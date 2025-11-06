import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/relatorios/ano/${year}/listar`);
}

export function getReportDataById(id) {
  return axiosInstance.get(`/relatorios/${id}`);
}

export function deleteReport(id) {
  return axiosInstance.delete(`/relatorios/${id}`);
}

export function createReport(data) {
  return axiosInstance.post("/relatorios", data);
}

export function updateReport(data) {
  return axiosInstance.patch(`/relatorios/${data.id}`, data.details);
}

export function generateUrlToDownload(monthYear) {
  return axiosInstance.get(`/relatorios/exportar/mes?mesAno=${monthYear}`);
}

export function downloadReport(url) {
  return axiosInstance.get(url, {
    responseType: "blob",
  });
}

export function generateUrlToDownloadPeriodReport(startMonth, endMonth) {
  return axiosInstance.get(
    `/relatorios/exportar/periodo?de=${startMonth}&para=${endMonth}`
  );
}

export function getAllReports(page, size) {
  return axiosInstance.get("/relatorios/listar", {
    params: {
      page,
      size,
    },
  });
}
