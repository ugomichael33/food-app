import axios from 'axios';

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
const axiosClient = axios.create({
  baseURL: apiBaseUrl
});

export default axiosClient;