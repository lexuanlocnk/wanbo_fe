import React, { useState } from "react";
import { imageBaseUrl } from "../api/axiosConfig";

const CompareTable = ({ products }) => {
  const [compareList, setCompareList] = useState([]);

  const handleRemoveFromCompare = (productId) => {
    const storedCompareList = JSON.parse(localStorage.getItem("compareList")) || [];

    // Loại bỏ sản phẩm có id bằng productId
    const updatedCompareList = storedCompareList.filter((product) => product.id !== productId);

    // Cập nhật lại localStorage và state
    localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
    setCompareList(updatedCompareList);
    window.location.reload()
  };

  return (
    <>
      <div className="compare-table d-block">
        <table className="table">
          <tbody>
            <tr className="image">
              <td className="first-col">Hình ảnh</td>
              {products.map((product, index) => (
                <td className="img-fluid" key={index}>
                  <img src={`${imageBaseUrl}${product.image}`} alt={product.name} width="100" />
                </td>
              ))}
            </tr>
            <tr className="name">
              <td className="first-col">Tên sản phẩm</td>
              {products.map((product, index) => (
                <td className="product-name" key={index}>
                  {product.name}
                </td>
              ))}
            </tr>
            <tr className="price">
              <td className="first-col">Giá</td>
              {products.map((product, index) => (
                <td className="product-price" key={index}>
                  {product.price ? `${(product.price * 1).toLocaleString("vi-VN")} đ` : ""}
                  <span className="ms-2" style={{ fontSize: 11, color: "gray", textDecoration: "line-through" }}>{product.priceOld}</span>

                </td>
              ))}
            </tr>
            <tr className="status">
              <td className="first-col">Tác vụ</td>
              {products.map((product, index) => (
                <td key={index}> <div class="remove-item">
                  <button class="remove-item-but" onClick={() => handleRemoveFromCompare(product.id)}>Xóa</button>
                </div></td>
              ))}
            </tr>

            {/* <tr className="status">
              <td className="first-col">Tình trạng</td>
              {products.map((product, index) => (
                <td key={index}>{product.status}</td>
              ))}
            </tr> */}
            {/* <tr className="type">
              <td className="first-col">Loại</td>
              {products.map((product, index) => (
                <td key={index}>{product.type}</td>
              ))}
            </tr> */}

            {/* <tr className="supplier">
              <td className="first-col">Nhà cung cấp</td>
              {products.map((product, index) => (
                <td key={index}>{product.supplier}</td>
              ))}
            </tr> */}

            {/* <tr className="configuration-info">
              <td className="first-col">Cấu hình chi tiết</td>
              {products.map((product, index) => (
                <td key={index}>
                  <table className="inner-table">
                    <tbody>
                      {Object.entries(product.configuration).map(
                        ([key, value], i) => (
                          <tr key={i}>
                            <td className="name-product">{key}</td>
                            <td>{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                 
                </td>
              ))}
            </tr> */}


          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompareTable;
