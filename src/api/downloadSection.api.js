import { useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

export const downloadSection = ({ courseSlug }) => {
  return useQuery({
    queryKey: ["pdf-downloads", courseSlug],
    queryFn: async () => {
      const res = await axiosClient.get(`/products/${courseSlug}`);
      const courseData = res.data?.data;

      const pdfSection = courseData?.sections?.find(
        (section) => section.type === "group_join_engagement"
      );

      return pdfSection?.values || [];
    },
    staleTime: 1000 * 60 * 5,
  });
};
