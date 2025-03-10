import { createTheme, PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: mode === "light" ? "#2196f3" : "#90caf9",
      },
      secondary: {
        main: "#f50057",
      },
      background: {
        default: mode === "light" ? "#f5f5f5" : "#121212",
        paper: mode === "light" ? "#ffffff" : "#1e1e1e",
      },
    },
    typography: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontSize: "3rem",
        fontWeight: 700,
      },
      h2: {
        fontSize: "2.5rem",
        fontWeight: 600,
      },
      h3: {
        fontSize: "2rem",
        fontWeight: 600,
      },
      h4: {
        fontSize: "1.75rem",
        fontWeight: 600,
      },
      h5: {
        fontSize: "1.5rem",
        fontWeight: 500,
      },
      h6: {
        fontSize: "1.25rem",
        fontWeight: 500,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none",
            fontWeight: 600,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow:
              mode === "light"
                ? "0px 4px 20px rgba(0, 0, 0, 0.05)"
                : "0px 4px 20px rgba(0, 0, 0, 0.2)",
          },
        },
      },
    },
  });
