import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  useTheme,
} from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";
import { socialLinks } from "../../data/socialData";

const Footer = () => {
  const theme = useTheme();

  const year = new Date().getFullYear();

  const footerSections = [
    {
      title: "Navigation",
      links: [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Skills", path: "/skills" },
        { name: "Projects", path: "/projects" },
        { name: "Experience", path: "/experience" },
        { name: "Contact", path: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Resume", path: "/assets/resume.pdf", external: true },
        {
          name: "Portfolio Source",
          path: "https://github.com/gankit1/portfolio",
          external: true,
        },
      ],
    },
  ];

  // This function returns the appropriate icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <GitHub />;
      case "LinkedIn":
        return <LinkedIn />;
      case "Twitter":
        return <Twitter />;
      case "Email":
        return <Email />;
      default:
        return <GitHub />;
    }
  };

  return (
    <Box
      sx={{
        backgroundColor:
          theme.palette.mode === "light"
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        py: 6,
        mt: 8,
      }}
      component="footer"
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Logo and tagline */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              component={RouterLink}
              to="/"
              sx={{
                color: theme.palette.text.primary,
                fontWeight: 700,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Box
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                  marginRight: "0.2rem",
                }}
              >
                &lt;
              </Box>
              Portfolio
              <Box
                component="span"
                sx={{
                  color: theme.palette.primary.main,
                }}
              >
                /&gt;
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              A showcase of my skills, projects, and professional journey in web
              development.
            </Typography>

            {/* Social links */}
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              {socialLinks.map((link) => (
                <IconButton
                  key={link.id}
                  component="a"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="small"
                  sx={{
                    color: theme.palette.text.secondary,
                    "&:hover": {
                      color: theme.palette.primary.main,
                    },
                  }}
                >
                  {getIconComponent(link.icon)}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Navigation Sections */}
          {footerSections.map((section) => (
            <Grid item xs={6} md={3} key={section.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1 }}>
                    {"external" in link && link.external ? (
                      <Link
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="text.secondary"
                        underline="hover"
                        sx={{
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <Link
                        component={RouterLink}
                        to={link.path}
                        color="text.secondary"
                        underline="hover"
                        sx={{
                          "&:hover": {
                            color: theme.palette.primary.main,
                          },
                        }}
                      >
                        {link.name}
                      </Link>
                    )}
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{ pt: 4, borderTop: `1px solid ${theme.palette.divider}`, mt: 4 }}
        >
          <Typography variant="body2" color="text.secondary" align="center">
            © {year} My Portfolio. All rights reserved. Designed & Built by
            Ankit K Gupta.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
