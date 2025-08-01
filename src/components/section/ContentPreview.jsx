import { ChevronDown, FileText, Play } from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const ContentPreview = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [showAllContent, setShowAllContent] = useState(false);

  const { t } = useLanguage();

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const toggleAllContent = () => {
    setShowAllContent(!showAllContent);
  };

  const mainSections = [
    {
      title: "Introduction",
      content: [
        {
          type: "video",
          title: "Video: IELTS: Introduction",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Video: IELTS: Overview",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Video: How to Prepare for IELTS?",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Video: Making a Daily Routine",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Video: Different Sentence Structures to Improve Writing",
          status: "locked",
        },
        { type: "document", title: "IELTS General Facts", status: "locked" },
        { type: "document", title: "IELTS Vocabulary", status: "locked" },
      ],
    },
    {
      title: "IELTS Course by Munzereen Shahid | Exclusive Support Group",
      content: [
        {
          type: "video",
          title: "Support Group Introduction",
          status: t("watch_free"),
        },
        {
          type: "document",
          title: "Group Guidelines",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Weekly Live Sessions",
          status: t("watch_free"),
        },
      ],
    },
    {
      title: "Academic Reading",
      content: [
        {
          type: "video",
          title: "Reading Strategies Overview",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Skimming and Scanning Techniques",
          status: t("watch_free"),
        },
        {
          type: "document",
          title: "Reading Practice Materials",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Time Management in Reading",
          status: "locked",
        },
      ],
    },
    {
      title: "Academic Reading Mock Test",
      content: [
        {
          type: "document",
          title: "Mock Test 1 - Academic Reading",
          status: t("watch_free"),
        },
        {
          type: "document",
          title: "Mock Test 2 - Academic Reading",
          status: "locked",
        },
        { type: "video", title: "Mock Test Solutions", status: "locked" },
      ],
    },
    {
      title: "Listening",
      content: [
        {
          type: "video",
          title: "Listening Test Overview",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Note-taking Strategies",
          status: t("watch_free"),
        },
        {
          type: "document",
          title: "Listening Practice Tests",
          status: "locked",
        },
      ],
    },
  ];

  const additionalSections = [
    {
      title: "Writing Task 1",
      content: [
        {
          type: "video",
          title: "Task 1 Introduction",
          status: t("watch_free"),
        },
        {
          type: "video",
          title: "Graph Description Techniques",
          status: t("watch_free"),
        },
        { type: "document", title: "Sample Answers", status: "locked" },
      ],
    },
    {
      title: "Writing Task 2",
      content: [
        {
          type: "video",
          title: "Essay Writing Basics",
          status: t("watch_free"),
        },
        { type: "video", title: "Argument Development", status: "locked" },
        { type: "document", title: "Essay Templates", status: "locked" },
      ],
    },
    {
      title: "Speaking Test",
      content: [
        {
          type: "video",
          title: "Speaking Test Format",
          status: t("watch_free"),
        },
        { type: "video", title: "Fluency and Pronunciation", status: "locked" },
        { type: "document", title: "Common Speaking Topics", status: "locked" },
      ],
    },
  ];

  const allSections = showAllContent
    ? [...mainSections, ...additionalSections]
    : mainSections;

  const renderContentItem = (item, index) => (
    <div
      key={index}
      className={`flex items-center justify-between py-3 px-2 transition-all duration-300 ${
        activeSection !== null
          ? "opacity-100 translate-x-0"
          : "opacity-0 translate-x-2"
      }`}
      style={{
        transitionDelay:
          activeSection !== null ? `${index * 50 + 100}ms` : "0ms",
      }}
    >
      <div className="flex items-center space-x-3">
        <div
          className={`p-2 rounded-full ${
            item.status === "locked" ? "bg-gray-300" : "bg-green-500"
          }`}
        >
          {item.type === "video" ? (
            <Play
              className={`w-4 h-4 ${
                item.status === "locked" ? "text-gray-500" : "text-white"
              }`}
            />
          ) : (
            <FileText
              className={`w-4 h-4 ${
                item.status === "locked" ? "text-gray-500" : "text-white"
              }`}
            />
          )}
        </div>
        <span
          className={`text-sm sm:text-base ${
            item.status === "locked" ? "text-gray-500" : "text-gray-700"
          }`}
        >
          {item.title}
        </span>
      </div>
      {item.status !== "locked" && (
        <span className="text-xs sm:text-sm text-green-600 font-medium">
          {item.status}
        </span>
      )}
    </div>
  );

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px]">
      <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-6">
        {t("content_preview")}
      </h1>

      <div className="space-y-4 border border-gray-200 rounded-lg shadow-xs">
        {allSections.map((section, index) => (
          <div
            key={index}
            className="bg-white border-b border-dashed border-gray-200 m-0 overflow-hidden"
          >
            <button
              onClick={() => toggleSection(index)}
              className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-all duration-200 focus:outline-none "
            >
              <h2 className="text-base sm:text-lg font-semibold text-gray-900 pr-4 transition-colors duration-200 ">
                {section.title}
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
                  ? "max-h-96 opacity-100 translate-y-0"
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
                  <div className="mt-4 space-y-1">
                    {section.content.map((item, itemIndex) =>
                      renderContentItem(item, itemIndex)
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Show All Content Button */}
      <div className="flex justify-center mt-6 relative bottom-[50px]">
        <button
          onClick={toggleAllContent}
          className="flex items-center space-x-2 px-6 py-2 bg-gray-100 hover:bg-gray-200 rounded-4xl transition-all duration-200 focus:outline-none "
        >
          <span className="text-gray-700 font-medium">
            {showAllContent ? t("view_less") : t("view_all_content")}
          </span>
          <div
            className={`transition-transform duration-300 ease-in-out ${
              showAllContent ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default ContentPreview;
