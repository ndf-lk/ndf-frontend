import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchGallery = () =>
  httpConfig.get(`gallery`).then((response) => response.data);

export const useGallery = () => {
  return useQuery(["gallery"], fetchGallery);
};
