import React from "react";
import logo from "../assets/logo.png";

export default function Logo() {
  return (
    <a href="#" className="flex items-center gap-2">
      <img
        src={logo}
        alt="Haitian Holiness A.G. Logo"
        className="h-16 w-auto"
      />
      <span className="font-heading text-xl font-bold text-brandBlue">
        Haitian Holiness
      </span>
    </a>
  );
}
