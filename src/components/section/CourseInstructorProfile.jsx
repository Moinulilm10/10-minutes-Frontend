import { ChevronRight } from "lucide-react";
import { courseInstructorDetails } from "../../api/courseInstructorDetails.api";
import { useLanguage } from "../../context/LanguageContext";

const CourseInstructorProfile = ({ courseSlug }) => {
  const {
    data: instructor,
    isLoading,
    error,
  } = courseInstructorDetails(courseSlug);

  if (isLoading) return <div>Loading...</div>;
  if (error || !instructor) return <div>No instructor data found.</div>;

  const { t } = useLanguage();

  return (
    <div className="w-[450px] lg:w-[900px] py-6 px-0">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl md:text-xl lg:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
          {t("course_Instructor_Details_Title")}
        </h1>

        <div className="bg-white rounded-xl border border-gray-200 p-4 md:p-6 lg:p-8 hover:shadow-md transition-shadow duration-200">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-6">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-yellow-100 border-4 border-yellow-200">
                <img
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-0 mb-2 md:mb-3 cursor-pointer">
                    <h2 className="text-xl md:text-base lg:text-lg font-semibold text-gray-900 hover:text-green-600">
                      {instructor.name}
                    </h2>
                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-400 flex-shrink-0 hover:text-green-600" />
                  </div>

                  <div
                    className="space-y-1 md:space-y-2 text-sm md:text-base lg:text-base text-gray-700"
                    dangerouslySetInnerHTML={{ __html: instructor.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInstructorProfile;
