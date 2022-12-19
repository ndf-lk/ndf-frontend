import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export default function useGalleryCollection(id: string) {
  return useQuery(["gallery", id], () =>
    request(
      {
        path: `${API.VIEW_GALLERY_COLLECTION.path}/${id}`,
        method: API.VIEW_GALLERY_COLLECTION.method,
      },
      null,
      true
    )
  );
}
