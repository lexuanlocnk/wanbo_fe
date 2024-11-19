import React, { useState } from "react";
import AccountApi from "../../../api/AccountApi";

const AccountInfo = ({ userData, setUserData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedFullName, setEditedFullName] = useState(userData.username);
    const [editedPhone, setEditedPhone] = useState(userData.phone);
    const [error, setError] = useState("");

    const handleEditToggle = () => {
        setIsEditing(!isEditing);
    };

    const handleSave = async (e) => {
        e.preventDefault();
        const accountApi = new AccountApi();
        try {
            const response = await accountApi.postUploadInformation({
                fullname: editedFullName,
                phone: editedPhone
            });

            if (response.data.status === false) {
                setError(response.data.message || "lỗi");
            } else {
                setIsEditing(false);
                setUserData({ ...userData, username: editedFullName, phone: editedPhone });
            }
        } catch (error) {
            setError("Lỗi.");
        }
    };

    return (
        <div>
            <h4 className="mb-3">Thông tin tài khoản</h4>
            {isEditing ? (
                <>
                    <p className="d-flex  align-items-center">
                        Họ tên:
                        <input
                            className="ms-5"
                            type="text"
                            value={editedFullName}
                            onChange={(e) => setEditedFullName(e.target.value)}
                            style={{ border: "1px solid #ccc", padding: 4, borderRadius: 5 }}
                        />
                    </p>
                    <p className="d-flex  align-items-center">
                        Số điện thoại:
                        <input
                            className="ms-2"
                            type="text"
                            value={editedPhone}
                            onChange={(e) => setEditedPhone(e.target.value)}
                            style={{ border: "1px solid #ccc", padding: 4, borderRadius: 5 }}
                        />
                    </p>
                    <button onClick={handleSave} className="px-3 me-2" style={{
                        fontSize: 12,
                        border: "1px solid #ccc",
                        outline: "none",
                        borderRadius: 3,
                    }}>Lưu</button>
                    <button onClick={handleEditToggle} className="px-3" style={{
                        fontSize: 12,
                        border: "1px solid #ccc",
                        outline: "none",
                        borderRadius: 3,
                    }}>Hủy</button>
                </>
            ) : (
                <>
                    <p>Họ tên: <strong>{userData.username}</strong></p>
                    <p>Email: <strong>{userData.email}</strong></p>
                    <p>Số điện thoại: <strong>{userData.phone}</strong></p>
                    <button onClick={handleEditToggle} className="px-3" style={{
                        fontSize: 12,
                        border: "1px solid #ccc",
                        outline: "none",
                        borderRadius: 3,
                    }}>Chỉnh sửa</button>
                </>
            )}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default AccountInfo;
