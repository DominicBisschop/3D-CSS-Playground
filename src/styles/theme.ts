import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  palette: {
    primary: {
      main: "#1d2226",
      light: "#ffffff",
    },
    secondary: {
      main: "#FF0000FF",
    },
    error: {
      main: red.A400,
    },
    common: {
      black: "#000000",
      white: "#ffffff",
    },
    grey: {
      200: "#A0A2A6",
    },
  },
});
