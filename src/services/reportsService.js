import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/${year}`);
}

export function getAvailableYears() {
  return axiosInstance.get("/reportsYears");
}
