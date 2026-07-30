import React from "react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-serif text-slate-900">About Us</h2>
          <p className="mt-4 text-slate-700">
            Our purpose is to glorify God by establishing and maintaining a
            place for the worship of Almighty God, our Heavenly Father; to
            provide Christian fellowship for those who have made a profession of
            faith in and are following Jesus Christ; to assume our share of the
            responsibility for evangelism and the privilege of propagating the
            gospel; to train and equip fully developed disciples and followers
            of Jesus Christ; and to serve our community with the love and
            compassion of Jesus Christ.
          </p>
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
