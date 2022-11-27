import httpConfig from "../../utils/request";
import { useQuery } from "@tanstack/react-query";

const fetchData = (id: string) =>
  httpConfig
    .get(`meta/gallery/details/${id}`)
    .then((response) => response.data);

export default function useGalleryCollection(id: string) {
  return useQuery(["gallery", id], () => fetchData(id));
}
