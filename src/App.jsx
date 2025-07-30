import "./App.css";
import ContactSection from "./components/section/ContactSection";
import CourseExclusiveFeatures from "./components/section/CourseExclusiveFeatures";
import CourseFeatures from "./components/section/CourseFeatures";
import CourseInstructorProfile from "./components/section/CourseInstructorProfile";
import CourseLearningOutcomes from "./components/section/CourseLearningOutcomes";
import MoreCarousel from "./components/section/MoreCarousel";
import PaymentInfo from "./components/section/PaymentInfo";
import PDFDownloadSection from "./components/section/PDFDownloadSection";
import TestimonialSlider from "./components/section/TestimonialSlider";
import WhatWeGotFromCourse from "./components/section/WhatWeGotFromCourse";
import WhatYouNeedForAttendClass from "./components/section/WhatYouNeedForAttendClass";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import NavigationSlider from "./components/shared/NavigationSlider";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <ProductPage />
      <div className="container px-10 md:px-12 lg:px-32 space-y-8">
        <NavigationSlider />
        <CourseInstructorProfile courseSlug="ielts-course" />
        <CourseFeatures courseSlug="ielts-course" />
        <PDFDownloadSection courseSlug="ielts-course" />
        <CourseLearningOutcomes courseSlug="ielts-course" />
        <CourseExclusiveFeatures courseSlug="ielts-course" />
        <WhatWeGotFromCourse />
        <WhatYouNeedForAttendClass />
        <ContactSection />
        <TestimonialSlider courseSlug="ielts-course" />
        <PaymentInfo />
      </div>
      <div className="px-10 md:px-12 lg:px-32 space-y-8 mt-16">
        <MoreCarousel />
      </div>
      <Footer />
    </>
  );
}

export default App;
