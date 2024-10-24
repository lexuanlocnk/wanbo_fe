import React from "react";
import Card from "react-bootstrap/Card";
import { newsItems } from "../pages/Data";

const FeaturedNews = () => {
  return (
    <div
      className="p-2 my-4"
      style={{ height: "auto", backgroundColor: "white" }}
    >
      <h5>TIN TỨC NỔI BẬT</h5>
      <div className="d-flex flex-wrap">
        {newsItems.map((item) => (
          <Card
            key={item.id}
            className="d-flex flex-column flex-md-row m-2"
            style={{ border: "none" }}
          >
            <Card.Img
              variant="top"
              src={item.images}
              className="mt-2 border custom-img" // Sử dụng lớp tùy chỉnh
              style={{
               
                objectFit: "cover",
              }}
            />

            <div className="d-flex flex-column justify-content-center mx-2">
              <a href={`/news/${item.id}`} className="mb-0 title-new truncate-text" >
                {item.title}
              </a>
              <a className="card-title">
                <b className="mb-0 seemore">
                  Xem thêm <span className="bi bi-arrow-right" />
                </b>
              </a>
            </div>          
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
