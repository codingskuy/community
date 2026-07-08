import type { Transition, Variants } from "framer-motion";

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
};

export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const slideInLeft: Variants = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export const slideInRight: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0 },
};

export const springStiff: Transition = {
  type: "spring",
  stiffness: 300,
  damping: 25,
};

export const springBouncy: Transition = {
  type: "spring",
  stiffness: 400,
  damping: 15,
};

export const springGentle: Transition = {
  type: "spring",
  stiffness: 200,
  damping: 20,
};

export const hoverLift = {
  whileHover: {
    y: -6,
    transition: { type: "spring" as const, stiffness: 300, damping: 20 },
  },
};

export const hoverScale = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

export const buttonTap = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
};

export const floatingAnimation = (yDistance = 10, duration = 4) => ({
  y: [0, -yDistance, 0],
  transition: {
    repeat: Infinity,
    duration,
    ease: "easeInOut" as const,
  },
});

export const viewportOnce = { once: true, margin: "-40px" };
