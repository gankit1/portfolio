import { Fragment } from "react";
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
  Typography,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";

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
      PaperProps={{
        sx: {
          width: "70%",
          maxWidth: "300px",
          backgroundColor: theme.palette.background.paper,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          component={RouterLink}
          to="/"
          onClick={onClose}
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
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <Fragment key={item.path}>
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to={item.path}
                onClick={onClose}
                sx={{
                  backgroundColor:
                    pathname === item.path
                      ? "rgba(25, 118, 210, 0.08)"
                      : "transparent",
                  borderLeft:
                    pathname === item.path
                      ? `4px solid ${theme.palette.primary.main}`
                      : "none",
                  pl: pathname === item.path ? 2 : 3,
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: pathname === item.path ? 600 : 400,
                    color:
                      pathname === item.path
                        ? theme.palette.primary.main
                        : theme.palette.text.primary,
                  }}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
          </Fragment>
        ))}
      </List>
    </Drawer>
  );
};

export default MobileNav;
