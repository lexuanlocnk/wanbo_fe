import React, { useContext, useEffect, useState } from "react";
import "./product-viewed.css";
import { imageBaseUrl } from "../api/axiosConfig";
import { CartContext } from "../pages/Cart/CartContext";
import { Modal } from "react-bootstrap";
import BoxCart from "../components/componentProduct/BoxCart";

const ProductViewed = ({
  item,
  quantityView,
  setQuantityView,
  setQuickView,
}) => {
  const [activeImg, setActiveImg] = useState(item.Image);
    // Lấy hàm addToCart từ context
  const { addToCart } = useContext(CartContext);
  const handleIncrease = () => {
    setQuantityView((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantityView((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };
  const [smShow, setSmShow] = useState(false);
  const handleAddToCart = () => {
    addToCart({
      id: item.ProductId,
      name: item.ProductName,
      price: item.Price,
      images: item.Image,
      quantity: quantityView,
      originalPrice: item.PriceOld,
    });
    setSmShow(true);

    // setQuickView(false);

  }; 

  return (
    <>
      <div className="btn-close-modal" onClick={() => setQuickView(false)}>
        <i className="bi bi-x-lg"></i>
      </div>
      <div className="row">
        <div className="product-details">
          <div className="left-detail">
            <div className="img-thumbnail">
              <img src={`${imageBaseUrl}${item.Image}`} loading="lazy" alt="Active product" />
            </div>
            <div className="img-swiper">
              {/* {Array.isArray(item.images) &&
                item.images.map((img, index) => (
                  <div className="img-swiper-item" key={index}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setActiveImg(img)}
                      className={`${activeImg === img ? "activeImg" : ""}`}
                    />
                  </div>
                ))} */}

                 {item && item.Image && (
                <img
                  src={`${imageBaseUrl}${item.Image}`}
                  alt="Thumbnail 1"
                  className="thumbnail-image"
                />
              )}
            </div>
          </div>
          <div className="right-detail">
            <h3 className="title-product">
               <a href={`/product/${item.UrlProduct}`}>{item.ProductName}</a>
            </h3>
            <div className="left_vend">
              {/* <div className="first_status">
                Thương hiệu: <span className="vendor_status_name">Nikon</span>
              </div>
              <div className="line_tt">|</div>
              <div className="top_sku first_status">
                Mã sản phẩm:{" "}
                <span className="sku_status_name">Đang cập nhật</span>
              </div> */}
              <div className="first_status">
                Danh mục: <span className="vendor_status_name">{item.Category}</span>
              </div>

            </div>
            <div className="quickview-info">
              <span className="prices price-box">
                <span className="price product-price sale-price">
                   {item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : "N/A"}                  
                </span>
                <del className="old-price">{item.PriceOld ? `${item.PriceOld.toLocaleString("vi-VN")} đ` : " "} </del>
              </span>
            </div>
            {/* nút tăng giảm */}
            <div className="quantity-picker">
              <div className="quantity-display">{quantityView}</div>
              <div className="quantity-buttons">
                <button className="increase-btn" onClick={handleIncrease}>
                  +
                </button>
                <button className="decrease-btn" onClick={handleDecrease}>
                  -
                </button>
              </div>
            </div>
            {/* thêm vào giỏ hàng */}
            <div className="button_actions">
              <button type="submit" className=" btn_add_to_cart" onClick={handleAddToCart}>
                <i className="bi bi-cart3"></i>
                <span className="btn-content text_1">Thêm vào giỏ hàng</span>
              </button>
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
                      href={`/product/${item.UrlProduct}`}
                      style={{ fontSize: 24, color: "white" }}
                    >
                      [{item.ProductName}]
                    </a>{" "}
                    vào giỏ hàng
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <BoxCart isInModal={true} />
                </Modal.Body>
              </Modal>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductViewed;
