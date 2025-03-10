import { useState, ReactNode } from "react";
import { Box, CssBaseline, useScrollTrigger, useTheme } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const theme = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: theme.palette.background.default,
      }}
    >
      <CssBaseline />
      <Header toggleDrawer={toggleDrawer} />
      <MobileNav open={drawerOpen} onClose={toggleDrawer} />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          pt: { xs: 8, md: 12 },
        }}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
