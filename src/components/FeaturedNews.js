import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { newsItems } from "../pages/Data";
import HomeApi from "../api/homeApi";
import { imageBaseUrl } from "../api/axiosConfig";

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
                className=" custom-img" // Sử dụng lớp tùy chỉnh
                style={{
                  objectFit: "cover",
                }}
              />

              <div className="d-flex flex-column justify-content-center mx-1">
                <a
                  href={`/news/${item.url_cat}/${item.friendly_url}`}
                  className="title-new truncate-text"
                >
                  {item.title}
                </a>
                <a href={`/news/${item.url_cat}/${item.friendly_url}`} className="card-title">
                  <b className="seemore">
                    Xem thêm <span className="bi bi-arrow-right" />
                  </b>
                </a>
              </div>
            </Card>

          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedNews;
