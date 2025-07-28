import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const courseExclusiveFeatures = (courseSlug) => {
  return useQuery({
    queryKey: ["course-exclusive-features", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res?.data?.data;

      const exclusiveFeatureSection = courseData.sections?.find(
        (section) => section.type === "feature_explanations"
      );

      return exclusiveFeatureSection?.values || [];
    },
    enabled: !!courseSlug,
    staleTime: 1000 * 60 * 5,
  });
};
