import React, { useContext, useState } from "react";
import { CartContext } from "../pages/Cart/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Collapse, Form, FormCheck } from "react-bootstrap";

const BoxCart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Hàm để tăng số lượng
  const increaseQuantity = (id) => {
    updateQuantity(id, 1);
  };

  // Hàm để giảm số lượng
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      removeFromCart(id);
    }
  };

  // Hàm để xử lý chọn/deselect các mục
  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Hàm để xử lý "Chọn tất cả"
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]); // Bỏ chọn tất cả
    } else {
      setSelectedItems(cartItems.map((item) => item.id)); // Chọn tất cả các mục
    }
    setSelectAll(!selectAll); // Cập nhật trạng thái "Chọn tất cả"
  };

  // Hàm để xóa các mục đã chọn
  const handleRemoveSelectedItems = () => {
    selectedItems.forEach((id) => removeFromCart(id));
    setSelectedItems([]); // Reset danh sách đã chọn sau khi xóa
  };

  // Tính tổng tiền của giỏ hàng
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <Col>
      <Button
        variant="danger"
        className="mb-5"
        style={{ width: "10%" }}
        onClick={handleRemoveSelectedItems}
        disabled={selectedItems.length === 0} // Chỉ bật nút khi có mục được chọn
      >
        Xóa tất cả
      </Button>
      
      {/* Tiêu đề cột */}
      <Row className="fw-bold">
        <Col md={1}>
          <FormCheck
            checked={selectAll}
            onChange={handleSelectAll} // Chọn tất cả hoặc bỏ chọn tất cả
          />
        </Col>
        <Col md={2}>Hình ảnh</Col>
        <Col md={2}>Tên sản phẩm</Col>
        <Col md={2}>Giá</Col>
        <Col md={2}>Số lượng</Col>
        <Col md={2}>Tổng</Col>
        <Col md={1}>Tác vụ</Col>
      </Row>
      <hr />
      {/* Hiển thị các sản phẩm trong giỏ hàng */}
      {cartItems.map((item) => (
        <Row className="align-items-center" key={item.id}>
          <Col md={0}>
            <FormCheck
              checked={selectedItems.includes(item.id)}
              onChange={() => handleSelectItem(item.id)}
            />
          </Col>
          <Col md={2}>
            <img
              src={item.images}
              alt={item.name}
              className="img-fluid p-3"
              style={{
                maxWidth: "150px",
                height: "auto",
                marginLeft: -40,
              }}
            />
          </Col>
          <Col md={2}>
            <Card.Text style={{ fontSize: 15 }}>{item.name}</Card.Text>
          </Col>

          <Col md={2}>
            <Card.Text style={{ fontSize: 15, color: "red" }}>
              {item.price.toLocaleString("vi-VN")} ₫
            </Card.Text>
          </Col>

          <Col md={2} className="d-flex align-items-center">
            {/* Nút trừ số lượng */}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => decreaseQuantity(item.id, item.quantity)}
              className="me-2"
            >
              -
            </Button>

            <Card.Text
              style={{
                height: 5,
                width: 18,
                textAlign: "center",
                fontSize: 15,
              }}
            >
              {item.quantity}
            </Card.Text>

            {/* Nút cộng số lượng */}
            <Button
              variant="outline-secondary"
              size="sm"
              onClick={() => increaseQuantity(item.id)}
              className="ms-2"
            >
              +
            </Button>
          </Col>

          <Col md={2}>
            <Card.Text style={{ fontSize: 15, color: "red" }}>
              {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
            </Card.Text>
          </Col>

          <Col md={1}>
            <Button variant="danger" onClick={() => removeFromCart(item.id)}>
              <i className="bi bi-trash"></i>
            </Button>
          </Col>
          <hr />
        </Row>
      ))}

      <Row className="mt-4">
        <Col md={{ span: 5, offset: 7 }} className="text-end">
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <h5> Tổng cộng:</h5>

            <span style={{ color: "red" }}>
              <h5>{totalPrice.toLocaleString("vi-VN")} ₫</h5>
            </span>
          </div>

          <Button
            variant="success"
            className="mt-4 p-2"
            style={{ width: "100%" }}
          >
            Thanh toán
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default BoxCart;
