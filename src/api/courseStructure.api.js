import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const courseFeaturesDetails = (courseSlug) => {
  return useQuery({
    queryKey: ["course-features", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const featuresSection = courseData.sections?.find(
        (section) => section.type === "features"
      );

      return featuresSection?.values || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
