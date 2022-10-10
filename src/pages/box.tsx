import React from "react";
import { ShapeContainer } from "../containers/ShapeContainer/ShapeContainer";
import { Box } from "../shapes/Box/Box";
import { ControlsContainer } from "../containers/ControlsContainer/ControlsContainer";
import { CodeBlockContainer } from "../containers/CodeBlockContainer/CodeBlockContainer";
import { PlaygroundContainer } from "../containers/PlaygroundContainer/PlaygroundContainer";

export const BoxPage = () => {
  return (
    <PlaygroundContainer>
      <ShapeContainer>
        <Box isSpinning={true} />
      </ShapeContainer>
      <ControlsContainer />
      <CodeBlockContainer />
    </PlaygroundContainer>
  );
};
