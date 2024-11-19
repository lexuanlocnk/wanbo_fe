import React, { useContext, useEffect, useState } from "react";
import { Badge, Button, Card, Col, Row } from "react-bootstrap";
import { CartContext } from "../Cart/CartContext";
import { imageBaseUrl } from "../../api/axiosConfig";
import { Form } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Thankyou = () => {
    const { cartItems } = useContext(CartContext);
    const [content, setContent] = useState("");
    const [orderInfo, setOrderInfo] = useState("");
    const navigate = useNavigate();
    const ship = 40000
    // useEffect(() => {
    //     const fetchIntroduceData = async () => {
    //         try {
    //             const response = await fetch("http://192.168.245.190:8002/api/member/detail-about/gioi-thieu-ve-cong-ty");
    //             const result = await response.json();

    //             if (result.status) {
    //                 // Set the description from API response to the content state
    //                 setContent(result.data.description);
    //             }
    //         } catch (error) {
    //             console.error("Error fetching introduce data:", error);
    //         }
    //     };

    //     fetchIntroduceData();
    // }, []);

    const fetchOrder = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                return;
            }
            const response = await axios.get(`http://192.168.245.190:8002/api/member/information-order`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                },
            });
            // if (response.data.status) {}
            setOrderInfo(response.data?.data);
        } catch (error) {
            console.error("Error fetching:", error);
        }
    };

    useEffect(() => {
        fetchOrder();
    }, []);

    return (
        <div className="container">
            <Row style={{ backgroundColor: "white", justifyContent: "space-evenly" }}>
                <Col lg={7} xs={12} className="p-4 ">
                    <div className=" d-flex align-items-center ">
                        <i className="bi bi-check-circle me-4" style={{ fontSize: 80, color: "green" }}></i>
                        <div className=" ">
                            <h6 className="fw-bold">CÁM ƠN BẠN ĐÃ ĐẶT HÀNG</h6>
                            <p>Một email xác nhận đã được gửi tới {orderInfo.d_gmail}<br />
                                Xin vui lòng kiểm tra email của bạn</p>
                        </div>
                    </div>
                    <Row className="border" style={{ backgroundColor: "white", justifyContent: "space-evenly" }}>
                        <Col xs={6} className="p-4 ">
                            <div className="align-items-center ">
                                <div className=" ">
                                    <h6 className="fw-bold">Thông tin mua hàng</h6>
                                    <p>{orderInfo.d_name}<br /> {orderInfo.d_gmail}<br />
                                        {orderInfo.d_phone}</p>
                                </div>
                            </div>
                            <div className="align-items-center">
                                <div className=" ">
                                    <h6 className="fw-bold">Phương thức thanh toán</h6>
                                    <p>{orderInfo.payment_method}</p>
                                </div>
                            </div>
                        </Col>

                        <Col xs={6} className="p-4 ">
                            <div className="align-items-center ">
                                <div className=" ">
                                    <h6 className="fw-bold">Địa chỉ nhận hàng</h6>
                                    <p>{orderInfo.d_name}<br />
                                        {orderInfo.d_adress}<br />{orderInfo.d_phone}</p>
                                </div>
                                <div className="">
                                    <h6 className="fw-bold">Phương thức vận chuyển</h6>
                                    <p>{orderInfo.shipping_method}</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col lg={5} xs={12}>
                    <Card style={{ border: "none" }}>
                        <Card.Body>
                            <Card.Title>Mã đơn hàng {orderInfo.d_code}</Card.Title>
                            <hr />
                            <ul className="list-group">
                                {orderInfo.listProduct?.map((item) => (
                                    <li key={item.id} style={{ border: "none" }} className="list-group-item d-flex justify-content-between align-items-center">
                                        <span style={{ position: "relative" }}>
                                            <img
                                                src={`${imageBaseUrl}${item.picture}`}
                                                alt={item.title}
                                                style={{
                                                    width: "50px",
                                                    height: "50px",
                                                    objectFit: "cover", // Giữ tỷ lệ ảnh
                                                    marginRight: "10px",
                                                    border: "1px solid #f4f4f4",
                                                    borderRadius: 5
                                                }}
                                            /><Badge
                                                style={{
                                                    fontSize: 10,
                                                    backgroundColor: "red",
                                                    position: "absolute",
                                                    top: -5,
                                                    right: 2,
                                                }}
                                            >
                                                {item.quantity}
                                            </Badge>
                                        </span>
                                        <div style={{ fontSize: 14, width: "50%" }}>{item.item_title}</div>
                                        <span className="ms-2 text-end" style={{
                                            fontSize: 14, width: "30%",
                                            color: "gray",
                                            fontWeight: "500",
                                        }}>
                                            {/* {item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : ""} */}
                                            {item.price ? `${(item.price * item.quantity).toLocaleString("vi-VN")}` : ""} ₫
                                        </span>
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
                                    {orderInfo.total_cart ? `${orderInfo.total_cart.toLocaleString("vi-VN")} đ` : ""}
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
                                    {orderInfo.CouponDiscout ? `${orderInfo.CouponDiscout.toLocaleString("vi-VN")} đ` : "0"}
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
                                    Phí vận chuyển
                                </Col>

                                <Col
                                    xs={6}
                                    style={{
                                        color: "gray",
                                        fontWeight: "500",
                                    }}
                                    className="text-end"
                                >
                                    {ship ? `${ship.toLocaleString("vi-VN")} đ` : ""}

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
                                    {orderInfo.total_price ? `${orderInfo.total_price.toLocaleString("vi-VN")} đ` : ""}
                                </h5>
                            </div>

                        </Card.Body>
                    </Card>
                </Col>
                <div className="d-flex  justify-content-center">
                    <Button className="my-5 mx-2" onClick={() => navigate("/home")}>Tiếp tục mua hàng</Button>
                    <button className="my-5 mx-2" style={{ border: "none", background: "none" }}> <i className="bi bi-printer me-2"></i>IN</button>
                </div>
            </Row>

        </div>
    );
};

export default Thankyou;

