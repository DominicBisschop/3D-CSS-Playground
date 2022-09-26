import React from "react";
import {Typography} from "@mui/material";
import styles from "./styles.module.scss";

export const Footer = () => {
    const yearNow = new Date().getFullYear();

    return (
        <div className={styles.footer}>
            <Typography>
                &copy; Copyright {yearNow} - Dominic Bisschop
            </Typography>
        </div>
    )
}