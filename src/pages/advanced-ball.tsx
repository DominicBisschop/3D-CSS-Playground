import React from "react";
import { AdvancedBall } from "../shapes/AdvancedBall/AdvancedBall";
import { ShapeContainer } from "../containers/ShapeContainer/ShapeContainer";
import { ControlsContainer } from "../containers/ControlsContainer/ControlsContainer";
import { CodeBlockContainer } from "../containers/CodeBlockContainer/CodeBlockContainer";
import { PlaygroundContainer } from "../containers/PlaygroundContainer/PlaygroundContainer";

export const AdvancedBallPage = () => {
  return (
    <PlaygroundContainer>
      <ShapeContainer>
        <AdvancedBall isSpinning={true} />
      </ShapeContainer>
      <ControlsContainer />
      <CodeBlockContainer />
    </PlaygroundContainer>
  );
};
