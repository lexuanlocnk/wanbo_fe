import axiosClient from "./axiosConfig";

class NewApi {
  getNewCategory = () => {
    const url = `/member/news-category/may-chieu-mini-wanbo`;
    return axiosClient.get(url);
  };
}

export default NewApi;
