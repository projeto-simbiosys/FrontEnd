import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/reports/?year=${year}`);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears");
}

export function deleteReport(id) {
  return axiosInstance.delete(`/reports/${id}`);
}
