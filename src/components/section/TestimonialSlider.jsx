import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import { testimonialSlider } from "../../api/testimonialSlider.api";
import { useLanguage } from "../../context/LanguageContext";

const TestimonialSlider = ({ courseSlug }) => {
  const sliderRef = useRef(null);
  const [playingIndex, setPlayingIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    data: testimonials = [],
    isLoading,
    error,
  } = testimonialSlider({ courseSlug });

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

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Failed to load testimonials.</p>;
  if (!testimonials.length) return <p>No testimonials available.</p>;

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= testimonials.length - settings.slidesToShow;

  const { t } = useLanguage();

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px]">
      {/* Header */}
      <div className="text-left mb-6">
        <h2 className="text-2xl md:text-2xl font-bold text-black mb-12">
          {t("students_feedback")}
        </h2>
      </div>
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
        <div className="">
          <Slider ref={sliderRef} {...settings}>
            {testimonials.map((testimonial, index) => {
              const hasVideo = testimonial.video_url?.trim();
              const isPlaying = playingIndex === index;

              return (
                <div key={testimonial.id || index} className="px-3">
                  <div className="relative top-4 left-0 z-10">
                    <div
                      class="relative top-2 left-5 flex h-[45px] w-[45px] flex-row items-center justify-center rounded-full bg-[#FCE0D6] p-2"
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
                  <div className="bg-white rounded-2xl  border-1 border-gray-300 overflow-hidden h-full p-6">
                    {/* --- Video or Text Content --- */}
                    {hasVideo ? (
                      <div className="relative h-48 md:h-56 overflow-hidden rounded-lg">
                        {isPlaying ? (
                          <iframe
                            className="w-full h-full rounded-lg"
                            src={`https://www.youtube.com/embed/${testimonial.video_url}?autoplay=1`}
                            title="Testimonial Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          <div className="relative w-full h-full">
                            <img
                              src={testimonial.thumb}
                              alt={`Thumbnail for ${testimonial.name}`}
                              className="object-cover w-full h-full rounded-lg"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                              <button
                                onClick={() => setPlayingIndex(index)}
                                className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-200 shadow-lg"
                              >
                                <img
                                  className="w-20 h-20"
                                  src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                                  alt="play_icon"
                                />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className=" p-4 h-48 md:h-56 overflow-y-auto text-base leading-relaxed text-gray-800   border-b-1 border-gray-300">
                        {testimonial.testimonial}
                      </div>
                    )}

                    {/* --- Profile Info --- */}
                    <div className="pt-6 flex items-center space-x-4">
                      <img
                        src={testimonial.profile_image}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">
                          {testimonial.name}
                        </h3>
                        <p className="text-gray-400 text-sm">
                          {testimonial.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
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
