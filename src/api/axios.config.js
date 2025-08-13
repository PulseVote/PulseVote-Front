import axios from "axios";
export const api = axios.create({
  baseURL: `https://localhost:3000/`,
  timeout: 10000,
  withCredentials: true,
});
const accessToken = null;
function getAccessToken(token) {
  accessToken = token;
}
api.interceptors.request;
