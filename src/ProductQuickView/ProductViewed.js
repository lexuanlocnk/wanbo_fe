import React, { useState } from "react";
import "./product-viewed.css";

const ProductViewed = ({
  item,
  quantityView,
  setQuantityView,
  setQuickView,
}) => {
  const [activeImg, setActiveImg] = useState(item.images[0]);

  const handleIncrease = () => {
    setQuantityView((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    setQuantityView((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
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
              <img src={activeImg} loading="lazy" alt="Active product" />
            </div>
            <div className="img-swiper">
              {Array.isArray(item.images) &&
                item.images.map((img, index) => (
                  <div className="img-swiper-item" key={index}>
                    <img
                      src={img}
                      alt={`Thumbnail ${index}`}
                      onClick={() => setActiveImg(img)}
                      className={`${activeImg === img ? "activeImg" : ""}`}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="right-detail">
            <h3 className="title-product">
              <a href={`/product/${item.id}`}>{item.name}</a>
            </h3>
            <div className="left_vend">
              <div className="first_status">
                Thương hiệu: <span className="vendor_status_name">Nikon</span>
              </div>
              <div className="line_tt">|</div>
              <div className="top_sku first_status">
                Mã sản phẩm:{" "}
                <span className="sku_status_name">Đang cập nhật</span>
              </div>
            </div>
            <div className="quickview-info">
              <span className="prices price-box">
                <span className="price product-price sale-price">
                  150.000.000₫
                </span>
                <del className="old-price">163.990.000₫</del>
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
              <button type="submit" className=" btn_add_to_cart ">
                <i className="bi bi-cart3"></i>
                <span className="btn-content text_1">Thêm vào giỏ hàng</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductViewed;
