import { courseFeaturesDetails } from "../../api/courseStructure.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseFeatures = ({ courseSlug }) => {
  const { t } = useLanguage();

  const { data: feature, isLoading, error } = courseFeaturesDetails(courseSlug);
  console.log("🚀 ~ CourseFeatures ~ feature:", feature);

  if (isLoading) return <div>Loading features...</div>;
  if (error) return <div>Failed to load features.</div>;

  //   const features = [
  //     {
  //       id: 1,
  //       icon: <Play className="w-6 h-6 md:w-7 md:h-7 text-white" />,
  //       iconBg: "bg-green-500",
  //       title: "৫০+ ভিডিও লেকচার",
  //       description:
  //         "IELTS Academic ও General Training এর Overview, Format ও প্রতেটি ধরন নিয়ে in-depth আলোচনা",
  //     },
  //     {
  //       id: 2,
  //       icon: <BookOpen className="w-6 h-6 md:w-7 md:h-7 text-white" />,
  //       iconBg: "bg-blue-500",
  //       title: "৩৮টি লেকচার শিট",
  //       description:
  //         "Reading, Writing, Listening ও Speaking এর প্রতিটি প্রশ্নের উত্তর করার স্ট্র্যাটেজি এবং 600+ Vocabulary",
  //     },
  //     {
  //       id: 3,
  //       icon: <FileText className="w-6 h-6 md:w-7 md:h-7 text-white" />,
  //       iconBg: "bg-orange-500",
  //       title: "রিডিং এন্ড লিসনিং মক টেস্ট",
  //       description:
  //         "10 Reading ও 10 Listening Mock Tests এর সাধ্যমে প্রস্তুতি যাচাই",
  //     },
  //     {
  //       id: 4,
  //       icon: <Headphones className="w-6 h-6 md:w-7 md:h-7 text-white" />,
  //       iconBg: "bg-red-500",
  //       title: "ডাউট সলভিং লাইভ ক্লাস",
  //       description:
  //         "সাপ্তাহিক ভুল ক্লাসে এক্সপার্ট টিচারের কাছে প্রবলেম সলভিং এর সুযোগ",
  //     },
  //   ];

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
