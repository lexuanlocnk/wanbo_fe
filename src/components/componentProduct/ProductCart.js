import React from "react";
import { Button, Row, Col, Card, FormCheck } from "react-bootstrap";
import { imageBaseUrl } from "../../api/axiosConfig";

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
      <Row className="align-items-center border-bottom" key={item.ProductId}>
        {/* Checkbox chọn sản phẩm */}
        <Col
          sm={1}
          className="d-flex justify-content-center d-none d-md-flex FormCheck"
       
        >
          <FormCheck
            checked={selectedItems.includes(item.id)}
            onChange={() => handleSelectItem(item.id)}
          />
        </Col>

        {/* Hình ảnh sản phẩm */}
        <Col xs={4} sm={2}>
          <img
            src={`${imageBaseUrl}${item.images}`}
            alt={item.name}
            className="img-fluid p-1 p-md-3 mt-2"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Col>

        {/* Tên sản phẩm và nút xóa */}
        <Col xs={8} sm={3} className="text-start">
          <Card.Text className="text-Tong mb-1" >
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
        <Col xs={7} sm={2} className="mt-2 mt-sm-0 text-end2">
          <Card.Text style={{color: "red", fontWeight: "600" }} className="text-Tong">
            {item.price} ₫
          </Card.Text>
        </Col>

        {/* Điều chỉnh số lượng */}
        <Col xs={5} sm={2} className="mt-2 mt-sm-0">
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
        <Col
          sm={2}
          className=" d-sm-block mt-2 mt-sm-0 d-none d-sm-flex text-end "
          
        >
          <Card.Text style={{ color: "red", fontWeight: "600" }} className="text-Tong">
            {(item.price * item.quantity)} ₫
          </Card.Text>
        </Col>

      </Row>
    </>
  );
};

export default ProductCart;
