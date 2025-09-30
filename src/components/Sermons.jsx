import React from "react";

export default function Sermons() {
  const sermons = [
    {
      title: "Hope & Healing",
      src: "https://www.youtube.com/embed/fmhg1KgPffg",
    },
    {
      title: "Walking in Faith",
      src: "https://www.youtube.com/embed/FQgYGhRcXCw",
    },
  ];

  return (
    <section id="sermons" className="py-12 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h3 className="text-2xl font-serif text-slate-900">Recent Sermons</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {sermons.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-lg overflow-hidden shadow-sm"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={s.src}
                  title={s.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-slate-800">{s.title}</h4>
                <p className="mt-2 text-sm text-slate-600">
                  Short description or scripture reference goes here.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
