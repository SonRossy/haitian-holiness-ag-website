import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-semibold">Haitian Holiness A.G.</h4>
          <p className="mt-2 text-sm">214 Ames St, Brockton, MA 02301</p>
          <p className="mt-1 text-sm">Service: Sunday 10:30 AM • Wed 7:00 PM</p>
        </div>
        <div>
          <h5 className="font-semibold">Connect</h5>
          <ul className="mt-2 text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Contact</h5>
          <p className="mt-2 text-sm">Phone: (replace with phone)</p>
          <p className="mt-1 text-sm">Email: info@haitianholinessag.org</p>
        </div>
      </div>
      <div className="mt-8 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} Haitian Holiness A.G. — All rights reserved
      </div>
    </footer>
  );
}
