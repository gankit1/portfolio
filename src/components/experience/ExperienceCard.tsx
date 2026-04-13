import { Box, Chip, Typography, useTheme } from "@mui/material";
import { Experience } from "../../types/experience.types";
import { motion } from "framer-motion";
import GlassCard from "../common/GlassCard";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Box sx={{ mb: 4, position: "relative" }}>
        {/* Timeline dot */}
        <Box
          sx={{
            position: "absolute",
            left: -8,
            top: 24,
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #297BB4, #549DD4)",
            boxShadow: "0 0 16px rgba(41, 123, 180, 0.4)",
            zIndex: 1,
            display: { xs: "none", md: "block" },
          }}
        />

        <GlassCard
          sx={{
            p: { xs: 3, md: 4 },
            ml: { xs: 0, md: 3 },
            borderLeft: "3px solid",
            borderImage: "linear-gradient(180deg, #297BB4, #549DD4) 1",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              mb: 2,
              gap: 1,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                component="h3"
                sx={{ fontWeight: 800, fontSize: { xs: "1.1rem", md: "1.3rem" } }}
              >
                {experience.role}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #297BB4, #549DD4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                {experience.company}
              </Typography>
            </Box>
            <Box sx={{ flexShrink: 0 }}>
              <Typography
                variant="body2"
                sx={{
                  display: "inline-block",
                  backgroundColor: isDark
                    ? "rgba(41, 123, 180, 0.1)"
                    : "rgba(41, 123, 180, 0.06)",
                  color: isDark ? "#A5B4FC" : "#1E5D87",
                  p: "6px 14px",
                  borderRadius: "8px",
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {formatDate(experience.startDate)} –{" "}
                {formatDate(experience.endDate)}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mt: 0.5, fontSize: "0.85rem" }}
              >
                {experience.location}
              </Typography>
            </Box>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" component="div">
              <ul
                style={{
                  paddingLeft: "20px",
                  margin: "8px 0",
                  listStyleType: "none",
                }}
              >
                {experience.description.map((item, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "8px",
                      position: "relative",
                      paddingLeft: "16px",
                      lineHeight: 1.7,
                      color: theme.palette.text.secondary,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        left: 0,
                        top: "8px",
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #297BB4, #549DD4)",
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </Typography>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {experience.technologies.map((tech) => (
              <Chip
                key={tech}
                label={tech}
                size="small"
                sx={{
                  backgroundColor: isDark
                    ? "rgba(41, 123, 180, 0.1)"
                    : "rgba(41, 123, 180, 0.06)",
                  color: isDark ? "#A5B4FC" : "#1E5D87",
                  fontWeight: 500,
                  fontSize: "0.75rem",
                  border: `1px solid ${isDark ? "rgba(41,123,180,0.15)" : "rgba(41,123,180,0.1)"}`,
                }}
              />
            ))}
          </Box>
        </GlassCard>
      </Box>
    </motion.div>
  );
};

export default ExperienceCard;
