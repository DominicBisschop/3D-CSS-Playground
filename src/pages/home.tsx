import React from "react";
import styles from "../styles/config.module.scss";
import { Cube } from "../shapes/Cube/Cube";
import { AdvancedBall } from "../shapes/AdvancedBall/AdvancedBall";
import { ShapeContainer } from "../components/ShapeContainer/ShapeContainer";

export const HomePage = () => {
  return (
    <section className={styles.pageContainer}>
      <ShapeContainer
        title="Welcome to the 3D CSS Playground!"
        showBackground={false}
        width={750}
        height={500}
      >
        <Cube isSpinning={true} />
        <AdvancedBall isSpinning={true} />
      </ShapeContainer>
    </section>
  );
};
