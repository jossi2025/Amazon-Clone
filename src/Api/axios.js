import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-api-deploy-2025-new.onrender.com",
  // baseURL: "http://127.0.0.1:5001/clone-6b378/us-central1/api"
});

export { axiosInstance };
