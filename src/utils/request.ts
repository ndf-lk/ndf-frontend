/* eslint-disable import/no-cycle */
import ENVIRONMENT from "../config";
import {
  clearAuthToken,
  getAuthToken,
  getRefreshToken,
  setAuthToken,
  setRefreshToken,
} from "../helpers/token";
import { IRestApiResponse } from "../interfaces/api-response";
import { isArray } from "lodash";
import jwt_decode from "jwt-decode";
import { toast } from "react-hot-toast";

export class ResponseError extends Error {
  public response: Response;

  constructor(response: Response) {
    super(response.statusText);
    this.response = response;
  }
}

const parseJSON = async (response: Response) => {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
};

const checkStatus = async (response: Response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  if (response.status === 401) {
    parseJSON(response)?.then((data: any) => {
      if (data.errors && data.errors.userLoggedOut) {
        window.location.reload();
      }
    });
  }

  const res = (await response.json()) as IRestApiResponse;
  const apiMessage = res.message ?? "Something went wrong";
  toast.error(isArray(apiMessage) ? res.message.join(", ") : res.message, {
    style: {
      borderRadius: "10px",
      background: "#333",
      color: "#fff",
    },
  });
  const error = new ResponseError(response);
  error.response = response;
  throw error;
};

/**
 * use the refresh token to get the new tokens
 */
// eslint-disable-next-line consistent-return
const refreshToken = async () => {
  const fetchResponse = await fetch(
    `${ENVIRONMENT.BACKEND_API}/auth/refresh-token`,
    {
      body: JSON.stringify({
        token: getRefreshToken(),
        email: (jwt_decode(getAuthToken() as string) as any).username,
      }),
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (fetchResponse.status === 401 || fetchResponse.status === 400) {
    clearAuthToken();
    if (!window.location.pathname.includes("login")) {
      window.location.href = "/login";
    }
    return false;
  }
  const res = (await fetchResponse.json()) as IRestApiResponse;
  setAuthToken(res.data.idToken.jwtToken);
  setRefreshToken(res.data.refreshToken.token);

  if (window.location.pathname.includes("login")) {
    window.location.href = "/";
  }
};

export async function request(
  _metadata: any,
  data: any,
  isSecure: boolean = true,
  isFormData: boolean = false,
  url: string = ENVIRONMENT.BACKEND_API
): Promise<any> {
  const metadata = { ..._metadata };
  const pathTokens = metadata.path.split(":");
  if (metadata.path.indexOf(":") !== 0) {
    pathTokens.shift();
  }
  pathTokens.forEach((token: string) => {
    metadata.path = metadata.path.replace(`:${token}`, `${data[token]}`);
  });

  const backEndUrl = `${url}${metadata.path}`;
  const formData = new FormData();
  if (isFormData) {
    Object.keys(data).forEach((key) => formData.append(key, data[key]));
  }

  // check if the token is expires
  if (getAuthToken()) {
    if ((jwt_decode(getAuthToken() as string) as any).exp < Date.now() / 1000) {
      await refreshToken();
    }
  }

  const options: RequestInit = {
    method: metadata.method,
    mode: "cors", // no-cors, cors, same-origin
    cache: "no-cache",
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      ...(isSecure && {
        Authorization: `Bearer ${getAuthToken() || ""}`,
      }),
      ...(!isFormData && {
        "Content-Type": "application/json",
      }),
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    ...(["POST", "PUT", "PATCH", "DELETE"].includes(metadata.method) && {
      body: isFormData ? formData : JSON.stringify(data),
    }),
  };
  const fetchResponse = await fetch(backEndUrl, options);
  const response = await checkStatus(fetchResponse);
  return parseJSON(response);
}
