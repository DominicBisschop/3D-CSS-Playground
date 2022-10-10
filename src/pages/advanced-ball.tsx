import React from "react";
import styles from "../styles/config.module.scss";
import { AdvancedBall } from "../shapes/AdvancedBall/AdvancedBall";
import { ShapeContainer } from "../components/ShapeContainer/ShapeContainer";

export const AdvancedBallPage = () => {
  return (
    <section className={styles.pageContainer}>
      <ShapeContainer title="Advanced Ball">
        <AdvancedBall isSpinning={true} />
      </ShapeContainer>
    </section>
  );
};
