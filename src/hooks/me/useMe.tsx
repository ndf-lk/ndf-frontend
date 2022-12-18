import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constants";

export const useMe = () => {
  return useQuery(["current-user"], () =>
    request(
      {
        path: API.CURRENT_USER.path,
        method: API.CURRENT_USER.method,
      },
      null,
      true
    )
  );
};
