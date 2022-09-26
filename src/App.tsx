import * as React from 'react';
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import "../src/styles/global.scss";
import {Box, Toolbar} from "@mui/material";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Sidebar} from "./components/Sidebar/Sidebar";
import {ContentContainer} from "./components/ContentContainer/ContentContainer";

export default function App() {
    return (
        <Box sx={{display: "flex"}}>
            <NavigationBar/>
            <Sidebar/>
            <Box component="main" sx={{width: '100%'}}>
                <Toolbar/>
                <ContentContainer>
                    <div>Content goes here</div>
                </ContentContainer>
            </Box>
            <ScrollToTop/>
        </Box>
    );
}


