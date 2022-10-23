import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (id: string) =>
  httpConfig.get(`meta/news/${id}`).then((response) => response.data);

export default function useNewsDetails(id: string) {
  return useQuery(["news", id], () => fetchData(id));
}
