import { axiosInstance } from "../config/axios";

export function login(data) {
  return axiosInstance.post("/usuarios/login", data);
}
