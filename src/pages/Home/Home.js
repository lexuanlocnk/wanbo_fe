import React, { useEffect, useRef, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Carouselm from "react-multi-carousel";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import {
  cameraItem,
  items,
  newItems,
  newsItems,
  videoItem,
  lendItem,
} from "../Data";

import "./Home.css";
import { auto } from "@popperjs/core";
import BoxProduct from "../../components/componentProduct/BoxProduct";
import FlashSaleCountdown from "../../components/FlashSaleCountdown";
import HomeBanner from "../../components/homeBanner";
import HomeApi from "../../api/homeApi";
import { imageBaseUrl } from "../../api/axiosConfig";
import 'react-toastify/dist/ReactToastify.css';

const Home = (props) => {
  const [categoryData, setCategoryData] = useState([]);
  const [flashSaleData, setFlashSaleData] = useState([]);
  const [newTopData, setNewTopData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProjetorLists = async () => {
      const homeApi = new HomeApi();
      try {
        const response = await homeApi.getProduct();
        setCategoryData(response.data.data); // Lấy data từ response

        const responseFl = await homeApi.getFlashSale();
        setFlashSaleData(responseFl.data.ProductFlashSale);

      } catch (err) {
        console.log("Fetch MenuCategory Data Error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProjetorLists();
  }, []);


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


  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    desktop1: {
      breakpoint: { max: 1500, min: 1224 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1224, min: 904 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 904, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 2,
    },
  };

  const responsive2 = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1500 },
      items: 5,
    },
    desktop1: {
      breakpoint: { max: 1500, min: 1224 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1224, min: 904 },
      items: 3,
    },
    tablet2: {
      breakpoint: { max: 904, min: 650 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
    },
  };


  return (
    <div>

      <div className="my-4 container">
        <HomeBanner />

        {/* item category Data */}
        <div className="border rounded shadow4 p-4 my-3">
          <Carouselm
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive2}
            ssr={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1.1s"
            transitionDuration={1100}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-50-px"
            autoPlay={props.deviceType !== "mobile" ? true : false}
            deviceType={props.deviceType}
          >
            {categoryData && categoryData.length > 0 ? categoryData.map((item) => (
              <div
                className="d-flex align-items-center me-3 mb-3"
                key={item.id}
                style={{ borderRight: "1px solid gray" }}
              >
                <div className="flex-grow-1">
                  <a href={`/product?catUrl=${item.CatUrl}`} className="card-title">
                    <h6 className="f16">{item?.Category}</h6>
                  </a>
                  <p className="card-text tgray">
                    Số lượng: {item.countProduct}
                  </p>
                </div>
                <img
                  src={`${imageBaseUrl}${item.imageCategory}`}
                  alt={item.name}
                  className="card-img-top img"
                  style={{
                    width: "100px",
                    objectFit: "cover",
                    marginLeft: "1px",
                  }}
                />
              </div>
            )) : []}
          </Carouselm>
        </div>
      </div>

      {/* Flash Sale */}
      <div
        className=" align-items-center py-4 my-5 flashsale-carousel"
        style={{ width: "100%", height: "auto", backgroundColor: "#0d6efd" }}
      >
        <div className="container">
          <div className="d-flex  align-items-center flex-column-mobile">
            <h2 style={{ color: "white" }} className="">
              Flash Sale
            </h2>
            <div className="mx-4" />
            <FlashSaleCountdown />
          </div>
          <Carouselm
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1.1s"
            transitionDuration={1100}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-50-px"
            autoPlay={props.deviceType !== "mobile" ? true : false}
            deviceType={props.deviceType}
          >
            {flashSaleData && flashSaleData.length > 0 ? flashSaleData.map((item) => {
              return (
                <BoxProduct key={item.ProductId} item={item} />
              )
            }) : []
            }
          </Carouselm>
        </div>
      </div>


      {/* May chieu */}
      {categoryData && categoryData.length > 0 ? categoryData.map((item) => {
        return (
          <div className=" align-items-center container ">
            <div className="row">
              <div className=" col-7 col-md-6 d-flex">
                <h5
                  style={{
                    textTransform: "uppercase",
                    marginTop: 10,
                    fontWeight: "600",
                  }}
                >
                  {item?.Category}
                </h5>
              </div>
              <div className=" col-5 col-md-6 d-flex justify-content-end">
                {/* <div className="d-flex">
                  <div className="d-none d-lg-flex">
                    <Button
                      className="me-2 btn2"
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      Máy ảnh Mirrorless
                    </Button>
                    <Button
                      className="me-2 btn2"
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      Máy ảnh Compact
                    </Button>
                    <Button
                      className="me-2 btn2"
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      Máy ảnh Instax
                    </Button>
                    <Button
                      className="me-2 btn2"
                      style={{ backgroundColor: "#EEEEEE" }}
                    >
                      Máy ảnh Medium Format
                    </Button>
                  </div>
                </div> */}
                <Button href={`/product?catUrl=${item?.CatUrl}`} className="btn2" style={{ backgroundColor: "#EEEEEE" }}>
                  Xem tất cả
                </Button>
              </div>
            </div>

            <div className="py-2">
              <Carouselm
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlaySpeed={5000}
                keyBoardControl={true}
                customTransition="all 1.1s"
                transitionDuration={1100}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-50-px"
                autoPlay={props.deviceType !== "mobile" ? true : false}
                deviceType={props.deviceType}
              >
                {item?.ProductChild && item.ProductChild?.length > 0 ? item.ProductChild?.map((item) => (
                  <BoxProduct key={item.ProductId} item={item} />
                )) : []}
              </Carouselm>
            </div>
          </div>
        )
      }) : []
      }

      {/* Ong kính */}
      {/* <div className=" align-items-center container">
        <div className="row">
          <div className=" col-6 col-md-2 d-flex">
            <h5
              style={{
                textTransform: "uppercase",
                marginTop: 10,
                fontWeight: "600",
              }}
            >
              ống kính
            </h5>
          </div>
          <div className=" col-6 col-md-10 d-flex justify-content-end">
            <div className="d-flex">
              <div className="d-none d-lg-flex">
                <Button
                  className="me-2 btn2"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  Máy ảnh Mirrorless
                </Button>
                <Button
                  className="me-2 btn2"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  Máy ảnh Compact
                </Button>
                <Button
                  className="me-2 btn2"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  Máy ảnh Instax
                </Button>
                <Button
                  className="me-2 btn2"
                  style={{ backgroundColor: "#EEEEEE" }}
                >
                  Máy ảnh Medium Format
                </Button>
              </div>
            </div>
            <Button className="btn2" style={{ backgroundColor: "#EEEEEE" }}>
              Xem tất cả
            </Button>
          </div>
        </div>

        <div className="py-2">
          <Carouselm
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1.1s"
            transitionDuration={1100}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-50-px"
            autoPlay={props.deviceType !== "mobile" ? true : false}
            deviceType={props.deviceType}
          >
            {lendItem.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </Carouselm>
        </div>
      </div> */}
      {/* anh banner */}
      {/* <div className="img-container container my-2 rounded">
        <a href={`/product`} className="card-title ">
          <img
            // alt="/product"
            src={imgBanner4}
            width="100%"
            className="d-block align-top hover-zoom"
          />
        </a>
      </div> */}
      {/* Máy quay phim */}
      {/* <div className="row align-items-center container my-4">
        <div>
          <h5
            style={{
              textTransform: "uppercase",
              marginTop: 10,
              fontWeight: "600",
            }}
          >
            Máy quay phim
          </h5>
        </div>

        <div className="py-2">
          <Carouselm
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            customTransition="all 1.1s"
            transitionDuration={1100}
            containerClass="carousel-container"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-50-px"
            autoPlay={props.deviceType !== "mobile" ? true : false}
            deviceType={props.deviceType}
          >
            {videoItem.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </Carouselm>
        </div>
      </div> */}
      {/* anh banner 2 */}
      <div className="img-container my-5 rounded container">
        <a href="/product" className="card-title">
          <img
            style={{ height: 280, objectFit: "cover", border: 15 }}
            src="https://wanbo.cn/cdn/shop/files/3_33b7f516-cc50-4a3e-8487-ba768b98ca8b.jpg?v=1716813493&width=2000"
            className="d-block w-100 img-fluid align-top hover-zoom"
            alt="Banner lớn"

          />
        </a>
      </div>

      {/* Ba hình ảnh banner nhỏ */}
      <div className="my-5 container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <a href="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/1_5.jpg?v=1717726984&width=550"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 1"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <a href="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/2_3.jpg?v=1717726987&width=750"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 2"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <a href="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/211022-wanboT6_-_-_0337.jpg?v=1716115219&width=1500"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* tin tuc */}
      <div className=" mt-5" />
      <h5 className="container mt-5 fw-bold">TIN TỨC</h5>

      <div className="d-flex flex-wrap justify-content-between mb-5 container">
        {newTopData.map((item) => (

          <Card className="m-1 news">
            <a href={`/news/${item.url_cat}/${item.friendly_url}`} >
              <div className="img-container">

                <Card.Img
                  variant="top"
                  src={`${imageBaseUrl}${item.picture}`}
                  className="hover-zoom"
                // style={{ height: "100%" }}
                />

              </div>
              <Card.Body>
                <Card.Title className="f16 tblack fw-bold h6">
                  {item.title}
                </Card.Title>
                <div className="d-flex">
                  <Card.Text className="bi bi-person me-2 tgray">
                    Team dev
                  </Card.Text>
                  <p>|</p>
                  <Card.Text className="ms-2 tgray">
                    <span className="bi bi-clock-history me-1" />
                    {new Date(item.date_post * 1000).toLocaleDateString("vi-VN", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })}
                  </Card.Text>
                </div>
                <Card.Text className="text-truncate-3 tgray">
                  {item.short}
                </Card.Text>
                <a href={`/news/${item.url_cat}/${item.friendly_url}`} className="card-title">
                  <h6 className="h6 f14 tblack fw-bold">Xem thêm</h6>
                </a>
              </Card.Body>
            </a>
          </Card>

        ))}
      </div>

      <div className=" mb-5" />
    </div >
  );
};

export default Home;
