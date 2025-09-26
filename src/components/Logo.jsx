import React from "react";

export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-sm flex items-center justify-center bg-sky-900 text-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path fill="currentColor" d="M11 3h2v8h8v2h-8v8h-2v-8H3v-2h8z" />
        </svg>
      </div>
      <div className="text-slate-900 font-semibold">Haitian Holiness A.G.</div>
    </div>
  );
}
