import React from "react";
import { Cube } from "../shapes/Cube/Cube";
import { ShapeContainer } from "../containers/ShapeContainer/ShapeContainer";
import { PlaygroundContainer } from "../containers/PlaygroundContainer/PlaygroundContainer";
import { ControlsContainer } from "../containers/ControlsContainer/ControlsContainer";
import { CodeBlockContainer } from "../containers/CodeBlockContainer/CodeBlockContainer";

export const CubePage = () => {
  return (
    <PlaygroundContainer>
      <ShapeContainer>
        <Cube isSpinning={true} />
      </ShapeContainer>
      <ControlsContainer />
      <CodeBlockContainer />
    </PlaygroundContainer>
  );
};
