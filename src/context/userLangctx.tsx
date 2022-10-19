import { createContext, useContext } from "react";

export type ILanguageContext = {
  language: string;
  setLanguage: (c: string) => void;
};

export const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  setLanguage: () => {},
});

export const useGlobalContext = () => useContext(LanguageContext);
