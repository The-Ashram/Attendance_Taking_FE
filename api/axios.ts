import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

// Add a response interceptor
export const setupInterceptors = (
  navigate: NavigateFunction,
  logout: Function,
) => {
  api.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      // Check if error response exists and handle 403 error
      if (error.response?.status === 403) {
        navigate("/", { replace: true });
        logout();
        localStorage.clear();
        sessionStorage.clear();
        return Promise.reject(error);
      }

      // Handle 401 error for token refresh
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = localStorage.getItem("refreshToken");
          if (!refreshToken) {
            navigate("/", { replace: true });
            localStorage.clear();
            return Promise.reject(error);
          }

          const response = await api.get("/auth/refresh", {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          const { accessSigningPayload } = response.data;

          // Store the new access token
          localStorage.setItem("accessToken", accessSigningPayload);

          // Retry the original request with the new access token
          originalRequest.headers["Authorization"] =
            `Bearer ${accessSigningPayload}`;
          return api(originalRequest);
        } catch (refreshError) {
          navigate("/", { replace: true });
          localStorage.clear();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

export default api;
