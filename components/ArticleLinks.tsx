import Link from "next/link";
import { ArticleLink } from "../types/article";

type Props = {
  className?: string;
  links: ArticleLink[];
  active?: string;
};

const ArticleLinks = ({ links, className, active }: Props): JSX.Element => {
  return (
    <div className={className}>
      <div
        className={`flex flex-col border-slate-500 ${
          active && "border-l"
        } gap-4 sm:gap-2`}
      >
        {links.map((articleLink: ArticleLink, i: number) => {
          return (
            <Link key={i} href={"/blog/" + articleLink.slug}>
              <a
                className={`hover:text-slate-300 hover:border-slate-300 text-slate-400 -ml-px pl-4 px-1 border-slate-500 ${
                  active && "border-l"
                } ${
                  active === articleLink.title && "border-sky-500 text-sky-500"
                }`}
              >
                {articleLink.title}{" "}
              </a>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default ArticleLinks;
