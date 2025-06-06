import {
  Box,
  Container,
  Grid,
  Typography,
  Paper,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import SocialIcons from "../components/common/SocialIcons";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { School, Work } from "@mui/icons-material";
import ImagePreview from "../assets/images/profile.jpg";

const About = () => {
  const theme = useTheme();

  const education = [
    {
      institution: "Dr. A. P. J. Abdul Kalam Technical University (U.P)",
      degree: "BACHELOR OF TECHNOLOGY in Information Technology",
      date: "2016 - 2020",
      description:
        "Focused on Human-Computer Interaction and Web Technologies.",
    },
    {
      institution: "Janta Inter College Nawanagar Ballia (U.P)",
      degree: "Intermediate PCM",
      date: "2013 - 2015",
      description: "86.4%",
    },
  ];

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my background, experience, and what drives me as a developer."
          />
        </AnimatedSection>

        <Grid container spacing={4} alignItems="center" sx={{ mb: 8 }}>
          <Grid item xs={12} md={5}>
            <AnimatedSection direction="right">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Avatar
                  src={ImagePreview}
                  alt="Ankit K Gupta"
                  sx={{
                    width: { xs: 250, md: 350 },
                    height: { xs: 250, md: 350 },
                    border: `5px solid ${theme.palette.primary.main}`,
                    boxShadow: theme.shadows[10],
                  }}
                />
              </Box>
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={7}>
            <AnimatedSection direction="left" delay={0.2}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 2, fontWeight: 700 }}
              >
                Ankit Kumar Gupta
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                color="primary"
                sx={{ mb: 3 }}
              >
                Software Developer
              </Typography>

              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                I'm a passionate Software Developer with 3.5+ years of experience
                specializing in creating responsive, user-friendly web
                applications using React, TypeScript, and modern JavaScript
                frameworks.
              </Typography>

              <Typography variant="body1" paragraph sx={{ mb: 2 }}>
                I believe in writing clean, maintainable code and staying
                current with the latest web development trends and best
                practices. My approach combines technical expertise with
                creative problem-solving to build applications that not only
                meet business requirements but also delight users.
              </Typography>

              <Typography variant="body1" paragraph sx={{ mb: 3 }}>
                Beyond coding, I enjoy contributing to open-source projects,
                mentoring junior developers, and participating in tech
                communities. I'm always looking for opportunities to learn and
                grow both as a developer and as a person.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  href={process.env.PUBLIC_URL + "resume.pdf"}
                  download="Ankit_Kumar_Gupta_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </Button>
                <SocialIcons />
              </Box>
            </AnimatedSection>
          </Grid>
        </Grid>

        {/* Personal Info */}
        <AnimatedSection delay={0.3}>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 6,
              borderRadius: 2,
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Personal Information
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2 }}>
              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Name
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Ankit Kumar Gupta
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 500,
                    wordBreak: "break-all",
                  }}
                >
                  ankit.gupta.sde@gmail.com
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Location
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Noida Uttar Pradesh, India
                </Typography>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Typography variant="subtitle2" color="text.secondary">
                  Availability
                </Typography>
                <Typography variant="body1" sx={{ fontWeight: 500 }}>
                  Open to opportunities
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.4}>
          <SectionTitle title="Education" align="left" />

          <Timeline position="alternate">
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  {edu.date}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot color="primary">
                    <School />
                  </TimelineDot>
                  {index !== education.length - 1 && <TimelineConnector />}
                </TimelineSeparator>

                <TimelineContent>
                  <Paper
                    elevation={2}
                    sx={{
                      p: 3,
                      backgroundColor: theme.palette.background.paper,
                    }}
                  >
                    <Typography variant="h6" component="h3">
                      {edu.institution}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="primary"
                      sx={{ fontWeight: 500 }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {edu.description}
                    </Typography>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </AnimatedSection>
      </Container>
    </Box>
  );
};

export default About;
