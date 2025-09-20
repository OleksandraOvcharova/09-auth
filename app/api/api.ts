import axios, { AxiosError } from "axios";

export type AuthApiError = AxiosError<{
  error: string;
  response: { message: string };
}>;

export const api = axios.create({
  baseURL: "https://notehub-api.goit.study",
  withCredentials: true,
});
