import React from "react";
import {FC} from "react";
import styles from "./styles.module.scss";

type Props = {

}

export const Canvas: FC<Props> = ({children}) => {
    return (
        <div className={styles.canvas}>{children}</div>
    )
}