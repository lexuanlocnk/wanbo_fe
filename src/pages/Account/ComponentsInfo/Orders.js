import React, { useEffect, useState } from "react";
import axios from "axios";
import { Col, Row, Pagination } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Orders = () => {
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]); // Lưu danh sách đơn hàng
    const [loading, setLoading] = useState(true); // Hiển thị trạng thái tải dữ liệu
    const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
    const [totalPages, setTotalPages] = useState(1); // Tổng số trang

    // Hàm fetch dữ liệu
    const fetchOrders = async (page = 1) => {
        setLoading(true);
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.error("Token not found");
                return;
            }
            const response = await axios.get(
                `http://192.168.245.190:8002/api/member/show-order?page=${page}`,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            const data = response.data.data;
            setOrders(data.data || []); // Lưu danh sách đơn hàng
            setCurrentPage(data.current_page || 1); // Cập nhật trang hiện tại
            setTotalPages(data.last_page || 1); // Cập nhật tổng số trang
        } catch (error) {
            console.error("Error fetching orders:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchOrders();
    }, []);

    const handlePageChange = (page) => {
        if (page >= 1 && page <= totalPages) {
            fetchOrders(page);
        }
    };

    return (
        <Col>
            <div
                className="border p-1"
                style={{ backgroundColor: "#49b1fe", color: "white" }}
            >
                <Row
                    style={{ fontSize: 13, textAlign: "center" }}
                    className="fw-bold justify-content-center"
                >
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
            ) : orders.length > 0 ? (
                orders.map((order) => (
                    <div
                        style={{ fontSize: 13, textAlign: "center" }}
                        className="border-bottom p-2"
                        key={order.order_id}
                    >
                        <Row className="align-items-center justify-content-center">
                            <Col md={2}>
                                <a href={`/information/${order.order_id}`}>
                                    <strong>{order.order_code}</strong>
                                </a>
                            </Col>
                            <Col md={2}>
                                {new Date(
                                    order.date_order * 1000
                                ).toLocaleDateString("vi-VN")}
                            </Col>
                            <Col md={2}>{order.d_address}</Col>
                            <Col md={2}>
                                {order.total_price.toLocaleString("vi-VN")} đ
                            </Col>
                            <Col md={2}>
                                {order.payment_method?.title || "Chưa thanh toán"}
                            </Col>
                            <Col md={2}>
                                {order.order_status?.title || "Chưa vận chuyển"}
                            </Col>
                        </Row>
                    </div>
                ))
            ) : (
                <p>Không có đơn hàng nào.</p>
            )}

            {/* Phân trang */}
            <Pagination className="justify-content-center mt-3">
                <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <Pagination.Item
                        key={page}
                        active={page === currentPage}
                        onClick={() => handlePageChange(page)}
                    >
                        {page}
                    </Pagination.Item>
                ))}
                <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
            </Pagination>
        </Col>
    );
};

export default Orders;
