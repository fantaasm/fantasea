import * as React from 'react';
import {memo, ReactElement, useState} from 'react';
import Image from "next/image";

type Props = {
  title: string
  description: string
  stack: string[]
  bgImg: string | StaticImageData
  children?: HTMLElement
};

function ProjectContainer(props: Props) : ReactElement {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <button className={"border-2 relative border-lightPurple h-96 w-80 hover:scale-110 hover:bg-lightPurple transition-all duration-200 ease-out overflow-hidden content-start text-center shadow-xl rounded-md hover:rounded-none"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>

      <Image className={hovered && "blur absolute -z-10 h-full w-full opacity-80" || "blur-0 absolute -z-10 h-full w-full opacity-80"}
             src={props.bgImg}
             alt={""}
             layout={"fill"} />
      <div className={"flex flex-col justify-center items-center h-full p-2"}>
        {!hovered && props.title && <h1 className={"text-color-primary tracking-wider text-2xl"}>{props.title}</h1>}
        {hovered && props.description && <span className={"text-color-primary"}>{props.description}</span>}
        {hovered && props.stack && <p>{props.stack.reduce((collector: string, next: string) => collector.concat(" " + next))}</p>}
      </div>
    </button>
  )
}

export default memo(ProjectContainer);