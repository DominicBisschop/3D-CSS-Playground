import * as React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { getCurrentRouteName } from "../../utils/utils";
import { Title } from "../Typography/Title/Title";

export const Header = () => {
  return (
    <AppBar
      position="absolute"
      sx={{
        marginLeft: 300,
        width: `calc(100% - ${300}px)`,
      }}
    >
      <Toolbar>
        <Title tag="span" size="md">
          {getCurrentRouteName()}
        </Title>
      </Toolbar>
    </AppBar>
  );
};
