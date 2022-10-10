import React from "react";
import { Cube } from "../shapes/Cube/Cube";
import { ShapeContainer } from "../containers/ShapeContainer/ShapeContainer";

export const HomePage = () => {
  return (
    <ShapeContainer
      title="Welcome to the 3D CSS Playground!"
      showBackground={false}
      width="500px"
      height="500px"
    >
      <Cube isSpinning={true} />
    </ShapeContainer>
  );
};
