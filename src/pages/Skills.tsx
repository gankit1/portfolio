import { Box, Container } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import SkillsGrid from "../components/skills/SkillsGrid";

const Skills = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="My Skills"
            subtitle="A comprehensive overview of my technical skills and proficiency levels."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <SkillsGrid />
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Skills;
