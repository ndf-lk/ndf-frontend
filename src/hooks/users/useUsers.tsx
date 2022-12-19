import { request } from "../../utils/request";
import { useQuery } from "@tanstack/react-query";
import API from "./constraints";

export function useUsers() {
  return useQuery(["users"], () =>
    request(
      {
        path: API.LIST_ALL_USERS.path,
        method: API.LIST_ALL_USERS.method,
      },
      null,
      true
    )
  );
}
