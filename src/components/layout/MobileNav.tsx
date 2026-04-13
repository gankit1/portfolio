import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  IconButton,
  ListItemButton,
  Box,
  useTheme,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import { navItems } from "../../constants/navigation";
import Logo from "../common/Logo";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

const MobileNav = ({ open, onClose }: MobileNavProps) => {
  const theme = useTheme();
  const { pathname } = useLocation();

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={onClose}
      slotProps={{
        paper: {
          sx: {
            width: "75%",
            maxWidth: "320px",
            backgroundColor:
              theme.palette.mode === "dark"
                ? "rgba(11, 17, 32, 0.95)"
                : "rgba(250, 251, 255, 0.95)",
            backdropFilter: "blur(20px)",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2.5,
        }}
      >
        <Logo onClick={onClose} />
        <IconButton
          onClick={onClose}
          sx={{
            color: theme.palette.text.primary,
            "&:hover": { backgroundColor: "rgba(41, 123, 180, 0.08)" },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider sx={{ opacity: 0.1 }} />
      <List sx={{ px: 1, py: 2 }}>
        {navItems.map((item) => (
          <ListItem disablePadding key={item.path} sx={{ mb: 0.5 }}>
            <ListItemButton
              component={RouterLink}
              to={item.path}
              onClick={onClose}
              sx={{
                borderRadius: "12px",
                mx: 1,
                py: 1.5,
                backgroundColor:
                  pathname === item.path
                    ? "rgba(41, 123, 180, 0.1)"
                    : "transparent",
                borderLeft:
                  pathname === item.path
                    ? "3px solid #297BB4"
                    : "3px solid transparent",
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: "rgba(41, 123, 180, 0.08)",
                },
              }}
            >
              <ListItemText
                primary={item.label}
                slotProps={{
                  primary: {
                    sx: {
                      fontWeight: pathname === item.path ? 700 : 500,
                      fontSize: "0.95rem",
                      color:
                        pathname === item.path
                          ? "#297BB4"
                          : theme.palette.text.primary,
                    },
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileNav;
