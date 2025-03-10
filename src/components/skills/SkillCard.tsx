import {
  Box,
  Paper,
  Typography,
  useTheme,
  LinearProgress,
} from "@mui/material";
import { Skill } from "../../types/skill.types";
import AnimatedSection from "../common/AnimatedSection";

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard = ({ skill, index }: SkillCardProps) => {
  const theme = useTheme();

  return (
    <AnimatedSection delay={index * 0.1} direction="up">
      <Paper
        elevation={2}
        sx={{
          p: 3,
          height: "100%",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.shadows[6],
          },
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Box
            sx={{
              width: 50,
              height: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "50%",
              backgroundColor:
                theme.palette.mode === "dark"
                  ? "rgba(25, 118, 210, 0.1)"
                  : "rgba(25, 118, 210, 0.08)",
              mr: 2,
            }}
          >
            {/* You could use actual SVGs or icon components here */}
            <Typography
              variant="body1"
              color="primary"
              sx={{ fontWeight: "bold", textTransform: "uppercase" }}
            >
              {skill.name.substring(0, 2)}
            </Typography>
          </Box>
          <Box>
            <Typography variant="h6" component="h3" gutterBottom>
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
                <Typography variant="body2" color="text.secondary">
                  Proficiency
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {skill.level}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={skill.level}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  backgroundColor:
                    theme.palette.mode === "dark"
                      ? "rgba(255, 255, 255, 0.1)"
                      : "rgba(0, 0, 0, 0.1)",
                  "& .MuiLinearProgress-bar": {
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Paper>
    </AnimatedSection>
  );
};

export default SkillCard;
