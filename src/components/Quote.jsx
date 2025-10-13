import Slider from "react-slick";

export default function Quote() {
  const quotes = [
    `Romans 12:2 - Don’t become like the people of this world. Instead, change the way you think. Then you will always be able to determine what God really wants—what is good, pleasing, and perfect.`,
    `Jeremiah 29:11 - "For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."`,
    `Philippians 4:6 - Never worry about anything. But in every situation let God know what you need in prayers and requests while giving thanks.`,
    `Isaiah 41:10 - Don’t be afraid, because I am with you. Don’t be intimidated; I am your God. I will strengthen you. I will help you. I will support you with my victorious right hand.`,
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
    <div className="quote-slider h-[20vh]">
      <Slider {...settings}>
        {quotes.map((quote, index) => (
          <div key={index} className="quote-slide">
            <div className="flex pt-8 text-center font-bold text-3xl justify-center items-center py-10 bg-gray-100 font-[Georgia,serif] italic">
              <p>{quote}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
