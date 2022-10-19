import english from "./en.json";
import sinhala from "./en.json";
import tamil from "./en.json";
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
