import React from "react";
import styles from "../styles/config.module.scss";
import { ShapeContainer } from "../components/ShapeContainer/ShapeContainer";

export const BoxPage = () => {
  return (
    <section className={styles.pageContainer}>
      <ShapeContainer title="Box"></ShapeContainer>
    </section>
  );
};
