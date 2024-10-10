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
            style={{
              maxWidth: "150px",
              height: "auto",
              marginLeft: -40,
            }}
          />
        </Col>
        <Col md={3}>
          <Card.Text style={{ fontSize: 15 }}>
            {item.name}
            <br/>
            <a variant="danger" onClick={() => removeFromCart(item.id)}>
              <i className="bi bi-trash"></i>
            </a>
          </Card.Text>
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

        <hr />
      </Row>
    </>
  );
};

export default ProductCart;
