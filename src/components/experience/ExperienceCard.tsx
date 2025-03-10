import { Box, Chip, Paper, Typography, useTheme } from "@mui/material";
import { Experience } from "../../types/experience.types";
import AnimatedSection from "../common/AnimatedSection";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => {
  const theme = useTheme();

  const formatDate = (dateString: string | null): string => {
    if (!dateString) return "Present";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
    }).format(date);
  };

  return (
    <AnimatedSection delay={index * 0.2}>
      <Paper
        elevation={2}
        sx={{
          p: 3,
          borderLeft: `4px solid ${theme.palette.primary.main}`,
          mb: 4,
          position: "relative",
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateX(5px)",
            boxShadow: theme.shadows[6],
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Box>
            <Typography variant="h5" component="h3" fontWeight="bold">
              {experience.role}
            </Typography>
            <Typography variant="subtitle1" color="primary" gutterBottom>
              {experience.company}
            </Typography>
          </Box>
          <Box sx={{ mt: { xs: 1, sm: 0 } }}>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                display: "inline-block",
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.06)",
                p: 1,
                borderRadius: 1,
              }}
            >
              {formatDate(experience.startDate)} -{" "}
              {formatDate(experience.endDate)}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {experience.location}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="body2" component="div">
            <ul
              style={{
                paddingLeft: "20px",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              {experience.description.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "4px" }}>
                  {item}
                </li>
              ))}
            </ul>
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {experience.technologies.map((tech) => (
            <Chip
              key={tech}
              label={tech}
              size="small"
              sx={{
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "rgba(255, 255, 255, 0.08)"
                    : "rgba(0, 0, 0, 0.08)",
                color: theme.palette.text.secondary,
              }}
            />
          ))}
        </Box>
      </Paper>
    </AnimatedSection>
  );
};

export default ExperienceCard;
