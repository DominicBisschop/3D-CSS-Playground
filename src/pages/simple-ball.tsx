import React from "react";
import { SimpleBall } from "../shapes/SimpleBall/SimpleBall";
import { ShapeContainer } from "../containers/ShapeContainer/ShapeContainer";
import { ControlsContainer } from "../containers/ControlsContainer/ControlsContainer";
import { CodeBlockContainer } from "../containers/CodeBlockContainer/CodeBlockContainer";
import { PlaygroundContainer } from "../containers/PlaygroundContainer/PlaygroundContainer";

export const SimpleBallPage = () => {
  return (
    <PlaygroundContainer>
      <ShapeContainer>
        <SimpleBall isSpinning={true} />
      </ShapeContainer>
      <ControlsContainer />
      <CodeBlockContainer />
    </PlaygroundContainer>
  );
};
