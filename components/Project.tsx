import Image from "next/image";
import { blurredShimmer } from "../services/imageUtils";
import Link from "next/link";
import { Project } from "../types";

type Props = {
  project: Project;
  children?: React.ReactNode;
  flipped?: boolean;
  first?: boolean;
  exit?: boolean;
};

const Project = ({ project, children, flipped, first, exit }: Props): JSX.Element => {
  return (
    <div
      className={`flex relative w-full justify-center ${
        flipped ? "lg:justify-end" : "lg:justify-start"
      } items-center h-[486px]`}
    >
      <div className={"absolute w-full overflow-hidden h-full"}>
        <Image
          placeholder={"blur"}
          blurDataURL={blurredShimmer(1080, 360)}
          src={project.image}
          alt={""}
          layout={"fill"}
          objectFit={"cover"}
        />
        <div
          className={`absolute top-0 w-full h-full z-[5] ${
            flipped ? "bg-gradient-to-l" : "bg-gradient-to-r"
          } from-black`}
        />
        {(first || exit) && (
          <div
            className={`absolute ${first ? "top-0" : "bottom-0"} w-full h-full z-[5] ${
              first ? "bg-gradient-to-b" : "bg-gradient-to-t"
            } from-dark via-transparent`}
          />
        )}
      </div>
      <div className={"z-10 max-w-lg sm:mx-24 p-2"}>
        <h1 className={"text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-center"}>
          {project.title}
        </h1>
        <div className={"mt-3 flex gap-3 justify-center items-center"}>{children}</div>
        <div
          className={
            "mt-6 p-6 bg-lightDark bg-opacity-10 backdrop-blur-sm rounded-xl prose prose-invert"
          }
        >
          <p className={"text-xl"}>{project.description1}</p>
          <p className={"text-xl hidden sm:block"}>{project.description2}</p>
        </div>
        <div className={"grid grid-cols-2 gap-2 mt-6"}>
          <Link href={project.link ?? "https://fantasea.pl"} prefetch={false}>
            <a
              className={
                "text-center px-12 py-2 rounded-3xl text-white-100 hover:rounded-none border border-sky-600 transition-all ease-out duration-200"
              }
            >
              Visit
            </a>
          </Link>
          <Link href={project.github ?? "https://github.com/fantaasm"} prefetch={false}>
            <a
              className={
                "text-center px-12 py-2 rounded-3xl text-white-100 hover:rounded-none border border-white-100 transition-all ease-out duration-200"
              }
            >
              Repository
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Project;
