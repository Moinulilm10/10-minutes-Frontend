import { ChevronLeft, ChevronRight, Phone } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";
import CourseFeatures from "../CourseFeatures";

const VideoSection = ({ media }) => {
  const { t } = useLanguage();

  const videoMedia = media?.filter(
    (item) =>
      item.resource_type === "video" &&
      typeof item.resource_value === "string" &&
      item.resource_value.trim().length > 0
  );

  const [activeVideo, setActiveVideo] = useState(0);

  const handleNext = () => {
    setActiveVideo((prev) => (prev + 1) % videoMedia.length);
  };

  const handlePrev = () => {
    setActiveVideo(
      (prev) => (prev - 1 + videoMedia.length) % videoMedia.length
    );
  };

  const getYouTubeEmbedUrl = (videoId) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-xl">
        {/* Video Player */}
        <div className="relative aspect-video bg-gray-200">
          {videoMedia.length > 0 ? (
            <iframe
              className="w-full h-full cursor-pointer"
              src={getYouTubeEmbedUrl(videoMedia[activeVideo].resource_value)}
              title={`YouTube video ${activeVideo}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              {t("video_course.no_videos")}
            </div>
          )}

          {/* Arrows */}
          {videoMedia.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4 text-gray-800" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1 cursor-pointer"
              >
                <ChevronRight className="w-4 h-4 text-gray-800" />
              </button>
            </>
          )}
        </div>

        {/* Thumbnails */}
        <div className="p-3 bg-gray-50 overflow-x-auto flex space-x-2 scrollbar-hide">
          {videoMedia.map((video, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(index)}
              className={`w-20 h-12 rounded overflow-hidden cursor-pointer ${
                index === activeVideo ? "ring-2 ring-green-500" : ""
              }`}
            >
              <img
                src={
                  video.thumbnail_url ||
                  `https://img.youtube.com/vi/${video.resource_value}/mqdefault.jpg`
                }
                alt="Thumbnail"
                className="w-full h-full object-cover cursor-pointer"
              />
            </button>
          ))}
        </div>

        {/* Course Info */}
        <div className="p-4 sm:p-6">
          {/* Price */}
          <div className="flex items-center space-x-3 mb-4">
            <span className="text-2xl sm:text-3xl font-bold text-gray-900">
              {t("video_course.price")}
            </span>
            <span className="text-lg text-gray-500 line-through">
              {t("video_course.old_price")}
            </span>
            <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-medium">
              {t("video_course.discount")}
            </span>
          </div>

          {/* Buy Button */}
          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 mb-6">
            {t("video_course.buy_button")}
          </button>

          {/* Course Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              {t("video_course.includes")}
            </h3>
            <CourseFeatures />
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="flex justify-between mt-5">
        <p className="text-sm text-gray-400">{t("ask_course_details")}</p>
        <div className="flex gap-2 items-center">
          <Phone className="w-4 h-4 text-green-400" />
          <p className="text-sm text-green-400 underline">{t("phone_call")}</p>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
