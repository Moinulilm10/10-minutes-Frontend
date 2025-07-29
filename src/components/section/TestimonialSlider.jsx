import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { testimonialSlider } from "../../api/testimonialSlider.api";

// Mock data for testimonials
const testimonials = [
  {
    id: 1,
    name: "Junaed Bin Samad",
    score: "8.5",
    image: "/api/placeholder/60/60",
    videoThumbnail: "/api/placeholder/400/200",
    bgColor: "from-red-700 to-yellow-600",
  },
  {
    id: 2,
    name: "Shah Mohammad Rafi",
    score: "8",
    image: "/api/placeholder/60/60",
    videoThumbnail: "/api/placeholder/400/200",
    bgColor: "from-blue-700 to-purple-600",
  },
  {
    id: 3,
    name: "Fatima Rahman",
    score: "9",
    image: "/api/placeholder/60/60",
    videoThumbnail: "/api/placeholder/400/200",
    bgColor: "from-green-700 to-blue-600",
  },
  {
    id: 4,
    name: "Ahmed Hassan",
    score: "8.5",
    image: "/api/placeholder/60/60",
    videoThumbnail: "/api/placeholder/400/200",
    bgColor: "from-purple-700 to-pink-600",
  },
];

const TestimonialSlider = ({ courseSlug }) => {
  const {
    data: testimonialData,
    isLoading,
    error,
  } = testimonialSlider({ courseSlug });
  console.log("🚀 ~ TestimonialSlider ~ testimonialData:", testimonialData);

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= testimonials.length - settings.slidesToShow;

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px]">
      {/* Header */}
      <div className="text-left mb-6">
        <h2 className="text-2xl md:text-xl font-bold text-black mb-12">
          শিক্ষার্থীরা যা বলছে
        </h2>
      </div>

      {/* Slider Container */}
      <div className="relative">
        {/* Custom Arrow Buttons */}
        <button
          onClick={goToPrev}
          disabled={isAtStart}
          className={`absolute -left-10  top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
            isAtStart
              ? "bg-gray-400 text-gray-500 cursor-not-allowed"
              : "bg-gray-300 text-gray-700 hover:bg-gray-100 shadow-lg hover:shadow-xl"
          }`}
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={goToNext}
          disabled={isAtEnd}
          className={`absolute -right-10  top-1/2 -translate-y-1/2 z-10 w-10
             h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
               isAtEnd
                 ? "bg-gray-400 text-gray-500 cursor-not-allowed"
                 : "bg-gray-300 text-gray-700 hover:bg-gray-100 shadow-lg hover:shadow-xl"
             }`}
        >
          <ChevronRight size={24} />
        </button>

        {/* Slider */}
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="px-3">
                {/* Quote Icon */}
                <div className="relative top-4 left-0 z-10">
                  <div
                    class="absolute -top-4 left-5 flex h-[38px] w-[38px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
                    id="quote"
                  >
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 20 30"
                      >
                        <path
                          fill="#D33242"
                          d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                        ></path>
                      </svg>
                    </div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        fill="none"
                        viewBox="0 0 20 30"
                      >
                        <path
                          fill="#D33242"
                          d="M10.699 10.753c1.019-1.82 2.871-3.777 6.021-5.642.88-.5 1.436-1.41 1.436-2.366 0-1.957-2.038-3.322-3.89-2.503C8.938 2.562 0 8.342 0 20.308 0 25.677 4.4 30 9.819 30c5.419 0 9.865-4.323 9.865-9.692 0-5.005-3.937-9.1-8.985-9.555z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-full p-6">
                  {/* Video Thumbnail */}
                  <div className="relative h-48 md:h-56 overflow-hidden">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${testimonial.bgColor} opacity-90`}
                    ></div>

                    {/* Mock video content */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-4xl md:text-6xl font-bold mb-2">
                          {testimonial.score}
                        </div>
                        <div className="text-sm md:text-base">IELTS Score</div>
                      </div>
                    </div>

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg">
                        <img
                          className="w-20 h-20"
                          src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                          alt="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                        />
                      </button>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-4 right-4 w-16 h-16 border-2 border-white border-opacity-30 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-8 h-8 bg-white bg-opacity-20 transform rotate-45"></div>
                  </div>

                  {/* Profile Section */}
                  <div className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden flex-shrink-0">
                        <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500"></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-800 truncate">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          IELTS Score: {testimonial.score}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Add required CSS for slick carousel */}
      <style jsx global>{`
        .slick-slider {
          position: relative;
          display: block;
          box-sizing: border-box;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
          touch-action: pan-y;
          -webkit-tap-highlight-color: transparent;
        }

        .slick-list {
          position: relative;
          display: block;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }

        .slick-list:focus {
          outline: none;
        }

        .slick-track {
          position: relative;
          top: 0;
          left: 0;
          display: block;
          margin-left: auto;
          margin-right: auto;
        }

        .slick-track:before,
        .slick-track:after {
          display: table;
          content: "";
        }

        .slick-track:after {
          clear: both;
        }

        .slick-slide {
          display: none;
          float: left;
          height: auto;
          min-height: 1px;
        }

        .slick-slide.slick-loading img {
          display: none;
        }

        .slick-slide.slick-loading {
          text-align: center;
        }

        .slick-initialized .slick-slide {
          display: block;
        }

        .slick-loading .slick-slide {
          visibility: hidden;
        }

        .slick-vertical .slick-slide {
          display: block;
          height: auto;
          border: 1px solid transparent;
        }
      `}</style>
    </div>
  );
};

export default TestimonialSlider;
