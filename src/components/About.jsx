import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-serif text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700">
            For the purpose of establishing and maintaining a place of worship
            for Almighty God, our Heavenly Father; to provide Christian
            fellowship for those of like precious faith; to honor the Holy Ghost
            according to our distinctive testimony; to assume our share of the
            responsibility and privilege of propagating the Gospel of Jesus
            Christ by all available means, both at home and in foreign lands, we
            hereby recognize ourselves as a district-affiliated assembly of the
            Southern New England District of the Assemblies of God, Inc.
          </p>
          <ul className="mt-4 text-slate-700 list-disc list-inside space-y-1">
            <li>Warm worship and vibrant community</li>
            <li>Weekly discipleship and outreach</li>
            <li>Programs for youth, women, and families</li>
          </ul>
        </div>
        <div className="rounded-lg overflow-hidden shadow-sm">
          <img
            alt="Church building"
            src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1000&q=60"
            className="w-full h-64 object-cover"
          />
        </div>
      </div>
    </section>
  );
}
