import english from "./en.json";
import sinhala from "./en.json";
import tamil from "./en.json";
import { IFooterContent } from "../../types/footer";

export const getData = (lang: string): IFooterContent => {
  switch (lang) {
    case "si":
      return sinhala;

    case "tm":
      return tamil;

    default:
      return english;
  }
};
