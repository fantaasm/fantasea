import {NextPage} from "next";
import headerPic from "../public/cd-header.png";
import Article from "../components/Article";

export type ArticleLink = {
  name: string,
  link: string,
  active?: boolean
}

export const cdLinks: ArticleLink[] = [
  {name: "Overview", link: "/controlled-difficulty"},
  // {name: "Commands", link: "/controlled-difficulty/commands"},
  // {name: "Advanced Settings", link: "/controlled-difficulty/advanced"},
]

const internalLinks: ArticleLink[] = [
  {name: "Introduction", link: "#introduction"},
  {name: "Who is CD for", link: "#who-is-for"},
  {name: "Common terms", link: "#common-terms"},
  {name: "Download", link: "#download"},
  {name: "Example footage", link: "#example-footage"},
]

const ControlledDifficulty: NextPage = () => {

  return (
    <Article title={"Overview - Controlled Difficulty"}
             header={"Controlled Difficulty"}
             image={headerPic}
             internalLinks={internalLinks}
             externalLinks={cdLinks}
             active={cdLinks[0]}>
      <h3 id={"introduction"}>Introduction</h3>
      <p>
        Controlled Difficulty or as most would say <code>CD</code> is a modification to game Killing Floor 2 which create a fully customizable and controllable environment for
        players. That means game difficulty can be dynamically adjusted to be harder or easier depending on preferences.
      </p>
      <h3 id={"who-is-for"}>Who is CD for</h3>
      <p>
        The mod can be played by both casual and hardcore gamers, however to get the best experience it&apos;s recommended to find players with similar skill level.
      </p>
      <h3 id={"common-terms"}>Common terms</h3>
      <p>There are few terms commonly used in CD</p>
      <ul>
        <li><code>Max monsters</code> – Maximum concurrently alive monsters</li>
        <li><code>Spawn pool</code> – Interval between monsters spawns</li>
        <li><code>Cohort size</code> – Amount of monsters that spawns every <code>Spawn pool</code></li>
        <li><code>Spawn cycle</code> – Defines type of monsters that spawns in written order</li>
      </ul>
      <p>
        Knowing what setting controls what, players can adjust them accordingly to achieve the environment they want.
        The most game changing are <code>Spawn cycle</code> and <code>Max monsters</code>, which sets the pace of the game.
      </p>
      <h3 id={"download"}>Download</h3>
      <p>CD is public on <a href="https://steamcommunity.com/sharedfiles/filedetails/?id=2052571175">Steam Workshop</a>, and it does way more than described in here including
         game-altering changes, check the workshop page for more info.</p>
      <h3 id={"example-footage"}>Example footage</h3>
      <p>Example footage recorded by my friend and teammate</p>
      <div className={"overflow-hidden"}>
        <iframe width="560"
                height="315"
                src="https://www.youtube.com/embed/ZdphVThxkMw" />
      </div>
    </Article>
  );
}

export default ControlledDifficulty