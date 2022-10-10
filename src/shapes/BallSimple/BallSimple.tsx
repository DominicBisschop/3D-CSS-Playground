import React from "react";
import styles from "./styles.module.scss";

type Props = {
  isSpinning?: boolean;
};

export const BallSimple = ({ isSpinning }: Props) => {
  return (
    <div className={styles.scene}>
      <div className={styles.ball} />
    </div>
  );
};
