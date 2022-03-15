import { motion } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  maxColumns: number;
  children?: ReactNode;
};

const gridSizes = ["md:grid-cols-1", "md:grid-cols-1", "md:grid-cols-2"];

export function ResponsiveGrid({ maxColumns, children }: Props): JSX.Element {
  return (
    <motion.div
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      initial={{ y: 15, opacity: 0 }}
      className={`grid grid-cols-1 ${gridSizes[maxColumns]} gap-10 sm:p-8`}
    >
      {children}
    </motion.div>
  );
}
