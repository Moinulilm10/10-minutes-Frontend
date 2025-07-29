import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const testimonialSlider = ({ courseSlug }) => {
  return useQuery({
    queryKey: ["testimonial-data", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const testimonialData = courseData?.sections?.find(
        (section) => section.type === "testimonials"
      );

      return testimonialData?.values || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
