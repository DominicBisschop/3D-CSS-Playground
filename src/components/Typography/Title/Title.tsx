import React, { FC, HTMLAttributes } from "react";
import styles from "./styles.modules.scss";
import titleSizes, { ClassesType as TitleSize } from "./title.module.scss";
import classnames from "classnames";

type Props = {
  size?: TitleSize;
  tag: "h1" | "h2" | "h3" | "h4" | "p" | "span";
} & HTMLAttributes<HTMLHeadingElement>;

export const Title: FC<Props> = ({ children, tag, size = "lg" }) => {
  const Tag = tag;
  return (
    <div className={styles.title}>
      <Tag className={classnames(titleSizes[size], styles.title)}>
        {children}
      </Tag>
    </div>
  );
};
