export type ArticleLink = {
  title: string;
  slug: string;
};

export type Article = {
  name: string;
  root: string;
  pages: ArticlePage[];
};

export type Technology = {
  name: string;
  color: { hex: string };
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
  excerpt: string;
  featuredImage: { url: string };
  author: Author;
  createdAt: Date;
  slug: string;
  content: { html: string };
  categories: Category[];
};

export type Project = {
  title: string;
  description: string;
  slug: string;
  technologies: Technology[];
  category: Category;
  picture: { url: string };
};
