import "./App.css";
import CourseFeatures from "./components/section/CourseFeatures";
import CourseInstructorProfile from "./components/section/CourseInstructorProfile";
import PDFDownloadSection from "./components/section/PDFDownloadSection";
import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import NavigationSlider from "./components/shared/NavigationSlider";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Navbar />
      <ProductPage />
      <div className="container px-10 md:px-12 lg:px-32 space-y-12">
        <NavigationSlider />
        <CourseInstructorProfile courseSlug="ielts-course" />
        <CourseFeatures courseSlug="ielts-course" />
        <PDFDownloadSection courseSlug="ielts-course" />
      </div>
      <Footer />
    </>
  );
}

export default App;
