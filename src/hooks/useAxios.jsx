import axios from "axios";

// Create an axios instance with default configuration
// You can customize the baseURL and other settings as needed
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

// You can add interceptors or default headers here if needed
// For example, to add an authorization header
const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
