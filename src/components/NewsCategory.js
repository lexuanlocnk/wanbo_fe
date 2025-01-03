import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import axios from "axios";
import newApi from "../api/newApi";

const NewsCategory = () => {
  // State để quản lý hiển thị danh sách sản phẩm
  const [showProducts, setShowProducts] = useState(false);
  const [categoryData, setCategoryData] = useState([]);

  // Hàm xử lý toggle hiển thị sản phẩm
  const toggleProducts = () => {
    setShowProducts(!showProducts);
  };


  useEffect(() => {
    const fetchNewCategory = async () => {
      const NewApi = new newApi();
      try {
        const response = await NewApi.getNewCategory();
        // const response = await axios.get(
        //   "http://192.168.245.190:8002/api/member/news-category/may-chieu-mini-wanbo"
        // );

        if (response.data.status === true && response.data.data) {
          setCategoryData(response.data.data);
        }
      } catch (error) {
        console.error("Error fetching NewCategory:", error);
      }
    };

    fetchNewCategory();
  }, []);

  return (
    <div
      className="p-4"
      style={{ height: "auto", backgroundColor: "white", fontSize: 15 }}
    >
      <h5 className="my-3">DANH MỤC TIN TỨC</h5>
      {categoryData && categoryData.length > 0 ? categoryData.map((item) => (
        <Nav.Link className="my-3" href={`/news/${item.news_category_desc?.friendly_url}`}>
          {item.news_category_desc?.cat_name}
        </Nav.Link>
      )) : []}

      {/* <Nav.Link className="my-3" href="/introduce">
        Giới thiệu
      </Nav.Link>
     
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
        {showProducts && (
          <div style={{ paddingLeft: "15px" }}>
            <Nav.Link className="my-2" href="/new-product">Sản phẩm mới</Nav.Link>
            <Nav.Link className="my-2" href="/featured-product">Sản phẩm nổi bật</Nav.Link>
          </div>
        )}
      </div>

      <Nav.Link className="my-3" href="/news/may-chieu-mini-wanbo">Tin tức</Nav.Link>
      <Nav.Link className="my-3" href="/news/tin-khuyen-mai">Tin khuyến mãi</Nav.Link> */}

    </div>
  );
};

export default NewsCategory;
