import {attributesToProps, DOMNode, domToReact, HTMLReactParserOptions} from "html-react-parser";
import Image from "next/image";
import {shimmer, toBase64} from "./imageUtils";

export const parserOptions: HTMLReactParserOptions = {
  replace: (domNode:DOMNode) => {
    if (domNode.name === "img") {
      return (
        <Image
          src={domNode.attribs.src}
      width={domNode.attribs.width}
      height={domNode.attribs.height}
      alt={"article-image"}
      placeholder={"blur"}
      blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
      />);
    }

    if(domNode.name === "a"){
      // console.log(domNode)
      const props = attributesToProps(domNode.attribs);
      return (
        <a rel="noopener" {...props} >{domToReact(domNode.children, parserOptions)}</a>
    )
    }
  }
};