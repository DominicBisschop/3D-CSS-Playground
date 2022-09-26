import * as React from 'react';
import Container from '@mui/material/Container';
import {ScrollToTop} from "./components/ScrollToTop/ScrollToTop";
import {NavigationBar} from "./components/NavigationBar/NavigationBar";
import {Footer} from "./components/Footer/Footer";

export default function App() {
    return (
        <>
            <NavigationBar/>
            <Container>

            </Container>
            <Footer/>
            <ScrollToTop/>
        </>
    );
}


