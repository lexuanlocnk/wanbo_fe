import React, { useContext, useState } from "react";
import { CartContext } from "../../pages/Cart/CartContext";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FormCheck } from "react-bootstrap";
import ProductCart from "./ProductCart"; 
import { useNavigate } from "react-router-dom";

const BoxCart = ({ isInModal }) => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const navigate = useNavigate();

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
  const handleCheckout = () => {
    if (cartItems.length > 0) {
      navigate("/checkout");
    }
  };

  return (
    <Col>
      <div className=" d-none d-sm-flex text-end ">
        <a
          className="mb-2"
          onClick={handleRemoveSelectedItems}
          disabled={selectedItems.length === 0}
          style={{ cursor: "pointer", marginTop: -3 }}
        >
          Xóa tất cả
        </a>
      </div>

      {/* Tiêu đề cột */}
      <div className="border p-1">
        <Row className="fw-bold">
          <Col md={1} className="d-md-block d-none" style={{ width: 45 }}>
            <FormCheck checked={selectAll} onChange={handleSelectAll} />
          </Col>
          <Col md={2} className="d-md-block d-none " style={{ textAlign: "center" }}>
            Hình ảnh
          </Col>
          <Col md={3} className="d-md-block d-none">
            Tên sản phẩm
          </Col>
          <Col md={2} className="d-md-block d-none">
            Giá
          </Col>
          <Col md={2} className="d-md-block d-none">
            Số lượng
          </Col>
          <Col md={2} className="d-md-block d-none"  >
            Tổng
          </Col>
        </Row>
        {/* Thêm hàng tiêu đề cho kích thước nhỏ hơn */}
        <Row className="d-md-none fw-bold">
          <Col className="text-center">Giỏ hàng của bạn</Col>
        </Row>
      </div>

      <div className="border px-1 pt-1">
        <div
          style={{
            height: isInModal ? "290px" : "auto", // Nếu là modal, đặt chiều cao cố định
            overflowY: isInModal ? "auto" : "visible",
            overflowX: "hidden",
          }}
        >
          {cartItems.map((item) => (
            <ProductCart
              key={item.ProductId}
              item={item}
              selectedItems={selectedItems}
              handleSelectItem={handleSelectItem}
              increaseQuantity={increaseQuantity}
              decreaseQuantity={decreaseQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      </div>

      {/* Phần tổng cộng */}
      <Row className="mt-4">
        <Col md={{ span: 4, offset: 8 }} className="text-end">
          <div
            style={{
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <h6> Tổng cộng:</h6>

            <span >
              <h6 style={{ color: "red", fontWeight: "bold" }}>{totalPrice.toLocaleString("vi-VN")} ₫</h6>
            </span>
          </div>

          <Button
            variant="primary"
            className="mt-4 p-2"
            style={{ width: "100%"}}
            disabled={totalPrice === 0}
            onClick={handleCheckout}
          >
            Thanh toán
          </Button>
        </Col>
      </Row>
    </Col>
  );
};

export default BoxCart;
