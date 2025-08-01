import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { useLanguage } from "../../context/LanguageContext";

const CourseCarousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);

  const { t } = useLanguage();

  const courses = [
    {
      id: 1,
      title: "IELTS LIVE Batch",
      instructor: "Zawad Hasan Adib, Saraf Samanth...",
      price: "৳ 8500",
      originalPrice: "৳10000",
      image:
        "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg",
      badge: "",
      badgeColor: "bg-red-600",
    },
    {
      id: 2,
      title: "ঘরে বসে Spoken English",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      originalPrice: null,
      image:
        "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
      badge: null,
      badgeColor: "",
    },
    {
      id: 3,
      title: "Email Marketing করে Freelancing",
      instructor: "Tisat Fatema Tia",
      price: "৳ 1950",
      originalPrice: null,
      image:
        "https://cdn.10minuteschool.com/images/catalog/media/16x9_1732445853307.jpg",
      badge: "",
      badgeColor: "bg-orange-500",
    },
    {
      id: 4,
      title: "Complete English Grammar Course",
      instructor: "Munzereen Shahid",
      price: "৳ 1950",
      originalPrice: null,
      image:
        "https://cdn.10minuteschool.com/images/thumbnails/complete-grammar-course-thumbnail.jpg",
      badge: null,
      badgeColor: "",
    },
    {
      id: 5,
      title: "Advanced Speaking Course",
      instructor: "Munzereen Shahid",
      price: "৳ 2500",
      originalPrice: null,
      image:
        "https://cdn.10minuteschool.com/images/thumbnails/skills/youtube-marketing-course-thumbnail.jpg",
      badge: "",
      badgeColor: "bg-green-600",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (current) => setCurrentSlide(current),
  };

  const goToPrev = () => {
    sliderRef.current?.slickPrev();
  };

  const goToNext = () => {
    sliderRef.current?.slickNext();
  };

  // Calculate if we're at start or end
  const getSlidesToShow = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 768) return 2;
      if (window.innerWidth < 1024) return 3;
      return 4;
    }
    return 4;
  };

  const isAtStart = currentSlide === 0;
  const isAtEnd = currentSlide >= courses.length - getSlidesToShow();

  return (
    <div className="w-full  ">
      <div className="container ">
        {/* Header with Navigation */}
        <div className="flex justify-between items-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-gray-900">
            {t("course_for_you")}
          </h2>

          {/* Navigation Arrows */}
          <div className="flex space-x-2">
            <button
              onClick={goToPrev}
              disabled={isAtStart}
              className={`w-8 h-8  rounded-full flex items-center justify-center transition-all duration-200 ${
                isAtStart
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              <ChevronLeft className="w-5 h-5 " />
            </button>

            <button
              onClick={goToNext}
              disabled={isAtEnd}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${
                isAtEnd
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-600 text-white hover:bg-gray-700"
              }`}
            >
              <ChevronRight className="w-5 h-5 " />
            </button>
          </div>
        </div>

        {/* Course Cards - React Slick Slider */}
        <Slider ref={sliderRef} {...settings}>
          {courses.map((course) => (
            <div key={course.id} className="">
              <div className="border border-[#E5E7EB]  my-0 flex h-full max-w-[320px] cursor-pointer flex-col overflow-hidden rounded transition-colors hover:border-green-500 md:min-w-[272px] md:rounded-[6px]">
                {/* Course Image */}
                <div className="relative   overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Course Info */}
                <div className="p-2 mt-5">
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-base mb-2 line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-600 text-xs sm:text-sm mb-3">
                    {course.instructor}
                  </p>

                  {/* Price */}
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600 font-bold text-lg sm:text-xl">
                      {course.price}
                    </span>
                    {course.originalPrice && (
                      <span className="text-gray-400 line-through text-sm">
                        {course.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseCarousel;
