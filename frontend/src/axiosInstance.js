import axios from "axios";
import promise from "promise";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const _error = error.toJSON();
    if (_error.message.includes("Network")) {
      alert("No hay comunicación con el servidor");
    }
    if (error?.response?.status === 500) {
      alert("Error Interno del Servidor");
    }
    // Do something with request error
    return promise.reject(error);
  }
);

export default axiosInstance;
