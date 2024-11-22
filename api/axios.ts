import axios from "axios";
import { NavigateFunction } from "react-router-dom";
import { ResidentPatchPayload } from "./types";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    const accessToken = window.localStorage.getItem("accessToken");
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
        window.localStorage.clear();
        sessionStorage.clear();
        return Promise.reject(error);
      }

      // Handle 401 error for token refresh
      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshToken = window.localStorage.getItem("refreshToken");
          if (!refreshToken) {
            navigate("/", { replace: true });
            window.localStorage.clear();
            return Promise.reject(error);
          }

          const response = await api.get("/auth/refresh", {
            headers: { Authorization: `Bearer ${refreshToken}` },
          });
          const { accessSigningPayload } = response.data;

          // Store the new access token
          window.localStorage.setItem("accessToken", accessSigningPayload);

          // Retry the original request with the new access token
          originalRequest.headers["Authorization"] =
            `Bearer ${accessSigningPayload}`;
          return api(originalRequest);
        } catch (refreshError) {
          navigate("/", { replace: true });
          window.localStorage.clear();
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    },
  );
};

export async function refreshTokens() {
  api.defaults.headers.common["Authorization"] =
    `Bearer ${window.localStorage.getItem("accessToken")}`;
}

export default api;
