import React from "react";
import styles from "./styles.module.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { CubePage } from "../../pages/cube";
import { BoxPage } from "../../pages/box";
import { BallPage } from "../../pages/ball";

export const ContentContainer = () => {
  return (
    <section className={styles.container}>
      <Routes>
        <Route index={true} element={<HomePage />} />
        {/*<Route index={true} element={<ContentContainer />} />*/}
        <Route path="/cube" element={<CubePage />} />
        <Route path="/ball" element={<BallPage />} />
        <Route path="/box" element={<BoxPage />} />
      </Routes>
      <Outlet></Outlet>
    </section>
  );
};
