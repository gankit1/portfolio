import { Box, Typography, Grid, useTheme } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";
import AnimatedSection from "../common/AnimatedSection";
import SocialIcons from "../common/SocialIcons";
import GlassCard from "../common/GlassCard";

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
      <GlassCard>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 48,
              height: 48,
              borderRadius: "14px",
              background: "linear-gradient(135deg, #297BB4, #549DD4)",
              color: "#fff",
              flexShrink: 0,
              boxShadow: "0 4px 14px rgba(41, 123, 180, 0.3)",
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant="subtitle2"
              component="h3"
              sx={{ fontWeight: 700, mb: 0.25 }}
            >
              {title}
            </Typography>
            {link ? (
              <Typography
                variant="body2"
                component="a"
                href={link}
                sx={{
                  color: theme.palette.text.secondary,
                  textDecoration: "none",
                  transition: "color 0.2s",
                  "&:hover": {
                    color: "#297BB4",
                  },
                }}
              >
                {content}
              </Typography>
            ) : (
              <Typography variant="body2" color="text.secondary">
                {content}
              </Typography>
            )}
          </Box>
        </Box>
      </GlassCard>
    </AnimatedSection>
  );
};

const ContactInfo = () => {
  return (
    <Box>
      <Grid container spacing={2.5}>
        <Grid size={{ xs: 12 }}>
          <ContactItem
            icon={<Email />}
            title="Email"
            content="ankit.gupta.sde@gmail.com"
            link="mailto:ankit.gupta.sde@gmail.com"
            delay={0.1}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <ContactItem
            icon={<Phone />}
            title="Phone"
            content="+91 9650960634"
            link="tel:+919650960634"
            delay={0.2}
          />
        </Grid>

        <Grid size={{ xs: 12 }}>
          <ContactItem
            icon={<LocationOn />}
            title="Location"
            content="Noida Uttar Pradesh, India"
            delay={0.3}
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 4, textAlign: "center" }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 700,
            mb: 2,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            fontSize: "0.75rem",
          }}
        >
          Connect With Me
        </Typography>
        <SocialIcons size="large" />
      </Box>
    </Box>
  );
};

export default ContactInfo;
