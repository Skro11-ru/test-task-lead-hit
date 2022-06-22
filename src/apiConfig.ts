import axios, { AxiosInstance } from "axios";
const api: AxiosInstance = axios.create({
  baseURL: "https://track-api.leadhit.io/client/"
});
export default api;
