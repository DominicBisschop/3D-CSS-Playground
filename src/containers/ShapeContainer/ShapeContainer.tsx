import React, { FC } from "react";
import { Title } from "../../components/Typography/Title/Title";
import { Canvas } from "../../components/Canvas/Canvas";

type Props = {
  title?: string;
  showBackground?: boolean;
  width?: string;
  height?: string;
};

export const ShapeContainer: FC<Props> = ({
  title = "Shape",
  children,
  showBackground = true,
  width,
  height,
}) => {
  return (
    <section>
      <Title tag="h1" size="lg">
        {title}
      </Title>
      <Canvas width={width} height={height} showBackground={showBackground}>
        {children}
      </Canvas>
    </section>
  );
};
