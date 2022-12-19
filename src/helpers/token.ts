import Cookies from "js-cookie";

export const getAuthToken = (): string | null => Cookies.get("session") ?? null;
export const getRefreshToken = (): string | null =>
  Cookies.get("refreshToken") ?? null;

export const setAuthToken = (token: string) =>
  Cookies.set("session", token, {
    path: "/",
    domain: `${window.location.hostname.replace(/^[^.]+\./g, "")}`,
    expires: 1 / 24, // 1 hour
  });

export const setRefreshToken = (refreshToken: string) =>
  Cookies.set("refreshToken", refreshToken, {
    path: "/",
    domain: `${window.location.hostname.replace(/^[^.]+\./g, "")}`,
    expires: 1, // 1 day
  });

export const clearAuthToken = () => {
  Cookies.remove("session", {
    path: "/",
    domain: `${window.location.hostname.replace(/^[^.]+\./g, "")}`,
  });
  Cookies.remove("refreshToken", {
    path: "/",
    domain: `${window.location.hostname.replace(/^[^.]+\./g, "")}`,
  });
};
