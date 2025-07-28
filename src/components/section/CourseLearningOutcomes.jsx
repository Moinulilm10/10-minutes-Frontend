import { Check } from "lucide-react";
import { courseLearningOutcomes } from "../../api/courseLearningOutcomes.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseLearningOutcomes = ({ courseSlug }) => {
  const { t } = useLanguage();

  const {
    data: learningPoints = [],
    isLoading,
    error,
  } = courseLearningOutcomes(courseSlug);

  if (isLoading) return <div>Loading...</div>;
  if (error || !learningPoints.length)
    return <div>No learning outcomes found.</div>;

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px] py-6 md:py-8 lg:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-black mb-6 md:mb-8 lg:mb-10">
          {t("learn_from_course")}
        </h1>

        {/* Learning outcomes container */}
        <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 lg:p-10 ">
          {/* Two column grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left column */}
            <div className="space-y-6 md:space-y-8">
              {learningPoints.slice(0, 3).map((point) => (
                <div key={point.id} className="flex items-start gap-4">
                  {/* Check icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full  flex items-center justify-center">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-500 stroke-2" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm md:text-base lg:text-base  leading-relaxed font-medium"
                      style={{ color: point.color || "#ddd" }}
                    >
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right column */}
            <div className="space-y-6 md:space-y-8">
              {learningPoints.slice(3, 6).map((point) => (
                <div key={point.id} className="flex items-start gap-4">
                  {/* Check icon */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 md:w-7 md:h-7 rounded-full  flex items-center justify-center">
                      <Check className="w-4 h-4 md:w-5 md:h-5 text-blue-500 stroke-2" />
                    </div>
                  </div>

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm md:text-base lg:text-base  leading-relaxed font-medium"
                      style={{ color: point.color || "#ddd" }}
                    >
                      {point.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningOutcomes;
