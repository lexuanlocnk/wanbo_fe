import React from "react";
import NoProductImage from "./../assets/images/no-product.jpg";

function NoProduct() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center flex-column">
        <img src={NoProductImage} style={{ width: "30%" }} />
        <div className="no-product">Không có sản phẩm nào</div>
      </div>
    </>
  );
}

export default NoProduct;
