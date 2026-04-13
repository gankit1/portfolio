import { Box, Container, useTheme } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projects = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 10 },
        background: isDark
          ? "radial-gradient(ellipse at 70% 0%, rgba(139,92,246,0.04) 0%, transparent 60%)"
          : "radial-gradient(ellipse at 70% 0%, rgba(139,92,246,0.03) 0%, transparent 60%)",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="My Projects"
            subtitle="Explore the various projects I've worked on, showcasing my skills and expertise."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ProjectsGrid />
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Projects;
