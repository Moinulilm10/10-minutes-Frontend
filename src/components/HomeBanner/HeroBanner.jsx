import { useQuery } from "@tanstack/react-query";
import { Star } from "lucide-react";
import { fetchIELTSCourse } from "../../api/products.api";
import heroBannerPic from "../../assets/img/banner-bg.jpeg";
import { useLanguage } from "../../context/LanguageContext";
import VideoSection from "./VideoSection";

const HomeBanner = () => {
  const { t } = useLanguage();

  const { data, isLoading, error } = useQuery({
    queryKey: ["ielts-course"],
    queryFn: fetchIELTSCourse,
  });

  if (isLoading)
    return <div className="text-center text-white py-10">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500 py-10">
        Failed to load course data.
      </div>
    );

  return (
    <div
      className="relative w-full bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBannerPic})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[400px] lg:min-h-[500px] py-8 lg:py-16">
          <div className="w-full lg:w-1/2 text-white mb-8 lg:mb-0 text-center lg:text-left">
            {/* Title from API */}
            <h1 className="text-2xl sm:text-lg md:text-xl lg:text-3xl xl:text-4xl font-bold mb-4 lg:mb-6">
              {data.title}
            </h1>

            {/* Star Rating */}
            <div className="flex items-center justify-center lg:justify-start mb-4 lg:mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="ml-3 text-sm sm:text-base text-gray-200">
                ( {t("course_review_text")} )
              </span>
            </div>

            {/* Description from API (HTML content) */}
            <div
              className="text-sm sm:text-base md:text-lg lg:text-lg text-gray-200 leading-relaxed max-w-7xl mx-auto lg:mx-0"
              dangerouslySetInnerHTML={{ __html: data.description }}
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative lg:absolute lg:top-30 lg:right-8 xl:right-16 2xl:right-24">
            <VideoSection media={data.media} />
          </div>
        </div>
      </div>
      {/* Additional spacing for overlapping content */}
      {/* <div className="hidden lg:block h-32 xl:h-40"></div> */}
    </div>
  );
};

export default HomeBanner;
