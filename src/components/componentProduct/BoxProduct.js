import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../pages/Cart/CartContext";
import { Modal } from "react-bootstrap";
import BoxCart from "./BoxCart";
import ProductViewed from "../ProductQuickView/ProductViewed";
import "./box-product.css";

const BoxProduct = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [smShow, setSmShow] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [quickView, setQuickView] = useState(false);

  const [quantityView, setQuantityView] = useState(1);

  const handleSetQuickView = () => {
    console.log(item.images);
    setQuickView(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      images: item.images,
      quantity: quantity,
      discountPercentage: item.discountPercentage,
      originalPrice: item.originalPrice,
    });
    setSmShow(true);
  };

  return (
    <div
      className="me-3 ms-1 my-4 border rounded shadow4"
      key={item.id}
      style={{ display: "inline-block", position: "relative" }}
    >
      <Card className="prdItem">
        <Card.Img variant="top" src={item.images} className="p-4 img" />

        {item.discountPercentage > 0 && (
          <Card.Text className="sale">-{item.discountPercentage}%</Card.Text>
        )}

        <Card.Body>
          <a href={`/product/${item.id}`} className="card-title">
            <Card.Title className="prdName">{item.name}</Card.Title>
          </a>

          <Card.Text className="price">
            {item.price.toLocaleString("vi-VN")} VND
          </Card.Text>
          <Card.Text className="original-price">
            {item.discountPercentage > 0 ? (
              <>
                {item.originalPrice.toLocaleString("vi-VN")} VND <br />
              </>
            ) : (
              <br />
            )}
          </Card.Text>

          <Card.Text>
            {item.quantitysale > 0 ? (
              <>{item.quantitysale} sản phẩm đã bán</>
            ) : (
              <></>
            )}
          </Card.Text>

          {/* Nút hiện ở giữa khi hover */}
          <div className="hover-buttons">
            <Button variant="secondary" onClick={handleAddToCart}>
              <i class="bi bi-cart-plus" />
            </Button>

            <Modal
              size="xl"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header
                closeButton
                style={{ backgroundColor: "blue", color: "white" }}
              >
                <Modal.Title id="example-modal-sizes-title-sm">
                  <i className="bi bi-check-circle me-2" />
                  Đã thêm{" "}
                  <a
                    href={`/product/${item.id}`}
                    style={{ fontSize: 24, color: "white" }}
                  >
                    [{item.name}]
                  </a>{" "}
                  vào giỏ hàng
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BoxCart isInModal={true} />
              </Modal.Body>
            </Modal>
            {/* nút xem nhanh */}
            <Button variant="secondary" onClick={handleSetQuickView}>
              <i class="bi bi-eye" />
            </Button>
            <Modal
              size="xl"
              className=""
              dialogClassName="modal-product-viewed"
              show={quickView}
            >
              <Modal.Body className="box-product-viewed">
                <ProductViewed
                  item={item}
                  quantityView={quantityView}
                  setQuantityView={setQuantityView}
                  setQuickView={setQuickView}
                />
              </Modal.Body>
            </Modal>
            <Button variant="secondary">
              <i class="bi bi-repeat" />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default BoxProduct;
