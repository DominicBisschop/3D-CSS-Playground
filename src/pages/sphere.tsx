import React from "react";
import styles from "../styles/config.module.scss";
import { Title } from "../components/Typography/Title/Title";
import { Canvas } from "../components/Canvas/Canvas";

export const SpherePage = () => {
  return (
    <section className={styles.pageContainer}>
      <Title tag="h1" size="lg">
        Sphere
      </Title>
      <Canvas></Canvas>
    </section>
  );
};