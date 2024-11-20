import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const OrderDetail = () => {
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
                "http://192.168.245.190:8002/api/member/detail-order/77",
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
                    <div className="">Ngày tạo {orders.date_order}</div>
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
                                    Địa chỉ:  {orders.d_name}
                                </div>
                                <div>
                                    Số điện thoại:  {orders.d_phone}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="d-md-block ">
                            THANH TOÁN
                            <div className="border p-3" style={{ borderRadius: 5 }}>
                                {orders.d_name}
                                <div>
                                    Địa chỉ:  {orders.d_name}
                                </div>
                                <div>
                                    Số điện thoại:  {orders.d_phone}
                                </div>
                            </div>
                        </Col>
                        <Col md={3} className="d-md-block ">
                            GHI CHÚ
                            <div className="border p-3" style={{ borderRadius: 5 }}>
                                <div>
                                    {orders.comment}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>

        </Col>
    );
};

export default OrderDetail;

