export type NewsTag = {
  id: string;
  title: string;
};
export type News = {
  id: string;
  title: string;
  content: string;
  tag?: NewsTag[];
};
