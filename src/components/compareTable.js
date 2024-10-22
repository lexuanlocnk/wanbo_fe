import React from "react";

const CompareTable = ({ products }) => {
  return (
    <>
      <div className="compare-table d-block">
        <table className="table">
          <tbody>
            <tr className="image">
              <td className="first-col">Hình ảnh</td>
              {products.map((product, index) => (
                <td className="img-fluid" key={index}>
                  <img src={product.image} alt={product.name} width="100" />
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
                  {product.price}
                </td>
              ))}
            </tr>
            <tr className="status">
              <td className="first-col">Tình trạng</td>
              {products.map((product, index) => (
                <td key={index}>{product.status}</td>
              ))}
            </tr>
            <tr className="type">
              <td className="first-col">Loại</td>
              {products.map((product, index) => (
                <td key={index}>{product.type}</td>
              ))}
            </tr>
            <tr className="supplier">
              <td className="first-col">Nhà cung cấp</td>
              {products.map((product, index) => (
                <td key={index}>{product.supplier}</td>
              ))}
            </tr>
            <tr className="configuration-info">
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
                  <div class="remove-item">
                    <a class="remove-item-but">Xóa</a>
                  </div>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CompareTable;
