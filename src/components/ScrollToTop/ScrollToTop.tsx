import React from "react";
import { isMobile } from "react-device-detect";
import styles from "./styles.module.scss";

export const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return isMobile ? (
    <div className={styles.container} onClick={scrollToTop}>
      <i className={styles.container} />
    </div>
  ) : null;
};
