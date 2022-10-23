import { createContext, useContext } from "react";
import { IAuthResponse } from "../types/AuthToken";

export type IAuthTokenContext = {
  token: any;
  setToken: (c: any) => void;
};

export const AuthTokenContext = createContext<IAuthTokenContext>({
  token: null,
  setToken: (c: any) => {},
});

export const useGlobalContext = () => useContext(AuthTokenContext);
