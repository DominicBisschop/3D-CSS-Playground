import React from "react";
import styles from "./styles.module.scss";
import { Outlet, Route, Routes } from "react-router-dom";
import { routes } from "../../routing/routes";

export const PageContainer = () => {
  return (
    <section className={styles.container}>
      <Routes>
        {routes.map((route) => {
          return (
            <Route
              key={route.name}
              index={route.index}
              path={route.url}
              element={route.element}
            />
          );
        })}
        {/*<Route index={true} element={<HomePage />} />*/}
        {/*/!*<Route index={true} element={<ContentContainer />} />*!/*/}
        {/*<Route path="/cube" element={<CubePage />} />*/}
        {/*<Route path="/simple-ball" element={<SimpleBallPage />} />*/}
        {/*<Route path="/advanced-ball" element={<AdvancedBallPage />} />*/}
        {/*<Route path="/ball" element={<SimpleBallPage />} />*/}
        {/*<Route path="/box" element={<BoxPage />} />*/}
      </Routes>
      <Outlet></Outlet>
    </section>
  );
};