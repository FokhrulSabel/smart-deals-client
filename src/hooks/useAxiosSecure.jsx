import axios from "axios";
import useAuth from "./useAuth";

const instance = axios.create({
  baseURL: "http://localhost:5000",
});
//
const useAxiosSecure = () => {
  const { user } = useAuth();

  // set token in the header for all the api call using axiosSecure hook

  // response interceptor
  instance.interceptors.request.use((config) => {
    console.log(config);
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });

  return instance;
};

export default useAxiosSecure;
