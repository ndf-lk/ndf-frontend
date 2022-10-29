import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import { isValidToken } from "../../utils/auth_token";

const fetchGallery = () =>
  httpConfig.get(`users/me`).then((response) => response.data);

export const useMe = () => {
  const status = isValidToken();
  console.log(status);
  return useQuery(["current-user"], fetchGallery);
};
