import { Box, Typography, Paper, Grid, useTheme } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import AnimatedSection from "../common/AnimatedSection";
import SocialIcons from "../common/SocialIcons";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
  delay: number;
}

const ContactItem = ({
  icon,
  title,
  content,
  link,
  delay,
}: ContactItemProps) => {
  const theme = useTheme();

  return (
    <AnimatedSection delay={delay} direction="right">
      <Paper
        elevation={2}
        sx={{
          p: 3,
          display: "flex",
          alignItems: "center",
          gap: 2,
          transition: "transform 0.3s, box-shadow 0.3s",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: theme.shadows[6],
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: "50%",
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
          }}
        >
          {icon}
        </Box>
        <Box>
          <Typography variant="h6" component="h3">
            {title}
          </Typography>
          {link ? (
            <Typography
              variant="body1"
              component="a"
              href={link}
              sx={{
                color: theme.palette.text.secondary,
                textDecoration: "none",
                "&:hover": {
                  color: theme.palette.primary.main,
                },
              }}
            >
              {content}
            </Typography>
          ) : (
            <Typography variant="body1" color="text.secondary">
              {content}
            </Typography>
          )}
        </Box>
      </Paper>
    </AnimatedSection>
  );
};

const ContactInfo = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ContactItem
            icon={<Email />}
            title="Email"
            content="ankit.gupta.sde@gmail.com"
            link="mailto:ankit.gupta.sde@gmail.com"
            delay={0.1}
          />
        </Grid>

        <Grid item xs={12}>
          <ContactItem
            icon={<Phone />}
            title="Phone"
            content="+91 9650960634"
            link="tel:+919650960634"
            delay={0.2}
          />
        </Grid>

        <Grid item xs={12}>
          <ContactItem
            icon={<LocationOn />}
            title="Location"
            content="Noida Uttar Pradesh, India"
            delay={0.3}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Connect With Me
        </Typography>
        <SocialIcons size="large" />
      </Box>
    </Box>
  );
};

export default ContactInfo;
