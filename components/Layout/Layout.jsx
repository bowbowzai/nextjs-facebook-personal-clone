import React from "react";
import Navbar from "../Navbar/Navbar";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col">
      {/* navbar */}
      <Navbar />
      {/* main */}
      <div>{children}</div>
    </div>
  );
}
