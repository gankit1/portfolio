import {
  Box,
  Typography,
  useTheme,
  LinearProgress,
} from "@mui/material";
import { Skill } from "../../types/skill.types";
import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <GlassCard>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "12px",
              background:
                "linear-gradient(135deg, rgba(41,123,180,0.12), rgba(139,92,246,0.08))",
              mr: 2,
              flexShrink: 0,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                background: "linear-gradient(135deg, #297BB4, #549DD4)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: "0.75rem",
              }}
            >
              {skill.name.substring(0, 2).toUpperCase()}
            </Typography>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              component="h3"
              sx={{
                fontWeight: 700,
                fontSize: "0.95rem",
                mb: 0.5,
              }}
            >
              {skill.name}
            </Typography>
            <Box sx={{ width: "100%" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 0.5,
                }}
              >
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: 500 }}
                >
                  Proficiency
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "#297BB4",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: isDark
                    ? "rgba(255, 255, 255, 0.06)"
                    : "rgba(41, 123, 180, 0.08)",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 3,
                    background:
                      "linear-gradient(90deg, #297BB4, #549DD4)",
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </GlassCard>
    </motion.div>
  );
};

export default SkillCard;
