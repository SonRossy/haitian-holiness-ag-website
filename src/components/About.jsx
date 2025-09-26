import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-serif text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700">
            We are a community of believers dedicated to sharing the love of
            Christ and transforming lives through worship, fellowship, and
            service. Our mission is to uplift the Haitian and greater Brockton
            community spiritually and practically.
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
