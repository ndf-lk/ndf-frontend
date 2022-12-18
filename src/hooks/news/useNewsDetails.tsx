import { useQuery } from "@tanstack/react-query";
import { request } from "../../utils/request";

export default function useNewsDetails(id: string) {
  return useQuery(["news", id], () =>
    request(
      {
        path: `meta/news/details/${id}`,
        method: "GET",
      },
      null,
      true
    )
  );
}
