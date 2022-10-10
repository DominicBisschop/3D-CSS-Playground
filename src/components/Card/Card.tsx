import React, { CSSProperties, FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  height?: string;
};

export const Card: FC<Props> = ({ children, height }) => {
  const stylingProps = height
    ? ({
        "--cardHeight": `${height}`,
      } as CSSProperties)
    : undefined;

  return (
    <section className={styles.card} style={stylingProps}>
      {children}
    </section>
  );
};
