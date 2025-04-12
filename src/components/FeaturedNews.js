import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { newsItems } from "../pages/Data";
import HomeApi from "../api/homeApi";
import { imageBaseUrl } from "../api/axiosConfig";
import { Link } from "react-router-dom";

const FeaturedNews = () => {
  const [newTopData, setNewTopData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNewTop = async () => {
      const homeApi = new HomeApi();
      try {
        const response = await homeApi.getNewtop();
        setNewTopData(response.data.listNew?.data); // Lấy data từ response
      } catch (err) {
        console.log("Fetch setNewTopData Data Error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchNewTop();
  }, []);
  // console.log(">>>>>>>>>>>", newTopData)

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="p-2 my-4"
      style={{ height: "auto", backgroundColor: "white" }}
    >
      <h5 className="mt-2">TIN TỨC NỔI BẬT</h5>
      <div className="d-flex flex-wrap">
        {newTopData.map((item) => (
          <div>
            <hr />
            <Card
              key={item.news_id}
              className="d-flex flex-column flex-lg-row  align-items-center justify-content-center "
              style={{ border: "none" }}
            >
              <Card.Img
                variant="top"
                src={`${imageBaseUrl}${item.picture}`}
                className="custom-img" // Sử dụng lớp tùy chỉnh
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="d-flex flex-column justify-content-center mx-1">
                <Link
                  to={`/news/${item.url_cat}/${item.friendly_url}`}
                  className="title-new truncate-text"
                  onClick={scrollToTop}
                >
                  {item.title}
                </Link>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
