import React from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

type Props = {
  isSpinning?: boolean;
};

export const Ball = ({ isSpinning }: Props) => {
  return (
    <div className={styles.ball}>
      <div className={classnames(styles.layer, styles.spinning)}>
        <div
          className={classnames(styles.layer, styles.gridPlane, styles.xLine)}
        />
        <div
          className={classnames(styles.layer, styles.gridPlane, styles.xLine2)}
        />
        <div
          className={classnames(styles.layer, styles.gridPlane, styles.yLine)}
        />
        <div
          className={classnames(styles.layer, styles.gridPlane, styles.zLine)}
        />
        <div className={classnames(styles.layer, styles.gridPlane)} />
        <div className={classnames(styles.layer, styles.gridPlane)} />
      </div>
      <div className={classnames(styles.layer, styles.clip)}>
        <div
          className={classnames(styles.shade, {
            [styles.shadeSpinning]: isSpinning,
          })}
        />
      </div>
    </div>
  );
};
