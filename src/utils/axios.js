import axios from "axios";

const API_URL = "https://restcountries.com/v2";

// ----------------------------------------------------------------------

const axiosInstance = axios.create({ baseURL: API_URL });

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);

export default axiosInstance;
