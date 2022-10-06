import React from "react";
import styles from "../styles/config.module.scss";
import { Title } from "../components/Typography/Title/Title";
import { Canvas } from "../components/Canvas/Canvas";
import { SpinningCube } from "../shapes/SpinningCube/SpinningCube";

export const HomePage = () => {
  return (
    <section className={styles.pageContainer}>
      <Title tag="h1" size="lg">
        Welcome to the 3D CSS Playground!
      </Title>
      <Canvas showBackground={false}>
        <SpinningCube />
      </Canvas>
    </section>
  );
};
