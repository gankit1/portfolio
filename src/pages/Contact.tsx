import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import AnimatedSection from "../components/common/AnimatedSection";
import ContactForm from "../components/contact/ContactForm";
import ContactInfo from "../components/contact/ContactInfo";

const Contact = () => {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <AnimatedSection>
          <SectionTitle
            title="Contact Me"
            subtitle="Feel free to reach out if you have any questions or would like to work together."
          />
        </AnimatedSection>

        <Grid container spacing={4}>
          <Grid item xs={12} md={7}>
            <AnimatedSection delay={0.2}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Send Me a Message
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Have a question or want to work together? Fill out the form
                below and I'll get back to you as soon as possible.
              </Typography>
              <ContactForm />
            </AnimatedSection>
          </Grid>

          <Grid item xs={12} md={5}>
            <AnimatedSection delay={0.4}>
              <Typography
                variant="h5"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600 }}
              >
                Contact Information
              </Typography>
              <Typography variant="body1" color="text.secondary" paragraph>
                Prefer to reach out directly? Here are the best ways to contact
                me.
              </Typography>
              <ContactInfo />
            </AnimatedSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
