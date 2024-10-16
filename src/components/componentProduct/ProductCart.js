import React from "react";
import { Button, Row, Col, Card, FormCheck } from "react-bootstrap";

const ProductCart = ({
  item,
  selectedItems,
  handleSelectItem,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
}) => {
  return (
    <>
      <Row className="align-items-center border-bottom" key={item.id}>
        {/* Checkbox chọn sản phẩm */}
        <Col  sm={1} className="d-flex justify-content-center" style={{ width: 45 }}>
          <FormCheck
            checked={selectedItems.includes(item.id)}
            onChange={() => handleSelectItem(item.id)}
          />
        </Col>

        {/* Hình ảnh sản phẩm */}
        <Col xs={9} sm={2}>
          <img
            src={item.images}
            alt={item.name}
            className="img-fluid p-1 p-md-3" // Giảm padding trên màn hình nhỏ
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Col>

        {/* Tên sản phẩm và nút xóa */}
        <Col xs={8} sm={3} className="text-start">
          <Card.Text style={{ fontSize: 14 }} className="mb-1">
            {item.name}
          </Card.Text>
          <a
            variant="danger"
            onClick={() => removeFromCart(item.id)}
            style={{ cursor: "pointer", fontSize: 12 }}
          >
            <i className="bi bi-trash"></i> Xóa
          </a>
        </Col>

        {/* Giá sản phẩm */}
        <Col xs={6} sm={2} className="mt-2 mt-sm-0">
          <Card.Text style={{ fontSize: 14, color: "red", fontWeight: "600" }}>
            {item.price.toLocaleString("vi-VN")} ₫
          </Card.Text>
        </Col>

        {/* Điều chỉnh số lượng */}
        <Col xs={6} sm={2} className="mt-2 mt-sm-0">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ border: "1px solid #DDDDDD", width: 80 }}
          >
            <button
              variant="outline-secondary"
              size="sm"
              onClick={() => decreaseQuantity(item.id, item.quantity)}
              className="mx-1 border-end"
              style={{ border: "none", backgroundColor: "white" }}
            >
              -
            </button>

            <Card.Text
              style={{
                height: 5,
                width: 18,
                textAlign: "center",
                fontSize: 14,
              }}
            >
              {item.quantity}
            </Card.Text>

            <button
              variant="outline-secondary"
              size="sm"
              onClick={() => increaseQuantity(item.id)}
              className="ms-1 border-start"
              style={{ border: "none", backgroundColor: "white" }}
            >
              +
            </button>
          </div>
        </Col>

        {/* Tổng tiền */}
        <Col xs={12} sm={2} className="d-none d-sm-block text-end mt-2 mt-sm-0">
          <Card.Text style={{ fontSize: 14, color: "red", fontWeight: "600" }}>
            {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
          </Card.Text>
        </Col>

        {/* Tổng tiền hiện ở dưới trên màn hình xs */}
        <Col xs={12} sm={2} className="d-block d-sm-none text-end mt-2">
          <Card.Text style={{ fontSize: 14, color: "red", fontWeight: "600" }}>
            Tổng: {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
          </Card.Text>
        </Col>
      </Row>
    </>
  );
};

export default ProductCart;
