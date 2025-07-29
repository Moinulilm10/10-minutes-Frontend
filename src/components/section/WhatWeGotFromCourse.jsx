import courseBundle from "../../assets/img/bundle_course.jpeg";
import backgroundImage from "../../assets/img/what_we_got_from_course_background.jpeg";
import { useLanguage } from "../../context/LanguageContext";

const WhatWeGotFromCourse = () => {
  const { t } = useLanguage();

  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px] ">
      {/* Header Text */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-800 mb-8 text-center md:text-left">
        {t("what_we_get.header")}
      </h2>

      {/* Main Banner Container */}
      <div
        className="relative rounded-lg md:rounded-3xl overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Glass effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>

        <div className="relative flex flex-col lg:flex-row items-center justify-between py-6 px-8 md:py-8 md:px-20 lg:py-12 lg:px-32">
          {/* Left Content */}
          <div className="text-white mb-8 lg:mb-0 lg:pr-8">
            {/* Main Title */}
            <h1 className="text-base md:text-lg lg:text-xl xl:text-xl font-bold mb-3 md:mb-5 leading-tight">
              {t("what_we_get.title")}
            </h1>

            {/* Features List */}
            <ul className="space-y-2 md:space-y-4 text-base md:text-base lg:text-lg">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 md:mt-2.5 mr-4 md:mr-6"></div>
                <span>{t("what_we_get.pages")}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 md:mt-2.5 mr-4 md:mr-6"></div>
                <span>{t("what_we_get.hardcopy")}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 md:mt-2.5 mr-4 md:mr-6"></div>
                <span>{t("what_we_get.delivery")}</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-white rounded-full mt-2 md:mt-2.5 mr-4 md:mr-6"></div>
                <span>{t("what_we_get.nationwide")}</span>
              </li>
            </ul>
          </div>

          {/* Right Image */}
          <div className="">
            <div className="relative">
              <img
                src={courseBundle}
                alt="IELTS Course Bundle"
                className="w-[150px] h-[200px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeGotFromCourse;
