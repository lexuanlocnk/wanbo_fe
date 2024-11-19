import axiosClient from "./axiosConfig";

class CheckoutApi {
    postCheckoutApi = (data) => {
        const url = `/member/checkout`;
        return axiosClient.post(url, data);
    };
}

export default CheckoutApi;
