import * as React from "react";
import Container from "@mui/material/Container";
import {AppBar, Toolbar} from "@mui/material";
import {Logo} from "../Logo/Logo";

export const NavigationBar = () => {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Logo/>
                </Toolbar>
            </Container>
        </AppBar>
    )
}