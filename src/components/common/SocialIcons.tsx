import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email } from "@mui/icons-material";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
import { socialLinks } from "../../data/socialData";

interface SocialIconsProps {
  direction?: "row" | "column";
  size?: "small" | "medium" | "large";
}

const SocialIcons = ({
  direction = "row",
  size = "medium",
}: SocialIconsProps) => {
  const theme = useTheme();

  // This function returns the appropriate icon component based on the icon name
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "GitHub":
        return <GitHub />;
      case "LinkedIn":
        return <LinkedIn />;
      case "Twitter":
        return <Twitter />;
      case "Email":
        return <Email />;
      default:
        return <ChangeHistoryIcon />;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        gap: 1,
      }}
    >
      {socialLinks.map((link) => (
        <Tooltip key={link.id} title={link.name} arrow placement="top">
          <IconButton
            component="a"
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            size={size}
            sx={{
              color: theme.palette.text.secondary,
              transition: "transform 0.2s, color 0.2s",
              "&:hover": {
                color: theme.palette.primary.main,
                transform: "translateY(-3px)",
              },
            }}
            aria-label={link.name}
          >
            {getIconComponent(link.icon)}
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
};

export default SocialIcons;
