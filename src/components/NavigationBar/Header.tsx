import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";

export const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        marginLeft: 300,
        width: `calc(100% - ${300}px)`,
      }}
    >
      <Toolbar></Toolbar>
    </AppBar>
  );
};
