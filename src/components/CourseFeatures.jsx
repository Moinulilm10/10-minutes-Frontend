import {
  BookOpen,
  Calendar,
  ClipboardList,
  Clock,
  Facebook,
  NotebookText,
  Users,
  Video,
  Youtube,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

// Reusable component
const CourseFeatureItem = ({ icon: Icon, label }) => (
  <div className="flex items-center space-x-3">
    <Icon className="w-4 h-4 text-gray-600" />
    <span className="text-gray-700">{label}</span>
  </div>
);

const CourseFeatures = () => {
  const { t } = useLanguage();

  const features = [
    { icon: Users, label: t("video_course.students") },
    { icon: Clock, label: t("video_course.duration") },
    { icon: Video, label: t("video_course.total_videos") },
    { icon: ClipboardList, label: t("video_course.mock_tests") },
    { icon: NotebookText, label: t("video_course.lecture_sheets") },
    { icon: Youtube, label: t("video_course.youtube_lectures") },
    { icon: BookOpen, label: t("video_course.free_book") },
    { icon: Facebook, label: t("video_course.support_group") },
    { icon: Calendar, label: t("video_course.lifetime_access") },
  ];

  return (
    <div className="space-y-3 text-sm">
      {features.map((item, index) => (
        <CourseFeatureItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default CourseFeatures;
