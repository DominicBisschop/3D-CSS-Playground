import * as React from "react";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import "../src/styles/global.scss";
import { Box, Toolbar } from "@mui/material";
import { Header } from "./components/NavigationBar/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { ContentContainer } from "./components/ContentContainer/ContentContainer";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        <ContentContainer />
      </Box>
      <ScrollToTop />
    </Box>
  );
}
