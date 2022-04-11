import { attributesToProps, DOMNode, domToReact, HTMLReactParserOptions } from "html-react-parser";
import { Element } from "domhandler/lib/node";

import Image from "next/image";
import { blurredShimmer } from "./imageUtils";

export const parserOptions: HTMLReactParserOptions = {
  trim: true,
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element) {
      if (domNode.type === "tag" && domNode.name === "img") {
        const { src, alt, ...rest } = attributesToProps(domNode.attribs);
        return <Image src={src} alt={alt} {...rest} />;
      }

      if (domNode.name === "img") {
        return (
          <Image
            src={domNode.attribs.src}
            width={domNode.attribs.width}
            height={domNode.attribs.height}
            alt={"article-image"}
            objectFit={"scale-down"}
            placeholder={"blur"}
            blurDataURL={blurredShimmer(700, 450)}
          />
        );
      }

      if (domNode.name === "strong") {
        // @ts-ignore
        const slug = convertStringToSnakeCase(domNode.children[0].data);
        return <strong id={slug}>{domToReact(domNode.children, parserOptions)}</strong>;
      }

      if (domNode.name === "a") {
        const props = attributesToProps(domNode.attribs);
        return (
          <a rel="noopener" {...props}>
            {domToReact(domNode.children, parserOptions)}
          </a>
        );
      }
    }
  },
};

function convertStringToSnakeCase(str: string) {
  return str
    .replace(/[^a-zA-Z0-9]/g, " ")
    .split(" ")
    .map((word) => word.toLowerCase())
    .join("-");
}
