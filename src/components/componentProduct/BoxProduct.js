import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../pages/Cart/CartContext";
import { Modal } from "react-bootstrap";
import BoxCart from "./BoxCart";
import ProductViewed from "../../ProductQuickView/ProductViewed";
import "./box-product.css";
import componentProduct from "./componentProduct.css";
import { Drawer, Space } from "antd";
import { bottom } from "@popperjs/core";
import { imageBaseUrl } from "../../api/axiosConfig";

const BoxProduct = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [smShow, setSmShow] = useState(false);

  const [quantity, setQuantity] = useState(1);

  const [quickView, setQuickView] = useState(false);

  const [quantityView, setQuantityView] = useState(1);

  const [isCompared, setIsCompared] = useState(false);

  const handleOpenCompare = () => {
    setIsCompared(true);
  };
  const handleCloseCompare = () => {
    setIsCompared(false);
  };

  const handleSetQuickView = () => {
    console.log(item.images);
    setQuickView(true);
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.ProductID,
      name: item.ProductName,
      price: item.Price,
      images: item.Image,
      quantity: quantity,
      discountPercentage: item.discountPercentage,
      originalPrice: item.PriceOld,
    });
    setSmShow(true);
  };  
  const sale = Math.round(((item.PriceOld - item.Price)/item.PriceOld)*100)
  return (
    <div
      className="my-4  rounded box-product mx-1"
      key={item.ProductId}
      style={{ display: "inline-block", position: "relative"}}
    >    
     <a href={`/product/${item.UrlProduct}`}>
      <Card className="prdItem border-0 shadow4">
        <Card.Img variant="top" style={{width: 268}} src={`${imageBaseUrl}${item.Image}`} className="p-4 img"/>

        {sale > 0 && (
          <Card.Text className="sale">-{sale} %</Card.Text>
        )}
        
        <Card.Body>
         
            <Card.Title className="prdName">{item.ProductName}</Card.Title>
        

          <Card.Text className="price">
               {item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : "N/A"}
          </Card.Text>
          
          {sale > 0 ? (
            <Card.Text className="original-price tgray fw-bold" >         
               {item.PriceOld ? `${item.PriceOld.toLocaleString("vi-VN")} đ` : "N/A"}  
            </Card.Text>
            ): 
            <br/>
          }


          {/* <Card.Text>
          {item.discountPercentage > 0 ? (
              <>
                {item.PriceOld} VND <br />
              </>
            ) : (
              <br />
            )}
            {item.quantitysale > 0 ? (
              <> <b>{item.quantitysale}</b> sản phẩm đã bán</>
            ) : (
              <></>
            )}
          </Card.Text> */}

          {/* Nút hiện ở giữa khi hover */}
          <div className="hover-buttons">
            {/* nút thêm vào giỏ */}
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
                className="custom-modal-header"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                <Modal.Title id="example-modal-sizes-title-sm " className="">
                  <i className="bi bi-check-circle me-2" />
                  Đã thêm{" "}
                  <a
                    href={`/product/${item.id}`}
                    style={{ fontSize: 20, color: "white", fontWeight: "400" }}
                  >
                    [{item.name}]
                  </a>{" "}
                  vào giỏ hàng
                  <i
                    className="bi bi-x-lg"
                    style={{
                      position: "absolute",
                      right: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => setSmShow(false)} // sự kiện đóng modal
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BoxCart isInModal={true} />
              </Modal.Body>
            </Modal>

            {/* nút xem nhanh */}
            <Button variant="secondary" onClick={handleSetQuickView}>
              <i className="bi bi-eye" />
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
            {/* so sánh sản phẩm */}
            <Button variant="secondary" onClick={handleOpenCompare}>
              <i class="bi bi-repeat" />
            </Button>
          </div>
        </Card.Body>
      </Card>
      </a>
      {/* <Drawer
        title="So sánh sản phẩm"
        placement={bottom}
        width={500}
        open={isCompared}
        extra={<Space></Space>}
        onClose={handleCloseCompare}
        className="compare-drawer"
      >
        <div className="container">
          <div className="item-compare-wrap">
            <a className="item-compare-img-thumb">
              <img src={item.images[0]}></img>
            </a>
            <div className="product-info">
              <a className="product-name">{item.name}</a>
              <div class="price-box">
                <span class="price">
                  {item.price.toLocaleString("vi-VN")} đ
                </span>
                <span class="compare-price">
                  {item.originalPrice.toLocaleString("vi-VN")} đ
                </span>
              </div>
              <div className="remove-compare-item">Xoá</div>
            </div>
          </div>
          <div className="compare-navigate-but">
            <a href="/compare-product">Đi đến trang so sánh sản phẩm</a>
          </div>
        </div>
      </Drawer> */}
    </div>
  );
};

export default BoxProduct;
