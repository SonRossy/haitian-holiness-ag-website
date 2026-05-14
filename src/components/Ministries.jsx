import React from "react";
import { HandHeart, Mic2, UsersRound, HeartHandshake } from "lucide-react";

const ministries = [
  {
    title: "Youth",
    description: "Helping the next generation grow in faith, friendship, and purpose.",
    Icon: UsersRound,
  },
  {
    title: "Women's Ministry",
    description: "A place for prayer, encouragement, service, and spiritual growth.",
    Icon: HandHeart,
  },
  {
    title: "Worship Team",
    description: "Leading the church in heartfelt praise through music and worship.",
    Icon: Mic2,
  },
  {
    title: "Outreach",
    description: "Serving families and sharing the love of Christ in our community.",
    Icon: HeartHandshake,
  },
];

export default function Ministries() {
  return (
    <section id="ministries" className="bg-slate-50 py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
            Get Connected
          </p>
          <h3 className="mt-2 text-3xl font-serif text-slate-900">
            Ministries
          </h3>
          <p className="mt-3 text-slate-600">
            Find a place to serve, grow, and build meaningful relationships
            within the church family.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {ministries.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-yellow-100 text-yellow-700">
                {React.createElement(Icon, { size: 24, strokeWidth: 2.2 })}
              </div>
              <h4 className="mt-5 text-lg font-semibold text-slate-900">
                {title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
