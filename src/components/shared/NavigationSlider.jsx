import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { useLanguage } from "../../context/LanguageContext";

const NavigationSlider = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeSlideIndex, setActiveSlideIndex] = useState(null);
  const [slidesToShow, setSlidesToShow] = useState(4);

  const { t } = useLanguage();

  const slides = [
    "course_intro",
    "course_structure",
    "course_learnings",
    "course_details",
    "exclusive_features",
    "free_with_course",
    "student_feedback",
    "faq",
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
    ],
  };

  const goToPrev = () => sliderRef.current?.slickPrev();
  const goToNext = () => sliderRef.current?.slickNext();

  const maxSlides = slides.length - slidesToShow;
  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= maxSlides;

  return (
    <div className="w-[900px] bg-white z-50 sticky top-0 ">
      <div className="hidden md:block">
        <div className="relative flex items-center">
          {/* Left Arrow */}
          <button
            onClick={goToPrev}
            disabled={isAtStart}
            className={`hidden lg:flex absolute left-6 z-10 w-10 h-10 items-center justify-center rounded-full bg-gray-400 border border-gray-400 shadow-sm transition-all duration-200 ${
              isAtStart
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-accent hover:text-accent-foreground cursor-pointer"
            }`}
            style={{ transform: "translateX(-50%)" }}
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          {/* Slider */}
          <div className="w-full px-0 lg:px-6">
            <Slider ref={sliderRef} {...settings}>
              {slides.map((key, index) => (
                <div key={index} className="px-0 border-b border-gray-200">
                  <div
                    className={`flex items-center justify-center min-h-[55px] px-4 text-center border-b-1 cursor-pointer transition-colors duration-200 ${
                      activeSlideIndex === index
                        ? "text-green-600 border-green-600"
                        : "text-gray-500 border-transparent"
                    } hover:text-green-600 hover:border-green-600`}
                    onClick={() => setActiveSlideIndex(index)}
                  >
                    <span className="text-base font-medium whitespace-nowrap">
                      {t(key)}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goToNext}
            disabled={isAtEnd}
            className={`hidden lg:flex absolute right-6 z-10 w-10 h-10 items-center justify-center rounded-full bg-gray-400 border border-gray-400 shadow-sm transition-all duration-200 ${
              isAtEnd
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-accent hover:text-accent-foreground cursor-pointer"
            }`}
            style={{ transform: "translateX(50%)" }}
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Mobile hidden */}
      <div className="block md:hidden">{/* Hidden on mobile */}</div>
    </div>
  );
};

export default NavigationSlider;
