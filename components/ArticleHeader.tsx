import Image from "next/image";
import Link from "next/link";
import { blurredShimmer } from "../services/imageUtils";

type Props = {
  image: { url: string };
  headerText: string;
};

const ArticleHeader = ({ image, headerText }: Props): JSX.Element => {
  return (
    <header className="w-full h-40 sm:h-72 relative">
      <Image
        priority
        src={image.url}
        alt="header-image"
        layout={"fill"}
        objectFit="cover"
        placeholder={"blur"}
        blurDataURL={blurredShimmer(700, 475)}
      />
      <div className="absolute h-16 pointer-events-none bottom-0 z-20 w-full bg-gradient-to-t from-dark" />
      <div className={"absolute bottom-0 left-0 w-full h-16 bg-blur"} />
      <div className={"absolute left-4 sm:left-12 bottom-4 md:bottom-8 "}>
        <Link href="/" scroll={false}>
          <a className={"opacity-50 hover:opacity-100"}>Back</a>
        </Link>
        <h1
          className={
            "text-2xl sm:text-5xl tracking-wider underline underline-offset-8 decoration-1 decoration-sky-200"
          }
        >
          {headerText}
        </h1>
      </div>
    </header>
  );
};

export default ArticleHeader;
