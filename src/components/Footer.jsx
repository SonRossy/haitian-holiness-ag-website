import React from "react";
import { Clock, ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Pastor", href: "#pastor" },
  { label: "Gallery", href: "#gallery" },
  { label: "Donate", href: "#donate" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.4fr_0.8fr_1fr_1fr] md:px-8">
        <div>
          <h4 className="font-heading text-xl font-semibold text-white">
            Haitian Holiness A.G.
          </h4>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">
            A welcoming church family in Brockton, sharing faith, worship, and
            fellowship with the Haitian community and beyond.
          </p>
          <a
            href="https://www.facebook.com/profile.php?id=61590337614694"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-brandGold/50 hover:bg-white/10"
          >
            <span className="grid size-7 place-items-center rounded-full bg-[#1877f2] font-bold text-white">
              f
            </span>
            Follow on Facebook
            <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-brandGold">
            Quick Links
          </h5>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-slate-400 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-brandGold">
            Visit
          </h5>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <p className="flex items-start gap-3">
              <MapPin
                className="mt-0.5 shrink-0 text-brandGold"
                size={17}
                aria-hidden="true"
              />
              <span>214 Ames St, Brockton, MA 02301</span>
            </p>
            <p className="flex items-start gap-3">
              <Clock
                className="mt-0.5 shrink-0 text-brandGold"
                size={17}
                aria-hidden="true"
              />
              <span>Sunday 10:30 AM | Wednesday 7:00 PM</span>
            </p>
          </div>
        </div>

        <div>
          <h5 className="text-sm font-semibold uppercase tracking-[0.18em] text-brandGold">
            Contact
          </h5>
          <div className="mt-4 space-y-3 text-sm text-slate-400">
            <a
              href="tel:+18574179149"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone
                className="shrink-0 text-brandGold"
                size={17}
                aria-hidden="true"
              />
              <span>(857) 417-9149</span>
            </a>
            <a
              href="mailto:fmangu460@gmail.com"
              className="flex items-center gap-3 break-all transition hover:text-white"
            >
              <Mail
                className="shrink-0 text-brandGold"
                size={17}
                aria-hidden="true"
              />
              <span>fmangu460@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-5 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Haitian Holiness A.G. - All rights
        reserved
      </div>
    </footer>
  );
}
