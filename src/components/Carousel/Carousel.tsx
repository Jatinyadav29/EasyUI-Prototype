import { useState } from "react";

type Props = {};

const slides = [
  {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    alt: "Mountain landscape at dawn",
  },
  {
    url: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?auto=format&fit=crop&w=1200&q=80",
    alt: "Forest pathway shrouded in fog",
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80",
    alt: "Lush green hills during sunset",
  },
  {
    url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1200&q=80",
    alt: "Autumn trees surrounding a calm lake",
  },
];

const Carousel = (props: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg group">
      {/* Track */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full shrink-0">
            <img
              src={slide.url}
              alt={slide.alt}
              className="w-full h-96 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute top-1/2 left-4 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/75 transition-opacity opacity-80 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute top-1/2 right-4 -translate-y-1/2 p-2 rounded-full bg-black/40 text-white hover:bg-black/75 transition-opacity opacity-80 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Navigation Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index
                ? "bg-white scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
