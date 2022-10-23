export interface INews {
  _id: string;
  title: string;
  bannerImage: string;
  body: Body;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}

export interface Body {
  time: number;
  blocks: Block[];
  version: string;
}

export interface Block {
  id: string;
  type: string;
  data?: Data;
}

export interface Data {
  text?: string;
  level?: number;
  style?: string;
  items?: string[];
  file?: File;
  caption?: string;
  withBorder?: boolean;
  stretched?: boolean;
  withBackground?: boolean;
}

export interface File {
  url: string;
}
