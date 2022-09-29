import * as ReactDOM from 'react-dom';
import {CssBaseline, ThemeProvider} from "@mui/material";
import * as React from "react";
import App from "./App";
import {theme} from "./styles/theme";
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ThemeProvider>,
    document.querySelector('#root'),
);
