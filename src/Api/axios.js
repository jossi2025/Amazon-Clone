import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-2025-new.onrender.com",
});

export { axiosInstance };
