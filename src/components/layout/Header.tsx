import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";
import { navItems } from "../../constants/navigation";
import Logo from "../common/Logo";

const Header = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const { mode, toggleThemeMode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: scrolled
          ? theme.palette.mode === "dark"
            ? "rgba(11, 17, 32, 0.85)"
            : "rgba(250, 251, 255, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        borderBottom: scrolled
          ? `1px solid ${theme.palette.mode === "dark" ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`
          : "none",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            justifyContent: "space-between",
            minHeight: { xs: 64, md: 72 },
          }}
        >
          <Logo />

          {isMobile ? (
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <IconButton
                aria-label="toggle theme"
                onClick={toggleThemeMode}
                sx={{
                  color: theme.palette.text.primary,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "rotate(30deg)" },
                }}
              >
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
              <IconButton
                aria-label="open drawer"
                edge="end"
                onClick={toggleDrawer}
                sx={{ color: theme.palette.text.primary }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ display: "flex", gap: 0.5 }}>
                {navItems.map((item) => (
                  <Button
                    key={item.path}
                    component={RouterLink}
                    to={item.path}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: "10px",
                      color:
                        pathname === item.path
                          ? "#297BB4"
                          : theme.palette.text.primary,
                      fontWeight: pathname === item.path ? 600 : 500,
                      fontSize: "0.9rem",
                      position: "relative",
                      backgroundColor:
                        pathname === item.path
                          ? "rgba(41, 123, 180, 0.08)"
                          : "transparent",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        backgroundColor: "rgba(41, 123, 180, 0.08)",
                        color: "#297BB4",
                      },
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Box>
              <IconButton
                aria-label="toggle theme"
                onClick={toggleThemeMode}
                sx={{
                  ml: 1.5,
                  color: theme.palette.text.primary,
                  transition: "transform 0.3s",
                  "&:hover": { transform: "rotate(30deg)" },
                }}
              >
                {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
