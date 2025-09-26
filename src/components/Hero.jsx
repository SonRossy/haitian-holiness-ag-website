import React from "react";

export default function Hero() {
  return (
    <section id="home" className="relative">
      <div
        className="relative h-[520px] md:h-[640px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1350&q=60')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/30 to-black/10"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight drop-shadow-sm">
              Welcome to Haitian Holiness A.G.
            </h1>
            <p className="mt-4 text-lg md:text-xl max-w-prose">
              A community of faith, hope, and love in Brockton, MA — 214 Ames
              St, Brockton, MA 02301.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="#join"
                className="inline-block rounded-md px-5 py-3 bg-yellow-400 text-slate-900 font-semibold shadow hover:brightness-95"
              >
                Join Us
              </a>
              <a
                href="#sermons"
                className="inline-block rounded-md px-5 py-3 border border-white/40 text-white hover:bg-white/10"
              >
                Watch Sermon
              </a>
            </div>
            <div className="mt-6 text-sm text-white/80">
              Service Times: Sunday 10:30 AM • Wednesday Bible Study 7:00 PM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
