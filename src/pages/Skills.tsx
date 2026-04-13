import { Box, Container, useTheme } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import SkillsGrid from "../components/skills/SkillsGrid";

const Skills = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 10 },
        background: isDark
          ? "radial-gradient(ellipse at 30% 0%, rgba(41,123,180,0.04) 0%, transparent 60%)"
          : "radial-gradient(ellipse at 30% 0%, rgba(41,123,180,0.03) 0%, transparent 60%)",
      }}
    >
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
