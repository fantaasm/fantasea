import ContactForm from "../components/ContactForm";
import {
  SiDiscord,
  SiDocker,
  SiDotnet,
  SiGithub,
  SiGoogle,
  SiNextdotjs,
  SiNginx,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";
import Project from "../components/Project";
import Link from "next/link";
import { getRecentPosts } from "../services";
import Layout from "../components/Layout";
import Image from "next/image";
import dayjs from "dayjs";
import { blurredShimmer } from "../services/imageUtils";
import next from "../public/next.svg";
import tailwind from "../public/tailwind.svg";
import server from "../public/server.svg";
import Footer from "../components/Footer";
import { ArticlePage } from "../types";

const projects = {
  flightTracker: {
    title: "Flight Tracker",
    description1:
      "Real-time representation of flying planes on an interactive map. OpenSky Network provides the data. ",
    description2:
      "Flight Tracker was my first full-stack project, and it also served as the basis for my engineering thesis.",
    image: "/flight-tracker.gif",
    link: "https://fantasea.pl/flight-tracker",
    github: "https://github.com/fantaasm/FlightRadar",
  },
  weatherForecast: {
    title: "Weather Forecast",
    description1: "Get the weather prediction for any city in the globe every day. ",
    description2: "I focused on following best OWASP authentication practices in Weather Forecast.",
    image: "/weather-forecast.webp",
    link: "https://fantasea.pl/weather-forecast",
    github: "https://github.com/fantaasm/open-weather",
  },
  nextToWatch: {
    title: "Next to Watch",
    description1:
      "Keep track of the films you've always wanted to see and receive fresh suggestions.",
    description2:
      " Next to Watch is the first time I've worked on a project alongside another coder.",
    image: "/next-to-watch.webp",
    link: null,
    github: null,
  },
};
type Props = {
  articles: ArticlePage[];
};

const title = "Fantasea";
const description = "Fantasea is a personal place of Fantasm";

const Index = ({ articles }: Props): JSX.Element => {
  return (
    <Layout title={title} description={description}>
      {/*Header*/}
      <header>
        <div
          id={"header"}
          className={"h-[24rem] md:h-[30rem] relative flex justify-center items-center"}
        >
          <div
            className={
              "w-full absolute pointer-events-none h-full bg-gradient-to-t opacity-10 from-white-100 to-inherit"
            }
          />
          <div className={"container text-center p-6"}>
            <div className={"flex flex-row container justify-center max-w-3xl"}>
              <div className={"flex flex-col"}>
                <h1
                  className={
                    "text-7xl md:text-8xl font-bold tracking-wider text-highlighted text-white-100"
                  }
                >
                  Fantasea
                </h1>
                <div className={"mt-2 flex gap-1 justify-center"}>
                  <Link href={"https://github.com/fantaasm"} prefetch={false}>
                    <a>
                      <SiGithub
                        title={"GitHub"}
                        className={
                          "inline mr-2 opacity-75 hover:opacity-100 transition-opacity duration-200 ease-out cursor-pointer"
                        }
                        size={24}
                      />
                    </a>
                  </Link>
                  <div>
                    {/*<SiDiscord className={"inline mr-2 opacity-75 hover:opacity-100 transition-opacity duration-200 ease-out"}*/}
                    <SiDiscord className={"inline mr-2 opacity-75"} size={24} />
                  </div>
                </div>
                <h2 className={"text-2xl mt-4"}>Minimalistic. Developer.</h2>
                <div className={"grid grid-cols-2 gap-4 mt-12"}>
                  {/*<button className={"px-6 sm:px-12 text-lg py-2 rounded-3xl text-white-100 hover:rounded-none border border-sky-600 transition-all ease-out duration-200"}>Blog</button>*/}
                  <button
                    className={
                      "px-6 sm:px-12 text-lg py-2 rounded-3xl text-white-100 border border-sky-600"
                    }
                    disabled={true}
                  >
                    Blog
                  </button>
                  <Link href={"#contact"} prefetch={false} passHref>
                    <button
                      className={
                        "px-6 sm:px-12 text-lg py-2 rounded-3xl text-white-100 hover:rounded-none border border-white-100 transition-all ease-out duration-200"
                      }
                    >
                      Contact
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg
          id="visual"
          name={"Waves"}
          className={"w-full opacity-10 shrink-0 overflow-hidden"}
          preserveAspectRatio="none"
          viewBox="0 0 960 168"
          width="1080"
          height="64"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <path
            d="M0 74L53.3 92C106.7 110 213.3 146 320 137.2C426.7 128.3 533.3 74.7 640 59.2C746.7 43.7 853.3 66.3 906.7 77.7L960 89L960 0L906.7 0C853.3 0 746.7 0 640 0C533.3 0 426.7 0 320 0C213.3 0 106.7 0 53.3 0L0 0Z"
            fill="#FFFFFF"
            strokeLinecap="round"
            strokeLinejoin="miter"
          />
        </svg>
      </header>

      <main>
        {/*Stack*/}
        <h2 className={"my-12 lg:my-24 text-5xl font-bold text-center"}>My stack</h2>
        <div
          id={"stack"}
          className={
            "container flex flex-col gap-20 lg:gap-0 lg:flex-row justify-around items-center my-8 p-4"
          }
        >
          <div className={"flex flex-col gap-4 text-center container max-w-xs"}>
            <Image
              priority
              className={
                "rounded-full bg-gradient-to-br from-indigo-400 via-violet-300 to-fuchsia-200"
              }
              src={next}
              layout={"responsive"}
              objectFit="fill"
              height={256}
              width={256}
              alt={""}
            />
            <h3 className={"font-extrabold text-white-100 text-3xl tracking-wide mt-2 mb-4"}>
              Next.js
            </h3>
            <p>Fast, lightweight, modern React framework.</p>
          </div>
          <div className={"flex flex-col gap-4 text-center container max-w-xs"}>
            <Image
              className={"rounded-full bg-gradient-to-br from-sky-600 via-green-400 to-green-200"}
              src={tailwind}
              layout={"responsive"}
              objectFit="fill"
              height={256}
              width={256}
              alt={""}
            />
            <h3 className={"font-extrabold text-white-100 text-3xl tracking-wide mt-2 mb-4"}>
              Tailwind CSS
            </h3>
            <p>Minimalistic, modular CSS framework.</p>
          </div>
          <div className={"flex flex-col gap-4 text-center container max-w-xs"}>
            <Image
              className={
                "rounded-full bg-gradient-to-br from-orange-600 via-amber-400 to-yellow-200"
              }
              src={server}
              layout={"responsive"}
              objectFit="fill"
              height={256}
              width={256}
              alt={""}
            />
            <h3 className={"font-extrabold text-white-100 text-3xl tracking-wide mt-2 mb-4"}>
              ASP.NET Core
            </h3>
            <p>Web application framework</p>
          </div>
        </div>

        {/*Articles*/}
        <section title={"articles"}>
          <h2 className={"mt-12 lg:my-24 text-5xl font-bold text-center"}>Latest articles</h2>
          {articles.map(({ node }: any, i: number) => (
            <div key={i} className={"mt-12 container relative max-w-2xl h-[220px] cursor-pointer"}>
              <Link href={`/blog/${node.slug}`}>
                <a>
                  <div
                    className={
                      "p-4 sm:p-8 overflow-y-auto relative h-full backdrop-blur-[8px] rounded-xl z-[1]"
                    }
                  >
                    <div>
                      <span>{dayjs(node.createdAt).format("D MMM YYYY")}</span> {" / "}
                      <span>{node.title}</span> {" / "}
                      <span>{node.categories[0].name}</span>
                    </div>
                    <div className={"mt-4 flex gap-4"}>
                      <div>
                        <h3 className={"text-3xl font-bold"}>{node.headerTitle}</h3>
                        <span className={"text-slate-400"}>{node.readTime} min read</span>
                        <p className={"mt-2"}>{node.excerpt}</p>
                      </div>
                    </div>
                  </div>
                  <Image
                    src={node.featuredImage.url}
                    placeholder={"blur"}
                    blurDataURL={`${blurredShimmer(672, 220)}`}
                    quality={25}
                    layout={"fill"}
                    objectFit="cover"
                    alt={"article background pic"}
                    className={"absolute -z-[1] rounded-xl opacity-80 pointer-events-none"}
                  />
                </a>
              </Link>
            </div>
          ))}
        </section>

        {/*Projects*/}
        <section title={"projects"}>
          <h1 className={"my-12 lg:my-24 text-5xl font-bold text-center"}>My Projects</h1>

          <div className={"flex flex-col items-center my-8"}>
            {/*@ts-ignore*/}
            <Project project={projects["flightTracker"]} first={true}>
              <SiNextdotjs title={"Next.js"} size={28} color={"#F2F2F2"} stroke={"#000000"} />
              <SiTailwindcss title={"Tailwind CSS"} size={28} color={"#16B1B0"} />
              <SiDotnet title={"ASP.NET"} color={"#9f94c2"} size={28} />
              <SiPostgresql title={"PostgreSQL"} color={"#84a6c2"} size={28} />
              <SiNginx title={"Nginx"} color={"#00b344"} size={28} />
              <SiDocker title={"Docker"} color={"#45aaf7"} size={28} />
            </Project>
            {/*@ts-ignore*/}
            <Project project={projects["weatherForecast"]} flipped={true}>
              <SiNextdotjs title={"Next.js"} size={28} color={"#F2F2F2"} stroke={"#000000"} />
              <SiTailwindcss title={"Tailwind CSS"} size={28} color={"#16B1B0"} />
              <SiGoogle title={"OAuth2"} color={"#4285F4"} size={28} />
              <SiNginx title={"Nginx"} color={"#00b344"} size={28} />
              <SiDocker title={"Docker"} color={"#45aaf7"} size={28} />
            </Project>
            <Project project={projects["nextToWatch"]} exit={true}>
              <SiNextdotjs title={"Next.js"} size={28} color={"#F2F2F2"} stroke={"#000000"} />
              <SiTailwindcss title={"Tailwind CSS"} size={28} color={"#16B1B0"} />
              <SiDotnet title={"ASP.NET"} color={"#9f94c2"} size={28} />
              <SiPostgresql title={"PostgreSQL"} color={"#84a6c2"} size={28} />
              <SiNginx title={"Nginx"} color={"#00b344"} size={28} />
              <SiDocker title={"Docker"} color={"#45aaf7"} size={28} />
            </Project>
          </div>
        </section>
      </main>
      {/*Footer*/}
      <Footer>
        <h2 className={"my-12 lg:my-24 text-5xl font-bold text-center"}>Contact</h2>
        <ContactForm />
      </Footer>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const {
    postsConnection: { edges },
  } = await getRecentPosts(3);

  return {
    props: {
      articles: edges,
    },
    revalidate: 12 * 60 * 60, // 12hr in seconds
  };
};
