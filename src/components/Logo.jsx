import React from "react";
import logo from "../assets/logo.png"; // 👈 place the downloaded logo file here

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img
        src={logo}
        alt="Haitian Holiness A.G. Logo"
        className="h-16 w-auto"
      />
      <span className="font-heading text-xl font-bold text-brandBlue">
        Haitian Holiness A.G.
      </span>
    </div>
  );
}
