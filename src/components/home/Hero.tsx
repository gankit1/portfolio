import {
  Box,
  Typography,
  Button,
  Container,
  useTheme,
  Grid,
  Avatar,
  IconButton,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import SocialIcons from "../common/SocialIcons";
import ImagePreview from "../../assets/images/profile.jpg";

const Hero = () => {
  const theme = useTheme();

  const scrollToNext = () => {
    const nextSection = document.getElementById("about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: theme.palette.background.default,
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.${
          theme.palette.mode === "dark" ? "7" : "0"
        }), rgba(0, 0, 0, 0.${
          theme.palette.mode === "dark" ? "7" : "0"
        })), url('/images/hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "rgba(0, 0, 0, 0.7)"
              : "rgba(245, 245, 245, 0.9)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Typography
                  variant="subtitle1"
                  color="primary"
                  sx={{
                    fontWeight: 600,
                    mb: 1,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 800,
                    mb: 2,
                    fontSize: { xs: "2.5rem", md: "3.5rem" },
                    background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ankit Kumar Gupta
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Typography
                  variant="h2"
                  color="textSecondary"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    fontSize: { xs: "1.5rem", md: "2rem" },
                  }}
                >
                  Frontend Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{ mb: 4, maxWidth: "600px" }}
                >
                  {/* I build exceptional user interfaces and web applications using
                  React, TypeScript, and modern frontend technologies.
                  Passionate about creating responsive, accessible, and
                  performant web experiences. */}
                  Passionate and innovative front-end developer with 3+ years of
                  experience in crafting dynamic and responsive web
                  applications. Adept at utilizing the latest web technologies
                  and frameworks to deliver high-quality, user-centric
                  solutions. Seeking a challenging role to leverage my technical
                  skills and creativity, while contributing to a
                  forward-thinking team committed to excellence in web
                  development.
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    size="large"
                    color="primary"
                  >
                    View My Work
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                    color="primary"
                  >
                    Contact Me
                  </Button>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Box sx={{ mt: 4 }}>
                  <SocialIcons />
                </Box>
              </motion.div>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={5}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Avatar
                src={ImagePreview}
                alt="Profile Image"
                sx={{
                  width: 300,
                  height: 300,
                  border: `5px solid ${theme.palette.primary.main}`,
                  boxShadow: theme.shadows[10],
                }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Box
        sx={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut",
          }}
        >
          <IconButton
            onClick={scrollToNext}
            sx={{
              color: theme.palette.primary.main,
              backgroundColor: theme.palette.background.paper,
              boxShadow: theme.shadows[4],
              "&:hover": {
                backgroundColor: theme.palette.background.default,
              },
            }}
          >
            <KeyboardArrowDown fontSize="large" />
          </IconButton>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Hero;
