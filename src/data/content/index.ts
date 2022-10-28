import english from "./en.json";
import sinhala from "./si.json";
import tamil from "./tm.json";
import { IHomeContent } from "../../types/home";

export const getData = (lang: string): IHomeContent => {
  switch (lang) {
    case "si":
      return sinhala;

    case "tm":
      return tamil;

    default:
      return english;
  }
};
