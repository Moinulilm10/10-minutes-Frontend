import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const faq = ({ courseSlug }) => {
  return useQuery({
    queryKey: ["faq-data", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const faqData = courseData?.sections?.find(
        (section) => section.type === "faq"
      );

      return faqData?.values || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
