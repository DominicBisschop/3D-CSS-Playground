import { Title } from "../../components/Typography/Title/Title";
import React, { ReactNode } from "react";
import { Card } from "../../components/Card/Card";
import usePlaygroundContext from "../../context/usePlaygroundContext";
import {
  AdvancedBallConfig,
  BoxConfig,
  ControlTypes,
  CubeConfig,
  ShapeConfig,
  ShapeTypes,
  SimpleBallConfig,
} from "../../types";
import {
  defaultAdvancedBallConfig,
  defaultBoxConfig,
  defaultCubeConfig,
  defaultSimpleBallConfig,
} from "../../context/playgroundContext";
import { SizeSlider } from "../../controls/SizeSlider/SizeSlider";
import { OpacitySlider } from "../../controls/OpacitySlider/OpacitySlider";

export const ControlsContainer = () => {
  const playgroundContext = usePlaygroundContext();
  let currentConfig:
    | CubeConfig
    | SimpleBallConfig
    | AdvancedBallConfig
    | BoxConfig;
  const controls: ReactNode[] = [];

  const initializeShapeControls = (shapeConfig: ShapeConfig) => {
    shapeConfig.controls.map((control, index) => {
      switch (control) {
        case ControlTypes.SizeSlider:
          controls.push(
            <SizeSlider
              key={index}
              value={"size" in currentConfig ? currentConfig.size : 0}
              defaultValue={250}
              maxValue={500}
              minValue={100}
              step={50}
            ></SizeSlider>
          );
          break;
        case ControlTypes.OpacitySlider:
          controls.push(
            <OpacitySlider
              key={index}
              value={0.8}
              defaultValue={0.8}
              maxValue={1}
              minValue={0}
              step={0.1}
            ></OpacitySlider>
          );
          break;
      }
    });
  };

  const switchShape = () => {
    switch (playgroundContext.shape) {
      case ShapeTypes.Cube:
        currentConfig = defaultCubeConfig;
        initializeShapeControls(defaultCubeConfig);
        break;
      case ShapeTypes.SimpleBall:
        currentConfig = defaultSimpleBallConfig;
        initializeShapeControls(defaultSimpleBallConfig);
        break;
      case ShapeTypes.AdvancedBall:
        currentConfig = defaultAdvancedBallConfig;
        initializeShapeControls(defaultAdvancedBallConfig);
        break;
      case ShapeTypes.Box:
        currentConfig = defaultBoxConfig;
        initializeShapeControls(defaultBoxConfig);
        break;
    }
  };

  switchShape();

  return (
    <section>
      <Title tag="h1" size="lg">
        Controls
      </Title>
      <Card>{controls}</Card>
    </section>
  );
};
