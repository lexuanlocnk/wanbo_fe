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

  getProductDetail = (urlProduct) => {
    const url = `/member/product-detail/${urlProduct}`;
    return axiosClient.get(url);
  };

  getFlashSale = () => {
    const url = `/member/show-all-flash-sale`;
    return axiosClient.get(url);
  };

  // api cho carrt
  postListCart = (data) => {
    const url = `/member/list-cart`;
    return axiosClient.post(url, data);
  };

  putListCart = (id, data) => {
    const url = `/member/list-cart/${id}`;
    return axiosClient.put(url, data);
  };

  getListCart = () => {
    const url = `/member/list-cart`;
    return axiosClient.get(url);
  };

  deleteListCart = (id) => {
    const url = `/member/list-cart/${id}`;
    return axiosClient.delete(url);
  };

  // api cho newtop
  getNewtop = () => {
    const url = `/member/news-top/may-chieu-mini-wanbo`;
    return axiosClient.get(url);
  };

  // search
  getSearch = (key) => {
    const url = `/member/search-product`;
    return axiosClient.get(url, key);
  };

}

export default HomeApi;
