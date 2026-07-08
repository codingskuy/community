import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, viewportOnce } from "@/lib/animations";

interface Props {
  children: ReactNode;
  variants?: Variants;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "span";
}

export default function Reveal({
  children,
  variants = fadeInUp,
  delay = 0,
  className,
  as = "div",
}: Props) {
  const Component = motion[as];
  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={variants}
      transition={{ delay, duration: 0.5 }}
      className={className}
    >
      {children}
    </Component>
  );
}
