import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchGallery = () =>
  httpConfig.get(`users/me`).then((response) => response.data);

export const useMe = () => {
  return useQuery(["current-user"], fetchGallery);
};
