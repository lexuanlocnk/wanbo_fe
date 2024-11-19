import React from "react";
import { Col, Row } from "react-bootstrap";

const Orders = () => {
    return (
        <Col>
            <div className="border p-1" style={{ backgroundColor: "#49b1fe", color: "white" }} >
                <Row className="fw-bold">
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none" >
                        Đơn hàng
                    </Col>
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none " >
                        Ngày
                    </Col>
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none">
                        Địa chỉ
                    </Col>
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none">
                        Giá trị đơn hàng
                    </Col>
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none">
                        TT thanh toán
                    </Col>
                    <Col style={{ fontSize: 12 }} md={2} className="d-md-block d-none"  >
                        TT vận chuyển
                    </Col>
                </Row>
                {/* Thêm hàng tiêu đề cho kích thước nhỏ hơn */}
                <Row className="d-md-none fw-bold">
                    <Col className="text-center">Đơn hàng của bạn</Col>
                </Row>
            </div>
        </Col>
    )
};

export default Orders;
