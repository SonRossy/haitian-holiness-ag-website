import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryPhotos = [
  {
    title: "Men's Ministry",
    src: "/gallery/pastor-greeting.jpg",
    featured: true,
  },
  {
    title: "Pastor and Family",
    src: "/gallery/pastor-family.png",
    position: "center 35%",
    fit: "contain",
  },
  {
    title: "Women's Ministry",
    src: "/gallery/womens-ministry.jpg",
  },
  {
    title: "Pulpit Service",
    src: "/gallery/pulpit-wide.jpg",
  },
  {
    title: "Worship Prayer",
    src: "/gallery/worship-prayer.jpg",
    position: "center 18%",
  },
  {
    title: "Worship Leader Singing",
    src: "/gallery/pastor-speaking.jpg",
    position: "center 16%",
  },
  {
    title: "Soloist",
    src: "/gallery/soloist.jpg",
    position: "center 24%",
  },
  {
    title: "Worship Team",
    src: "/gallery/worship-team.jpg",
  },
  {
    title: "Church Family",
    src: "/gallery/congregation-wide.jpg",
  },
  {
    title: "Gathering Together",
    src: "/gallery/church-gathering.jpg",
  },
  {
    title: "Preaching the Word",
    src: "/gallery/pulpit-closeup.jpg",
  },
  {
    title: "Worship Service",
    src: "/gallery/worship-wide.jpg",
  },
];

function PhotoCard({ photo, onClick, className = "" }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-lg bg-slate-200 shadow-sm ${className}`}
    >
      <button
        type="button"
        onClick={onClick}
        className="block h-full w-full text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-yellow-300"
        aria-label={`Open gallery at ${photo.title}`}
      >
        <img
          src={photo.src}
          alt={photo.title}
          className={`h-full w-full transition duration-500 group-hover:scale-105 ${
            photo.fit === "contain" ? "object-contain p-2" : "object-cover"
          }`}
          style={{ objectPosition: photo.position || "center center" }}
          loading={photo.featured ? "eager" : "lazy"}
        />
        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4 pt-12">
          <span className="text-sm font-semibold text-white">
            {photo.title}
          </span>
        </figcaption>
      </button>
    </figure>
  );
}

function GalleryModal({ isOpen, initialSlide, onClose }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);

  useEffect(() => {
    if (isOpen) {
      setCurrentSlide(initialSlide);
      sliderRef.current?.slickGoTo(initialSlide, true);
    }
  }, [initialSlide, isOpen]);

  if (!isOpen) {
    return null;
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 450,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    initialSlide,
    beforeChange: (_oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/90 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-label="Church photo gallery"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        aria-label="Close gallery"
      >
        <X size={24} />
      </button>

      <button
        type="button"
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:left-6"
        aria-label="Previous photo"
      >
        <ChevronLeft size={28} />
      </button>

      <div className="w-full max-w-6xl">
        <Slider ref={sliderRef} {...settings}>
          {galleryPhotos.map((photo) => (
            <div key={photo.src}>
              <div className="flex h-[72vh] flex-col items-center justify-center">
                <img
                  src={photo.src}
                  alt={photo.title}
                  className="max-h-full max-w-full rounded-lg object-contain shadow-2xl"
                />
              </div>
            </div>
          ))}
        </Slider>

        <div className="mt-5 text-center text-white">
          <p className="text-lg font-semibold">
            {galleryPhotos[currentSlide].title}
          </p>
          <p className="mt-1 text-sm text-white/70">
            {currentSlide + 1} / {galleryPhotos.length}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-3 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20 md:right-6"
        aria-label="Next photo"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
}

export default function Gallery() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const featuredPhoto = galleryPhotos[0];
  const previewPhotos = galleryPhotos.slice(1, 5);

  const openGallery = (index) => {
    setSelectedPhotoIndex(index);
    setIsGalleryOpen(true);
  };

  return (
    <section id="gallery" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-yellow-600">
              Church Life
            </p>
            <h3 className="mt-2 text-3xl font-serif text-slate-900">
              Church Moments
            </h3>
            <p className="mt-3 max-w-2xl text-slate-600">
              A glimpse of worship, fellowship, and community life at Haitian
              Holiness Assembly of God.
            </p>
          </div>
          <button
            type="button"
            onClick={() => openGallery(0)}
            className="w-fit rounded-md bg-yellow-400 px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
          >
            View Gallery
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PhotoCard
            photo={featuredPhoto}
            onClick={() => openGallery(0)}
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previewPhotos.map((photo, index) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                onClick={() => openGallery(index + 1)}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>
      </div>

      <GalleryModal
        isOpen={isGalleryOpen}
        initialSlide={selectedPhotoIndex}
        onClose={() => setIsGalleryOpen(false)}
      />
    </section>
  );
}
