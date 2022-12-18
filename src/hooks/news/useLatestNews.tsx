import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export function useLatestNews(lang: string) {
  return useQuery(["news", lang], () =>
    request(
      {
        path: `${API.LATEST_NEWS.path}${lang}`,
        method: API.LATEST_NEWS.method,
      },
      null,
      true
    )
  );
}
