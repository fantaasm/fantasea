import * as React from 'react';
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {ArticleLink} from "../pages/controlled-difficulty";
import {memo, ReactElement} from "react";

type Props = {
  title: string
  header: string
  image: any
  externalLinks: ArticleLink[]
  internalLinks: ArticleLink[]
  active: ArticleLink
  children?: any
}

const Article = (props: Props) : ReactElement => {
  return (
    <div className="text-color-primary">
      <Head>
        <title>{props.title}</title>
      </Head>
      <header className="w-full relative drop-shadow-2xl">
        <Image src={props.image}
               alt="header-image.png"
               layout={"responsive"}
               width={1900}
               height={350}
               quality={100}
               placeholder={"blur"}
        />
        <div className={"absolute bottom-0 left-0 w-full h-16 bg-blur"} />
        <div className={"absolute left-12 bottom-4 md:bottom-8 "}>
          <Link href="/">
            <a className={"hidden sm:block opacity-50 hover:opacity-100"}>Back</a>
          </Link>
          <h3 className={"text-2xl sm:text-5xl tracking-wider underline underline-offset-8 decoration-1 decoration-sky-200"}>{props.header}</h3>
        </div>
      </header>

      <div className="flex flex-col gap-4 md:flex-row md:justify-between mt-4 md:gap-0 max-w-8xl mx-auto sm:px-0 md:px-6 lg:px-32 xl:px-48  md:mt-8">
        <div className={"md:px-2 mt text-xl"}>
          <div className="flex flex-col border-slate-500 border-l gap-1 sm:gap-2">
            {props.externalLinks.map((articleLink: ArticleLink, i: number) =>
              <Link key={i} href={articleLink.link}>
                <a className={articleLink.name === props.active.name && "border-l border-sky-500 text-sky-500 pl-4 -ml-px" || "border-l hover:text-slate-300 text-slate-400 -ml-px pl-4 border-slate-500 hover:border-slate-300"}> {articleLink.name}</a>
              </Link>
            )}
          </div>
        </div>
        <div>
          <article className="prose prose-invert prose-xl px-1 md:px-2">
            {props.children}
          </article>
        </div>
        <div className={"hidden md:block mt-2"}>
          <div className={"flex flex-col gap-1"}>
            <p className={"text-xl border-b border-slate-700 font-bold"}>On this page</p>
              {props.internalLinks.map((articleLink: ArticleLink, i: number) =>
              <div key={i}>
                <a className={"hover:text-slate-300 text-slate-400"} href={articleLink.link}>{articleLink.name}</a>
              </div>
            )}
          </div>

        </div>
      </div>
      <div className={"mt-4 mb-2 sm:mt-8 text-center text-slate-400"}>Copyright Fantasm</div>
      <div className="h-8 pointer-events-none fixed bottom-0 w-full bg-gradient-to-t from-dark" />
    </div>
  );
}

function areEqual(prevProps: Props, nextProps: Props): boolean {
  return prevProps.title === nextProps.title;
}

export default memo(Article, areEqual)