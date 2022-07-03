import * as React from "react";
import { Route, Routes } from "react-router-dom";
import { Hero } from "../pages/Hero/Hero";
import { Home } from "../pages/Home/Home";
import { AppPath } from "./routes-list";

export const AppRoutes = React.memo(() => {
  return (
    <Routes>
      <Route path={`${AppPath.Home.Base}`} element={<Home />} />
      <Route path={`${AppPath.Hero.Base}/:characterId`} element={<Hero />} />
    </Routes>
  );
});
