import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = () =>
  httpConfig.get(`meta/news`).then((response) => response.data);

export const useNews = () => {
  return useQuery(["news"], fetchData);
};
