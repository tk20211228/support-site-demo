import { types } from "util";

export type Image = {
  _id: string;
  src: string;
  fileName: string;
  fileType: string;
  fileSize: number;
  width: number;
  height: number;
  title: string;
  altText: string;
  description: string;
  metadata: Record<string, unknown>;
};

export type Sys = {
  createdAt: string;
  updatedAt: string;
  customOrder: number;
  raw: {
    createdAt: string;
    updatedAt: string;
    firstPublishedAt: string;
    publishedAt: string;
  };
};

export type ExternalLink = {
  _id: string;
  // _sys: Sys;
  linkName: string;
  url: string;
  image: Image;
};
