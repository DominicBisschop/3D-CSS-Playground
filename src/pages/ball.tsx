import React from "react";
import styles from "../styles/config.module.scss";
import { Title } from "../components/Typography/Title/Title";
import { Canvas } from "../components/Canvas/Canvas";
import { BallSimple } from "../shapes/BallSimple/BallSimple";
import { Ball } from "../shapes/Ball/Ball";

export const BallPage = () => {
  return (
    <section className={styles.pageContainer}>
      <Title tag="h1" size="lg">
        Simple Ball
      </Title>
      <Canvas>
        <BallSimple />
      </Canvas>
      <Title tag="h1" size="lg">
        Rotating Advanced Ball
      </Title>
      <Canvas>
        <Ball isSpinning={true} />
      </Canvas>
    </section>
  );
};
