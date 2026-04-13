import { Box, Typography, useTheme } from "@mui/material";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
}

const SectionTitle = ({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: align }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 800,
          position: "relative",
          display: "inline-block",
          mb: subtitle ? 2.5 : 0,
          "&::after": {
            content: '""',
            position: "absolute",
            width: "40px",
            height: "4px",
            bottom: "-12px",
            left: align === "center" ? "50%" : 0,
            transform: align === "center" ? "translateX(-50%)" : "none",
            background: "linear-gradient(135deg, #297BB4, #549DD4)",
            borderRadius: "2px",
          },
          "&::before": {
            content: '""',
            position: "absolute",
            width: "80px",
            height: "4px",
            bottom: "-12px",
            left: align === "center" ? "50%" : 0,
            transform: align === "center" ? "translateX(-50%)" : "none",
            background:
              theme.palette.mode === "dark"
                ? "rgba(41, 123, 180, 0.15)"
                : "rgba(41, 123, 180, 0.1)",
            borderRadius: "2px",
          },
        }}
      >
        {title}
      </Typography>

      {subtitle && (
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{
            maxWidth: align === "center" ? "600px" : "none",
            mx: align === "center" ? "auto" : 0,
            mt: 3,
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
