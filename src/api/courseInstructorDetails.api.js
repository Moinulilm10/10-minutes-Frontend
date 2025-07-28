import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const courseInstructorDetails = (courseSlug) => {
  return useQuery({
    queryKey: ["course-instructor", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const instructorSection = courseData.sections?.find(
        (section) => section.type === "instructors"
      );

      return instructorSection?.values?.[0] || null;
    },
    staleTime: 1000 * 60 * 5, // cache for 5 minutes
  });
};
