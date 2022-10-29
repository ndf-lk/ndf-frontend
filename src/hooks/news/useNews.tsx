import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (lang: string) =>
  httpConfig.get(`meta/news/${lang}`).then((response) => response.data);

export function useNews(lang: string) {
  return useQuery(["news", lang], () => fetchData(lang));
}
