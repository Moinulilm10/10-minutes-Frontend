import { Download } from "lucide-react";
import { pdfDownloadSection } from "../../api/downloadSection.api";

const PDFDownloadSection = ({ courseSlug }) => {
  const {
    data: pdfDataList,
    isLoading,
    error,
  } = pdfDownloadSection({ courseSlug });

  if (isLoading) return <div>Loading...</div>;
  if (error || !pdfDataList?.length) return <div>No PDF data found.</div>;

  const pdfData = pdfDataList[0];

  console.log(typeof pdfData);

  return (
    <div
      style={{
        backgroundImage: `url(${pdfData.background?.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-[450px] md:w-[850px] lg:w-[900px] py-1 md:py-2 lg:py-2 px-4 rounded-2xl"
    >
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-stretch min-h-[400px]">
            {/* Left side - Content */}
            <div className="flex-1 p-6 md:p-8 lg:p-8 flex flex-col gap-2 justify-start items-start">
              {/* Top Left Icon and Title */}
              <div className="flex items-start justify-start">
                <img
                  src={pdfData.top_left_icon_img}
                  alt="PDF Icon"
                  className="w-full h-[40px]  object-contain"
                />
              </div>

              {/* Title */}
              <h1
                className="text-2xl md:text-lg lg:text-xl xl:text-2xl font-bold mb-4 md:mb-6 leading-tight"
                style={{ color: pdfData.title_color || "#fff" }}
              >
                {pdfData.title}
              </h1>

              {/* Description */}
              <p
                className="text-lg md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed"
                style={{ color: pdfData.description_color || "#ddd" }}
              >
                {pdfData.description}
              </p>

              {/* Download Button */}
              <a
                href={pdfData.cta?.clicked_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold text-base md:text-xl py-4 md:py-3 px-4 md:px-5 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3 w-fit"
              >
                <Download className="w-5 h-5 md:w-6 md:h-6" />
                {pdfData.cta?.text || "Download PDF"}
              </a>
            </div>

            {/* Right side - Image or Empty */}
            <div className="flex-1 p-6 md:p-8 lg:p-16 relative">
              {pdfData.thumbnail && (
                <img
                  src={pdfData.thumbnail}
                  alt="PDF Thumbnail"
                  className="rounded-xl object-cover w-full h-full"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDFDownloadSection;
