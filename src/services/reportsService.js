import { axiosInstance } from "../config/axios";

const especificApi = {
  baseURL: "http://localhost:3000", // BaseURL diferente só nessa chamada
};

export function getReportsByYear(year) {
  return axiosInstance.get(`/relatorios/ano/${year}/listar`);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears", especificApi);
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
  return axiosInstance.patch(`/reports/${data.id}`, data.details, especificApi);
}
