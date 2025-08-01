import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { courseDetails } from "../../api/courseDetails.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseDetails = ({ courseSlug }) => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const { t } = useLanguage();

  const {
    data: courseDetailsData,
    isLoading,
    isError,
  } = courseDetails({ courseSlug });
  console.log("🚀 ~ CourseDetails ~ courseDetailsData:", courseDetailsData);

  if (isLoading) {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (isError || !courseDetailsData.length) {
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load course details.
      </div>
    );
  }

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px]">
      <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-6 text-left">
        {t("course_details")}
      </h1>

      <div className="space-y-4 border border-gray-200 rounded-lg shadow-xs">
        {courseDetailsData.map((section, index) => (
          <div
            key={section.id}
            className={`bg-white overflow-hidden m-0 ${
              index !== courseDetailsData.length - 1
                ? "border-b border-dashed border-gray-200"
                : ""
            }`}
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-4 sm:px-6 py-4  sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 focus:outline-none "
            >
              <h2 className="text-base sm:text-lg font-medium text-gray-900 pr-4 transition-colors duration-200 ">
                {parse(section.title || "")}
              </h2>
              <div className="flex-shrink-0">
                <div
                  className={`transition-transform duration-300 ease-in-out ${
                    activeSection === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600  transition-colors duration-200" />
                </div>
              </div>
            </button>

            <div
              className={`transition-all duration-500 ease-in-out ${
                activeSection === index
                  ? "max-h-[999px] opacity-100 translate-y-0"
                  : "max-h-0 opacity-0 -translate-y-2"
              } overflow-hidden`}
            >
              <div
                className={`px-4 sm:px-6 pb-4 sm:pb-6 transition-all duration-500 delay-100 ${
                  activeSection === index
                    ? "transform translate-y-0"
                    : "transform -translate-y-4"
                }`}
              >
                <div className="pt-2 border-t border-gray-100">
                  {/* Render HTML list or paragraphs */}
                  {section.description?.includes("<li>") ? (
                    <ul className="space-y-3 mt-4 list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed">
                      {parse(section.description)}
                    </ul>
                  ) : (
                    <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-4 mt-4">
                      {parse(section.description)}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetails;
