import React from "react";
import { newsItems } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./News.css"; // Ensure the CSS is imported
import NewsCategory from "../../components/NewsCategory";
import FeaturedNews from "../../components/FeaturedNews";
import { useParams } from "react-router-dom";

const NewsDetail = () => {
  const { id } = useParams();

  // Tìm bài viết dựa trên id
  const newsItem = newsItems.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return <div>Không tìm thấy tin tức</div>;
  }

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container py-5">
        <h4>TIN TỨC</h4>
        <Row className="justify-content-between">
          <Col
            lg={9}
            className="mt-3"
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div
              className="news-detail-content"
              style={{ backgroundColor: "white", padding: 20 }}
            >
              <h1>{newsItem.title}</h1>
              <div className="d-flex align-items-center">
                <p className="me-3 bi bi-person">Team dev</p>
                <p className="bi bi-clock-history">{newsItem.date}</p>
              </div>
              <img
                src={newsItem.images}
                alt={newsItem.title}
                className="news-detail-image my-4"
                style={{ width: "100%", height: "auto" }}
              />
              <p>{newsItem.description}</p>
              <div
                dangerouslySetInnerHTML={{ __html: newsItem.content }}
              />{" "}
              {/* Hiển thị nội dung chi tiết do admin nhập vào */}
            </div>
          </Col>

          <Col lg={3} xs={12} className="mt-3" style={{ marginRight: -12 }}>
            <div className="sticky-sidebar">
              <NewsCategory />
              <FeaturedNews />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewsDetail;
