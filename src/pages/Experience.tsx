import { Box, Container } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import ExperienceTimeline from "../components/experience/ExperienceTimeline";

const Experience = () => {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="My Experience"
            subtitle="A timeline of my professional journey and career milestones."
          />
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ExperienceTimeline />
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default Experience;
