import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_LIVE_LINK || "http://localhost:3000",
  withCredentials: true,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {
      window.location.href = "/auth/signIn";
    }
    return Promise.reject(error);
  }
);

export default api;
