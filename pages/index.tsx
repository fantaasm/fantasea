import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ProjectContainer from "../components/ProjectContainer";
import React from "react";
import flightTrackerPng from "../public/flight-tracker.png";
import mazeRunnerPng from "../public/maze-runner.png";
import cdPng from "../public/cd.png";
import {DynamicGrid} from "../components/DynamicGrid";
import ToastButton from "../components/ToastButton";
import {Technologies} from "../utils/mappings";
import {motion} from 'framer-motion';
import {FaDiscord} from "react-icons/fa";
import {CgMail} from "react-icons/cg";


const Home: NextPage = () => {

  const copyValue = async (event: React.MouseEvent): Promise<any> => await navigator.clipboard.writeText(event.target.innerText);

  return (
    <div className={"container mx-auto text-color-primary"}>
      <Head>
        <title>Fantasm</title>
        <meta name="description"
              content="Personal fantasm web app" />
        <meta name="viewport"
              content="initial-scale=1, width=device-width" />
      </Head>

      <main className={"flex flex-col gap-4 sm:p-4 mt-8 items-center content-center drop-shadow-lg"}>
        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.1}}
                    className={"text-4xl md:text-6xl"}>Hi
        </motion.div>

        <motion.div initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.5, delay: 0.3}}
                    className={"p-8 text-center text-xl md:text-3xl  bg-lightDark bg-opacity-75 rounded-xl flex flex-col gap-2"}>
          <span>I&apos;m fantasm, and I am a passionate dev from Poland</span>
          <span>My favorite stack includes React, TypeScript, ASP Core and Tailwind</span>
          <span>Currently, I&apos;m working on <Link href={"/maze-runner"}><a className={"text-sky-400 hover:underline hover:decoration-1 hover:underline-offset-4"}>Maze Runner</a></Link></span>
          <span>Check out some things I&apos;ve done below</span>
        </motion.div>

        <div className={"border-b-2 border-white w-1/2 mt-4"} />
        <h1 className={"text-xl md:text-2xl"}>Web</h1>

        <DynamicGrid maxColumns={2}>
          <Link href={"https://flight-radar.vercel.app/"}
                prefetch={false}>
            <a>
              <ProjectContainer title={"Flight Tracker"}
                                description={"App made to track planes in real time and display data on interactive map"}
                                stack={[Technologies.react, Technologies.next, Technologies.tailwind, Technologies.asp]}
                                bgImg={flightTrackerPng} />
            </a>
          </Link>
          <Link href={"https://flight-radar.vercel.app/"}
                prefetch={false}>
            <a>
              <ProjectContainer title={"Killing floor 2"}
                                description={"App dedicated to mod Controlled Difficulty in Killing Floor 2"}
                                stack={[Technologies.react, Technologies.next, Technologies.tailwind, Technologies.asp]}
                                bgImg={flightTrackerPng} />
            </a>

          </Link>
        </DynamicGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-2xl"}>Game</h1>
        <DynamicGrid maxColumns={2}>
          <Link href={"/maze-runner"}>
            <a>
              <ProjectContainer title={"Maze Runner"}
                                description={"Stand alone game where player is challenged to beat obstacle course in shortest amount of time"}
                                stack={[Technologies.unity, Technologies.cSharp]}
                                bgImg={mazeRunnerPng} />
            </a>
          </Link>
          <Link href={"/controlled-difficulty"}>
            <a>
              <ProjectContainer title={"Controlled Difficulty"}
                                description={"Mod to game Killing Floor 2 allowing player to set desired difficulty parameters"}
                                stack={[Technologies.unrealEngine]}
                                bgImg={cdPng} />
            </a>
          </Link>
        </DynamicGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-xl md:text-2xl"}>Contact me</h1>
        <div className={"flex flex-col sm:flex-row gap-4 p-4 justify-center"}>
          <ToastButton css={"border-2 border-red-800 p-2 rounded-3xl hover:rounded-none hover:bg-red-800 transition-all duration-500 ease-out inline-flex w-56"}
                       toast={"Copied to clipboard!"}
                       onClick={copyValue}>
            <CgMail size={24}
                    className={"mr-1"} /> <span>carnageepl@gmail.com</span>
          </ToastButton>
          <ToastButton css={"border-2 border-sky-600 p-2 rounded-3xl hover:rounded-none hover:bg-sky-600 transition-all duration-500 ease-out inline-flex w-56"}
                       toast={"Copied to clipboard!"}
                       onClick={copyValue}>
            <FaDiscord size={24}
                       className={"mr-1"} /><span>fantasm#9591</span>
          </ToastButton>
        </div>
      </main>
    </div>
  )
}

export default Home