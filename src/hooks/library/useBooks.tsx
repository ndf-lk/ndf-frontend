import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (category: string, query?: string | null) => {
  let url = `meta/library/${category}?limit=100`;

  if (query) {
    url = url + `&keyword=${query}`;
  }

  const response = await httpConfig.get(url);
  return response.data;
};

export function useBooks(category: string, query?: string | null) {
  return useQuery(["books", category], () => fetchData(category, query));
}
