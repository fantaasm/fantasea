import {motion} from 'framer-motion';
import * as React from 'react';
import {ReactElement} from "react";

type Props = {
  maxColumns: number
  children?: any
};

const gridSizes = ["md:grid-cols-1", "md:grid-cols-1", "md:grid-cols-2"]

export function ResponsiveGrid(props: Props): ReactElement {
  return (
    <motion.div
      whileInView={{opacity: 1}}
      viewport={{once: true}}
      initial={{y: 15, opacity: 0}}
      // animate={{y: 0, opacity: 1}}
      // transition={{duration: 0.5, delay: 0.6}}
      className={`grid grid-cols-1 ${gridSizes[props.maxColumns]} gap-10 sm:p-8`}>
      {props.children}
    </motion.div>
  );
}