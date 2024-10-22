import React from "react";
import "./compare.css";
import CompareTable from "../../components/compareTable";

// Sản phẩm mẫu
const products = [
  {
    image:
      "https://bizweb.dktcdn.net/thumb/medium/100/482/909/products/1604443681-1601518.jpg?v=1683647156983",
    name: "Sản phẩm 1",
    price: "10,000,000 VND",
    status: "Còn hàng",
    type: "Điện thoại",
    supplier: "Nhà cung cấp A",
    configuration: {
      RAM: "8GB",
      "Bộ nhớ": "128GB",
      Pin: "4000mAh",
      "Màn hình": "6.5 inch",
    },
  },
  {
    image: "https://example.com/product1.jpg",
    name: "Sản phẩm 1",
    price: "10,000,000 VND",
    status: "Còn hàng",
    type: "Điện thoại",
    supplier: "Nhà cung cấp A",
    configuration: {
      RAM: "8GB",
      "Bộ nhớ": "128GB",
      Pin: "4000mAh",
      "Màn hình": "6.5 inch",
    },
  },
  {
    image: "https://example.com/product2.jpg",
    name: "Sản phẩm 2",
    price: "15,000,000 VND",
    status: "Hết hàng",
    type: "Laptop",
    supplier: "Nhà cung cấp B",
    configuration: {
      RAM: "16GB",
      SSD: "512GB",
      CPU: "Intel Core i7",
      "Màn hình": "15.6 inch",
    },
  },
];

const CompareProduct = (props) => {
  return (
    <>
      <div className="container">
        <div className="pt-2 mb-5">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12">
              <div className="title-block-page">
                <h1 className="title-head">So sánh sản phẩm</h1>
              </div>
            </div>
            <div className="col-lg-12">
              <CompareTable products={products}></CompareTable>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProduct;
