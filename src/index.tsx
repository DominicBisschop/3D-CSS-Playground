import ReactDOM from 'react-dom';
import {CssBaseline, ThemeProvider} from "@mui/material";
import * as React from "react";
import App from "./App";
import {theme} from "./styles/theme";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.querySelector('#root'),
);
