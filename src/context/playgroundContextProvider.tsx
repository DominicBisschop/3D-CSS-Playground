import * as React from "react";
import { FC } from "react";
import PlaygroundContext, {
  defaultAdvancedBallConfig,
  defaultBoxConfig,
  defaultConfig,
  defaultCubeConfig,
  defaultSimpleBallConfig,
  PlaygroundContextValue,
} from "./playgroundContext";
import { ShapeTypes } from "../types";

type Props = {
  shape: ShapeTypes;
};

const PlaygroundContextProvider: FC<Props> = ({ children, shape }) => {
  const value: PlaygroundContextValue = defaultConfig;
  value.shape = shape;

  switch (shape) {
    case ShapeTypes.Cube:
      value.cubeConfig = defaultCubeConfig;
      break;
    case ShapeTypes.SimpleBall:
      value.simpleBallConfig = defaultSimpleBallConfig;
      break;
    case ShapeTypes.AdvancedBall:
      value.advancedBallConfig = defaultAdvancedBallConfig;
      break;
    case ShapeTypes.Box:
      value.boxConfig = defaultBoxConfig;
      break;
  }

  return (
    <PlaygroundContext.Provider value={value}>
      {children}
    </PlaygroundContext.Provider>
  );
};

export default PlaygroundContextProvider;
