import { ReactNode } from "react";
import { NextSeo } from "next-seo";
import { ArticlePage } from "../types";
import dayjs from "dayjs";
import dynamic from "next/dynamic";

type Props = {
  children: ReactNode;
  title: string;
  description: string;
  article?: ArticlePage;
};

const DynamicScrollButton = dynamic(() => import("./ScrollUp"), { ssr: false });

const Layout = ({ children, title, description, article }: Props): JSX.Element => {
  return (
    <>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          ...(article && {
            type: "article",
            article: {
              publishedTime: dayjs(article.createdAt).toISOString(),
              modifiedTime: dayjs(article.updatedAt).toISOString(),
              section: article.categories[0].name,
              authors: [article.author.username],
              tags: [
                ...article.categories.map((category) => category.name),
                article.title,
                article.headerTitle,
              ],
            },
            images: [
              {
                url: article.featuredImage.url,
                alt: "article header image",
                width: article.featuredImage.width,
                height: article.featuredImage.height,
              },
            ],
          }),
        }}
      />
      {children}
      <DynamicScrollButton yOffset={1200} smoothingFactor={40} />
    </>
  );
};

export default Layout;
