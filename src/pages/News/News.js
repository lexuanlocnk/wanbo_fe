import React from "react";
import { newsItems } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./News.css"; // Ensure the CSS is imported
import { Nav } from "react-bootstrap";

const News = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="p-5">
        <h4>TIN TỨC</h4>
        <Row className="justify-content-between">
          <Col
            md={9}
            className="mt-3"
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div className="d-flex flex-wrap">
              {newsItems.map((item) => (
                <Card
                  key={item.id}
                  className="news-card" // Thêm class `news-card`
                  style={{ border: "none" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.image}
                    className="news-image p-2 m-2"
                  />
                  <div className="d-flex flex-column justify-content-center mx-2 news-content">
                    <Card.Title>{item.title}</Card.Title>

                    <div className="d-flex">
                      <Card.Text className="bi bi-person me-2">
                        Team dev
                      </Card.Text>
                      <p>|</p>
                      <Card.Text className="bi bi-clock-history ms-2">
                        {item.date}
                      </Card.Text>
                    </div>

                    <Card.Text className="text-truncate-3">
                      {item.description}
                    </Card.Text>
                    <a href={`/product`} className="card-title">
                      <h6>
                        Xem thêm <span className="bi bi-arrow-right" />
                      </h6>
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </Col>

          <Col md={3} xs={12} className="mt-3" style={{ marginRight: -12 }}>
            <Col
              className="p-4"
              style={{ height: "auto", backgroundColor: "white" }}
            >
              <h5>Danh mục tin tức</h5>
              <hr />
              <Nav defaultActiveKey="/home" className="flex-column">
                <Nav.Link href="/home">Trang chủ</Nav.Link>
                <Nav.Link eventKey="link-1">Giới thiệu</Nav.Link>
                <Nav.Link eventKey="link-2">Sản phẩm</Nav.Link>
                <Nav.Link eventKey="link-3">Tin tức</Nav.Link>
                <Nav.Link eventKey="link-4">Liên hệ</Nav.Link>
              </Nav>
            </Col>

            <Col
              className="p-3 mt-4"
              style={{ height: "auto", backgroundColor: "white" }}
            >
              <h5>Tin nổi bật</h5>
              <hr />
              <div className="d-flex flex-wrap">
                {newsItems.map((item) => (
                  <Card
                    key={item.id}
                    className="d-flex flex-column flex-md-row" // Flex theo cột khi màn hình nhỏ, theo hàng khi màn hình lớn
                    style={{ border: "none" }}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="p-2"
                      style={{
                        width: "40%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex-column justify-content-center mx-2">
                      <Card.Text className="mb-0">{item.title}</Card.Text>
                      <a href={`/product`} className="card-title">
                        <h6 className="mb-0">Xem thêm</h6>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default News;
