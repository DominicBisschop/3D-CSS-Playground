import React, { CSSProperties } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";
import usePlaygroundContext from "../../context/usePlaygroundContext";

type Props = {
  isSpinning?: boolean;
};

export const Cube = ({ isSpinning }: Props) => {
  const { cubeConfig } = usePlaygroundContext();

  const stylingProps = cubeConfig
    ? ({
        "--size": `${cubeConfig.size}`,
      } as CSSProperties)
    : undefined;

  return (
    <div className={styles.scene}>
      <div
        className={classnames(styles.cube, { [styles.spinning]: isSpinning })}
      >
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
