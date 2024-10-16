import React, { useRef, useState } from "react";

import Carousel from "react-bootstrap/Carousel";
import img from "./../../assets/slider_1.webp";
import img2 from "./../../assets/slider_2.webp";
import imgBanner from "./../../assets/img_banner_slide.webp";
import imgBanner2 from "./../../assets/img_banner_slide_2.webp";
import imgBanner3 from "./../../assets/image_service1.webp";
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
      items: 1,
    },
  };

  return (
    <div>
      <div className="mx-4 my-4">
        <div className=" mx-4 my-4">
          <div className="row">
            {/* Phần hình ảnh chính */}
            <div className="col-lg-8 col-md-12 mb-4">
              <Carousel fade controls={true}>
                <Carousel.Item interval={1000}>
                  <img
                    alt=""
                    src={img2}
                    width="100%"
                    className="d-block align-top hover-zoom"
                  />
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    alt=""
                    src={img}
                    width="100%"
                    className="d-block align-top hover-zoom"
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

        {/* tien ich */}
        <div className="row mt-5">
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3 text-center">
                <img
                  alt=""
                  src={imgBanner3}
                  width="auto"
                  className="d-block align-top mx-auto img"
                />
              </div>
              <div className="col-md-9 d-flex flex-column justify-content-center">
                <h6>Đổi trả dễ dàng</h6>
                <p>Đổi trả trong 30 ngày đầu tiên cho tất cả các sản phẩm</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3 text-center">
                <img
                  alt=""
                  src={imgBanner3}
                  width="auto"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="col-md-9 d-flex flex-column justify-content-center">
                <h6>Giao hàng toàn quốc</h6>
                <p>
                  Miễn phí giao hàng với các đơn hàng trị giá trên 5.000.000Đ
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3 text-center">
                <img
                  alt=""
                  src={imgBanner3}
                  width="auto"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="col-md-9 d-flex flex-column justify-content-center">
                <h6>Quà tặng hấp dẫn</h6>
                <p>Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng</p>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="row">
              <div className="col-md-3 text-center">
                <img
                  alt=""
                  src={imgBanner3}
                  width="auto"
                  className="d-block align-top mx-auto"
                />
              </div>
              <div className="col-md-9 d-flex flex-column justify-content-center">
                <h6>Hỗ trợ online 24/7</h6>
                <p>Luôn hỗ trợ khách hàng 24/24 giờ các ngày trong tuần</p>
              </div>
            </div>
          </div>
        </div>

        {/* item phu kien */}
        <div className="border rounded shadow4 p-4 my-4">
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
            {items.map((item) => (
              <div
                className="d-flex align-items-center me-3 mb-3"
                key={item.id}
                style={{ borderRight: "1px solid gray" }}
              >
                <div className="flex-grow-1">
                  <a href={`/product/${item.id}`} className="card-title">
                    <h5>{item.name}</h5>
                  </a>
                  <p className="card-text">Số lượng: {item.quantitysale}</p>
                </div>
                <img
                  src={item.images}
                  alt={item.name}
                  className="card-img-top img"
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
        className=" align-items-center px-5 py-4"
        style={{ width: "100%", height: "auto", backgroundColor: "blue" }}
      >
        <h2 style={{ color: "white" }}>Flash Sale</h2>
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

      {/* May anh */}
      <div className="row align-items-center mx-5 my-5">
        <div className="col-md-2">
          <h3>Máy ảnh</h3>
        </div>
        <div className="col-md-10 d-flex justify-content-end">
          <div className="d-none d-md-flex">
            <Button
              className="me-2 btn2"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Máy ảnh DSLR
            </Button>
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
            <Button
              className="me-2 btn2"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Máy ảnh Film
            </Button>
          </div>
          <Button className="btn2" style={{ backgroundColor: "#EEEEEE" }}>
            Xem tất cả
          </Button>
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
            {cameraItem.map((item) => (
              <BoxProduct key={item.id} item={item} />
            ))}
          </Carouselm>
        </div>
      </div>

      {/* Ong kính */}
      <div className="row align-items-center mx-5 my-4">
        <div className="col-md-2">
          <h3>Ống kính</h3>
        </div>
        <div className="col-md-10 d-flex justify-content-end">
          <div className="d-none d-md-flex">
            <Button
              className="me-2 btn2"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Máy ảnh DSLR
            </Button>
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
            <Button
              className="me-2 btn2"
              style={{ backgroundColor: "#EEEEEE" }}
            >
              Máy ảnh Film
            </Button>
          </div>
          <Button className="btn2" style={{ backgroundColor: "#EEEEEE" }}>
            Xem tất cả
          </Button>
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
      <div className="img-container m-5 rounded">
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
      <div className="row align-items-center mx-5 my-4">
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
      <div className="img-container m-5 rounded">
        <a href="/product" className="card-title">
          <img
            src={imgBanner5}
            className="d-block w-100 img-fluid align-top hover-zoom"
            alt="Banner lớn"
          />
        </a>
      </div>

      {/* Ba hình ảnh banner nhỏ */}
      <div className="m-5">
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
      <div className="d-flex flex-wrap justify-content-around m-5">
        {newsItems.map((item) => (
          <Card
            style={{ width: "320px", overflow: "hidden" }}
            key={item.id}
            className="m-1"
          >
            <div className="img-container">
              <Card.Img
                variant="top"
                src={item.images}
                className="hover-zoom"
              />
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="bi bi-clock-history">{item.date}</Card.Text>
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
