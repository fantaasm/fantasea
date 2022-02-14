import * as React from 'react';
import {NextPage} from "next";
import Image from "next/image";
import headerPic from "../public/maze-runner-header-wide.png"
import Head from "next/head";
import {useRef} from "react";
import Link from 'next/link';

const MazeRunner: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (<div className="flex flex-col text-color-primary justify-center content-center items-center gap-8">
    <Head>
      <title>Maze Runner</title>
    </Head>
    <header className="w-full relative drop-shadow-2xl">

      <Image src={headerPic}
             alt=""
             layout={"responsive"}
             width={1900}
             height={350}
             quality={100} />
      <div className={"absolute bottom-0 left-0 w-full h-16 bg-blur"} />
      <div className={"absolute left-12 bottom-4 md:bottom-8 "}>
        <Link href="/"><a className={"opacity-50 hover:opacity-100"}>Back</a></Link>
        <h3 className={"text-5xl tracking-wider underline underline-offset-8 decoration-1 decoration-sky-200"}>Maze Runner</h3>
      </div>

    </header>
    <article className="container prose prose-invert prose-xl mb-6">
      <p>
        The idea for the game originated from Counter Strike mod <code>KZ</code> in which the player was supposed to beat an obstacle course using movement and strafing
        mechanics. Checkpoints were present on the map in specific places, so the player doesn&apos;t have to start from scratch if fallen down. When reached the highest point of
        the map, the player would get his rank based on the time it took to reach the last checkpoint.
      </p>
      <p>
        Maze runner tries to mimic movement mechanics from Counter Strike and it&apos;s working fairly <code>good</code>. Player movement is based on momentum and can accelerate
        or decelerate midair, effectively making bunny hopping and surfing a thing.
      </p>
      <p>The game is expected to have 3 tiers(level design) starting from the easiest tier 1 and ending on hardest tier 3 with more intense obstacles and ramps. Obstacle movement
         is based on a waypoint system in which each waypoint represents the next position and rotation, this generic approach allows making many obstacle variants and with some
         tweaks it will be enough for most cases.</p>
      <video controls={false}
             autoPlay={false}
             muted={true}
             loop={true}
             onMouseOver={() => videoRef.current.play()}
             onMouseOut={() => videoRef.current.pause()}
             ref={videoRef}
      >
        <source src={"./maze-runner-obstacles.webm"}
                type="video/webm" />
      </video>
      <p>At the moment, the game is in early stage of development with a playable prototype. For actual progress, check out this board:</p>
      <blockquote><a href="https://github.com/">Trello Board</a></blockquote>
    </article>
  </div>);
}

export default MazeRunner;