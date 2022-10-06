import React from "react";
import styles from "../styles/config.module.scss";
import { Title } from "../components/Typography/Title/Title";
import { Canvas } from "../components/Canvas/Canvas";
import { Cube } from "../shapes/Cube/Cube";

export const HomePage = () => {
  return (
    <section className={styles.pageContainer}>
      <Title tag="h1" size="lg">
        Welcome to the 3D CSS Playground!
      </Title>
      <Canvas showBackground={false}>
        <Cube isSpinning={true} />
      </Canvas>
    </section>
  );
};
