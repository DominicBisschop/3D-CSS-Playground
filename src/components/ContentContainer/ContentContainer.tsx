import React, {FC, ReactNode} from "react";
import styles from "./styles.module.scss";

type Props = {
    children?: ReactNode | ReactNode[];
}

export const ContentContainer: FC<Props> = ({children}) => {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}