import Link from "next/link";
import ProjectContainer from "../components/ProjectContainer";
import React from "react";
import { ResponsiveGrid } from "../components/ResponsiveGrid";
import Layout from "../components/Layout";
import {domAnimation, LazyMotion, m} from "framer-motion"
import SocialLinks from "../components/SocialLinks";
import { getProjects } from "../services";
import { Project } from "../types/types";

const title = "About";
const description = "Personal page for Fantasm, dev";

type GroupedProject = {
  name: string;
  projects: Project[];
};

type Props = {
  projectsGrouped: GroupedProject[];
};

const Home = ({ projectsGrouped }: Props): JSX.Element => {
  return (
    <Layout title={title} description={description}>
      <main className={
          "flex flex-col gap-4 sm:p-4 mt-8 items-center content-center"
        }
      >
        <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={"text-4xl md:text-6xl"}
        >
          Hi
        </m.div>
        </LazyMotion>

        <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={
            "p-8 text-center text-xl md:text-3xl  bg-lightDark bg-opacity-75 rounded-xl flex flex-col gap-2"
          }
          // className={
          //   "p-8 text-center text-xl md:text-3xl bg-gray-700 bg-opacity-75 rounded-xl flex flex-col gap-2"
          // }
        >
          <span>I&apos;m fantasm, and I am a passionate dev from Poland</span>
          <span>
            My favorite stack includes React, TypeScript, ASP Core and Tailwind
          </span>
          <span>
            Currently, I&apos;m working on{" "}
            <Link href={"/blog/maze-runner"}>
              <a
                className={
                  "text-sky-400 hover:underline hover:decoration-1 hover:underline-offset-4"
                }
              >
                Maze Runner
              </a>
            </Link>
          </span>
          <span>Check out some things I&apos;ve done below or my blog</span>
        </m.div>
        </LazyMotion>

        <div className={"border-b-2 border-white w-1/2 mt-4"} />

        {Projects()}
        <h1 className={"text-xl md:text-2xl"}>Contact me</h1>
        <SocialLinks />
      </main>
    </Layout>
  );

  function Projects(): JSX.Element[] {
    return projectsGrouped.map((project, i) => {
      return (
        <React.Fragment key={i}>
          <h1 className={"text-xl md:text-2xl"}>{project.name}</h1>

          <ResponsiveGrid maxColumns={2}>
            {project.projects.map((p, i) => (
              <ProjectContainer
                key={i}
                title={p.title}
                link={p.slug}
                stack={p.technologies}
                description={p.description}
                bgImg={p.picture.url}
              />
            ))}
          </ResponsiveGrid>
          <div className={"border-b-2 border-white w-1/2"} />
        </React.Fragment>
      );
    });
  }
};

export default Home;

export async function getStaticProps() {
  const projects: Project[] = await getProjects();

  const projectsGrouped = projects.reduce(
    (groups: GroupedProject[], item: Project) => {
      const index = groups.findIndex(
        (group) => group.name === item.category.name
      );
      if (index > -1) {
        groups[index].projects.push(item);
      } else {
        groups.push({ name: item.category.name, projects: [item] });
      }
      return groups;
    },
    []
  );

  return {
    props: {
      projectsGrouped,
    },
    revalidate: 300 * 60, // 300 minutes
  };
}
