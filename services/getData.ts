import { axiosClient } from "./axiosClient";

export const getData = async () => {
  const { data } = await axiosClient.get("/hqms/FDN-WP/0.1/wp");
  return data;
};
