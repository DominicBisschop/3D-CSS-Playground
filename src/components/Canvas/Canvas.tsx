import React, { CSSProperties, FC } from "react";
import styles from "./styles.module.scss";
import classnames from "classnames";

type Props = {
  showBackground?: boolean;
  width?: number;
  height?: number;
};

export const Canvas: FC<Props> = ({
  children,
  width = 500,
  height = 500,
  showBackground = true,
}) => {
  return (
    <div
      className={classnames(styles.canvas, {
        [styles.background]: showBackground,
      })}
      style={
        {
          "--canvasHeight": `${height}px`,
          "--canvasWidth": `${width}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
};
