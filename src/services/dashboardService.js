import { axiosInstance } from "../config/axios";

export function getReportsByYear(year) {
  return axiosInstance.get(`/relatorios/ano/${year}`);
}

export function getReportsByMonthYear(page, size) {
  return axiosInstance.get("/relatorios/listar", {
    params: {
      page,
      size,
    },
  });
}
