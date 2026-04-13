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
import { motion, Variants } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";
import SocialIcons from "../common/SocialIcons";
import ImagePreview from "../../assets/images/profile.jpg";

const floatingOrb: Variants = {
  animate: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const floatingOrb2: Variants = {
  animate: {
    y: [0, 15, 0],
    x: [0, -15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

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
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: isDark
          ? "radial-gradient(ellipse at 20% 50%, rgba(41, 123, 180, 0.08) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.06) 0%, transparent 50%), #0B1120"
          : "radial-gradient(ellipse at 20% 50%, rgba(41, 123, 180, 0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(139, 92, 246, 0.04) 0%, transparent 50%), #FAFBFF",
        pt: { xs: 10, md: 0 },
      }}
    >
      {/* Floating orbs */}
      <Box
        component={motion.div}
        variants={floatingOrb}
        animate="animate"
        sx={{
          position: "absolute",
          top: "15%",
          right: "10%",
          width: { xs: 200, md: 350 },
          height: { xs: 200, md: 350 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(41,123,180,0.1), rgba(139,92,246,0.05))",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />
      <Box
        component={motion.div}
        variants={floatingOrb2}
        animate="animate"
        sx={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: { xs: 150, md: 250 },
          height: { xs: 150, md: 250 },
          borderRadius: "50%",
          background: "linear-gradient(135deg, rgba(249,115,22,0.08), rgba(41,123,180,0.05))",
          filter: "blur(60px)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={6} sx={{ alignItems: "center" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Box>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    mb: 1.5,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    fontSize: "0.85rem",
                    color: "#297BB4",
                  }}
                >
                  Hello, I'm
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    fontWeight: 900,
                    mb: 1.5,
                    background:
                      "linear-gradient(135deg, #297BB4 0%, #549DD4 50%, #8CC4ED 100%)",
                    backgroundSize: "200% 200%",
                    animation: "gradient-shift 4s ease infinite",
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
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="h3"
                  color="text.secondary"
                  sx={{
                    fontWeight: 500,
                    mb: 3,
                    fontSize: { xs: "1.25rem", md: "1.75rem" },
                  }}
                >
                  Software Developer
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.45,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ mb: 4, maxWidth: "560px", lineHeight: 1.8 }}
                >
                  Passionate and innovative front-end developer with 4+ years of
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
                transition={{
                  duration: 0.6,
                  delay: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap", mb: 4 }}>
                  <Button
                    component={RouterLink}
                    to="/projects"
                    variant="contained"
                    size="large"
                  >
                    View My Work
                  </Button>
                  <Button
                    component={RouterLink}
                    to="/contact"
                    variant="outlined"
                    size="large"
                  >
                    Contact Me
                  </Button>
                </Box>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.75 }}
              >
                <SocialIcons />
              </motion.div>
            </Box>
          </Grid>

          <Grid sx={{ display: "flex", justifyContent: "center", }} size={{ xs: 12, md: 5 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    inset: -8,
                    borderRadius: "50%",
                    background:
                      "linear-gradient(135deg, #297BB4, #549DD4, #8CC4ED)",
                    opacity: 0.2,
                    animation: "pulse-glow 3s ease-in-out infinite",
                  },
                }}
              >
                <Avatar
                  src={ImagePreview}
                  alt="Ankit Kumar Gupta"
                  sx={{
                    width: { xs: 220, sm: 260, md: 320 },
                    height: { xs: 220, sm: 260, md: 320 },
                    border: "4px solid",
                    borderColor: isDark
                      ? "rgba(41, 123, 180, 0.4)"
                      : "rgba(41, 123, 180, 0.3)",
                    boxShadow: "0 20px 60px rgba(41, 123, 180, 0.2)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
              </Box>
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
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: "easeInOut",
          }}
        >
          <IconButton
            onClick={scrollToNext}
            sx={{
              color: "#297BB4",
              backgroundColor: isDark
                ? "rgba(41, 123, 180, 0.1)"
                : "rgba(41, 123, 180, 0.08)",
              backdropFilter: "blur(8px)",
              border: "1px solid",
              borderColor: isDark
                ? "rgba(41, 123, 180, 0.2)"
                : "rgba(41, 123, 180, 0.15)",
              "&:hover": {
                backgroundColor: "rgba(41, 123, 180, 0.15)",
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
