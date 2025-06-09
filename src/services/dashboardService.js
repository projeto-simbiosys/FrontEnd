import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/relatorios/ano/${year}`);
}

export function getReportsByMonthYear(monthYear) {
  return axiosInstance.get(`/relatorios/mesAno/${monthYear}`);
}
