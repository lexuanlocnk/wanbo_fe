import React from "react";
import Card from "react-bootstrap/Card";
import { newsItems } from "../pages/Data";

const FeaturedNews = () => {
  return (
    <div
      className="p-3 mt-4"
      style={{ height: "auto", backgroundColor: "white" }}
    >
      <h5>Tin nổi bật</h5>
      <hr />
      <div className="d-flex flex-wrap">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="d-flex flex-column flex-md-row"
            style={{ border: "none" }}
          >
            <Card.Img
              variant="top"
              src={item.images}
              className="mt-2 border custom-img" // Sử dụng lớp tùy chỉnh
              style={{
                height: "auto",
                objectFit: "cover",
              }}
            />

            <div className="d-flex flex-column justify-content-center mx-2">
              <Card.Text className="mb-0 title-new" >
                {item.title}
              </Card.Text>
              <a href={`/news/${item.id}`} className="card-title">
                <h6 className="mb-0">
                  Xem thêm <span className="bi bi-arrow-right" />
                </h6>
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
