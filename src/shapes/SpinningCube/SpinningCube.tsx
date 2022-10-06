import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

export const SpinningCube = () => {
  return (
    <div className={styles.scene}>
      <div className={styles.cube}>
        <div className={classnames(styles.cubeFace, styles.cubeFaceFront)}>
          Front
        </div>
        <div className={classnames(styles.cubeFace, styles.cubeFaceBack)}>
          Back
        </div>
        <div className={classnames(styles.cubeFace, styles.cubeFaceLeft)}>
          Left
        </div>
        <div className={classnames(styles.cubeFace, styles.cubeFaceRight)}>
          Right
        </div>
        <div className={classnames(styles.cubeFace, styles.cubeFaceTop)}>
          Top
        </div>
        <div className={classnames(styles.cubeFace, styles.cubeFaceBottom)}>
          Bottom
        </div>
      </div>
    </div>
  );
};
