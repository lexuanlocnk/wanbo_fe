import axiosClient from "./axiosConfig";

class HomeApi {
  getMenuCategory = () => {
    const url = `/member/show-category-child/may-chieu-mini-wanbo`;
    return axiosClient.get(url);
  };
  getProduct = () => {
    const url = `/member/show-category/may-chieu-mini-wanbo`;
    return axiosClient.get(url);
  };
}

export default HomeApi;
