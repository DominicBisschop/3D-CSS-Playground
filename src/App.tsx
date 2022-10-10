import * as React from "react";
import "../src/styles/global.scss";
import { Box, Toolbar } from "@mui/material";
import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { PageContainer } from "./containers/PageContainer/PageContainer";

export default function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <Header />
      <Sidebar />
      <Box component="main" sx={{ width: "100%" }}>
        <Toolbar />
        <PageContainer />
      </Box>
    </Box>
  );
}
