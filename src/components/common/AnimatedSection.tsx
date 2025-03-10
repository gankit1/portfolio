import React, { useEffect, useState } from "react";
import { Box, BoxProps } from "@mui/material";
import useIntersectionObserver from "../../hooks/useIntersectionObserver";

interface AnimatedSectionProps extends BoxProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
  duration?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  delay = 0,
  direction = "up",
  threshold = 0.1,
  duration = 0.5,
  ...boxProps
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  // Define transform values based on direction
  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return "translateY(30px)";
      case "down":
        return "translateY(-30px)";
      case "left":
        return "translateX(30px)";
      case "right":
        return "translateX(-30px)";
      default:
        return "translateY(30px)";
    }
  };

  return (
    <Box
      ref={ref}
      sx={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : getInitialTransform(),
        transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
        ...boxProps.sx,
      }}
      {...boxProps}
    >
      {children}
    </Box>
  );
};

export default AnimatedSection;
