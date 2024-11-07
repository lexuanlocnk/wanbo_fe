import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InformationCategory from "./InformationCategory";
import axios from "axios";
import { Button } from "react-bootstrap";
import AccountApi from "../../api/AccountApi";

const Information = () => {
    const [selectedComponent, setSelectedComponent] = useState("info");
    const [userData, setUserData] = useState({ email: "", username: "" });
    const [error, setError] = useState("");


    //chỉnh sửa info
    const [isEditing, setIsEditing] = useState(false);
    const [editedFullName, setEditedFullName] = useState(userData.username);
    const [editedPhone, setEditedPhone] = useState(userData.phone);

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
            }
        } catch (error) {
            setError("Email hoặc mật khẩu không chính xác.");
        }
    };

    // lấy thông tin user
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://192.168.245.190:8002/api/member/information-member", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setUserData({
                        email: response.data.member.email,
                        username: response.data.member.full_name,
                        phone: response.data.member.phone,
                    });
                    // console.log(">>>>>>>>>>>", response.data.member.full_name)
                })
                .catch(err => {
                    setError("Không thể tải thông tin tài khoản");
                });
        } else {
            setError("Không tìm thấy tài khoản");
        }
    }, [isEditing]);

    const handleSelect = (component) => {
        setSelectedComponent(component);
    };

    const renderContent = () => {
        switch (selectedComponent) {
            case "info":
                return (
                    <div>
                        <h4 className="mb-3">Thông tin tài khoản</h4>
                        {isEditing ? (
                            <>
                                <p className="d-flex justify-content-between align-items-center">
                                    Họ tên:
                                    <div className="text-end">
                                        <input
                                            className=""
                                            type="text"
                                            value={editedFullName}
                                            onChange={(e) => setEditedFullName(e.target.value)}
                                            style={{
                                                border: "1px solid #ccc",
                                                outline: "none",
                                                padding: 4,
                                                borderRadius: 5,
                                            }}
                                        />
                                    </div>
                                </p>
                                <p className="d-flex justify-content-between align-items-center">
                                    Số điện thoại:
                                    <input
                                        className="ms-1"
                                        type="text"
                                        value={editedPhone}
                                        onChange={(e) => setEditedPhone(e.target.value)}
                                        style={{
                                            border: "1px solid #ccc",
                                            outline: "none",
                                            padding: 4,
                                            borderRadius: 5,
                                        }}
                                    />
                                </p>
                                <button onClick={handleSave} className="px-3 me-2"
                                    style={{
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
            case "orders":
                return <div>Đơn hàng của bạn</div>;
            case "changePassword":
                return (
                    <div>
                        <h5>Đổi mật khẩu</h5>
                        <p>Để đảm bảo tính bảo mật, bạn vui lòng đặt lại mật khẩu với ít nhất 8 ký tự.</p>
                        <form > {/* onSubmit={handleChangePassword} */}
                            <div className="mb-3">
                                <label>Mật khẩu cũ</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nhập mật khẩu cũ"
                                    //value={oldPassword}
                                    //onChange={(e) => setOldPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label>Mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nhập mật khẩu mới"
                                    //value={newPassword}
                                    //onChange={(e) => setNewPassword(e.target.value)}
                                    minLength="8"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label>Nhập lại mật khẩu mới</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Nhập lại mật khẩu mới"
                                    //value={confirmNewPassword}
                                    //onChange={(e) => setConfirmNewPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">Đổi mật khẩu</button>
                        </form>
                    </div>
                );

            case "addressBook":
                return (
                    <div className="container">
                        Địa chỉ của bạn <br />

                        <Button className="mt-3">Thêm địa chỉ</Button>
                    </div>
                );
            default:
                return <div>Thông tin tài khoản</div>;
        }
    };

    return (
        <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
            <div className="container">
                <Row className="justify-content-between">
                    <Col lg={3} xs={12} className="mt-3" style={{ marginRight: -12 }}>
                        <div className="sticky-sidebar">
                            <InformationCategory onSelect={handleSelect} />
                        </div>
                    </Col>
                    <Col lg={9} className="mt-3" style={{ backgroundColor: "white", height: "auto" }}>
                        <div className="d-flex flex-wrap m-3">
                            {renderContent()}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Information;
