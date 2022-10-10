import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

type Props = {
  isSpinning?: boolean;
};

export const Box = ({ isSpinning }: Props) => {
  return (
    <div className={styles.scene}>
      <div
        className={classnames(styles.box, { [styles.spinning]: isSpinning })}
      >
        <div className={classnames(styles.boxFace, styles.boxFaceFront)}>
          Front
        </div>
        <div className={classnames(styles.boxFace, styles.boxFaceBack)}>
          Back
        </div>
        <div className={classnames(styles.boxFace, styles.boxFaceLeft)}>
          Left
        </div>
        <div className={classnames(styles.boxFace, styles.boxFaceRight)}>
          Right
        </div>
        <div className={classnames(styles.boxFace, styles.boxFaceTop)}>Top</div>
        <div className={classnames(styles.boxFace, styles.boxFaceBottom)}>
          Bottom
        </div>
      </div>
    </div>
  );
};
