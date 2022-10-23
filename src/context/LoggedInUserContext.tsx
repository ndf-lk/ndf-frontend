import { createContext, useContext } from "react";

export type ILoggedInUserContext = {
  user: any;
  setUser: (c: any) => void;
};

export const LoggedInUserContext = createContext<ILoggedInUserContext>({
  user: {},
  setUser: () => {},
});

export const useGlobalContext = () => useContext(LoggedInUserContext);
