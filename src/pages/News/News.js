import React, { useEffect, useState } from "react";
import { newsItems } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./News.css"; 
import NewsCategory from "../../components/NewsCategory";
import FeaturedNews from "../../components/FeaturedNews";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../../api/axiosConfig";

const News = () => { 
  const [newCategory, setNewCategory] = useState([]);
  const { urlNew } = useParams();

  useEffect(() => {
    const fetchNewDetail = async () => {
      try {
        const response = await fetch(`http://192.168.245.190:8002/api/member/news/${urlNew}`);
        const data = await response.json();
         if (data.status === true && data.listNew.data) {
            setNewCategory(data.listNew.data);
          } 
           console.log(">>>>>>>>>>", newCategory);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchNewDetail();
  }, [urlNew]);

  return (
    <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container ">
      <h5 className="tblack fw-bold">TIN TỨC{newCategory.cat_name}</h5>

        <Row className="justify-content-between">

          <Col
            lg={9}
            className="mt-3"
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div className="d-flex flex-wrap">
             {newCategory && newCategory.length > 0 ? newCategory.map((item) => (
                <Card
                  key={item.news_id}
                  className="news-card" 
                  style={{ border: "none" }}
                > 
                  <Card.Img
                    variant="top"
                    src={`${imageBaseUrl}${item.picture}`}
                    className="news-image p-2 m-2"
                    href={`/news/${urlNew}/${item.friendly_url}`} 
                  />
                  <div className="d-flex flex-column justify-content-center mx-2 news-content">
                    <Card.Title className="tblack fw-bold">{item.title}</Card.Title>

                    <div className="d-flex" >
                      <Card.Text className="bi bi-person me-2 tgray">
                        Team dev
                      </Card.Text>
                      <p>|</p>
                      <Card.Text className="ms-2">
                        <span className="bi bi-clock-history me-1 tgray"/>
                        {item.date_post}
                      </Card.Text>
                    </div>

                    <div className="text-truncate-3 tgray">
                      {item.short}
                    </div>
                    <a href={`/news/${urlNew}/${item.friendly_url}`} className="card-title">
                      <h6>
                        Xem thêm <span className="bi bi-arrow-right" />
                      </h6>
                    </a>
                  </div>
                </Card>
             )): []}
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
