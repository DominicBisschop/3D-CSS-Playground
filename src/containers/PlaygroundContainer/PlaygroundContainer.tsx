import React, { FC } from "react";
import styles from "./styles.module.scss";

export const PlaygroundContainer: FC = ({ children }) => {
  return <section className={styles.container}>{children}</section>;
};
