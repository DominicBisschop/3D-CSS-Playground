import React from "react";
import styles from "./styles.module.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { HomePage } from "../../pages/home";
import { CubePage } from "../../pages/cube";
import { BoxPage } from "../../pages/box";
import { SimpleBallPage } from "../../pages/simple-ball";
import { AdvancedBallPage } from "../../pages/advanced-ball";

export const ContentContainer = () => {
  return (
    <section className={styles.container}>
      <Routes>
        <Route index={true} element={<HomePage />} />
        {/*<Route index={true} element={<ContentContainer />} />*/}
        <Route path="/cube" element={<CubePage />} />
        <Route path="/simple-ball" element={<SimpleBallPage />} />
        <Route path="/advanced-ball" element={<AdvancedBallPage />} />
        <Route path="/ball" element={<SimpleBallPage />} />
        <Route path="/box" element={<BoxPage />} />
      </Routes>
      <Outlet></Outlet>
    </section>
  );
};
