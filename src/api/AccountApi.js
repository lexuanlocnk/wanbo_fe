import axiosClient from "./axiosConfig";

class AccountApi {
    postLogin = (data) => {
        const url = `/member/login-member`;
        return axiosClient.post(url, data);
    };
    postRegister = (data) => {
        const url = `/member/register-member`;
        return axiosClient.post(url, data);
    };
    postforgetPassword = (data) => {
        const url = `/member/member-forgetPassword`;
        return axiosClient.post(url, data);
    };
    postforgetPasswordChange = (data) => {
        const url = `/member/member-forgetPasswordChange`;
        return axiosClient.post(url, data);
    };

    postUploadInformation = (data) => {
        const url = `/member/upload-information-member`;
        return axiosClient.post(url, data);
    };

    //lấy thông tin user
    getInformation = () => {
        const url = `/member/information-member`;
        return axiosClient.get(url);
    };

    //thêm thông tin user về địa chỉ
    getAddress = () => {
        const url = `/member/show-address-member`;
        return axiosClient.get(url);
    };

}

export default AccountApi;
