import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
const ChangePassword = () => {
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Kiểm tra mật khẩu nhập lại
        if (newPassword !== confirmPassword) {
            setError("Mật khẩu nhập lại không khớp.");
            return;
        }

        // Reset thông báo lỗi
        setError("");
        setSuccessMessage("");

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                setError("Bạn chưa đăng nhập.");
                return;
            }

            const response = await axios.post(
                "http://192.168.245.190:8002/api/member/upload-information-member",
                {
                    password: newPassword,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            console.log(">>>>>>>>>", response)

            if (response.data.status === true) {
                setNewPassword("")
                setConfirmPassword("")
                toast.success("Đổi mật khẩu thành công!");
                setSuccessMessage("Đổi mật khẩu thành công!");

            } else {
                setError(response.data?.message || "Đã xảy ra lỗi.");
            }
        } catch (error) {
            setError(error.response?.data?.message || "Đã xảy ra lỗi khi kết nối đến server.");
        }
    };

    return (
        <div>
            <h5>Đổi mật khẩu</h5>
            <p>Để đảm bảo tính bảo mật, bạn vui lòng đặt lại mật khẩu với ít nhất 8 ký tự.</p>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Mật khẩu mới</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Nhập mật khẩu mới"
                        minLength="8"
                        required
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label>Nhập lại mật khẩu mới</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Nhập lại mật khẩu mới"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-danger">{error}</p>}
                {successMessage && <p className="text-success">{successMessage}</p>}
                <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
            </form>
        </div>
    );
};

export default ChangePassword;
