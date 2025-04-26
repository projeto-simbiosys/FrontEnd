import { axiosInstance } from "../config/axios";

export function createUser(newUser) {
  return axiosInstance.post("/usuarios", newUser);
}
