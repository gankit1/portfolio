import React from "react";
import { Box, BoxProps } from "@mui/material";
import { motion, Variants } from "framer-motion";

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
  duration?: number;
}

const getVariants = (direction: string): Variants => {
  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  const offset = offsets[direction] || offsets.up;

  return {
    hidden: {
      opacity: 0,
      ...offset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = "up",
  threshold = 0.15,
  duration = 0.6,
  ...boxProps
}) => {
  const variants = getVariants(direction);

  return (
    <Box
      component={motion.div}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      {...(boxProps as any)}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;
