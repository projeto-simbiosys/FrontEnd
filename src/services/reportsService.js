import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/reports/?year=${year}`);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears");
}

export function getReportDataById(id) {
  return axiosInstance.get(`/relatorios/${id}`);
}

export function deleteReport(id) {
  return axiosInstance.delete(`/reports/${id}`);
}
