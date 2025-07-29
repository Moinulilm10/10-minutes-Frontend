import { Check } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const WhatYouNeedForAttendClass = () => {
  const { t } = useLanguage();
  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px] py-6 md:py-8 lg:py-10">
      {/* Header Text */}
      <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-black mb-6 md:mb-8 text-left">
        {t("what_you_need.title")}
      </h2>

      {/* Requirements Container */}
      <div className="border border-gray-300 rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 bg-white ">
        <div className="space-y-4 md:space-y-6">
          {/* First Requirement */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
            </div>
            <p className="text-base md:text-base lg:text-lg text-black leading-relaxed">
              {t("what_you_need.internet")}
            </p>
          </div>

          {/* Second Requirement */}
          <div className="flex items-start gap-3 md:gap-4">
            <div className="flex-shrink-0 mt-1">
              <Check className="w-4 h-4 text-blue-500" strokeWidth={2.5} />
            </div>
            <p className="text-base md:text-base lg:text-lg text-black leading-relaxed">
              {t("what_you_need.device")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouNeedForAttendClass;
