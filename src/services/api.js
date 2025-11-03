import { axiosInstance } from "../config/axios";

export function createUser(newUser) {
  return axiosInstance.post("/usuarios", newUser);
}

export function resetPassword(email, password) {
  return axiosInstance.patch("/usuarios/alterar-senha", {
    email,
    novaSenha: password,
  });
}
