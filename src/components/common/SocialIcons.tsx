import { Box, IconButton, Tooltip, useTheme } from "@mui/material";
import { GitHub, LinkedIn, Twitter, Email, Code, Article } from "@mui/icons-material";
import { socialLinks } from "../../data/socialData";

interface SocialIconsProps {
  direction?: "row" | "column";
  size?: "small" | "medium" | "large";
}

// Centralized icon mapping — single source of truth
const iconMap: Record<string, React.ReactElement> = {
  GitHub: <GitHub />,
  LinkedIn: <LinkedIn />,
  Twitter: <Twitter />,
  Email: <Email />,
  Article: <Article />,
  Code: <Code />,
};

export const getIconComponent = (iconName: string): React.ReactElement => {
  return iconMap[iconName] || <Code />;
};

const SocialIcons = ({
  direction = "row",
  size = "medium",
}: SocialIconsProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction,
        gap: 0.5,
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
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              "&:hover": {
                color: "#297BB4",
                transform: "translateY(-3px)",
                backgroundColor: "rgba(41, 123, 180, 0.08)",
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
