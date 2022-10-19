export interface Main {
  title: string;
  secondary: string;
}

export interface Link2 {
  label: string;
  link: string;
}

export interface Link {
  title: string;
  links: Link2[];
}

export interface IFooterContent {
  main: Main;
  description: string;
  party_membership_btn: string;
  links: Link[];
}
