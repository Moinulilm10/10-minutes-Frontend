import {
  BookOpen,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Clock,
  Facebook,
  NotebookText,
  Phone,
  Play,
  Users,
  Video,
  Youtube,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0);

  const { t } = useLanguage();

  const videos = [
    { id: 1, title: "Course Introduction", thumbnail: "bg-green-400" },
    { id: 2, title: "Speaking Module", thumbnail: "bg-blue-400" },
    { id: 3, title: "Writing Module", thumbnail: "bg-purple-400" },
    { id: 4, title: "Reading Module", thumbnail: "bg-orange-400" },
    { id: 5, title: "Listening Module", thumbnail: "bg-red-400" },
    { id: 6, title: "Practice Tests", thumbnail: "bg-indigo-400" },
  ];

  const nextVideo = () => {
    setActiveVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setActiveVideo((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Video Player */}
        <div className="relative">
          <div className="aspect-video bg-gray-200 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
              <img
                src="https://via.placeholder.com/600x400/e5e7eb/374151?text=IELTS+Course+by+MUNZEREEN+SHAHID"
                alt="IELTS Course"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
                <button className="w-16 h-16 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg">
                  <Play className="w-6 h-6 text-gray-800 ml-1" />
                </button>
              </div>
            </div>

            {/* Badge */}
            <div className="absolute top-3 left-3 bg-slate-800 text-white px-2 py-1 rounded text-xs font-medium">
              {t("video_course.best_seller")}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevVideo}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
            >
              <ChevronLeft className="w-4 h-4 text-gray-700" />
            </button>
            <button
              onClick={nextVideo}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-md"
            >
              <ChevronRight className="w-4 h-4 text-gray-700" />
            </button>
          </div>

          {/* Video Thumbnails */}
          <div className="p-3 bg-gray-50">
            <div className="flex space-x-2 overflow-x-auto scrollbar-hide">
              {videos.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(index)}
                  className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden transition-all duration-200 ${
                    activeVideo === index
                      ? "ring-2 ring-green-500 ring-opacity-75"
                      : "hover:ring-2 hover:ring-gray-300"
                  }`}
                >
                  <div
                    className={`w-full h-full ${video.thumbnail} bg-opacity-60 flex items-center justify-center`}
                  >
                    <Play className="w-3 h-3 text-white" />
                  </div>
                </button>
              ))}
            </div>
          </div>
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

            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.students")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.duration")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Video className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.total_videos")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <ClipboardList className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.mock_tests")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <NotebookText className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.lecture_sheets")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Youtube className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.youtube_lectures")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <BookOpen className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.free_book")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Facebook className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.support_group")}
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-4 h-4 text-gray-600 flex-shrink-0" />
                <span className="text-gray-700">
                  {t("video_course.lifetime_access")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-5">
        <p className="text-sm text-gray-400">{t("ask_course_details")}</p>
        <div className="flex gap-2 items-center">
          <Phone className="w-4 h-4 text-green-400 fill-current" />
          <p className="text-sm text-green-400 underline">{t("phone_call")}</p>
        </div>
      </div>
    </>
  );
};

export default VideoSection;
