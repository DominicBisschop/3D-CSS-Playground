import React from "react";
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Logo } from "../Logo/Logo";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { routes } from "../../routing/routes";

export const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      open={true}
      sx={{
        "& .MuiDrawer-paper": {
          position: "relative",
          whiteSpace: "nowrap",
          width: 300,
          boxSizing: "border-box",
          backgroundColor: `${theme.palette.primary.main}`,
          color: `${theme.palette.primary.light}`,
        },
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Logo />
      </Toolbar>
      <Divider />

      <List className={styles.list}>
        {routes.map((route) => {
          return (
            <ListItem
              key={route.name}
              component={Link}
              to={route.url}
              disablePadding
            >
              <ListItemButton>
                <ListItemText primary={route.name} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/*<ListItem component={Link} to="/" disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <ListItemText primary="Home" />*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
        {/*<ListItem component={Link} to="/cube" disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <ListItemText primary="Cube" />*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
        {/*<ListItem component={Link} to="/simple-ball" disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <ListItemText primary="Simple Ball" />*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
        {/*<ListItem component={Link} to="/advanced-ball" disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <ListItemText primary="Advanced Ball" />*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
        {/*<ListItem component={Link} to="/box" disablePadding>*/}
        {/*  <ListItemButton>*/}
        {/*    <ListItemText primary="Box" />*/}
        {/*  </ListItemButton>*/}
        {/*</ListItem>*/}
      </List>
    </Drawer>
  );
};
