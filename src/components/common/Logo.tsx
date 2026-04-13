import { Typography, Box, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

interface LogoProps {
  onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
  const theme = useTheme();

  return (
    <Typography
      variant="h6"
      component={RouterLink}
      to="/"
      onClick={onClick}
      sx={{
        color: theme.palette.text.primary,
        fontWeight: 800,
        textDecoration: "none",
        display: "flex",
        alignItems: "center",
        letterSpacing: "-0.02em",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <Box
        component="span"
        sx={{
          background: "linear-gradient(135deg, #297BB4, #549DD4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          marginRight: "0.15rem",
          fontWeight: 900,
        }}
      >
        &lt;
      </Box>
      Portfolio
      <Box
        component="span"
        sx={{
          background: "linear-gradient(135deg, #549DD4, #297BB4)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          fontWeight: 900,
        }}
      >
        /&gt;
      </Box>
    </Typography>
  );
};

export default Logo;
