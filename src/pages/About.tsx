import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Avatar,
  useTheme,
} from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import SocialIcons from "../components/common/SocialIcons";
import GlassCard from "../components/common/GlassCard";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { School } from "@mui/icons-material";
import ImagePreview from "../assets/images/profile.jpg";

const About = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 10 },
        background: isDark
          ? "radial-gradient(ellipse at 50% 0%, rgba(41,123,180,0.04) 0%, transparent 60%)"
          : "radial-gradient(ellipse at 50% 0%, rgba(41,123,180,0.03) 0%, transparent 60%)",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="About Me"
            subtitle="Learn more about my background, experience, and what drives me as a developer."
          />
        </AnimatedSection>

        <Grid container spacing={6} sx={{ alignItems: "center", mb: 10 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection direction="right">
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    "&::before": {
                      content: '""',
                      position: "absolute",
                      inset: -6,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, #297BB4, #549DD4, #8CC4ED)",
                      opacity: 0.15,
                    },
                  }}
                >
                  <Avatar
                    src={ImagePreview}
                    alt="Ankit K Gupta"
                    sx={{
                      width: { xs: 240, md: 320 },
                      height: { xs: 240, md: 320 },
                      border: "4px solid",
                      borderColor: isDark
                        ? "rgba(41, 123, 180, 0.3)"
                        : "rgba(41, 123, 180, 0.2)",
                      boxShadow: "0 20px 60px rgba(41, 123, 180, 0.15)",
                      position: "relative",
                      zIndex: 1,
                    }}
                  />
                </Box>
              </Box>
            </AnimatedSection>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection direction="left" delay={0.2}>
              <Typography
                variant="h3"
                component="h2"
                sx={{ mb: 1, fontWeight: 800 }}
              >
                Ankit Kumar Gupta
              </Typography>
              <Typography
                variant="h5"
                component="h3"
                sx={{
                  mb: 3,
                  fontWeight: 600,
                  background: "linear-gradient(135deg, #297BB4, #549DD4)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Software Developer
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{ mb: 2, color: theme.palette.text.secondary }}
              >
                I'm a passionate Software Developer with 4+ years of experience
                specializing in creating responsive, user-friendly web
                applications using React, Nextjs, TypeScript, and modern JavaScript
                frameworks.
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{ mb: 2, color: theme.palette.text.secondary }}
              >
                I believe in writing clean, maintainable code and staying
                current with the latest web development trends and best
                practices. My approach combines technical expertise with
                creative problem-solving to build applications that not only
                meet business requirements but also delight users.
              </Typography>

              <Typography
                variant="body1"
                component="p"
                sx={{ mb: 4, color: theme.palette.text.secondary }}
              >
                Beyond coding, I enjoy contributing to open-source projects,
                mentoring junior developers, and participating in tech
                communities. I'm always looking for opportunities to learn and
                grow both as a developer and as a person.
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button
                  variant="contained"
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
          <GlassCard hoverEffect={false} sx={{ p: { xs: 3, md: 4 }, mb: 8 }}>
            <Typography
              variant="h5"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 700, mb: 3 }}
            >
              Personal Information
            </Typography>

            <Grid container spacing={3}>
              {[
                { label: "Name", value: "Ankit Kumar Gupta" },
                { label: "Email", value: "ankit.gupta.sde@gmail.com" },
                { label: "Location", value: "Noida Uttar Pradesh, India" },
                { label: "Availability", value: "Open to opportunities" },
              ].map((item) => (
                <Grid key={item.label} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Typography
                    variant="caption"
                    sx={{
                      color: theme.palette.text.secondary,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                    }}
                  >
                    {item.label}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontWeight: 600,
                      mt: 0.5,
                      wordBreak: item.label === "Email" ? "break-all" : "normal",
                    }}
                  >
                    {item.value}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </GlassCard>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection delay={0.4}>
          <SectionTitle title="Education" align="left" />

          <Timeline
            position="alternate"
            sx={{
              "& .MuiTimelineItem-root:before": {
                flex: { xs: 0, sm: 1 },
              },
            }}
          >
            {education.map((edu, index) => (
              <TimelineItem key={index}>
                <TimelineOppositeContent
                  color="text.secondary"
                  sx={{
                    display: { xs: "none", sm: "block" },
                    fontWeight: 500,
                  }}
                >
                  {edu.date}
                </TimelineOppositeContent>

                <TimelineSeparator>
                  <TimelineDot
                    sx={{
                      background: "linear-gradient(135deg, #297BB4, #549DD4)",
                      boxShadow: "0 4px 14px rgba(41, 123, 180, 0.3)",
                    }}
                  >
                    <School />
                  </TimelineDot>
                  {index !== education.length - 1 && (
                    <TimelineConnector
                      sx={{
                        background:
                          "linear-gradient(180deg, #297BB4, rgba(41,123,180,0.2))",
                      }}
                    />
                  )}
                </TimelineSeparator>

                <TimelineContent>
                  <GlassCard sx={{ p: 3 }}>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        display: { xs: "block", sm: "none" },
                        mb: 1,
                        fontWeight: 500,
                      }}
                    >
                      {edu.date}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ fontWeight: 700 }}>
                      {edu.institution}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        mt: 0.5,
                        background: "linear-gradient(135deg, #297BB4, #549DD4)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        display: "inline-block",
                      }}
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
                  </GlassCard>
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
