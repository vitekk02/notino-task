import axios, { AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export const customInstance = <T>(config: AxiosRequestConfig): Promise<T> => {
  return instance
    .request<T>({
      ...config,
      baseURL: "https://fakestoreapi.com",
    })
    .then((response) => response.data);
};
