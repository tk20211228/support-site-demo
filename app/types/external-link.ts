import { types } from "util";

export type ExternalLinkImage = {
    _id: string;
    _sys: [{}],
    imageName: string;
    imageSrc: imageSrc;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: {};
    src: string;
    title: string;
    width: number;
};
export type imageSrc = {
  _id: string;
  _sys: [{}];
  altText: string;
  description: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  height: number;
  metadata: {};
  src: string;
  title: string;
  width: number;    
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
  _sys: Sys;
  linkName: string;
  url: string;
  image: {
    _id: string,
    _sys: [Object],
    imageName: string,
    imageSrc: string
  };
  imageSrc: ExternalLinkImage;
  explainLink: string;
};
