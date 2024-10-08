import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormCheck } from "react-bootstrap";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]); // Lưu trữ các mục được chọn
  const [selectAll, setSelectAll] = useState(false); // Trạng thái cho checkbox "Chọn tất cả"

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
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="cart-container p-5">
        <h3 className="mb-4">GIỎ HÀNG</h3>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn trống.</p>
        ) : (
          <div>
            <Button
              variant="danger"
              className="p-2 mb-2"
              style={{ width: "10%" }}
              onClick={handleRemoveSelectedItems}
              disabled={selectedItems.length === 0} // Chỉ bật nút khi có mục được chọn
            >
              Xóa
            </Button>
            <div style={{ backgroundColor: "white" }} className="p-5">
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
                  <Col md={1}>
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
                      style={{ maxWidth: "150px", height: "auto" }}
                    />
                  </Col>
                  <Col md={2}>
                    <Card.Title>{item.name}</Card.Title>
                  </Col>
                  <Col md={2}>
                    <Card.Text style={{ fontSize: 17, color: "red" }}>
                      {item.price.toLocaleString("vi-VN")} VND
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
                    <Card.Text style={{ fontSize: 17, color: "red" }}>
                      {(item.price * item.quantity).toLocaleString("vi-VN")} VND
                    </Card.Text>
                  </Col>

                  <Col md={1}>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </Button>
                  </Col>
                  <hr />
                </Row>
              ))}

              <Row className="mt-4">
                <Col md={{ span: 3, offset: 9 }} className="text-end">
                  <div
                    style={{ justifyContent: "space-between", display: "flex" }}
                  >
                    <h5> Tổng cộng:</h5>

                    <span style={{ color: "red" }}>
                      <h5>{totalPrice.toLocaleString("vi-VN")} VND</h5>
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
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
