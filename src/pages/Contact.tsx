import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import ContactForm from "../components/contact/ContactForm";

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <Box
      sx={{
        pt: { xs: 12, md: 16 },
        pb: { xs: 6, md: 10 },
        background: isDark
          ? "radial-gradient(ellipse at 80% 0%, rgba(41,123,180,0.04) 0%, transparent 60%)"
          : "radial-gradient(ellipse at 80% 0%, rgba(41,123,180,0.03) 0%, transparent 60%)",
      }}
    >
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="Contact Me"
            subtitle="Feel free to reach out if you have any questions or would like to work together."
          />
        </AnimatedSection>

        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 7 }}>
            <AnimatedSection delay={0.2}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Send Me a Message
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Have a question or want to work together? Fill out the form
                below and I'll get back to you as soon as possible.
              </Typography>
              <ContactForm />
            </AnimatedSection>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <AnimatedSection delay={0.4}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 700 }}
              >
                Contact Information
              </Typography>
              <Typography
                variant="body1"
                component="p"
                color="text.secondary"
                sx={{ mb: 3 }}
              >
                Prefer to reach out directly? Here are the best ways to contact
                me.
              </Typography>
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
