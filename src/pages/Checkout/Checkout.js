import React, { useContext, useState } from "react";
import { CartContext } from "../Cart/CartContext";
import {
  Row,
  Col,
  Card,
  Button,
  Form,
  Collapse,
  Badge,
  FloatingLabel,
  ButtonGroup,
} from "react-bootstrap";

const Checkout = () => {
  const { cartItems } = useContext(CartContext); // Lấy sản phẩm từ CartContext

  const [isChecked, setIsChecked] = useState(true);

  const [open, setOpen] = useState(false);

  // tổng số lượng sản phẩm
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  // tổng số tiền
  const total = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const ship = 40000;

  return (
    <div style={{ backgroundColor: " #F8F8FF" }}>
      <div className="container">
        <Row className="py-4">
          {/* Cột Thông tin nhận hàng */}
          <Col md={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Col className="d-flex flex-row align-items-center justify-content-between">
                  <Card.Title className="me-2">Thông tin nhận hàng</Card.Title>
                  <a href="/login">
                    <i className="bi bi-person-circle me-1" />
                    <span>Đăng nhập</span>
                  </a>
                </Col>

                <Form>
                  <Form.Group controlId="formMail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>

                  <Form.Group controlId="formName" className="mt-3">
                    <Form.Control type="text" placeholder="Nhập họ và tên" />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Nhập số điện thoại"
                    />
                  </Form.Group>

                  <Form.Group controlId="formAddress" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Địa chỉ (tùy chọn)"
                    />
                  </Form.Group>

                  <Form.Select aria-label="Tỉnh thành" className="mt-3">
                    <option>Tỉnh thành</option>
                    <option value="1">TP Hồ Chí Minh</option>
                    <option value="2">TP Hà nội</option>
                    <option value="3">Huế</option>
                  </Form.Select>

                  <Form.Select aria-label="Quận Huyện" className="mt-3">
                    <option>Quận Huyện (tùy chọn)</option>
                    <option value="1">Thành Phố</option>
                  </Form.Select>

                  <Form.Select aria-label="Phường xã" className="mt-3">
                    <option>Phường xã (tùy chọn)</option>
                    <option value="1">Thành Phố</option>
                  </Form.Select>

                  <Form.Group controlId="formNote" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Ghi chú (tùy chọn)"
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Cột Vận chuyển */}
          <Col md={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Vận chuyển</Card.Title>

                <Col className="d-flex justify-content-between border p-3 rounded">
                  <div className="d-flex">
                    <Form.Check
                      type="radio"
                      aria-label="radio 1"
                      checked={isChecked}
                      className="me-2"
                    />
                    Giao hàng tận nơi
                  </div>
                  {ship.toLocaleString("vi-VN")} ₫
                </Col>
              </Card.Body>

              <Card.Body>
                <Card.Title>Thanh toán</Card.Title>

                <Col className="d-flex justify-content-between border p-2 rounded align-items-center">
                  <div className="d-flex m-2">
                    <Form.Check
                      type="radio"
                      aria-label="radio2"
                      className="me-2"
                      onClick={() => setOpen(true)}
                    />
                    Thanh toán khi giao hàng (COD)
                  </div>
                  <i
                    className="bi bi-cash"
                    style={{ color: "blue", fontSize: 25 }}
                  />
                </Col>

                <Collapse in={open}>
                  <div>
                    <div
                      className="w-100 p-4 rounded"
                      style={{ backgroundColor: "#f4f4f4", fontSize: 14 }}
                    >
                      Bạn chỉ phải thanh toán khi nhận được hàng
                    </div>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>

          {/* Cột Đơn hàng */}
          <Col md={4}>
            <Card style={{ border: "none" }} className="">
              <Card.Body>
                <Card.Title>Đơn hàng ({totalItems} sản phẩm)</Card.Title>
                <hr />

                <ul
                  className="list-group"
                  style={{
                    height: "200px",
                    overflowY: "auto",
                    overflowX: "hidden",
                  }}
                >
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                      style={{ border: "none" }}
                    >
                      <span style={{ position: "relative" }}>
                        <img
                          src={item.images}
                          alt={item.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            objectFit: "cover", // Giữ tỷ lệ ảnh
                            marginRight: "10px",
                            border: "1px solid #f4f4f4",
                            borderRadius: 5,
                          }}
                        />
                        <Badge
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

                      <div style={{ fontSize: 14, width: "50%" }}>
                        {item.name}
                      </div>

                      <span
                        style={{
                          fontSize: 14,
                          width: "30%",
                          color: "gray",
                          fontWeight: "500",
                        }}
                        className="ms-2 text-end"
                      >
                        {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
                      </span>
                    </li>
                  ))}
                </ul>
                <hr />

                <Row>
                  <Col md={8}>
                    <Form.Group controlId="formdiscount">
                      <Form.Control
                        type="discount"
                        placeholder="Nhập mã giảm giá"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4}>
                    <Button
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#1E90FF",
                      }}
                    >
                      Áp dụng
                    </Button>
                  </Col>
                </Row>
                <hr />

                <Row>
                  <Col
                    md={8}
                    style={{
                      color: "gray",
                      fontWeight: "500",
                    }}
                  >
                    Tạm tính
                  </Col>

                  <Col
                    md={4}
                    style={{
                      color: "gray",
                      fontWeight: "500",
                    }}
                    className="text-end"
                  >
                    {total.toLocaleString("vi-VN")} ₫
                  </Col>
                </Row>

                <Row>
                  <Col
                    md={8}
                    style={{
                      color: "gray",
                      fontWeight: "500",
                    }}
                  >
                    Phí vận chuyển
                  </Col>

                  <Col
                    md={4}
                    style={{
                      color: "gray",
                      fontWeight: "500",
                    }}
                    className="text-end"
                  >
                    {ship.toLocaleString("vi-VN")} ₫
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

                  <h5 style={{ color: "#1E90FF" }}>
                    {(total + ship).toLocaleString("vi-VN")} ₫
                  </h5>
                </div>

                <Row className="mt-3 align-items-center">
                  <Col
                    md={7}
                    style={{
                      fontWeight: "500",
                    }}
                  >
                    <a href="/cart"> ❮ Quay về giỏ hàng</a>
                  </Col>

                  <Col
                    md={5}
                    style={{
                      color: "gray",
                      fontWeight: "500",
                    }}
                    className="text-end"
                  >
                    <Button
                      style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: "#1E90FF",
                      }}
                    >
                      Đặt hàng
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Checkout;
