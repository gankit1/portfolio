import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Chip,
  IconButton,
  Tooltip,
  useTheme,
} from "@mui/material";
import { GitHub, Launch, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
import { Project } from "../../types/project.types";

// Define the props interface explicitly
interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Card
        elevation={0}
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          background: isDark
            ? "rgba(255, 255, 255, 0.03)"
            : "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(12px)",
          border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
          borderRadius: "16px",
          overflow: "hidden",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            transform: "translateY(-8px)",
            boxShadow: "0 20px 40px -12px rgba(41, 123, 180, 0.2)",
            borderColor: isDark
              ? "rgba(41, 123, 180, 0.3)"
              : "rgba(41, 123, 180, 0.2)",
            "& .project-image": {
              transform: "scale(1.05)",
            },
          },
        }}
      >
        <Box sx={{ overflow: "hidden" }}>
          <CardMedia
            className="project-image"
            component="img"
            height="200"
            image={project.image}
            alt={project.title}
            sx={{
              objectFit: "cover",
              transition: "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          />
        </Box>

        <CardContent
          sx={{ flexGrow: 1, display: "flex", flexDirection: "column", p: 3 }}
        >
          <Typography
            variant="h6"
            component="h3"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            {project.title}
          </Typography>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              lineHeight: 1.7,
              maxHeight: expanded ? "none" : "80px",
              overflow: "hidden",
              textOverflow: expanded ? "initial" : "ellipsis",
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "initial" : 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {project.description}
          </Typography>

          {project.description.length > 120 && (
            <Button
              size="small"
              onClick={toggleExpand}
              endIcon={
                <ExpandMore
                  sx={{
                    transform: expanded ? "rotate(180deg)" : "none",
                    transition: "transform 0.3s",
                  }}
                />
              }
              sx={{
                alignSelf: "flex-start",
                mb: 2,
                color: "#297BB4",
                fontWeight: 600,
                fontSize: "0.8rem",
                "&:hover": {
                  backgroundColor: "rgba(41, 123, 180, 0.08)",
                },
              }}
            >
              {expanded ? "Show Less" : "Read More"}
            </Button>
          )}

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.75,
              mb: 2.5,
              mt: "auto",
            }}
          >
            {project.technologies.map((tech) => (
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

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              pt: 1,
              borderTop: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            }}
          >
            <Box sx={{ display: "flex", gap: 0.5 }}>
              {project.githubUrl && (
                <Tooltip title="View Code" arrow>
                  <IconButton
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "#297BB4",
                        backgroundColor: "rgba(41, 123, 180, 0.08)",
                      },
                    }}
                  >
                    <GitHub fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
              {project.liveUrl && (
                <Tooltip title="Live Demo" arrow>
                  <IconButton
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    size="small"
                    sx={{
                      color: theme.palette.text.secondary,
                      transition: "all 0.2s",
                      "&:hover": {
                        color: "#297BB4",
                        backgroundColor: "rgba(41, 123, 180, 0.08)",
                      },
                    }}
                  >
                    <Launch fontSize="small" />
                  </IconButton>
                </Tooltip>
              )}
            </Box>

            {project.featured && (
              <Chip
                label="Featured"
                size="small"
                sx={{
                  background: "linear-gradient(135deg, #297BB4, #549DD4)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.7rem",
                }}
              />
            )}
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
