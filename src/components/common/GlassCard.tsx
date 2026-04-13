import { Box, BoxProps, useTheme } from "@mui/material";
import { motion } from "framer-motion";

interface GlassCardProps extends BoxProps {
  hoverEffect?: boolean;
  glowColor?: string;
}

const GlassCard = ({
  children,
  hoverEffect = true,
  glowColor,
  sx,
  ...props
}: GlassCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const baseGlow = glowColor || "rgba(41, 123, 180, 0.15)";

  return (
    <Box
      component={motion.div}
      whileHover={
        hoverEffect
          ? {
              y: -6,
              transition: { duration: 0.3, ease: "easeOut" },
            }
          : undefined
      }
      sx={{
        p: 3,
        borderRadius: "16px",
        height: "100%",
        background: isDark
          ? "rgba(255, 255, 255, 0.03)"
          : "rgba(255, 255, 255, 0.7)",
        backdropFilter: "blur(12px)",
        border: `1px solid ${isDark ? "rgba(255, 255, 255, 0.06)" : "rgba(0, 0, 0, 0.06)"}`,
        transition: "box-shadow 0.3s ease, border-color 0.3s ease",
        "&:hover": hoverEffect
          ? {
              boxShadow: `0 20px 40px -12px ${baseGlow}`,
              borderColor: isDark
                ? "rgba(41, 123, 180, 0.3)"
                : "rgba(41, 123, 180, 0.2)",
            }
          : {},
        ...sx,
      }}
      {...(props as any)}
    >
      {children}
    </Box>
  );
};

export default GlassCard;
