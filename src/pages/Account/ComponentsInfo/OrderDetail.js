import React, { useEffect, useState } from "react";
import axios from "axios";
import { Badge, Card, Col, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { imageBaseUrl } from "../../../api/axiosConfig";

const OrderDetail = () => {
    const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng
    const [loading, setLoading] = useState(true); // Hiển thị trạng thái tải dữ liệu
    const { id } = useParams();
    // Hàm fetch dữ liệu
    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token not found");
                return;
            }
            const response = await axios.get(
                `http://192.168.245.190:8002/api/member/detail-order/${id}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setOrders(response.data?.dataOrder); // Lưu dữ liệu đơn hàng vào state
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    return (
        <Col className="container mb-4">
            <div
                className="p-1 my-4"
            >
                <Col style={{ fontSize: 16, }} className="d-flex fw-bold justify-content-between">
                    <div className="" >Chi tiết Đơn hàng {orders.order_code}</div>
                    <div className="">Ngày tạo: {orders.date_order}</div>
                </Col>
            </div>

            <div> Trạng thái thanh toán: <span style={{ color: "orange" }}>{orders.order_status}</span> </div>

            <Col>
                <div
                    className="p-1 mt-2"
                >
                    <Row style={{ fontSize: 16 }} className="justify-content-center">
                        <Col md={6} className="d-md-block ">
                            ĐỊA CHỈ GIAO HÀNG

                            <div className="border p-3" style={{ borderRadius: 5 }}>
                                {orders.d_name}
                                <div>
                                    Địa chỉ:  {orders.d_address}
                                </div>
                                <div>
                                    Số điện thoại:  {orders.d_phone}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="d-md-block ">
                            THANH TOÁN
                            <div className="border p-3" style={{ borderRadius: 5 }}>
                                {orders.payment_method?.title ? orders.payment_method?.title : "..."} <br /><br />
                                {orders.shipping_method?.title ? orders.shipping_method?.title : "..."}
                            </div>
                        </Col>
                        <Col md={3} className="d-md-block ">
                            GHI CHÚ
                            <div className="border p-3" style={{ borderRadius: 5 }}>
                                <div>
                                    {orders.note ? orders.note : "Không có ghi chú "}
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <Card className="mt-4" style={{ border: "none" }}>
                        <Card.Body>
                            <Card.Title style={{ width: "100%", fontSize: 16 }} className="d-flex text-end px-4">
                                <div style={{ width: "40%" }} className="d-flex text-start">Đơn hàng </div>
                                <div style={{ width: "20%" }}>Giá</div>
                                <div style={{ width: "20%" }}>Số lượng</div>
                                <div style={{ width: "20%" }}>Tổng</div>
                            </Card.Title>
                            <hr />
                            <ul className="list-group">
                                {orders.orderDetail?.map((item) => (
                                    <li key={item.id} style={{ border: "none" }} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span style={{ position: "relative" }}>
                                            <img
                                                src={`${imageBaseUrl}${item.Picture}`}
                                                alt={item.title}
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    objectFit: "cover", // Giữ tỷ lệ ảnh
                                                    marginRight: "10px",
                                                    border: "1px solid #f4f4f4",
                                                    borderRadius: 5
                                                }}
                                            />
                                        </span>
                                        <div style={{ fontSize: 14, width: "30%" }}>{item.ProductName}</div>

                                        <span className="ms-2 text-end" style={{
                                            fontSize: 14, width: "20%",
                                            color: "gray",
                                            fontWeight: "500",
                                        }}>
                                            {item.Price ? `${(item.Price * 1).toLocaleString("vi-VN")} đ` : ""}
                                            {/* {item.Price ? `${item.Price.toLocaleString("vi-VN")}` : ""} ₫ */}
                                        </span>
                                        <div className="ms-2 text-end" style={{ fontSize: 14, width: "10%" }}>{item.quantity}</div>
                                        <div className="ms-2 text-end" style={{ fontSize: 14, width: "20%" }}>
                                            {item.subtotal ? `${(item.subtotal * 1).toLocaleString("vi-VN")} đ` : ""}
                                            {/* {item.subtotal} */}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <hr />
                            <Row>
                                <Col
                                    xs={6}
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                >
                                    Tạm tính
                                </Col>

                                <Col
                                    xs={6}
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                    className="text-end"
                                >
                                    {orders.total_cart ? `${orders.total_cart.toLocaleString("vi-VN")} đ` : ""}
                                </Col>
                            </Row>

                            <Row>
                                <Col
                                    xs={6}
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                >
                                    Mã giảm giá
                                </Col>

                                <Col
                                    xs={6}
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                    className="text-end"
                                >
                                    {orders.CouponDiscout ? `${orders.CouponDiscout.toLocaleString("vi-VN")} đ` : "0"}
                                </Col>
                            </Row>

                            <hr />

                            <div className="mt-3 d-flex justify-content-between">
                                <h5
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                >
                                    Tổng cộng:
                                </h5>

                                <h5 style={{ color: "#0d6efd" }}>
                                    {orders.total_price ? `${orders.total_price.toLocaleString("vi-VN")} đ` : ""}
                                </h5>
                            </div>

                        </Card.Body>
                    </Card>
                </div>
            </Col>

        </Col>
    );
};

export default OrderDetail;

