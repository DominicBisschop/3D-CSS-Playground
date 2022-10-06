import React from "react";
import styles from "./styles.module.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { CubePage } from "../../pages/cube";
import { SpherePage } from "../../pages/sphere";
import { BoxPage } from "../../pages/box";

export const ContentContainer = () => {
  return (
    <section className={styles.container}>
      <Routes>
        <Route index={true} element={<ContentContainer />} />
        <Route path="/cube" element={<CubePage />} />
        <Route path="/sphere" element={<SpherePage />} />
        <Route path="/box" element={<BoxPage />} />
      </Routes>
      <Outlet></Outlet>
    </section>
  );
};
