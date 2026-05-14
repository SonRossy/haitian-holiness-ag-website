import React, { useState } from "react";

const galleryPhotos = [
  {
    title: "Pastoral Fellowship",
    src: "/gallery/pastor-greeting.jpg",
    featured: true,
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
  },
  {
    title: "Pastor Speaking",
    src: "/gallery/pastor-speaking.jpg",
  },
  {
    title: "Soloist",
    src: "/gallery/soloist.jpg",
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

function PhotoCard({ photo, className = "" }) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-lg bg-slate-200 shadow-sm ${className}`}
    >
      <img
        src={photo.src}
        alt={photo.title}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        loading={photo.featured ? "eager" : "lazy"}
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 to-transparent p-4 pt-12">
        <span className="text-sm font-semibold text-white">{photo.title}</span>
      </figcaption>
    </figure>
  );
}

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const featuredPhoto = galleryPhotos[0];
  const previewPhotos = galleryPhotos.slice(1, 5);
  const extraPhotos = galleryPhotos.slice(5);

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
              Holiness A.G.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="w-fit rounded-md bg-yellow-400 px-5 py-3 font-semibold text-slate-900 shadow-sm transition hover:brightness-95"
          >
            {showAll ? "Show Less" : "View Gallery"}
          </button>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <PhotoCard
            photo={featuredPhoto}
            className="aspect-[4/3] lg:aspect-auto lg:min-h-[520px]"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {previewPhotos.map((photo) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        </div>

        {showAll && (
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {extraPhotos.map((photo) => (
              <PhotoCard
                key={photo.src}
                photo={photo}
                className="aspect-[4/3]"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
