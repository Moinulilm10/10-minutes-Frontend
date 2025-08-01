import { Check } from "lucide-react";
import { courseExclusiveFeatures } from "../../api/courseExclusiveFeatures.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseExclusiveFeatures = ({ courseSlug }) => {
  const { t } = useLanguage();

  const {
    data: exclusiveFeatures = [],
    isLoading,
    error,
  } = courseExclusiveFeatures(courseSlug);

  if (isLoading) return <div>Loading...</div>;
  if (error || !exclusiveFeatures.length)
    return <div>No features available</div>;

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px] py-6 md:py-8 lg:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">
          {t("course_exclusive_features")}
        </h1>

        {/* Main container */}
        <div className="bg-white rounded-2xl border border-gray-200 px-6 py-6 md:px-8 md:py-5 lg:px-10 lg:py-5 shadow-sm">
          {exclusiveFeatures.map((feature, index) => (
            <div key={feature.id}>
              <div className="mb-8 md:mb-6 lg:mb-10">
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-12 justify-between items-center">
                  {/* Left side - Content */}
                  <div className="">
                    <h2 className="text-xl md:text-lg lg:text-xl font-bold text-gray-900 mb-6 md:mb-8">
                      {feature.title}
                    </h2>

                    <div className="space-y-4 md:space-y-6">
                      {feature.checklist.map((checklistItem, checkIndex) => (
                        <div
                          key={checkIndex}
                          className="flex items-start gap-3 md:gap-4"
                        >
                          {/* Check icon */}
                          <div className="flex-shrink-0 mt-1">
                            <div className="w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-500 stroke-2" />
                            </div>
                          </div>

                          {/* Feature text */}
                          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
                            {checklistItem}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right side - Feature Image */}
                  <div className="w-full lg:w-60 xl:w-70">
                    <img
                      src={feature.file_url}
                      alt={feature.file_url}
                      width={250}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              {/* Divider (don't show after last item) */}
              {index < exclusiveFeatures.length - 1 && (
                <div className="border-t border-gray-200 mb-8 md:mb-12 lg:mb-16"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseExclusiveFeatures;
