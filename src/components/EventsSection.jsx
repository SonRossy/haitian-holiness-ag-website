import React from "react";
import { CalendarDays, Clock, HeartHandshake, MapPin } from "lucide-react";

const events = [
  {
    title: "Sunday Worship",
    day: "Every Sunday",
    time: "10:30 AM",
    description: "Gather with us for worship, prayer, and the Word.",
    Icon: CalendarDays,
  },
  {
    title: "Bible Study",
    day: "Wednesdays",
    time: "7:00 PM",
    description: "Grow deeper in Scripture through weekly teaching and fellowship.",
    Icon: Clock,
  },
  {
    title: "Community Outreach",
    day: "1st Saturday",
    time: "Monthly",
    description: "Serving our neighbors and sharing the love of Christ.",
    Icon: HeartHandshake,
  },
];

export default function EventsSection() {
  return (
    <section id="events" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
              Worship With Us
            </p>
            <h3 className="mt-2 text-3xl font-serif text-slate-900">
              Upcoming Events
            </h3>
            <p className="mt-3 text-slate-600">
              Join us throughout the week for worship, discipleship, and
              opportunities to serve together.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <MapPin size={18} className="text-yellow-600" />
            <span>214 Ames St, Brockton, MA</span>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
          {events.map(({ title, day, time, description, Icon }) => (
            <article
              key={title}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:border-yellow-300 hover:bg-white hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-sky-900 text-white shadow-sm">
                  {React.createElement(Icon, { size: 24, strokeWidth: 2.2 })}
                </div>
                <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-yellow-700">
                  {day}
                </span>
              </div>

              <h4 className="mt-5 text-xl font-semibold text-slate-900">
                {title}
              </h4>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-200 pt-4 text-sm font-semibold text-sky-900">
                <Clock size={17} className="text-yellow-600" />
                <span>{time}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
