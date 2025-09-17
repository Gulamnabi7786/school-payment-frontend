// frontend/utils/axios.ts
import axios from "axios";

const api = axios.create({
  baseURL: '/api', // ✅ must use backend
});

// ✅ Optional: attach token automatically
api.interceptors.request.use((config) => {
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
