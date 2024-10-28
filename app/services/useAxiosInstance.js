import axios from 'axios';

export const API_URL = 'http://localhost:8080';

const useAxiosInstance = () => {
  const instance = axios.create({
    baseURL: process.env.NEXT_APP_API_URL || API_URL,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};

export default useAxiosInstance;