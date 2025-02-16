export interface GetInterfaceTask {
  title: string;
  description: string;
  done?: boolean;
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
}

export interface Headers {
  "content-length": string;
  "content-type": string;
}

export interface TransitionalConfig {
  silentJSONParsing: boolean;
  forcedJSONParsing: boolean;
  clarifyTimeoutError: boolean;
}

export interface Config {
  transitional: TransitionalConfig;
  adapter: string[];
  transformRequest: (null | unknown)[];
  transformResponse: (null | unknown)[];
  timeout: number;
  xsrfCookieName: string;
  xsrfHeaderName: string;
  maxContentLength: number;
  maxBodyLength: number;
  env: Record<string, unknown>;
  headers: Record<string, string>;
  baseURL: string;
  method: string;
  url: string;
  data: string;
}

export interface TaskApiResponse {
  data: GetInterfaceTask;
  status: number;
  statusText: string;
  headers: Headers;
  config: Config;
  request: unknown;
}