export interface INews {
  _id: string;
  title: string;
  bannerImage: string;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
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
