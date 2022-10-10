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
  width,
  height,
  showBackground = true,
}) => {
  const stylingProps =
    width && height
      ? ({
          "--canvasHeight": `${height}px`,
          "--canvasWidth": `${width}px`,
        } as CSSProperties)
      : undefined;

  return (
    <div
      className={classnames(styles.canvas, {
        [styles.background]: showBackground,
      })}
      style={stylingProps}
    >
      {children}
    </div>
  );
};
