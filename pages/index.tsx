import type {NextPage} from 'next'
import Link from 'next/link'
import ProjectContainer from "../components/ProjectContainer";
import React from "react";
import flightTrackerPng from "../public/flight-tracker.png";
import mazeRunnerPng from "../public/maze-runner.png";
import cdPng from "../public/cd.png";
import crypto2fiat from "../public/cryptofiat.png";
import iplocation from "../public/iplocation.png";
import {ResponsiveGrid} from "../components/ResponsiveGrid";
import ToastButton from "../components/ToastButton";
import {Technologies} from "../utils/mappings";
import {FaDiscord} from "react-icons/fa";
import {CgMail} from "react-icons/cg";
import Layout from "../components/Layout";
import {motion} from 'framer-motion';
import SocialLinks from "../components/SocialLinks";

const title = "About"
const description = "Personal page for Fantasm, dev"

const Home: NextPage = () => {

  return (
    <Layout title={title}
            description={description}>
      <main className={"flex flex-col gap-4 sm:p-4 mt-8 items-center content-center"}>
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
          <span>Currently, I&apos;m working on <Link href={"/blog/maze-runner"}><a className={"text-sky-400 hover:underline hover:decoration-1 hover:underline-offset-4"}>Maze Runner</a></Link></span>
          <span>Check out some things I&apos;ve done below</span>
        </motion.div>

        <div className={"border-b-2 border-white w-1/2 mt-4"} />
        <h1 className={"text-xl md:text-2xl"}>Web</h1>

        <ResponsiveGrid maxColumns={2}>

          <ProjectContainer title={"Flight Tracker"}
                            link={"https://flight-radar.vercel.app/"}
                            description={"App made to track planes in real time and display data on interactive map"}
                            stack={[Technologies.react, Technologies.next, Technologies.tailwind, Technologies.asp]}
                            bgImg={flightTrackerPng} />

          <ProjectContainer title={"Killing floor 2"}
                            link={"https://flight-radar.vercel.app/"}
                            description={"App dedicated to mod Controlled Difficulty in Killing Floor 2"}
                            stack={[Technologies.react, Technologies.next, Technologies.tailwind, Technologies.asp]}
                            bgImg={flightTrackerPng} />

          <ProjectContainer title={"IP Location"}
                            link={"https://ip2geolocation.vercel.app"}
                            description={"App made to show basic info and location of IP address"}
                            stack={[Technologies.react, Technologies.next, Technologies.tailwind]}
                            bgImg={iplocation} />
          <ProjectContainer title={"Crypto - Fiat Converter"}
                            link={"https://crypto2fiat.vercel.app/"}
                            description={"App made to convert between value of crypto currencies and fiat currencies"}
                            stack={[Technologies.react, Technologies.next]}
                            bgImg={crypto2fiat} />

        </ResponsiveGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-2xl"}>Game</h1>
        <ResponsiveGrid maxColumns={2}>

          <ProjectContainer title={"Maze Runner"}
                            link={"/blog/maze-runner"}
                            description={"Stand alone game where player is challenged to beat obstacle course in shortest amount of time"}
                            stack={[Technologies.unity, Technologies.cSharp]}
                            bgImg={mazeRunnerPng} />

          <ProjectContainer title={"Controlled Difficulty"}
                            link={"/blog/controlled-difficulty"}
                            description={"Mod to game Killing Floor 2 allowing player to set desired difficulty parameters"}
                            stack={[Technologies.unrealEngine]}
                            bgImg={cdPng} />

        </ResponsiveGrid>
        <div className={"border-b-2 border-white w-1/2"} />
        <h1 className={"text-xl md:text-2xl"}>Contact me</h1>
        <SocialLinks />
      </main>
    </Layout>
  )
}



export default Home