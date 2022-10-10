import React, { FC } from "react";
import { Title } from "../Typography/Title/Title";
import { Canvas } from "../Canvas/Canvas";

type Props = {
  title: string;
  showBackground?: boolean;
  width?: number;
  height?: number;
};

export const ShapeContainer: FC<Props> = ({
  title,
  children,
  showBackground = true,
  width,
  height,
}) => {
  return (
    <>
      <Title tag="h1" size="lg">
        {title}
      </Title>
      <Canvas width={width} height={height} showBackground={showBackground}>
        {children}
      </Canvas>
    </>
  );
};
