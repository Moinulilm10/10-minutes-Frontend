import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const courseLearningOutcomes = (courseSlug) => {
  return useQuery({
    queryKey: ["course-learning-outcomes", courseSlug],
    queryFn: async () => {
      const response = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = response?.data?.data;

      const learningOutcomesSection = courseData.sections?.find(
        (section) => section.type === "pointers"
      );

      return learningOutcomesSection?.values || [];
    },
    enabled: !!courseSlug,
    staleTime: 1000 * 60 * 5,
  });
};
