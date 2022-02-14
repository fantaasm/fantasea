import * as React from 'react';
import {NextPage} from "next";
import Head from "next/head";
import Image from "next/image";
import headerPic from "../public/cd-header.png";
import Link from 'next/link';

const ControlledDifficulty: NextPage = () => {
  return (<div className="flex flex-col text-color-primary justify-center content-center items-center gap-8">
    <Head>
      <title>Controlled Difficulty</title>
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
        <h3 className={"text-5xl tracking-wider underline underline-offset-8 decoration-1 decoration-sky-200"}>Controlled Difficulty</h3>
      </div>
    </header>
    <article className="container prose prose-invert prose-xl mb-6">
      <p>
        Controlled Difficulty or as most would say <code>CD</code> is a modification to game Killing Floor 2 which create a fully customizable and controllable environment for
        players. That means game difficulty can be dynamically adjusted to be harder or easier depending on preferences.
      </p>
      <p>
        The mod can be played by both casual and hardcore gamers, however to get the best experience it&apos;s recommended to find players with similar skill level.
      </p>
      <p>There are few terms commonly used in CD
        <ul>
          <li><code>Max monsters</code> – Maximum concurrently alive monsters</li>
          <li><code>Spawn pool</code> – Interval between monsters spawns</li>
          <li><code>Cohort size</code> – Amount of monsters that spawns every <code>Spawn pool</code></li>
          <li><code>Spawn cycle</code> – Defines type of monsters that spawns in written order</li>
        </ul>
      </p>
      <p>
        Knowing what setting controls what, players can adjust them accordingly to achieve the environment they want.
        The most game changing are <code>Spawn cycle</code> and <code>Max monsters</code>, which sets the pace of the game.
      </p>
      <p>CD is public on <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2052571175">Steam Workshop</a>, and it does way more than described in here including
         game-altering changes, check the workshop page for more info.</p>
      <p>
        Example footage recorded by my friend and teammate
      </p>
      <div className={"overflow-hidden"}>
        <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/ZdphVThxkMw"
                title="YouTube video player"
                frameBorder="0"
                allow="encrypted-media;" />
      </div>
    </article>
  </div>);
}

export default ControlledDifficulty