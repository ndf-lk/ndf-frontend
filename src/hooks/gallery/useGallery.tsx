import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export function useGallery() {
  return useQuery(["gallery"], () =>
    request(
      {
        path: API.LIST_GALLERY.path,
        method: API.LIST_GALLERY.method,
      },
      null,
      true
    )
  );
}
