import React, { FC, ReactNode } from "react";
import { Box } from "@mui/material";
import styles from "./styles.module.scss";

type Props = {
  children?: ReactNode;
};

export const PageBlock: FC<Props> = ({ children }) => {
  return (
    <Box className={styles.container} width={1} p={3}>
      {children}
    </Box>
  );
};
