import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export function useBooks(category: string, query?: string | null) {
  return useQuery(["books", category], () =>
    request(
      {
        path: `${API.LIST_BOOKS_CATEGORY.path}${category}?limit=100${
          query ? `&keyword=${query}` : ""
        }`,
        method: API.LIST_BOOKS_CATEGORY.method,
      },
      null,
      true
    )
  );
}
