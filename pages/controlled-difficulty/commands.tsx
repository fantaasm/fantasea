import * as React from 'react';
import Article from "../../components/Article";
import {cdLinks} from "../controlled-difficulty";
import headerPic from "../../public/cd-header.png";


const CdCommands = () => {
  return (
    <Article title={"Commands - Controlled Difficulty"}
             header={"Controlled Difficulty"}
             externalLinks={cdLinks}
             internalLinks={[]}
             active={cdLinks[1]}
             image={headerPic}>

      <h3>Command types</h3>
      <h3>Chat commands</h3>
      <h3>Console commands</h3>
    </Article>
  );
}

export default CdCommands