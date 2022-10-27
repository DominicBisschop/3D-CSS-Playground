export enum ShapeTypes {
  Cube,
  SimpleBall,
  AdvancedBall,
  Box,
}

export enum ControlTypes {
  SizeSlider,
  OpacitySlider,
}

export interface ShapeConfig {
  controls: readonly ControlTypes[];
}

export interface CubeConfig extends ShapeConfig {
  defaultSize: number;
  size: number;
  minSize: number;
  maxSize: number;
}

export interface SimpleBallConfig extends ShapeConfig {}

export interface AdvancedBallConfig extends ShapeConfig {}

export interface BoxConfig extends ShapeConfig {}
