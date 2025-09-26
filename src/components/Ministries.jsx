import React from "react";

export default function Ministries() {
  const items = [
    { title: "Youth", icon: "👦" },
    { title: "Women's Ministry", icon: "👩" },
    { title: "Worship Team", icon: "🎸" },
    { title: "Outreach", icon: "🤝" },
  ];

  return (
    <section id="ministries" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h3 className="text-2xl font-serif text-slate-900">Ministries</h3>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-white rounded-lg p-6 shadow-sm text-center"
            >
              <div className="text-4xl">{it.icon}</div>
              <div className="mt-4 font-medium text-slate-800">{it.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
