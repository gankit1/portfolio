// import { ReactNode, useRef, useEffect, useState } from "react";
// import { Box, BoxProps } from "@mui/material";
// import { motion, useAnimation, Variant } from "framer-motion";

// interface AnimatedSectionProps extends BoxProps {
//   children: ReactNode;
//   delay?: number;
//   direction?: "up" | "down" | "left" | "right";
//   distance?: number;
//   duration?: number;
//   once?: boolean;
//   threshold?: number;
// }

// type VariantDirection = {
//   hidden: Variant;
//   visible: Variant;
// };

// const AnimatedSection = ({
//   children,
//   delay = 0,
//   direction = "up",
//   distance = 50,
//   duration = 0.6,
//   once = true,
//   threshold = 0.1,
//   ...boxProps
// }: AnimatedSectionProps) => {
//   const controls = useAnimation();
//   const ref = useRef<HTMLDivElement>(null);
//   const [isInView, setIsInView] = useState(false);

//   // Determine animation variants based on direction
//   const getVariants = (): VariantDirection => {
//     const variants: { [key: string]: VariantDirection } = {
//       up: {
//         hidden: { y: distance, opacity: 0 },
//         visible: { y: 0, opacity: 1 },
//       },
//       down: {
//         hidden: { y: -distance, opacity: 0 },
//         visible: { y: 0, opacity: 1 },
//       },
//       left: {
//         hidden: { x: -distance, opacity: 0 },
//         visible: { x: 0, opacity: 1 },
//       },
//       right: {
//         hidden: { x: distance, opacity: 0 },
//         visible: { x: 0, opacity: 1 },
//       },
//     };

//     return variants[direction];
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting && !isInView) {
//           setIsInView(true);
//           controls.start("visible");
//         } else if (!entry.isIntersecting && !once && isInView) {
//           setIsInView(false);
//           controls.start("hidden");
//         }
//       },
//       { threshold }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [controls, isInView, once, threshold]);

//   return (
//     <Box ref={ref} {...boxProps}>
//       <Box
//         component={motion.div}
//         initial="hidden"
//         animate={controls}
//         variants={getVariants()}
//         transition={{
//           duration,
//           delay,
//           ease: [0.25, 0.1, 0.25, 1.0],
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// };

// export default AnimatedSection;

import React, { useEffect, useRef, useState } from "react";
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
