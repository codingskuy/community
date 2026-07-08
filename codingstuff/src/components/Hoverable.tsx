import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  lift?: number;
}

export default function Hoverable({ children, className, lift = 6 }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -lift,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
