import { useState, useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
  Box,
  Slide,
  Container,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Brightness4,
  Brightness7,
} from "@mui/icons-material";
import { useThemeContext } from "../../context/ThemeContext";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Skills", path: "/skills" },
  { label: "Projects", path: "/projects" },
  { label: "Experience", path: "/experience" },
  { label: "Contact", path: "/contact" },
];

const Header = ({ toggleDrawer }: { toggleDrawer: () => void }) => {
  const { mode, toggleThemeMode } = useThemeContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <Slide appear={false} direction="down" in={!scrolled}>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: theme.palette.background.default,
          transition: "all 0.3s ease-in-out",
          boxShadow: scrolled ? theme.shadows[4] : "none",
          borderBottom: scrolled
            ? "none"
            : `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
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

            {isMobile ? (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="toggle theme"
                  onClick={toggleThemeMode}
                  sx={{ mr: 1 }}
                >
                  {mode === "dark" ? (
                    <Brightness7 sx={{ color: theme.palette.text.primary }} />
                  ) : (
                    <Brightness4 sx={{ color: theme.palette.text.primary }} />
                  )}
                </IconButton>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={toggleDrawer}
                >
                  <MenuIcon sx={{ color: theme.palette.text.primary }} />
                </IconButton>
              </Box>
            ) : (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex" }}>
                  {navItems.map((item) => (
                    <Button
                      key={item.path}
                      component={RouterLink}
                      to={item.path}
                      sx={{
                        mx: 1,
                        color:
                          pathname === item.path
                            ? theme.palette.primary.main
                            : theme.palette.text.primary,
                        fontWeight: pathname === item.path ? 600 : 400,
                        position: "relative",
                        "&:after": {
                          content: '""',
                          position: "absolute",
                          width: pathname === item.path ? "100%" : "0",
                          height: "2px",
                          bottom: 0,
                          left: 0,
                          backgroundColor: theme.palette.primary.main,
                          transition: "width 0.2s ease-in-out",
                        },
                        "&:hover:after": {
                          width: "100%",
                        },
                      }}
                    >
                      {item.label}
                    </Button>
                  ))}
                </Box>
                <IconButton
                  color="inherit"
                  aria-label="toggle theme"
                  onClick={toggleThemeMode}
                  sx={{ ml: 2 }}
                >
                  {mode === "dark" ? (
                    <Brightness7 sx={{ color: theme.palette.text.primary }} />
                  ) : (
                    <Brightness4 sx={{ color: theme.palette.text.primary }} />
                  )}
                </IconButton>
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
