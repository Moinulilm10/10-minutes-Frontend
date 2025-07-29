import { Phone } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const ContactSection = () => {
  const { t } = useLanguage();
  return (
    <div className="w-[450px] md:w-[850px] lg:w-[900px]  ">
      <div className="container ">
        <div className="text-left">
          {/* Main Heading */}
          <h2 className="text-xl sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-bold text-black mb-8 sm:mb-3 md:mb-4 lg:mb-8">
            {t("more_asked_question")}
          </h2>

          {/* Phone Number Card */}
          <div className="inline-block ">
            <div className="bg-white rounded-lg hover:outline-1 outline-green-600  border border-gray-200 px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6">
              <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                {/* Phone Icon */}
                <div className="flex-shrink-0">
                  <Phone className="w-4 h-4 sm:w-3 sm:h-3 md:w-5 md:h-5 text-green-600" />
                </div>

                {/* Phone Number Text */}
                <div className="text-green-600">
                  <span className="text-base sm:text-base md:text-base lg:text-lg font-semibold">
                    {t("call_at_this_number")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
