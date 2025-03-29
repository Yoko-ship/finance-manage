import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

function Root() {
  return (
    <>
      <div className="container">
        <Sidebar />
        <main className="content">
          <Outlet></Outlet>
        </main>
      </div>
    </>
  );
}

export default Root;
