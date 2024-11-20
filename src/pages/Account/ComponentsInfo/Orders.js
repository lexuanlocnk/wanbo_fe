import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng
    const [loading, setLoading] = useState(true); // Hiển thị trạng thái tải dữ liệu

    // Hàm fetch dữ liệu
    const fetchOrders = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token not found");
                return;
            }
            const response = await axios.get(
                "http://192.168.245.190:8002/api/member/show-order",
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setOrders(response.data); // Lưu dữ liệu đơn hàng vào state
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
        <Col>
            <div
                className="border p-1"
                style={{ backgroundColor: "#49b1fe", color: "white" }}
            >
                <Row style={{ fontSize: 13, textAlign: "center" }} className="fw-bold justify-content-center">
                    <Col md={2} className="d-md-block d-none">
                        Đơn hàng
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                        Ngày
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                        Địa chỉ
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                        Giá trị đơn hàng
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                        TT thanh toán
                    </Col>
                    <Col md={2} className="d-md-block d-none">
                        TT vận chuyển
                    </Col>
                </Row>
            </div>
            {/* Hiển thị trạng thái tải dữ liệu */}
            {loading ? (
                <p>Đang tải dữ liệu...</p>
            ) : (
                orders.map((order) => (
                    <div style={{ fontSize: 13, textAlign: "center" }} className="border-bottom p-2" key={order.order_id}>
                        <Row className="align-items-center justify-content-center">
                            <Col md={2}>
                                <strong>{order.order_code}</strong>
                            </Col>
                            <Col md={2}>
                                {new Date(order.date_order * 1000).toLocaleDateString("vi-VN")}
                            </Col>
                            <Col md={2}>
                                {order.d_address}
                            </Col>
                            <Col md={2}>
                                {order.total_price.toLocaleString("vi-VN")} đ
                            </Col>
                            <Col md={2}>
                                {order.payment_method || "Chưa thanh toán"}
                            </Col>
                            <Col md={2}>
                                {order.order_status?.title || "Chưa vận chuyển"}
                            </Col>
                        </Row>
                        {/* <Row>
                            <Col xs={12} className="mt-2">
                                <ul>
                                    {order.order_detail.map((detail, index) => (
                                        <li key={index}>
                                            {detail.item_title} -{" "}
                                            {Number(detail.item_price).toLocaleString("vi-VN")} đ
                                        </li>
                                    ))}
                                </ul>
                            </Col>
                        </Row> */}
                    </div>
                ))
            )}
        </Col>
    );
};

export default Orders;

