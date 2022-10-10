import React from "react";
import styles from "../styles/config.module.scss";
import { SimpleBall } from "../shapes/SimpleBall/SimpleBall";
import { ShapeContainer } from "../components/ShapeContainer/ShapeContainer";

export const SimpleBallPage = () => {
  return (
    <section className={styles.pageContainer}>
      <ShapeContainer title="Simple Ball">
        <SimpleBall isSpinning={true} />
      </ShapeContainer>
    </section>
  );
};
