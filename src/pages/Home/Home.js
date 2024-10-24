import React, { useRef, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import img from "./../../assets/slider_1.webp";
import img2 from "./../../assets/slider_2.webp";
import imgBanner from "./../../assets/img_banner_slide.webp";
import imgBanner2 from "./../../assets/img_banner_slide_2.webp";
import imgBanner3 from "./../../assets/image_service1.webp";
import imgBanner31 from "./../../assets/item/image_service2.webp";
import imgBanner32 from "./../../assets/item/image_service3.webp";
import imgBanner33 from "./../../assets/item/image_service4.webp";
import imgBanner4 from "./../../assets/img_one_banner.webp";
import imgBanner5 from "./../../assets/banner_bottom_1.webp";
import imgBanner6 from "./../../assets/banner_bottom_2.webp";
import imgBanner7 from "./../../assets/banner_bottom_3.webp";
import imgBanner8 from "./../../assets/banner_bottom_4.webp";
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

const Home = (props) => {
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
        <div className="mt-4">
          <div className="row">
            {/* Phần hình ảnh chính */}
            <div className="col-lg-8 col-md-12 mb-4">
              <Carousel fade controls={true} indicators={true}>
                <Carousel.Item interval={4000} style={{ border: "none", borderRadius: 50 }}>
                  <img
                    alt=""
                    src={img2}
                    width="100%"
                    className="d-block align-top hover-zoom"
                    style={{ borderRadius: 5 }}
                  />
                </Carousel.Item>
                <Carousel.Item interval={4000} style={{ border: "none" }}>
                  <img
                    alt=""
                    src={img}
                    width="100%"
                    className="d-block align-top hover-zoom"
                    style={{borderRadius: 7 }}
                  />
                </Carousel.Item>
              </Carousel>
            </div>

            {/* Phần các banner */}
            <div className="col-lg-4 col-md-12">
              <div className="row">
                {/* Banner 1 */}
                <div className="col-6 col-md-12 mb-4">
                  <img
                    alt=""
                    src={imgBanner}
                    width="100%"
                    className="d-block align-top "
                  />
                </div>

                {/* Banner 2 */}
                <div className="col-6 col-md-12">
                  <img
                    alt=""
                    src={imgBanner2}
                    width="100%"
                    className="d-block align-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Đổi trả dễ dàng */}
        <div className="row text-center text-md-start mt-2 ">
          {/* Đổi trả dễ dàng */}
          <div className="col-6 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
              <div className="text-center me-3">
                <img
                  alt=""
                  src={imgBanner3}
                  width="50px"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6>Đổi trả dễ dàng</h6>
                <p className="d-none d-md-block">
                  Đổi trả trong 30 ngày đầu tiên cho tất cả các sản phẩm
                </p>
              </div>
            </div>
          </div>

          {/* Giao hàng toàn quốc */}
          <div className="col-6 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
              <div className="text-center me-3">
                <img
                  alt=""
                  src={imgBanner31}
                  width="50px"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6>Giao hàng toàn quốc</h6>
                <p className="d-none d-md-block">
                  Miễn phí giao hàng với các đơn hàng trị giá trên 5.000.000Đ
                </p>
              </div>
            </div>
          </div>

          {/* Quà tặng hấp dẫn */}
          <div className="col-6 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
              <div className="text-center me-3">
                <img
                  alt=""
                  src={imgBanner32}
                  width="50px"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6>Quà tặng hấp dẫn</h6>
                <p className=" d-none d-md-block">
                  Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng
                </p>
              </div>
            </div>
          </div>

          {/* Hỗ trợ online 24/7 */}
          <div className="col-6 col-sm-6 col-md-3">
            <div className="d-flex align-items-center">
              <div className="text-center me-3">
                <img
                  alt=""
                  src={imgBanner33}
                  width="50px"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="d-flex flex-column justify-content-center">
                <h6>Hỗ trợ online 24/7</h6>
                <p className=" d-none d-md-block">
                  Luôn hỗ trợ khách hàng 24/24 giờ các ngày trong tuần
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* item phu kien */}
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
            {items.map((item) => (
              <div
                className="d-flex align-items-center ps-3 pe-3 mb-3 border-end border-start"
                key={item.id}
              >
                <div className="flex-grow-1">
                  <a href={`/product/${item.id}`} className="card-title">
                    <h6>{item.name}</h6>
                  </a>
                  <p className="card-text">Số lượng: {item.quantitysale}</p>
                </div>
                <img
                  src={item.images}
                  alt={item.name}
                  className="card-img-top "
                  style={{
                    width: "100px",
                    objectFit: "cover",
                    marginLeft: "1px",
                  }}
                />
              </div>
            ))}
          </Carouselm>
        </div>
      </div>

      {/* Flash Sale */}
      <div
        className=" align-items-center py-4 my-5"
        style={{ width: "100%", height: "auto", backgroundColor: "#2854e5" }}
      >
        <div className="container">
          <div className="d-flex  align-items-center flex-column-mobile">
            <h2 style={{ color: "white" }} className="">
              Flash Sale
            </h2>
            <div className="mx-4"/>
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
            {newItems.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </Carouselm>
        </div>
      </div>

      {/* May anh */}

      <div className=" align-items-center container ">
        <div className="row">
          <div className=" col-6 col-md-3 d-flex">
            <h3>Máy ảnh</h3>
          </div>
          <div className=" col-6 col-md-9 d-flex justify-content-end">
            <div className="d-flex">
              <div className="d-none d-lg-flex">
                <Button
                  className="me-2 btn2"
                  style={{ backgroundColor: "#EEEEEE", }}
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
              <Button className="btn2" style={{ backgroundColor: "#EEEEEE", border: "none", color: "black"  }}>
                Xem tất cả
              </Button>
            </div>
          </div>
        </div>
        <div className="py-2 mb-4">
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
            {cameraItem.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </Carouselm>
        </div>
      </div>

      {/* Ong kính */}
      <div className=" align-items-center container">
        <div className="row">
          <div className=" col-6 col-md-2 d-flex">
            <h3>Ống kính</h3>
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
              <Button className="btn2" style={{ backgroundColor: "#EEEEEE", border: "none", color: "black" }}>
                Xem tất cả
              </Button>
            </div>
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
      </div>
      {/* anh banner */}
      <div className="img-container container my-2 rounded">
        <a href={`/product`} className="card-title ">
          <img
            // alt="/product"
            src={imgBanner4}
            width="100%"
            className="d-block align-top hover-zoom"
          />
        </a>
      </div>
      {/* Máy quay phim */}
      <div className=" align-items-center container my-4">
        <div>
          <h3>Máy quay phim</h3>
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
      </div>
      {/* anh banner 2 */}
      <div className="img-container my-5 rounded container">
        <a href="/product" className="card-title">
          <img
            src={imgBanner5}
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
                  src={imgBanner6}
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
                  src={imgBanner7}
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
                  src={imgBanner8}
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 3"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* tin tuc */}
      <h5 className="container mt-5">TIN TỨC</h5>
      <div className="d-flex flex-wrap justify-content-around mb-5 container">
        {newsItems.map((item) => (
          <Card key={item.id} className="m-1 news">
            <div className="img-container">
              <Card.Img
                variant="top"
                src={item.images}
                className="hover-zoom"
              />
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text > <sapn className="bi bi-clock-history me-1"/>{item.date}</Card.Text>
              <Card.Text className="text-truncate-3">
                {item.description}
              </Card.Text>
              <a href={`/news/${item.id}`} className="card-title">
                <h6>Xem thêm</h6>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
