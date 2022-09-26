import {Typography} from "@mui/material";
import React from "react";
import logo from "../../images/logo.png";
import styles from "./styles.module.scss";

export const Logo = () => {
    return (
        <div className={styles.container}>
            <img
                className={styles.logo}
                src={logo}
                alt="Kabisa logo"
            />
            <Typography variant="subtitle1" textAlign="center">
                3D CSS Playground
            </Typography>
        </div>
    )
}