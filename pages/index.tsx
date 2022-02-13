import type {NextPage} from 'next'
import Head from 'next/head'
import Link from 'next/link'
import ProjectContainer from "../components/ProjectContainer";
import {FaDiscord} from 'react-icons/Fa';
import {CgMail} from "react-icons/Cg";
import React from "react";
import flightTrackerPng from "../public/flight-tracker.png";
import mazeRunnerPng from "../public/maze-runner.png";
import cdPng from "../public/cd.png";
import {DynamicGrid} from "../components/DynamicGrid";


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

      <main className={"flex flex-col gap-4 sm:p-4 mt-8 items-center content-center"}>
        <h1 className={"text-4xl md:text-6xl"}>Hi</h1>
        <h1 className={"p-8 text-center text-xl md:text-3xl"}>I'm fantasm and im a passionate dev from Poland. My favorite stack is React(Next), ASP Core, Tailwind
                                                              CSS. Currently im working on Maze Runner. Check out some stuff i did down below</h1>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-xl md:text-2xl"}>Web</h1>

        <DynamicGrid maxColumns={2}>
          <Link href={"https://flight-radar.vercel.app/"}
                prefetch={false}>
            <a>
              <ProjectContainer title={"Flight Tracker"}
                                description={"App made to track planes in real time and display data on interactive map"}
                                stack={["React", "ASP Net Core", "SQL Server"]}
                                bgImg={flightTrackerPng} />
            </a>
          </Link>
          <Link href={"https://flight-radar.vercel.app/"}
                prefetch={false}>
            <a>
              <ProjectContainer title={"Killing floor 2"}
                                description={"App dedicated to mod Controlled Difficulty in game Killing Floor 2"}
                                stack={["React", "ASP Net Core", "SQL Server"]}
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
                                stack={["Unity", "C#"]}
                                bgImg={mazeRunnerPng} />
            </a>
          </Link>
          <Link href={"/cd"}>
            <a>
              <ProjectContainer title={"Controlled Difficulty"}
                                description={"Mod to game Killing Floor 2 allowing player to set specific difficulty parameters"}
                                stack={["UnrealEngine", "UnrealScript"]}
                                bgImg={cdPng} />
            </a>
          </Link>
        </DynamicGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-2xl"}>Other</h1>
        <DynamicGrid maxColumns={1}>
          <Link href={"https://flight-radar.vercel.app/"}
                prefetch={false}>
            <a>
              <ProjectContainer title={"Tutorial Island script"}
                                description={"Most popular tutorial island script used on Dreambot with over 12k downloads"}
                                stack={["Java"]}
                                bgImg={"https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/270px-The_Earth_seen_from_Apollo_17.jpg"} />
            </a>
          </Link>
        </DynamicGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-xl md:text-2xl"}>Contact me</h1>
        <div className={"flex flex-col sm:flex-row gap-4 p-4 justify-center"}>
          <button className={"border-2 border-red-800 p-2 rounded-3xl hover:rounded-none hover:bg-red-800 transition-all duration-500 ease-out inline-flex"}
                  onClick={copyValue}><CgMail size={24}
                                              className={"mr-1"} />carnageepl@gmail.com
          </button>
          <button className={"border-2 border-sky-600 p-2 rounded-3xl hover:rounded-none hover:bg-sky-600 transition-all duration-500 ease-out inline-flex"}
                  onClick={copyValue}><FaDiscord size={24}
                                                 className={"mr-1"} />fantasm#9591
          </button>
        </div>
      </main>
    </div>
  )
}

export default Home