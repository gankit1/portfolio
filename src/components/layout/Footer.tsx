import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  useTheme,
  Fab,
  Zoom,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Link as RouterLink } from "react-router-dom";
import { socialLinks } from "../../data/socialData";
import { useState, useEffect } from "react";
import useScrollToTop from "../../hooks/useScrollToTop";
import Logo from "../common/Logo";
import { getIconComponent } from "../common/SocialIcons";

const Footer = () => {
  const theme = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Custom hook for scroll to top functionality for route changes
  useScrollToTop();
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
        {
          name: "Resume",
          path: process.env.PUBLIC_URL + "/resume.pdf",
          external: true,
        },
        {
          name: "Portfolio Source",
          path: "https://github.com/gankit1/portfolio",
          external: true,
        },
      ],
    },
  ];

  // Check if we should show scroll to top button (user has scrolled down)
  useEffect(() => {
    const checkScrollHeight = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScrollHeight, { passive: true });
    checkScrollHeight();
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Box
      sx={{
        background:
          theme.palette.mode === "dark"
            ? "linear-gradient(180deg, rgba(11,17,32,0) 0%, rgba(11,17,32,1) 20%)"
            : "linear-gradient(180deg, rgba(250,251,255,0) 0%, rgba(241,245,249,1) 20%)",
        py: 8,
        mt: 4,
        position: "relative",
      }}
      component="footer"
    >
      {/* Scroll to top button */}
      <Zoom in={showScrollTop}>
        <Fab
          size="small"
          aria-label="scroll back to top"
          onClick={handleScrollToTop}
          sx={{
            position: "fixed",
            bottom: 32,
            right: 32,
            background: "linear-gradient(135deg, #297BB4, #549DD4)",
            color: "#fff",
            boxShadow: "0 4px 14px rgba(41, 123, 180, 0.4)",
            "&:hover": {
              background: "linear-gradient(135deg, #1E5D87, #3A8AC9)",
              boxShadow: "0 6px 20px rgba(41, 123, 180, 0.6)",
              transform: "translateY(-2px)",
            },
            transition: "all 0.3s ease",
          }}
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </Zoom>

      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{ justifyContent: "space-between" }}>
          {/* Logo and tagline */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Logo />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 280, lineHeight: 1.8 }}
            >
              A showcase of my skills, projects, and professional journey in web
              development.
            </Typography>

            {/* Social links */}
            <Box sx={{ display: "flex", gap: 0.5 }}>
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
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "#297BB4",
                      backgroundColor: "rgba(41, 123, 180, 0.08)",
                      transform: "translateY(-2px)",
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
            <Grid key={section.title} size={{ xs: 6, md: 3 }}>
              <Typography
                variant="subtitle2"
                color="text.primary"
                sx={{
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontSize: "0.75rem",
                  mb: 2.5,
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                {section.links.map((link) => (
                  <Box component="li" key={link.name} sx={{ mb: 1.5 }}>
                    {"external" in link && link.external ? (
                      <Link
                        href={link.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        color="text.secondary"
                        underline="none"
                        sx={{
                          fontSize: "0.9rem",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "#297BB4",
                            paddingLeft: "4px",
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
                        underline="none"
                        sx={{
                          fontSize: "0.9rem",
                          transition: "all 0.2s ease",
                          "&:hover": {
                            color: "#297BB4",
                            paddingLeft: "4px",
                          },
                        }}
                        onClick={() => {
                          // Scroll to top manually when footer navigation links are clicked
                          window.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
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
          sx={{
            pt: 5,
            mt: 5,
            borderTop: `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
            textAlign: "center",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "0.85rem" }}
          >
            © {year} My Portfolio. All rights reserved. Designed & Built by
            Ankit K Gupta.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
