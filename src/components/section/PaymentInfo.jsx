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
      <div className="w-[450px] md:w-[850px] lg:w-[900px] ">
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
        <div className="fixed inset-0 bg-[rgba(28,28,28,0.7)] bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl w-full">
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute -top-12 right-0 z-10 text-white hover:text-gray-300 transition-colors duration-200"
            >
              <X className="w-8 h-8 cursor-pointer" />
            </button>

            {/* Video Container */}
            <div className="aspect-video w-full  rounded-lg overflow-hidden">
              {!showVideo ? (
                <div
                  className="relative w-full h-full cursor-pointer"
                  onClick={handlePlayClick}
                >
                  <img
                    src="https://cdn.10minuteschool.com/images/how_to_payment_1707373301013.png"
                    alt="Payment Tutorial Thumbnail"
                    className="w-full h-full object-cover"
                  />
                  {/* Grey overlay */}
                  <div className="absolute inset-0 bg-[rgba(0,0,0,0.7)]  bg-opacity-40 flex items-center justify-center hover:bg-opacity-30 transition-all duration-200">
                    <img
                      src="https://10minuteschool.com/images/annual_exam/play_icon_2.svg"
                      alt="Play Icon"
                      className="w-16 h-16 md:w-28 md:h-28"
                    />
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
