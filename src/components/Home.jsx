import React, { useState } from "react";
import Slider from "react-slick";
import JoinModal from "./JoinModal";

const homeImages = [
  {
    src: "/gallery/hero-congregation.jpg",
    position: "center top",
  },
  {
    src: "/gallery/womens-ministry.jpg",
    position: "center 35%",
  },
  {
    src: "/gallery/congregation-wide.jpg",
    position: "center top",
  },
  {
    src: "/gallery/pastor-greeting.jpg",
    position: "center top",
  },
];

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section
      id="home"
      className="relative h-[72vh] min-h-[560px] overflow-hidden"
    >
      <Slider {...settings}>
        {homeImages.map((image) => (
          <div key={image.src}>
            <div
              className="relative h-[72vh] min-h-[560px] w-full bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${image.src})`,
                backgroundPosition: image.position,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-slate-950/20" />
              <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6 md:px-8">
                <div className="max-w-2xl text-white">
                  <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
                    Brockton, Massachusetts
                  </p>
                  <h1 className="text-4xl font-bold leading-tight drop-shadow-lg md:text-6xl">
                    Welcome to Haitian Holiness Assembly of God
                  </h1>
                  <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 drop-shadow-md md:text-2xl">
                    A community of faith, love, and worship growing together in
                    Christ.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(true)}
                      className="rounded-md bg-yellow-400 px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
                    >
                      Join Us
                    </button>
                    <a
                      href="#sermons"
                      className="rounded-md border border-white/50 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
                    >
                      Watch Sermon
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <JoinModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
