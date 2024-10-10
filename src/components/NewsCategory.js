import React from "react";
import { Nav } from "react-bootstrap";

const NewsCategory = () => {
  return (
    <div className="p-4" style={{ height: "auto", backgroundColor: "white" }}>
      <h5>Danh mục tin tức</h5>
      <hr />
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Trang chủ</Nav.Link>
        <Nav.Link href="/introduce">Giới thiệu</Nav.Link>
        <Nav.Link href="/product">Sản phẩm</Nav.Link>
        <Nav.Link href="/news">Tin tức</Nav.Link>
        <Nav.Link href="/contact">Liên hệ</Nav.Link>
      </Nav>
    </div>
  );
};

export default NewsCategory;
