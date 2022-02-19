import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type Props = {
 image: string | any
  headerText: string
}

const ArticleHeader = ({image,headerText}: Props): JSX.Element => {
  return (
      <header className="w-full relative">
        <Image src={image}
               alt="header-image.png"
               layout={"responsive"}
               width={1900}
               height={350}
               quality={100}
               // placeholder={"blur"}
        />
        <div className="absolute h-16 pointer-events-none fixed bottom-0 z-20 w-full bg-gradient-to-t from-dark" />
        <div className={"absolute bottom-0 left-0 w-full h-16 bg-blur"} />
        <div className={"absolute left-12 bottom-4 md:bottom-8 "}>
          <Link href="/" scroll={false}>
            <a className={"hidden sm:block opacity-50 hover:opacity-100"}>Back</a>
          </Link>
          <h3 className={"text-2xl sm:text-5xl tracking-wider underline underline-offset-8 decoration-1 decoration-sky-200"}>{headerText}</h3>
        </div>
      </header>
  );
}

export default ArticleHeader