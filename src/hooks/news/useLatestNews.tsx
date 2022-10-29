import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (lang: string) =>
  httpConfig
    .get(`meta/news/info/latest/${lang}`)
    .then((response) => response.data);

export function useLatestNews(lang: string) {
  return useQuery(["news", lang], () => fetchData(lang));
}
