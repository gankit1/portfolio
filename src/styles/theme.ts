import { createTheme, PaletteMode } from "@mui/material";

export const getTheme = (mode: PaletteMode) =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: "#297BB4",
        light: "#6FAFEC",
        dark: "#1E5D87",
      },
      secondary: {
        main: "#F97316",
        light: "#FB923C",
        dark: "#EA580C",
      },
      background: {
        default: mode === "light" ? "#FAFBFF" : "#0B1120",
        paper: mode === "light" ? "#FFFFFF" : "#111827",
      },
      text: {
        primary: mode === "light" ? "#1E293B" : "#F1F5F9",
        secondary: mode === "light" ? "#64748B" : "#94A3B8",
      },
      divider: mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)",
    },
    typography: {
      fontFamily: "'Inter', 'Roboto', 'Helvetica', 'Arial', sans-serif",
      h1: {
        fontSize: "clamp(2.25rem, 5vw, 3.75rem)",
        fontWeight: 800,
        letterSpacing: "-0.03em",
        lineHeight: 1.1,
      },
      h2: {
        fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
        fontWeight: 700,
        letterSpacing: "-0.02em",
        lineHeight: 1.2,
      },
      h3: {
        fontSize: "clamp(1.5rem, 3vw, 2rem)",
        fontWeight: 700,
        letterSpacing: "-0.01em",
        lineHeight: 1.3,
      },
      h4: {
        fontSize: "1.5rem",
        fontWeight: 600,
        letterSpacing: "-0.01em",
      },
      h5: {
        fontSize: "1.25rem",
        fontWeight: 600,
      },
      h6: {
        fontSize: "1.1rem",
        fontWeight: 600,
      },
      subtitle1: {
        fontSize: "1.05rem",
        lineHeight: 1.7,
      },
      body1: {
        fontSize: "1rem",
        lineHeight: 1.7,
      },
      body2: {
        fontSize: "0.875rem",
        lineHeight: 1.6,
      },
    },
    shape: {
      borderRadius: 12,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            textTransform: "none",
            fontWeight: 600,
            fontSize: "0.95rem",
            padding: "10px 24px",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
          contained: {
            background: "linear-gradient(135deg, #297BB4 0%, #549DD4 100%)",
            boxShadow: "0 4px 14px rgba(41, 123, 180, 0.35)",
            "&:hover": {
              background: "linear-gradient(135deg, #1E5D87 0%, #3A8AC9 100%)",
              boxShadow: "0 6px 20px rgba(41, 123, 180, 0.5)",
              transform: "translateY(-2px)",
            },
          },
          outlined: {
            borderColor:
              mode === "light"
                ? "rgba(41, 123, 180, 0.4)"
                : "rgba(41, 123, 180, 0.5)",
            color: "#297BB4",
            "&:hover": {
              borderColor: "#297BB4",
              backgroundColor: "rgba(41, 123, 180, 0.08)",
              transform: "translateY(-2px)",
            },
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            background:
              mode === "light"
                ? "rgba(255, 255, 255, 0.7)"
                : "rgba(255, 255, 255, 0.03)",
            backdropFilter: "blur(12px)",
            border: `1px solid ${mode === "light" ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.06)"}`,
            boxShadow:
              mode === "light"
                ? "0 4px 24px rgba(0, 0, 0, 0.04)"
                : "0 4px 24px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          },
        },
      },
      MuiChip: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            fontWeight: 500,
            fontSize: "0.8rem",
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundImage: "none",
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            "& .MuiOutlinedInput-root": {
              borderRadius: 12,
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "#297BB4",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "#297BB4",
                borderWidth: 2,
              },
            },
          },
        },
      },
    },
  });
