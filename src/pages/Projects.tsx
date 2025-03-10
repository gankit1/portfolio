import { Box, Container } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import ProjectsGrid from "../components/projects/ProjectsGrid";

const Projects = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
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
