import React from "react";
import "./layout.css";
import NavBar from "../headerr-fotter/header";
import { Outlet } from "react-router-dom";
import Fotter from "../headerr-fotter/fotter";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="main">
        <Outlet />
      </main>
      <Fotter />
    </>
  );
}

export default Layout;
