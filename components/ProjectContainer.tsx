import { ReactElement, useState } from "react";
import Image from "next/image";
import { Technology } from "../types/types";
import Link from "next/link";
import { shimmer, toBase64 } from "../services/imageUtils";

type Props = {
  title: string;
  link: string;
  description: string;
  stack: Technology[];
  bgImg: string | StaticImageData;
};

function ProjectContainer({
  title,
  link,
  description,
  stack,
  bgImg,
}: Props): ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);

  function renderStack() {
    return stack.map(({ color, name }: Technology, i: number) => (
      <div
        key={i}
        className={
          "border-2 pl-1 pr-1 rounded-xl z-10 hover:rounded-none transition-all duration-300 ease-out"
        }
        style={{
          borderColor: color.hex,
          color: color.hex,
        }}
      >
        {name}
      </div>
    ));
  }

  return (
    <Link href={link} scroll={false}>
      <a>
        <button
          className={
            "border-2 relative border-lightPurple h-96 w-80 hover:scale-110 hover:bg-lightPurple transition-all duration-200 ease-out overflow-hidden content-start text-center shadow-xl rounded-md hover:rounded-none"
          }
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Image
            className={
              (hovered && "blur absolute -z-10 h-full w-full opacity-80") ||
              "blur-0 absolute -z-10 h-full w-full opacity-80"
            }
            src={bgImg}
            alt={""}
            layout={"fill"}
            placeholder={"blur"}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(
              shimmer(700, 475)
            )}`}
          />
          <div
            className={
              "flex flex-col justify-center items-center h-full gap-4 p-2"
            }
          >
            {!hovered && (
              <h1 className={"text-color-primary tracking-wider text-2xl"}>
                {title}
              </h1>
            )}
            {hovered && (
              <span className={"text-color-primary"}>{description}</span>
            )}
            {hovered && <div className={"flex gap-2"}>{renderStack()}</div>}
          </div>
        </button>
      </a>
    </Link>
  );
}

export default ProjectContainer;
