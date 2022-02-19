import { ReactElement, useState} from 'react';
import Image from "next/image";
import {Technology} from "../utils/mappings";
import Link from 'next/link';

type Props = {
  title: string
  link: string
  description: string
  stack: Technology[]
  bgImg: string | StaticImageData
};

function ProjectContainer(props: Props): ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);

  function renderStack() {
    return props.stack.map((technology: Technology, i: number) => (
        <div key={i}
             className={"border-2 pl-1 pr-1 rounded-xl z-10 hover:rounded-none transition-all duration-300 ease-out"}
             style={{borderColor: technology.color, color: technology.color}}>{technology.text}</div>
      )
    )
  }

  return (
    <Link href={props.link} scroll={false}>
      <a>
        <button className={"border-2 relative border-lightPurple h-96 w-80 hover:scale-110 hover:bg-lightPurple transition-all duration-200 ease-out overflow-hidden content-start text-center shadow-xl rounded-md hover:rounded-none"}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>

          <Image className={hovered && "blur absolute -z-10 h-full w-full opacity-80" || "blur-0 absolute -z-10 h-full w-full opacity-80"}
                 src={props.bgImg}
                 alt={""}
                 layout={"fill"}
                 placeholder={"blur"}

          />
          <div className={"flex flex-col justify-center items-center h-full gap-4 p-2"}>
            {!hovered && props.title && <h1 className={"text-color-primary tracking-wider text-2xl"}>{props.title}</h1>}
            {hovered && props.description && <span className={"text-color-primary"}>{props.description}</span>}
            {hovered && props.stack && <div className={"flex gap-2"}>{renderStack()}</div>}
          </div>
        </button>
      </a>
    </Link>)
}

export default ProjectContainer;