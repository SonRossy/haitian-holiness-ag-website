import React from "react";

export default function EventsSection() {
  const events = [
    { title: "Sunday Worship", date: "Every Sunday • 10:30 AM" },
    { title: "Bible Study", date: "Wednesdays • 7:00 PM" },
    { title: "Community Outreach", date: "1st Saturday of the month" },
  ];

  return (
    <section id="events" className="py-12">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <h3 className="text-2xl font-serif text-slate-900">Upcoming Events</h3>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((e) => (
            <article
              key={e.title}
              className="p-6 rounded-lg border bg-white shadow-sm"
            >
              <h4 className="font-semibold text-slate-800">{e.title}</h4>
              <p className="mt-2 text-sm text-slate-600">{e.date}</p>
              <a href="#" className="mt-4 inline-block text-sky-900 text-sm">
                Learn more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
