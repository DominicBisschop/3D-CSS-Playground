import React from "react";
import styles from "../styles/config.module.scss";
import { Cube } from "../shapes/Cube/Cube";
import { ShapeContainer } from "../components/ShapeContainer/ShapeContainer";

export const CubePage = () => {
  return (
    <section className={styles.pageContainer}>
      <ShapeContainer title="Cube">
        <Cube isSpinning={true} />
      </ShapeContainer>
    </section>
  );
};
