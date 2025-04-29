import { axiosInstance } from "../config/axios";

const especificApi = {
  baseURL: "http://localhost:3000", // BaseURL diferente só nessa chamada
};

export function getReportsByYear(year) {
  return axiosInstance.get(`/reports/?year=${year}`, especificApi);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears", especificApi);
}

export function getReportDataById(id) {
  return axiosInstance.get(`/reports/${id}`, especificApi);
}

export function deleteReport(id) {
  return axiosInstance.delete(`/reports/${id}`, especificApi);
}

export function createReport(data) {
  return axiosInstance.post("/reports", data, especificApi);
}

export function updateReport(data) {
  return axiosInstance.patch(`/reports/${data.id}`, data.details, especificApi);
}
