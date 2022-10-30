import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (category: string) =>
  httpConfig.get(`meta/library/${category}`).then((response) => response.data);

export function useBooks(category: string) {
  return useQuery(["books", category], () => fetchData(category));
}