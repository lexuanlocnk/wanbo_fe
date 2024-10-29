import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://192.168.245.190:8002/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

axiosClient.interceptors.response.use(
  (response) => response, // Adjust based on what you need here
  (error) => {
    if (error.response) {
      console.error(error.response.data.message || "Error occurred");
    }
    return Promise.reject(error);
  }
);

const imageBaseUrl = "http://192.168.245.190:8002/uploads/";

export default axiosClient;
export { imageBaseUrl };
