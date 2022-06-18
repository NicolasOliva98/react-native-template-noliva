import { AxiosResponse } from "axios";

export interface IResponseError {
  error: boolean;
  status: 403 | 412 | 401 | 409 | 400 | 424 | 416 | 500;
  headers: any;
  data: any;
}

export interface IAxiosResponse<T = any> extends AxiosResponse {
  error?: boolean;
  data: T;
}

export interface IResponse<T> {
  data: T;
}
