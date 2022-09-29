import React from "react";
import {Divider, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar} from "@mui/material";
import {Logo} from "../Logo/Logo";
import {theme} from "../../styles/theme";
import {Link} from "react-router-dom";
import styles from "./styles.module.scss";
import { Title } from "../Typography/Title/Title";

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

            <List className={styles.list}>
                <ListItem component={Link} to="/cube" disablePadding>
                    <ListItemButton>
                        <ListItemText
                            primary={
                                <Title tag="h4" size="sm" color={theme.palette.primary.light}>Cube</Title>
                            }
                        />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} to="/sphere" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Sphere" />
                    </ListItemButton>
                </ListItem>
                <ListItem component={Link} to="/box" disablePadding>
                    <ListItemButton>
                        <ListItemText primary="Box" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
}