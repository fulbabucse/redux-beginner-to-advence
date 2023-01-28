import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-xl mx-auto mt-3">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;
