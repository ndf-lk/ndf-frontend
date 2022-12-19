import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export function useHomeBanner() {
  return useQuery([`home-banner`], () =>
    request(
      {
        path: API.HOMEPAGE_FEATURE_BANNERS.path,
        method: API.HOMEPAGE_FEATURE_BANNERS.method,
      },
      null,
      true
    )
  );
}
