import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const courseDetails = ({ courseSlug }) => {
  return useQuery({
    queryKey: ["course-details", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const courseDetailsData = courseData?.sections?.find(
        (section) => section.type === "about"
      );

      return courseDetailsData?.values || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
