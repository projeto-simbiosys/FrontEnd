import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/reports/?year=${year}`);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears");
}

export function getReportDataById(id) {
  return axiosInstance.get(`/reports/${id}`);
}

export function deleteReport(id) {
  return axiosInstance.delete(`/reports/${id}`);
}

export function createReport(data) {
  return axiosInstance.post("/reports", data);
}

export function updateReport(data) {
  return axiosInstance.patch(`/reports/${data.id}`, { details: data.details });
}
