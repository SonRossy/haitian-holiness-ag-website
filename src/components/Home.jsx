import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import JoinModal from "./JoinModal";

//
const homeImages = [
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1350&q=60&w=1500",
  "https://plus.unsplash.com/premium_photo-1677048147315-08e796b48a87?q=80&w=1516&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1555483618-92870e63614e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <section className="relative w-full h-[60vh] overflow-hidden">
      <Slider {...settings}>
        {homeImages.map((src, index) => (
          <div key={index}>
            <div
              className="w-full h-[90vh] bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: `url(${src})`,
              }}
            >
              <div className="w-full h-full bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                  Welcome to Haitian Holiness A.G.
                </h1>
                <p className="text-lg md:text-2xl max-w-2xl drop-shadow-md">
                  A community of faith, love, and worship in Brockton,
                  Massachusetts.
                </p>
                <div className="mt-6 flex gap-3">
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-block rounded-md px-5 py-3 bg-yellow-400 text-slate-900 font-semibold shadow hover:brightness-95"
                  >
                    Join Us
                  </button>
                  <a
                    href="#sermons"
                    className="inline-block rounded-md px-5 py-3 border border-white/40 text-white hover:bg-white/10"
                  >
                    Watch Sermon
                  </a>
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
