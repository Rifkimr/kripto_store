import { Article, Group, Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const Sidebar = () => {
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding sx={{ width: "100%" }}>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/dashboard"
            >
              <ListItemButton component="a">
                <ListItemIcon>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/manajemen-user"
            >
              <ListItemButton component="a">
                <ListItemIcon>
                  <Article />
                </ListItemIcon>
                <ListItemText primary="Manajemen User" />
              </ListItemButton>
            </Link>
          </ListItem>
          <ListItem disablePadding>
            <Link
              style={{
                textDecoration: "none",
                color: "black",
              }}
              to="/manajemen-produk"
            >
              <ListItemButton component="a">
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText primary="Manageman Produk" />
              </ListItemButton>
            </Link>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
