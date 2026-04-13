import { Box, Container, useTheme, Button } from "@mui/material";
import { Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import SectionTitle from "../components/common/SectionTitle";
import SkillsGrid from "../components/skills/SkillsGrid";
import ProjectCard from "../components/projects/ProjectCard";
import { projects } from "../data/projectsData";
import AnimatedSection from "../components/common/AnimatedSection";

const Home = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  // Get only featured projects
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <Box>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <Box
        id="about-section"
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle
              title="About Me"
              subtitle="Here's a brief introduction about who I am and what I do."
            />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <Box
              sx={{
                maxWidth: "720px",
                mx: "auto",
                textAlign: "center",
              }}
            >
              <Box
                sx={{
                  mb: 4,
                  lineHeight: 1.8,
                  color: theme.palette.text.secondary,
                  "& p": {
                    mb: 2,
                    fontSize: "1.05rem",
                  },
                }}
              >
                <p>
                  I am a passionate Software Developer with over 4+ years of
                  experience creating responsive and user-friendly web
                  applications. I specialize in modern JavaScript frameworks,
                  particularly React, along with TypeScript for type-safe code.
                </p>
                <p>
                  My goal is to build applications that not only look great but
                  also provide exceptional user experiences. I have a strong
                  focus on writing clean, maintainable code and staying
                  up-to-date with the latest industry trends and best practices.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  my knowledge through blog posts and community forums.
                </p>
              </Box>

              <Button
                component={RouterLink}
                to="/about"
                variant="outlined"
                size="large"
              >
                Learn More About Me
              </Button>
            </Box>
          </AnimatedSection>

          <Box sx={{ mt: 8 }}>
            <Stats />
          </Box>
        </Container>
      </Box>

      {/* Skills Section Preview */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          background: isDark
            ? "linear-gradient(180deg, rgba(17,24,39,0.5) 0%, rgba(11,17,32,1) 100%)"
            : "linear-gradient(180deg, rgba(241,245,249,0.5) 0%, rgba(250,251,255,1) 100%)",
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle
              title="My Skills"
              subtitle="Here are some of my technical skills and expertise."
            />
          </AnimatedSection>

          <Box
            sx={{
              maxHeight: "600px",
              overflow: "hidden",
              position: "relative",
            }}
          >
            <SkillsGrid />
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "180px",
                background: isDark
                  ? "linear-gradient(to bottom, rgba(11,17,32,0), rgba(11,17,32,1))"
                  : "linear-gradient(to bottom, rgba(250,251,255,0), rgba(250,251,255,1))",
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "center",
                paddingBottom: 4,
              }}
            >
              <Button
                component={RouterLink}
                to="/skills"
                variant="contained"
                size="large"
              >
                View All Skills
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Featured Projects */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Container maxWidth="lg">
          <AnimatedSection>
            <SectionTitle
              title="Featured Projects"
              subtitle="Take a look at some of my recent work."
            />
          </AnimatedSection>

          <Grid container spacing={4}>
            {featuredProjects.map((project, index) => (
              <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>

          <AnimatedSection delay={0.4}>
            <Box sx={{ textAlign: "center", mt: 6 }}>
              <Button
                component={RouterLink}
                to="/projects"
                variant="contained"
                size="large"
              >
                View All Projects
              </Button>
            </Box>
          </AnimatedSection>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
