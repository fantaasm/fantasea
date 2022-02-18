import {motion} from 'framer-motion';
import {ReactNode} from "react";

type Props = {
  children: ReactNode
}

const variants = {
  hidden: {opacity: 0, x: -200, y: 0},
  enter: {opacity: 1, x: 0, y: 0},
  exit: {opacity: 0, x: 0, y: -100},
}

const Layout = ({children}: Props) => {
  return (
    <div>
    <motion.div initial="hidden"
                 animate="enter"
                 exit="exit"
                 variants={variants}
                 transition={{type: 'linear'}}>
      {children}
    </motion.div>
    </div>
  );
}

export default Layout