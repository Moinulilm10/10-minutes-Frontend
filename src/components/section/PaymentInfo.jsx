import { X } from "lucide-react";
import { useState } from "react";

const PaymentInfo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const handleVideoLinkClick = () => {
    setIsVideoOpen(true);
    setShowVideo(false);
  };

  const handlePlayClick = () => {
    setShowVideo(true);
  };

  const handleCloseModal = () => {
    setIsVideoOpen(false);
    setShowVideo(false);
  };

  return (
    <>
      <div className="w-[450px] md:w-[850px] lg:w-[900px] py-6 md:py-8 lg:py-10 px-4">
        {/* Header Text */}
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-black mb-3 md:mb-6 text-left">
          যেভাবে পেমেন্ট করবেন
        </h2>

        {/* Payment Info Container */}
        <div className="border border-gray-300 rounded-lg md:rounded-xl p-6 md:p-8 lg:p-10 bg-white ">
          <p className="text-base md:text-lg lg:text-xl text-black leading-relaxed">
            কীভাবে পেমেন্ট করবেন তা বিস্তারিত জানতে{" "}
            <button
              onClick={handleVideoLinkClick}
              className="text-green-600 hover:text-green-700 underline font-medium transition-colors duration-200 cursor-pointer"
            >
              এই ভিডিওটি দেখুন
            </button>
          </p>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Container */}
            <div className="aspect-video w-full bg-gray-400 rounded-lg overflow-hidden">
              {!showVideo ? (
                // Grey background with centered text and play button
                // <div
                //   className="relative w-full h-full cursor-pointer flex flex-col items-center justify-center bg-gray-400"
                //   onClick={handlePlayClick}
                // >
                  {/* Bengali Text */}
                  {/* <div className="text-center mb-8 px-4">
                    <p className="text-black text-2xl md:text-3xl lg:text-4xl font-medium leading-tight">
                      কীভাবে অনলাইনে পেমেন্ট করে
                    </p>
                    <p className="text-black text-2xl md:text-3xl lg:text-4xl font-medium leading-tight mt-2">
                      টেন মিনিট স্কুল এর যেকোনো কোর্স ভর্তি হবেন।
                    </p>
                  </div> */}

                  {/* Play Button */}
                  {/* <div className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200 shadow-lg">
                    <div className="w-0 h-0 border-l-[20px] border-l-red-500 border-t-[14px] border-t-transparent border-b-[14px] border-b-transparent ml-1"></div>
                  </div> */}
                //   <img
                //     src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                //     alt="Play Icon"
                //     className="w-24 h-24 object-cover"
                //   />
                          // </div>
                <div className="relative w-full h-full cursor-pointer" onClick={handlePlayClick}>
                  <img
                    src="https://cdn.10minuteschool.com/images/how_to_payment_1707373301013.png"
                    alt="Payment Tutorial Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Grey overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <div className="bg-white bg-opacity-20 rounded-full p-4 hover:bg-opacity-30 transition-all duration-200">
                      <img
                        src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                        alt="Play Icon"
                        className="w-16 h-16 md:w-20 md:h-20"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                // YouTube Video
                <iframe
                  src="https://www.youtube.com/embed/5wfn60rmWX4?rel=0&autoplay=1"
                  title="Payment Tutorial Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PaymentInfo;
