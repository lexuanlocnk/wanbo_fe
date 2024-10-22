import React from "react";

import ProductImg from "../../assets/images/product-img-test.png";

const ProductItem = () => {
  return (
    <>
      <div className="product-item col-6 col-xl-4 col-lg-4 col-md-4">
        <div className="item_product_main">
          <div className="product-thumbnail">
            <a className="image_thumb">
              <img width={480} height={480} src={ProductImg} loading="lazy" />
            </a>
            <span className="smart">- 14%</span>
          </div>
          <div className="product-info">
            <div className="product-name">
              <a>Insta360 X3 (One X3)</a>{" "}
            </div>
            <div className="price-box">11.560.000đ </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
