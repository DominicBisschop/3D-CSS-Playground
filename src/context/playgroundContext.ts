import { createContext } from "react";
import {
  AdvancedBallConfig,
  BoxConfig,
  ControlTypes,
  CubeConfig,
  ShapeTypes,
  SimpleBallConfig,
} from "../types";

export type PlaygroundContextValue = {
  shape: ShapeTypes;
  cubeConfig?: CubeConfig | undefined;
  simpleBallConfig?: SimpleBallConfig | undefined;
  advancedBallConfig?: AdvancedBallConfig | undefined;
  boxConfig?: BoxConfig | undefined;
};

export const defaultConfig: PlaygroundContextValue = {
  shape: ShapeTypes.Cube,
  advancedBallConfig: undefined,
  boxConfig: undefined,
  cubeConfig: undefined,
  simpleBallConfig: undefined,
};

export const defaultCubeConfig: CubeConfig = {
  defaultSize: 250,
  minSize: 100,
  maxSize: 500,
  size: 250,
  controls: [ControlTypes.SizeSlider, ControlTypes.OpacitySlider],
};

export const defaultSimpleBallConfig: SimpleBallConfig = {
  controls: [],
};

export const defaultAdvancedBallConfig: AdvancedBallConfig = {
  controls: [],
};

export const defaultBoxConfig: BoxConfig = {
  controls: [],
};

// export const [size, setSize] = useState<number>(0);

const PlaygroundContext = createContext<PlaygroundContextValue>(defaultConfig);

export default PlaygroundContext;
