import axiosClient from "./axiosClient";

export const fetchIELTSCourse = async () => {
  const res = await axiosClient.get("/products/ielts-course");
  return res.data.data;
};
