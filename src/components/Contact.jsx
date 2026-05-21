import React from "react";
import { Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";

const contactDetails = [
  {
    title: "Call Us",
    body: "(857) 417-9149",
    href: "tel:+18574179149",
    icon: Phone,
  },
  {
    title: "Email Us",
    body: "fmangu460@gmail.com",
    href: "mailto:fmangu460@gmail.com",
    icon: Mail,
  },
  {
    title: "Visit Us",
    body: "214 Ames St, Brockton, MA 02301",
    href: "https://www.google.com/maps/search/?api=1&query=214+Ames+St+Brockton+MA+02301",
    icon: MapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-brandGold">
            Contact Us
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold text-brandBlue md:text-5xl">
            We would love to hear from you
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            Reach out with questions, prayer requests, or directions for your
            first visit. You are welcome here.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contactDetails.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target={item.title === "Visit Us" ? "_blank" : undefined}
              rel={item.title === "Visit Us" ? "noreferrer" : undefined}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:border-brandGold/60 hover:bg-white hover:shadow-xl hover:shadow-slate-200/60"
            >
              <span className="grid size-12 place-items-center rounded-full bg-brandBlue text-white transition group-hover:bg-brandGold group-hover:text-slate-950">
                {React.createElement(item.icon, {
                  size: 22,
                  "aria-hidden": "true",
                })}
              </span>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.body}
              </p>
            </a>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-xl border border-slate-200 bg-slate-950 shadow-2xl shadow-slate-200/70 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="p-8 text-white md:p-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-brandGold">
              <Clock size={16} aria-hidden="true" />
              Service Times
            </span>

            <div className="mt-8 space-y-5">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Sunday Worship
                </p>
                <p className="mt-2 text-2xl font-semibold">10:30 AM</p>
              </div>
              <div className="border-t border-white/10 pt-5">
                <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                  Wednesday Service
                </p>
                <p className="mt-2 text-2xl font-semibold">7:00 PM</p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=214+Ames+St+Brockton+MA+02301"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brandGold px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-white"
            >
              <Navigation size={17} aria-hidden="true" />
              Get Directions
            </a>
          </div>

          <iframe
            title="Map to Haitian Holiness A.G."
            src="https://www.google.com/maps?q=214%20Ames%20St%2C%20Brockton%2C%20MA%2002301&output=embed"
            className="h-[360px] w-full border-0 lg:h-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
