import axios from "axios";
import { IAxiosResponse, IResponseError } from "./api_interface";

const server = axios.create({
  baseURL: "URL",
  timeout: 20000,
});

const getHeaders = async (params?: any) => ({
  ...params,
  headers: {
    Accept: "application/json",
    ...params?.headers,
  },
});

server.interceptors.request.use(
  (config) => config,
  (error) => Promise.resolve(error)
);

const errorResponse = (error: any): Promise<IResponseError> =>
  Promise.resolve({
    error: true,
    status: error.response.status,
    headers: error.response.headers,
    data: error.response.data,
  });

export const GET = async (
  url: string,
  headersParams?: unknown,
  params?: unknown
): Promise<IAxiosResponse<unknown>> => {
  let path = url;
  if (typeof params === "object" && params) {
    path += `?${new URLSearchParams(params as any).toString()}`;
  }
  const headers = await getHeaders(headersParams);
  const response = await server.get(path, headers);
  return response;
};

export const POST = async (
  url: string,
  body: unknown,
  isAuth?: boolean,
  params?: any
): Promise<IAxiosResponse<unknown>> => {
  const newParams = params || { headers: {} };
  if (isAuth)
    newParams.headers["Content-type"] = "application/x-www-form-urlencoded";
  const headers = await getHeaders(newParams);
  const finalBody = isAuth ? JSON.stringify(body) : body;
  const response = await server.post(url, finalBody, headers);
  return response;
};

export const PUT = async (
  url: string,
  body: any,
  params?: any
): Promise<any> => {
  try {
    const headers = await getHeaders(params);
    const response = await server.put(url, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

export const PATCH = async (
  url: string,
  body?: any,
  params?: any
): Promise<any> => {
  try {
    const headers = await getHeaders(params);
    const response = await server.patch(url, body, headers);
    return response;
  } catch (error) {
    return error;
  }
};

export const DELETE = async (url: string, params?: any): Promise<any> => {
  try {
    const headers = await getHeaders(params);
    const response = await server.delete(url, headers);
    return response;
  } catch (error) {
    return error;
  }
};

export default server;
