import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (lang: string, limit: number) =>
  httpConfig
    .get(`meta/news/${lang}?limit=${limit}`)
    .then((response) => response.data);

export function useNews(lang: string, limit: number) {
  return useQuery([`news-${limit}`, lang], () => fetchData(lang, limit));
}
