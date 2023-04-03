import React from "react";
import DetailNav from "./detailNav";
import { Outlet } from "react-router-dom";
import "../../body/layout.css";
import DetailFotter from "./detailFotter";

function Wrapper() {
  return (
    <div>
      <DetailNav />
      <main className="main">
        <Outlet />
      </main>
      <DetailFotter />
    </div>
  );
}

export default Wrapper;
