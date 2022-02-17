import {NextPage} from "next";
import headerPic from "../public/maze-runner-header-wide.png"
import {useRef} from "react";
import Article from "../components/Article";
import {ArticleLink} from "./controlled-difficulty";

export const mazeRunnerLinks: ArticleLink[] = [
  {name: "Overview", link: "/maze-runner"},
  // {name: "Level 1 - Dev log", link: "/maze-runner/level-1"},
]

const internalLinks: ArticleLink[] = [
  {name: "Introduction", link:"#introduction"},
  {name: "Concept", link:"#concept"},
  {name: "Plans", link:"#plans"},
  {name: "Progress", link:"#progress"},
]

const MazeRunner: NextPage = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  return (

    <Article title={"Maze Runner"}
             header={"Maze Runner"}
             image={headerPic}
             externalLinks={mazeRunnerLinks}
             internalLinks={internalLinks}
             active={mazeRunnerLinks[0]}>
      <h3 id={"introduction"}>Introduction</h3>
      <p>
        The idea for the game originated from Counter Strike mod <code>KZ</code> in which the player was supposed to beat an obstacle course using movement and strafing
        mechanics. Checkpoints were present on the map in specific places, so the player doesn&apos;t have to start from scratch if fallen down. When reached the highest point of
        the map, the player would get his rank based on the time it took to reach the last checkpoint.
      </p>
      <h3 id={"concept"}>Concept</h3>
      <p>
        Maze runner tries to mimic movement mechanics from Counter Strike and it&apos;s working fairly <code>good</code>. Player movement is based on momentum and can accelerate
        or decelerate midair, effectively making bunny hopping and surfing a thing.
      </p>
      <h3 id={"plans"}>Plans</h3>
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
      <h3 id={"progress"}>Progress</h3>
      <p>At the moment, the game is in early stage of development with a playable prototype. For actual progress, check out this board:</p>
      <blockquote>link soon(tm)</blockquote>

    </Article>

  );
}

export default MazeRunner;