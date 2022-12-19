import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

export function useNews(lang: string, limit: number) {
  return useQuery([`news-${limit}`, lang], () =>
    request(
      {
        path: `meta/news/${lang}?limit=${limit}`,
        method: "GET",
      },
      null,
      true
    )
  );
}
