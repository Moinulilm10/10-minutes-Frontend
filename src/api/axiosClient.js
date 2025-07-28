import axios from "axios";

// Create an Axios instance
const axiosClient = axios.create({
  baseURL: "https://api.10minuteschool.com/discovery-service/api/v1",
  headers: {
    "X-TENMS-SOURCE-PLATFORM": "web",
    "Content-Type": "application/json",
  },
  timeout: 10000,
  params: {
    lang: "en",
  },
});

// Request Interceptor (e.g., for logging)
axiosClient.interceptors.request.use(
  (config) => {
    console.log(`[Request] ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error("[Request Error]", error);
    return Promise.reject(error);
  }
);

// Response Interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.code === "ECONNABORTED") {
      console.error("⏱ Request timeout");
    } else if (error.response) {
      console.error(
        `❌ Error ${error.response.status}:`,
        error.response.data?.message || "Unknown error"
      );
    } else {
      console.error("❌ Network or unknown error:", error.message);
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
