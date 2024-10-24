import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const NewsCategory = () => {
  // State để quản lý hiển thị danh sách sản phẩm
  const [showProducts, setShowProducts] = useState(false);

  // Hàm xử lý toggle hiển thị sản phẩm
  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div
      className="p-4"
      style={{ height: "auto", backgroundColor: "white", fontSize: 15 }}
    >
      <h5 className="my-3">DANH MỤC TIN TỨC</h5>
      <Nav.Link className="my-3" href="/home">
        Trang chủ
      </Nav.Link>
      <Nav.Link className="my-3" href="/introduce">
        Giới thiệu
      </Nav.Link>

      {/* Mục Sản phẩm */}
      <div>
        <Nav.Link
          className="my-3"
          href="#"
          onClick={toggleProducts}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Sản phẩm
          <span style={{ fontSize: "12px", marginLeft: "5px" }}>
            {showProducts ? "▲" : "▼"}
          </span>
        </Nav.Link>

        {/* Hiển thị danh sách sản phẩm nếu showProducts là true */}
        {showProducts && (
          <div style={{ paddingLeft: "15px" }}>
            <Nav.Link className="my-2" href="/new-product">Sản phẩm mới</Nav.Link>
            <Nav.Link className="my-2" href="/featured-product">Sản phẩm nổi bật</Nav.Link>
          </div>
        )}
      </div>

      <Nav.Link className="my-3" href="/news">Tin tức</Nav.Link>
      <Nav.Link className="my-3" href="/contact">Liên hệ</Nav.Link>
    </div>
  );
};

export default NewsCategory;
