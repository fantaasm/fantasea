export type ArticleLink = {
  title: string;
  slug: string;
};

export type Project = {
  title: string;
  description1: string;
  description2: string;
  image: string;
  link: URL | null;
  github: URL | null;
};

export type Author = {
  username: string;
  bio: string;
  picture: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type ArticlePage = {
  title: string;
  headerTitle: string;
  seoTitle: string;
  excerpt: string;
  featuredImage: { url: string; width: number; height: number };
  author: Author;
  createdAt: Date;
  updatedAt: Date;
  slug: string;
  content: { html: string };
  categories: Category[];
};
