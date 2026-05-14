import Slider from "react-slick";

export default function Quote() {
  const quotes = [
    {
      reference: "Romans 12:2",
      text: "Don’t become like the people of this world. Instead, change the way you think. Then you will always be able to determine what God really wants—what is good, pleasing, and perfect.",
    },
    {
      reference: "Jeremiah 29:11",
      text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."',
    },
    {
      reference: "Philippians 4:6",
      text: "Never worry about anything. But in every situation let God know what you need in prayers and requests while giving thanks.",
    },
    {
      reference: "Isaiah 41:10",
      text: "Don’t be afraid, because I am with you. Don’t be intimidated; I am your God. I will strengthen you. I will help you. I will support you with my victorious right hand.",
    },
  ];

  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <section className="quote-slider bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6 text-center md:px-8">
        <div className="mx-auto mb-8 h-px w-24 bg-yellow-500" />
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow-600">
          Scripture of Encouragement
        </p>

        <Slider {...settings}>
          {quotes.map((quote) => (
            <div key={quote.reference} className="quote-slide">
              <div className="mx-auto flex min-h-56 max-w-4xl flex-col items-center justify-center px-2 py-8">
                <p className="font-[Georgia,serif] text-2xl font-semibold italic leading-relaxed text-slate-900 md:text-3xl">
                  “{quote.text}”
                </p>
                <p className="mt-6 text-base font-bold uppercase tracking-[0.16em] text-sky-900">
                  {quote.reference}
                </p>
              </div>
            </div>
          ))}
        </Slider>

        <div className="mx-auto mt-4 h-px w-24 bg-yellow-500" />
      </div>
    </section>
  );
}
