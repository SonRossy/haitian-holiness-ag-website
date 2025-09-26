import React from "react";

export default function Donate() {
  return (
    <section id="donate" className="py-12">
      <div className="max-w-4xl mx-auto px-6 md:px-8 bg-gradient-to-r from-slate-50 to-white rounded-xl p-8 shadow-md">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-2xl font-serif text-slate-900">
              Support Our Ministry
            </h3>
            <p className="mt-2 text-slate-700">
              Your generosity helps us serve our community, support families,
              and spread the Gospel. Thank you for partnering with us.
            </p>
          </div>
          <div>
            <a
              href="#"
              className="inline-block rounded-md px-6 py-3 bg-yellow-400 font-semibold shadow"
            >
              Give Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
