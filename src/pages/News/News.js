import React, { useState } from "react";
import { newsItems } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./News.css"; 
import NewsCategory from "../../components/NewsCategory";
import FeaturedNews from "../../components/FeaturedNews";
import { useParams } from "react-router-dom";

const News = () => { 
  const [product, setProduct] = useState(null);
  const { urlNew } = useParams();

  // useEffect(() => {
  //   const fetchProductDetail = async () => {
  //     try {
  //       const response = await fetch(`http://192.168.245.190:8002/api/member/show-category/${urlNew}`);
  //       const data = await response.json();
  //        if (data.status === true && data.productDetail) {
  //           setProduct(data.productDetail);
  //         } 
  //     } catch (error) {
  //       console.error("Error fetching product:", error);
  //     }
  //   };

  //   fetchProductDetail();
  // }, [urlProduct]);
  return (
    <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container ">
      <h5 className="tblack fw-bold">TIN TỨC</h5>

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
                  className="news-card" 
                  style={{ border: "none" }}
                >
                  <Card.Img
                    variant="top"
                    src={item.images}
                    className="news-image p-2 m-2"
                  />
                  <div className="d-flex flex-column justify-content-center mx-2 news-content">
                    <Card.Title className="tblack fw-bold">{item.title}</Card.Title>

                    <div className="d-flex">
                      <Card.Text className="bi bi-person me-2 tgray">
                        Team dev
                      </Card.Text>
                      <p>|</p>
                      <Card.Text className="ms-2">
                        <span className="bi bi-clock-history me-1 tgray"/>
                        {item.date}
                      </Card.Text>
                    </div>

                    <Card.Text className="text-truncate-3 tgray">
                      {item.description}
                    </Card.Text>
                    <a href={`/new/${item.id}`} className="card-title">
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
