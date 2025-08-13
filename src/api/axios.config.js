import axios from "axios";
export const api = axios.create({
  baseURL: `https://localhost:3000/`,
  timeout: 10000,
  withCredentials: true,
});
const accessToken = null;
export function getAccessToken(token) {
  accessToken = token;
}
api.interceptors.response.use(undefined, async (error) => {
  if (error.response?.status == 401 && !error.config._retry) {
    try {
      error.config._retry = true;
      const refreshRes = await api.get("api/auth/refresh", {
        withCredentials: true,
      });
      const newToken = refreshRes.headers["authorization"];
      accessToken = newToken;
      error.config.headers.authorization = `Bearer ${token}`;
      return api(error.config);
    } catch (err) {
      return Promise.reject(err);
    }
  }
  return error;
});

api.interceptors.request.use(async (config) => {
  if (accessToken) {
    config.headers.authorization = `Bearer ${accessToken}`;
  }
  return config;
});
