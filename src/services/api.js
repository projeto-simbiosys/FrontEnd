import { axiosInstance } from "../config/axios";

async function fetchLogin() {
  const res = await fetch(urlApi);
  const data = await res.json();
  return data;
}

export function createUser(newUser) {
  return axiosInstance.post("/users", newUser);
}
