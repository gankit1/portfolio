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
    <Box sx={{ mb: 6, textAlign: align }}>
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontWeight: 700,
          position: "relative",
          display: "inline-block",
          mb: subtitle ? 2 : 0,
          "&::after": {
            content: '""',
            position: "absolute",
            width: "60px",
            height: "4px",
            bottom: "-10px",
            left: align === "center" ? "50%" : 0,
            transform: align === "center" ? "translateX(-50%)" : "none",
            backgroundColor: theme.palette.primary.main,
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
            mt: 2,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionTitle;
