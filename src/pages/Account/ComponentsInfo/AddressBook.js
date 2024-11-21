import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import axios from "axios";
import { toast } from "react-toastify";

const AddressBook = () => {
    const [show, setShow] = useState(false);
    const [isEditing, setIsEditing] = useState(false); // Xác định trạng thái chỉnh sửa
    const [currentEditId, setCurrentEditId] = useState(null); // Lưu ID của địa chỉ đang chỉnh sửa

    const [formData, setFormData] = useState({
        FullName: "",
        Phone: "",
        Address: "",
        Province: "",
        District: "",
        Ward: "",
        Email: ""
    });

    const handleClose = () => {
        setShow(false);
        setIsEditing(false);
        setCurrentEditId(null);
        resetForm(); // Reset form về trạng thái ban đầu
    };

    const handleShow = () => setShow(true);

    const resetForm = () => {
        setFormData({
            FullName: "",
            Phone: "",
            Address: "",
            Province: "",
            District: "",
            Ward: "",
            Email: ""
        });
    };

    const [address, setAddress] = useState([]);

    // API lấy tất cả địa chỉ
    const fetchAddress = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await axios.get(
                "http://192.168.245.190:8002/api/member/show-address-member",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            setAddress(response.data.address);
        } catch (err) {
            console.log("Fetch fetchAddress Data Error: ", err);
        }
    };

    useEffect(() => {
        fetchAddress();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    // Thêm hoặc chỉnh sửa địa chỉ
    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem("token");

            if (isEditing && currentEditId) {
                // Gọi API chỉnh sửa
                await axios.put(
                    `http://192.168.245.190:8002/api/member/update-address-information-member/${currentEditId}`,
                    JSON.stringify(formData),
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                toast.success("Chỉnh sửa địa chỉ thành công!");
            } else {
                // Gọi API thêm mới
                await axios.post(
                    "http://192.168.245.190:8002/api/member/add-address-member",
                    JSON.stringify(formData),
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json"
                        }
                    }
                );
                toast.success("Thêm địa chỉ thành công!");
            }

            handleClose();
            fetchAddress();
        } catch (error) {
            console.error("Error:", error);
            toast.error("Có lỗi xảy ra khi lưu địa chỉ!");
        }
    };

    // Hàm để điền thông tin vào modal khi chỉnh sửa
    const handleEditClick = (item) => {
        setIsEditing(true);
        setCurrentEditId(item.id); // Lưu ID đang chỉnh sửa
        setFormData({
            FullName: item.fullName,
            Phone: item.Phone,
            Address: item.address,
            Province: item.province,
            District: item.district,
            Ward: item.ward,
            Email: item.Email || "" // Nếu Email không tồn tại, để trống
        });
        handleShow();
    };

    // api xóa address
    const handleDeleteAddress = async (id) => {
        try {
            const token = localStorage.getItem("token"); // Lấy token từ localStorage
            const response = await axios.get(
                `http://192.168.245.190:8002/api/member/delete-address-member/${id}`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                }
            );
            toast.success("Xóa địa chỉ thành công!");
            fetchAddress();
        } catch (error) {
            console.error("Error adding address:", error);
            toast.error("Có lỗi xảy ra khi xóa địa chỉ!");
        }
    }

    return (
        <div>
            Địa chỉ của bạn <br />
            <Button className="mt-3" onClick={handleShow}>Thêm địa chỉ</Button>

            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? "CHỈNH SỬA ĐỊA CHỈ" : "THÊM ĐỊA CHỈ MỚI"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>Họ tên</Form.Label>
                            <Form.Control
                                type="text"
                                name="FullName"
                                placeholder="Họ tên"
                                value={formData.FullName}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Số điện thoại</Form.Label>
                            <Form.Control
                                type="number"
                                name="Phone"
                                placeholder="Số điện thoại"
                                value={formData.Phone}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Địa chỉ</Form.Label>
                            <Form.Control
                                type="text"
                                name="Address"
                                placeholder="Địa chỉ"
                                value={formData.Address}
                                onChange={handleChange}
                                required
                            />
                        </Form.Group>
                        <div className="d-flex justify-content-evenly">
                            <Form.Group className="mb-3">
                                <Form.Label>Tỉnh/Thành phố</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Province"
                                    placeholder="Tỉnh/Thành phố"
                                    value={formData.Province}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Quận/Huyện</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="District"
                                    placeholder="Quận/Huyện"
                                    value={formData.District}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Phường/Xã</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="Ward"
                                    placeholder="Phường/Xã"
                                    value={formData.Ward}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>
                        </div>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        {isEditing ? "Lưu" : "Thêm địa chỉ"}
                    </Button>
                </Modal.Footer>
            </Modal>

            {address && address.length > 0 ? address.map((item) => (
                <div key={item.id} style={{ width: "100%" }}>
                    <hr />
                    <Row style={{ width: "100%", backgroundColor: "#f9f9f9", padding: "10px 0", alignItems: "center" }}>
                        <Col xs={8} style={{ fontSize: "14px" }}>
                            <p>
                                <strong>Họ tên:</strong> {item.fullName}
                            </p>
                            <p>
                                <strong>Địa chỉ:</strong> {item.address}, {item.ward}, {item.district}, {item.province}
                            </p>
                            <p>
                                <strong>Số điện thoại:</strong> {item.Phone}
                            </p>
                        </Col>
                        <Col xs={4} style={{ textAlign: "right", fontSize: "14px" }}>
                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "#007bff",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                                onClick={() => handleEditClick(item)}
                            >
                                Chỉnh sửa
                            </button>

                            <button
                                style={{
                                    background: "none",
                                    border: "none",
                                    color: "red",
                                    cursor: "pointer",
                                    textDecoration: "none",
                                }}
                                onClick={() => handleDeleteAddress(item.id)}
                            >
                                Xóa
                            </button>
                        </Col>
                    </Row>
                </div>
            )) : (
                <p>Không có địa chỉ nào được lưu.</p>
            )}
        </div>
    );
};

export default AddressBook;

