import { HomePage } from "../pages/home";
import { CubePage } from "../pages/cube";
import { SimpleBallPage } from "../pages/simple-ball";
import { AdvancedBallPage } from "../pages/advanced-ball";
import { BoxPage } from "../pages/box";
import React from "react";

type Route = {
  url: string;
  name: string;
  element: JSX.Element;
  index?: boolean;
};

export const routes: Route[] = [
  {
    element: <HomePage />,
    name: "Home",
    url: "/",
    index: true,
  },
  {
    element: <CubePage />,
    name: "Cube",
    url: "/cube",
  },
  {
    element: <SimpleBallPage />,
    name: "Ball",
    url: "/simple-ball",
  },
  {
    element: <AdvancedBallPage />,
    name: "Advanced Ball",
    url: "/advanced-ball",
  },
  {
    element: <BoxPage />,
    name: "Box",
    url: "/box",
  },
];
