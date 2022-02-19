import Link from "next/link";
import {ArticleLink} from "../types/article";
import {ReactNode} from "react";

type Props = {
  className?: string
  links: ArticleLink[]
  active?: string
  children?: ReactNode
  internal?: boolean
}

const ArticleLinks = ({links, className, active, children,internal}: Props): JSX.Element => {
  return (
    <div className={className}>
      <div className={`flex flex-col border-slate-500 ${active && "border-l"} gap-1 sm:gap-2`}>
        {children}
        {links.map((articleLink: ArticleLink, i: number) =>
          internal
          &&
            <a key={i} href={articleLink.link} className={`hover:text-slate-300 text-slate-400 -ml-px pl-4 border-slate-500 hover:border-slate-300 ${active && "border-l "} ${active === articleLink.name && "border-sky-500 text-sky-500"}`}>{articleLink.name} </a>
          ||
            <Link key={i}
                  href={"/blog/" + articleLink.link}>
              <a className={`hover:text-slate-300 text-slate-400 -ml-px pl-4 border-slate-500 hover:border-slate-300 ${active && "border-l "} ${active === articleLink.name && "border-sky-500 text-sky-500"}`}>{articleLink.name} </a>
            </Link>
        )}
      </div>
    </div>
  );
}
export default ArticleLinks


