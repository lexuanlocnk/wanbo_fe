import React, { useContext, useEffect, useState } from "react";
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
import axios from "axios";
import { imageBaseUrl } from "../../api/axiosConfig";
import CheckoutApi from "../../api/CheckoutApi";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cartItems, fetchCartItems } = useContext(CartContext);
  const navigate = useNavigate();
  // Form fields for user data
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const [note, setNote] = useState("");
  const [isChecked, setIsChecked] = useState(true);

  const [userData, setUserData] = useState({ email: "" });
  const [error, setError] = useState("");

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const [addresses, setAddresses] = useState([]); // State để lưu danh sách địa chỉ
  const [selectedAddressId, setSelectedAddressId] = useState(""); // ID địa chỉ đã chọn

  const [shippingMethods, setShippingMethods] = useState([]);
  const [paymentMethods, setPaymentMethods] = useState([]);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  // Lấy danh sách phương thức vận chuyển và thanh toán
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Lấy phương thức vận chuyển
      axios
        .get("http://192.168.245.190:8002/api/member/show-shipping-method", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setShippingMethods(response.data.data))
        .catch(() => toast.error("Không thể tải phương thức vận chuyển."));

      // Lấy phương thức thanh toán
      axios
        .get("http://192.168.245.190:8002/api/member/show-payment-method", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => setPaymentMethods(response.data.data))
        .catch(() => toast.error("Không thể tải phương thức thanh toán."));
    }
  }, []);


  // Lấy danh sách địa chỉ từ API
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://192.168.245.190:8002/api/member/show-address-member", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setAddresses(response.data.address); // Lưu danh sách địa chỉ
        })
        .catch(() => setError("Không thể tải danh sách địa chỉ"));
    } else {
      setError("Không tìm thấy tài khoản");
    }
  }, []);

  // Khi chọn địa chỉ từ Select, tự động điền thông tin
  const handleAddressSelect = (e) => {
    const selectedId = parseInt(e.target.value, 10); // Chuyển thành số
    setSelectedAddressId(selectedId);

    // Tìm địa chỉ đã chọn trong danh sách và cập nhật các input
    if (addresses.length > 0) {
      const selectedAddress = addresses.find((addr) => addr.id === selectedId);
      if (selectedAddress) {
        setName(selectedAddress.fullName);
        setPhone(selectedAddress.Phone);
        // setAddress(selectedAddress.address);

        setAddress(
          `${selectedAddress.address}, ${selectedAddress.ward}, ${selectedAddress.district}, ${selectedAddress.province}`
        );

      } else {
        setName("");
        setPhone("");
        setAddress("");
      }
    } else {
      console.error("Danh sách địa chỉ rỗng hoặc chưa được tải.");
    }
  };
  const totalItems = cartItems.reduce((total, item) => total + item.quality, 0);
  const total = cartItems.reduce((total, item) => total + item.price * item.quality, 0);

  // Handle checkout
  const handleCheckout = async () => {
    setLoading(true)
    if (!selectedShippingMethod || !selectedPaymentMethod) {
      toast.warn("Vui lòng chọn phương thức vận chuyển và thanh toán.");
      setLoading(false)
      return;
    }
    if (!address) {
      toast.warn("Vui lòng điền địa chỉ!");
      setLoading(false)
      return;
    }
    // Map cart items to API format
    const orders = cartItems.map(item => ({
      price: item.price,
      productId: item.product_id,
      productName: item.title,
      quality: item.quality,
      picture: item.picture
    }));

    const data = {
      total_cart: total,
      shipping_method: selectedShippingMethod,
      payment_method: selectedPaymentMethod,
      note,
      orders,
      total_price: total,
      d_email: userData,
      d_name: name,
      d_address: address,
      d_phone: phone,
    };
    // console.log(">>>>>>>>>", selectedShippingMethod)


    try {
      const checkoutApi = new CheckoutApi();
      const response = await checkoutApi.postCheckoutApi(data);
      toast.success("Đặt hàng thành công");
      fetchCartItems()
      setLoading(false)
      navigate("/thankyou")
    } catch (error) {
      setLoading(false)
      console.error("Error during checkout:", error);
      toast.warn("Có lỗi xảy ra, vui lòng thử lại.");
    } finally {
      setLoading(false)
    }
  };

  // Lấy thông tin user
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios.get("http://192.168.245.190:8002/api/member/information-member", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(response => {
          setUserData(
            response.data.member?.email,
          );
        })
        .catch(() => setError("Không thể tải thông tin tài khoản"));
    } else {
      setError("Không tìm thấy tài khoản");
    }
  }, []);

  return (
    <div style={{ backgroundColor: " #F8F8FF" }}>
      <div className="container">
        <Row className="py-4">
          {/* Cột Thông tin nhận hàng */}
          <Col lg={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Col className="d-flex flex-row align-items-center justify-content-between">
                  <Card.Title className="me-2">Thông tin nhận hàng</Card.Title>
                  {/* <a href="/login">
                    <i className="bi bi-person-circle me-1" />
                    <span>Đăng nhập</span>
                  </a> */}
                </Col>

                <Form>
                  <Form.Group controlId="formAddressSelect">
                    <Form.Select
                      className="my-3"
                      value={selectedAddressId}
                      onChange={handleAddressSelect}
                    >
                      <option value="">Địa chỉ tùy chọn...</option>
                      {addresses?.map((addr) => (
                        <option key={addr.id} value={addr.id}>
                          {addr.address} - {addr.ward} - {addr.district}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>

                  <Form.Group controlId="formMail">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={userData}
                      //onChange={(e) => setEmail(e.target.value)}
                      disabled
                    />
                  </Form.Group>

                  <Form.Group controlId="formName" className="mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Nhập họ và tên"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formPhone" className="mt-3">
                    <Form.Control
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </Form.Group>

                  <Form.Group controlId="formAddress" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={2}
                      placeholder="Địa chỉ"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Form.Group>

                  {/* <Form.Select aria-label="Tỉnh thành" className="mt-3">
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
                  </Form.Select> */}

                  <Form.Group controlId="formNote" className="mt-3">
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Ghi chú (tùy chọn)"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                    />
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Cột Vận chuyển */}
          <Col lg={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Vận chuyển</Card.Title>
                {shippingMethods.map((method) => (
                  <Col
                    key={method.name}
                    className="d-flex justify-content-between border p-3 mb-2 rounded"
                  >
                    <div className="d-flex">
                      <Form.Check
                        type="radio"
                        name="shipping"
                        className="me-2"
                        onChange={() => setSelectedShippingMethod(method.name)}
                      />
                      {method.title}
                    </div>
                  </Col>
                ))}
              </Card.Body>

              <Card.Body>
                <Card.Title>Thanh toán</Card.Title>
                {paymentMethods.map((method) => (
                  <Col
                    key={method.name}
                    className="d-flex justify-content-between border p-2 mb-2 rounded align-items-center"
                  >
                    <div className="d-flex m-2">
                      <Form.Check
                        type="radio"
                        name="payment"
                        className="me-2"
                        onChange={() => setSelectedPaymentMethod(method.name)}
                      />
                      {method.title}
                    </div>
                    <i className="bi bi-cash" style={{ color: "blue", fontSize: 25 }} />
                  </Col>
                ))}
              </Card.Body>

            </Card>
          </Col>

          {/* Cột Đơn hàng */}
          <Col lg={4}>
            <Card style={{ border: "none" }}>
              <Card.Body>
                <Card.Title>Đơn hàng ({totalItems} sản phẩm)</Card.Title>
                <hr />
                <ul className="list-group" style={{ height: "200px", overflowY: "auto", overflowX: "hidden" }}>
                  {cartItems.map((item) => (
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
                          {item.quality}
                        </Badge>
                      </span>
                      <div style={{ fontSize: 14, width: "50%" }}>{item.title}</div>
                      <span className="ms-2 text-end" style={{
                        fontSize: 14, width: "30%",
                        color: "gray",
                        fontWeight: "500",
                      }}>
                        {(item.price * item.quality).toLocaleString("vi-VN")} ₫
                      </span>
                    </li>
                  ))}
                </ul>
                <hr />

                <Row>
                  <Col md={8}>
                    <Form.Group controlId="formdiscount" className="mt-2">
                      <Form.Control
                        type="discount"
                        placeholder="Nhập mã giảm giá"
                      />
                    </Form.Group>
                  </Col>

                  <Col md={4} className="mt-2">
                    <Button
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundColor: "#0d6efd",
                        fontSize: 14
                      }}
                    >
                      Áp dụng
                    </Button>
                  </Col>
                </Row>
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
                    {total.toLocaleString("vi-VN")} ₫
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
                    0 ₫
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
                    {(total).toLocaleString("vi-VN")} ₫
                  </h5>
                </div>

                <Row className="mt-3 align-items-center">
                  <Col
                    md={7}
                    style={{
                      fontWeight: "500",
                      marginBottom: 10
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
                      onClick={handleCheckout}
                      style={{
                        width: "100%",
                        height: 50,
                        backgroundColor: "#0d6efd",
                      }}
                      disabled={loading}
                    >
                      {loading ? "Đang Đặt hàng" : "Đặt hàng"}

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
