import React from "react";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import {Logo} from "../Logo/Logo";
import {theme} from "../../styles/theme";

export const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            open={true}
            sx={{
                '& .MuiDrawer-paper': {
                    position: 'relative',
                    whiteSpace: 'nowrap',
                    width: 300,
                    boxSizing: 'border-box',
                    backgroundColor: `${theme.palette.primary.main}`,
                    color: `${theme.palette.primary.light}`
                },
            }}
        >
            <Toolbar
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Logo/>
            </Toolbar>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Cube" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Sphere" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Pyramid" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}