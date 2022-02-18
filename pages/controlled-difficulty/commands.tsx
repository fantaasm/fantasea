import * as React from 'react';
import Article from "../../components/Article";
import {ArticleLink, cdLinks} from "../controlled-difficulty";
import headerPic from "../../public/cd-header.png";

const internalLinks: ArticleLink[] = [
  {name: "Introduction", link: "#introduction"},
  {name: "Chat commands", link: "#chat-commands"},
  {name: "Console commands", link: "#console-commands"},
  {name: "HUD commands", link: "#hud-commands"},
]

const CdCommands = () => {
  return (
    <Article title={"Commands - Controlled Difficulty"}
             header={"Controlled Difficulty"}
             externalLinks={cdLinks}
             internalLinks={internalLinks}
             active={cdLinks[1]}
             image={headerPic}>

      <h3 className={"text-slate-200 tracking-tight font-extrabold"}
          id={"introduction"}>Introduction</h3>
      <p>There are 3 types of commands available in this build</p>
      <ul>
        <li>Chat commands - Used most frequently to adjust game settings</li>
        <li>Console commands - Used to address uncommon gameplay events</li>
        <li>Console commands - Used for adjusting user interface settings</li>
      </ul>
      <h3 className={"text-slate-200 tracking-tight font-extrabold"}
          id={"chat-commands"}>Chat commands</h3>
      <ul>
        <li>!cdao [true/false] - Sets if anti overcap will be active</li>
        <li>!cdfa [true/false] - Sets if players start with full ammo</li>
        <li>!cdsms [true/false] - Sets if gamestats will be saved to a file on win</li>
        <li>!cdlkm [true/false] - Sets large kill messages</li>
        <li>!cdstats hu - Prints husks killed for each player with details</li>
        <li>!cdstats larg - Prints larges killed for each player with details</li>
        <li>!cdstats froz - Prints frozen larges for each player</li>
        <li>!cdzt [vanilla/harder/nightcore] - Sets zed type</li>
        <li>!cdkz - Kills all zeds</li>
        <li>!cdhlscdmg x - Sets damage multiplier taken by headless scrakes.</li>
        <li>!cdhlfpdmg x - Sets damage multiplier taken by headless fleshpounds.</li>
        <li>!cdvs [true/false] - Toggles vent spawns on/off</li>
        <li>!cdds x - Disables spawner x(number) [can pass multiple separated by coma]</li>
        <li>!cdcp [vanilla/collision] - Sets how game handles zed collision in chokepoints</li>
        <li>!cdlc x - Sets size of collision cylinder big zeds will have in chokepoints</li>
        <li>!cdtc x - Sets size of collision cylinder trash zeds will have in chokepoints</li>
        <li>!cdlcs x - Sets limit of spares for Commando weapons</li>
        <li>!cdls x - Sets limit of spares for all other weapons</li>
        <li>!cdes [true/false] - Sets experimental settings which include new pathing in navigation(makes games more intense)</li>
        <li>!cdrd x - Sets from which wave demo will be recorded[0 = none]</li>
        <li>!cdcockfidence !cdafs !cdmagnums !cdb !cdbr !cdalbinofp !cdmikepls - Fluff commands</li>
      </ul>
      <h3 className={"text-slate-200 tracking-tight font-extrabold"}
          id={"console-commands"}>Console commands</h3>
      <ul>
        <li>Commands - Prints all available commands.</li>
        <li>Mutate spawnai [ZedName,Distance] - Spawns nightmare/harder versions of zeds with 500 distance to player.</li>
        <li>Mutate spawnainoaff [ZedName,Distance] - Spawns nightmare/harder versions of zeds with 500 distance to player without afflictions.</li>
        <li>Mutate spawncp - Spawns chokepoint on player location.</li>
        <li>Mutate removecp - Removes chokepoint on player location.</li>
        <li>Mutate disablezt [true/false] - Disables zed time.</li>
        <li>Mutate spawnmedbot - Spawns Trash Obsession that heal players</li>
      </ul>
      <h3 className={"text-slate-200 tracking-tight font-extrabold"}
          id={"hud-commands"}>HUD Commands</h3>
      <ul>
        <li>xHairInfo - Prints current crosshair settings.</li>
        <li>togglexhair - Toggles Crosshair</li>
        <li>togglenetgraph - Toggles Fps/ping counter</li>
        <li>clearcorpses - Clear corpses on client side, can be used once per 60s.</li>
        <li>disableztdesaturation [true/false] - Disables zed time desaturation effect.</li>
        <li>disablehealtheffect [true/false] - Disables low health HUD effect.</li>
        <li>disabletvoice [true/false] - Disables trader voice.</li>
        <li>togglezedhealthbars - Toggles zeds health bars for commando.</li>
        <li>debugcp - Displays closest chokepoints.</li>
        <li>debugv - Displays closest spawn volumes with details</li>
        <li>debugnav - Displays closest pathnodes and dooractors.</li>
      </ul>
    </Article>
  );
}

export default CdCommands