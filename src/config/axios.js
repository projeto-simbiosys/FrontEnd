import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_URL_API}`,
});

axiosInstance.interceptors.request.use(
  async config => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    const token = localStorage.getItem("token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);
