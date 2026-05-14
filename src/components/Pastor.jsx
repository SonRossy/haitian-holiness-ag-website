import React from "react";

export default function Pastor() {
  return (
    <section id="pastor" className="bg-slate-50 py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-8">
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute -left-4 -top-4 h-28 w-28 rounded-full bg-yellow-300/40" />
          <div className="absolute -bottom-4 -right-4 h-32 w-32 rounded-full bg-sky-900/10" />
          <div className="relative overflow-hidden rounded-lg shadow-xl">
            <img
              src="/gallery/pastor-frantz.jpg"
              alt="Pastor Frantz speaking at Haitian Holiness A.G."
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
            Meet Our Pastor
          </p>
          <h3 className="mt-2 text-3xl font-serif text-slate-900 md:text-4xl">
            Pastor Frantz
          </h3>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Pastor Frantz serves Haitian Holiness A.G. with a heart for worship,
            prayer, and helping families grow stronger in Christ.
          </p>
          <p className="mt-4 leading-7 text-slate-600">
            Through preaching, pastoral care, and community leadership, he helps
            guide the church family toward faithfulness, unity, and service in
            Brockton and beyond.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="border-l-4 border-yellow-400 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Worship</p>
              <p className="mt-1 text-sm text-slate-600">Leading with joy</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Prayer</p>
              <p className="mt-1 text-sm text-slate-600">Covering families</p>
            </div>
            <div className="border-l-4 border-yellow-400 bg-white p-4 shadow-sm">
              <p className="text-sm font-semibold text-slate-900">Service</p>
              <p className="mt-1 text-sm text-slate-600">Serving Brockton</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
