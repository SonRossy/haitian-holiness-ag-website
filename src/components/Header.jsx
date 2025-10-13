import React from "react";
import Logo from "./Logo";

const NAV_LINKS = [
  "Home",
  "About",
  "Ministries",
  "Events",
  "Sermons",
  "Contact",
];

function MobileMenu() {
  return (
    <details className="relative md:hidden">
      <summary className="list-none w-10 h-10 flex items-center justify-center rounded-md bg-slate-100 cursor-pointer">
        ☰
      </summary>
      <div className="absolute right-0 mt-2 w-48 bg-white border rounded-md shadow-lg">
        {NAV_LINKS.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace("home", "#")}`}
            className="block px-4 py-2 hover:bg-slate-50"
          >
            {link}
          </a>
        ))}
      </div>
    </details>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex items-center justify-between h-16">
        <Logo />
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace("home", "")}`}
              className="hover:text-sky-900 font-bold"
            >
              {link}
            </a>
          ))}
        </nav>
        <a
          href="#donate"
          className="hidden md:block rounded-md px-4 py-2 bg-yellow-400 text-slate-900 font-medium shadow-sm hover:brightness-95"
        >
          Donate
        </a>
        <MobileMenu />
      </div>
    </header>
  );
}
