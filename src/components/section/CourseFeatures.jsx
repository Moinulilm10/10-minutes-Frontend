import { courseFeaturesDetails } from "../../api/courseStructure.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseFeatures = ({ courseSlug }) => {
  const { t } = useLanguage();

  const { data: feature, isLoading, error } = courseFeaturesDetails(courseSlug);

  if (isLoading) return <div>Loading features...</div>;
  if (error) return <div>Failed to load features.</div>;

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px] py-6 md:py-8 lg:py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main heading */}
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8 lg:mb-10">
          {t("course_structure")}
        </h1>

        {/* Features grid */}
        <div className="bg-gray-800 rounded-2xl p-6 md:p-8 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {feature.map((item) => (
              <div key={item.id} className="flex items-start gap-4 md:gap-5">
                {/* Icon */}
                {/* <div className="bg-green-500 rounded-full p-3 md:p-4 flex-shrink-0"> */}
                <img src={item.icon} alt={item.title} className="w-7 h-7" />
                {/* </div> */}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2 md:mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseFeatures;
