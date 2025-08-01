import parse from "html-react-parser";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faq } from "../../api/faq.api";
import { useLanguage } from "../../context/LanguageContext";

const FAQ = ({ courseSlug }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [showAllContent, setShowAllContent] = useState(false);
  const [visibleCount, setVisibleCount] = useState(5);

  const { t } = useLanguage();

  const toggleSection = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };

  const toggleAllContent = () => {
    if (showAllContent) {
      setVisibleCount(5);
    } else {
      setVisibleCount(faqData.length);
    }
    setShowAllContent(!showAllContent);
  };

  const { data: faqData, isLoading, error } = faq({ courseSlug });

  if (isLoading) return <p>Loading testimonials...</p>;
  if (error) return <p>Failed to load testimonials.</p>;
  if (!faqData.length) return <p>No testimonials available.</p>;

  return (
    // <div className="w-[450px] md:w-[850px] lg:w-[900px]">
    //   <h1 className="text-2xl sm:text-2xl font-bold text-gray-900 mb-6">
    //     {t("faq_title")}
    //   </h1>

    //   <div className="space-y-4 border border-gray-200 rounded-lg shadow-xs">
    //     {faqData.map((item, index) => (
    //       <div
    //         key={item.id}
    //         className="bg-white border-b border-dashed border-gray-200 hover:bg-gray-50 m-0"
    //       >
    //         <button
    //           onClick={() => toggleSection(index)}
    //           className="w-full px-4 py-4 text-left flex items-center justify-between  transition-all duration-200"
    //         >
    //           <h2 className="text-base font-semibold text-gray-900 pr-4">
    //             {item.question}
    //           </h2>
    //           <ChevronDown
    //             className={`w-5 h-5 text-gray-600 transform transition-transform ${
    //               activeSection === index ? "rotate-180" : "rotate-0"
    //             }`}
    //           />
    //         </button>

    //         <div
    //           className={`transition-all duration-300 ease-in-out ${
    //             activeSection === index
    //               ? "max-h-[500px] opacity-100"
    //               : "max-h-0 opacity-0"
    //           } overflow-hidden px-4 pb-4`}
    //         >
    //           <div className="text-gray-800 text-base leading-relaxed">
    //             {parse(item.answer)}
    //           </div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   {/* Show All Content Button */}
    //   <div className="flex justify-center mt-6">
    //     <button
    //       onClick={toggleAllContent}
    //       className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 focus:outline-none "
    //     >
    //       <span className="text-gray-700 font-medium">
    //         {showAllContent ? t("view_less") : t("view_all_content")}
    //       </span>
    //       <div
    //         className={`transition-transform duration-300 ease-in-out ${
    //           showAllContent ? "rotate-180" : "rotate-0"
    //         }`}
    //       >
    //         <ChevronDown className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors duration-200" />
    //       </div>
    //     </button>
    //   </div>
    // </div>
    <div className="w-[450px] md:w-[850px] lg:w-[900px]">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">
        {t("faq_title")}
      </h1>

      <div className="space-y-4 border border-gray-200 rounded-lg shadow-xs">
        {faqData.slice(0, visibleCount).map((item, index, array) => {
          const isLast = index === array.length - 1;
          return (
            <div
              key={item.id}
              className={`bg-white ${
                !isLast ? "border-b border-dashed border-gray-200" : ""
              } hover:bg-gray-50 m-0`}
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full px-4 py-4 text-left flex items-center justify-between transition-all duration-200"
              >
                <h2 className="text-base font-semibold text-gray-900 pr-4">
                  {item.question}
                </h2>
                <ChevronDown
                  className={`w-5 h-5 text-gray-600 transform transition-transform ${
                    activeSection === index ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              <div
                className={`transition-all duration-300 ease-in-out ${
                  activeSection === index
                    ? "max-h-[500px] opacity-100"
                    : "max-h-0 opacity-0"
                } overflow-hidden px-4 pb-4`}
              >
                <div className="text-gray-800 text-base leading-relaxed">
                  {parse(item.answer)}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show All Content Button */}
      {faqData.length > 5 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={toggleAllContent}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all duration-200 focus:outline-none"
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
      )}
    </div>
  );
};

export default FAQ;
