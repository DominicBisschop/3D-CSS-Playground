import React from "react";
import { Title } from "../components/Typography/Title/Title";
import { Canvas } from "../components/Canvas/Canvas";
import styles from "../styles/config.module.scss";
import { Cube } from "../shapes/Cube/Cube";

export const CubePage = () => {
  return (
    <section className={styles.pageContainer}>
      <Title tag="h1" size="lg">
        Cube
      </Title>
      <Canvas>
        <Cube />
      </Canvas>
    </section>
  );
};
