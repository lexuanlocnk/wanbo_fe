import React from "react";
import { newsItems } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./News.css"; 
import NewsCategory from "../../components/NewsCategory";
import FeaturedNews from "../../components/FeaturedNews";

const News = () => {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="p-5">
        <h4>TIN TỨC</h4>
        <Row className="justify-content-between">
          <Col
            lg={9}
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
                    src={item.images}
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
                    <a href={`/news/${item.id}`} className="card-title">
                      <h6>
                        Xem thêm <span className="bi bi-arrow-right" />
                      </h6>
                    </a>
                  </div>
                </Card>
              ))}
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

export default News;
