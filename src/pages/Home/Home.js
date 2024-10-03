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

const Home = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 564 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 564, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      <div className="mx-5 my-4">
        <div className="d-flex flex-md-row flex-column align-items-center">
          <div style={{ width: "64%" }}>
            <Carousel fade controls={true}>
              <Carousel.Item interval={1000}>
                <img
                  alt=""
                  src={img2}
                  width="auto"
                  className="d-block align-top hover-zoom"
                />
              </Carousel.Item>

              <Carousel.Item interval={1000}>
                <img
                  alt=""
                  src={img}
                  width="auto"
                  className="d-block align-top hover-zoom"
                />
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="m-3 "></div>

          <div className="d-flex flex-column align-items-center">
            {/* Banner 1 */}
            <div className="img-container imgBanner">
              <img
                alt=""
                src={imgBanner}
                width="auto"
                className="d-block align-top hover-zoom"
              />
            </div>

            <div style={{ margin: 15 }}></div>

            {/* Banner 2 */}
            <div className="img-container imgBanner">
              <img
                alt=""
                src={imgBanner2}
                width="auto"
                className="d-block align-top hover-zoom"
              />
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
                style={{ minWidth: "260px", borderRight: "1px solid gray" }}
              >
                <div className="flex-grow-1">
                  <a href={`/product/${item.id}`} className="card-title">
                    <h5>{item.name}</h5>
                  </a>
                  <p className="card-text">Số lượng: {item.quantity}</p>
                </div>
                <img
                  src={item.image}
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
        className="px-5 py-4"
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
            <div
              className="m-4"
              key={item.id}
              style={{ display: "inline-block" }}
            >
              <Card className="prdItem">
                <Card.Img variant="top" src={item.image} className="p-3 img" />

                <Card.Text className="sale">
                  -{item.discountPercentage}%
                </Card.Text>

                <Card.Body>
                  <a href={`/product/${item.id}`} className="card-title">
                    <Card.Title className="prdName">{item.name}</Card.Title>
                  </a>

                  <Card.Text className="price">
                    {" "}
                    {item.price.toLocaleString("vi-VN")} VND
                  </Card.Text>
                  <Card.Text className="original-price">
                    {item.originalPrice.toLocaleString("vi-VN")} VND <br />
                  </Card.Text>

                  <Card.Text>{item.quantity} sản phẩm đã bán</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </Carouselm>
      </div>
      {/* May anh */}
      <div className="row align-items-center mx-5 my-5">
        <div className="col-md-2">
          <h3>Máy ảnh</h3>
        </div>
        <div className="col-md-10 d-flex justify-content-end">
          <Button className="me-2 btn2">Máy ảnh DSLR</Button>
          <Button className="me-2 btn2">Máy ảnh Mirrorless</Button>
          <Button className="me-2 btn2">Máy ảnh Compact</Button>
          <Button className="me-2 btn2">Máy ảnh Instax</Button>

          <Button className="me-2 btn2">Máy ảnh Medium Format</Button>
          <Button className="me-2 btn2">Máy ảnh Film</Button>
          <Button className="btn2">Xem tất cả</Button>
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
              <div
                className="me-4 ms-1 my-4 border rounded shadow4"
                key={item.id}
                style={{ display: "inline-block" }}
              >
                <Card className="prdItem">
                  <Card.Img
                    variant="top"
                    src={item.images}
                    className="p-4 img"
                  />

                  {item.discountPercentage > 0 && (
                    <Card.Text className="sale">
                      -{item.discountPercentage}%
                    </Card.Text>
                  )}

                  <Card.Body>
                    <a href={`/product/${item.id}`} className="card-title">
                      <Card.Title className="prdName">{item.name}</Card.Title>
                    </a>

                    <Card.Text className="price">
                      {item.price.toLocaleString("vi-VN")} VND
                    </Card.Text>
                    <Card.Text className="original-price">
                      {item.discountPercentage > 0 ? (
                        <>
                          {item.originalPrice.toLocaleString("vi-VN")} VND{" "}
                          <br />
                        </>
                      ) : (
                        <br />
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
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
          <Button className="me-2 btn2">Ống kính DSLR</Button>
          <Button className="me-2 btn2">Ống kính Mirrorless</Button>
          <Button className="me-2 btn2">Ống kính Cinema</Button>
          <Button className="me-2 btn2">Ống kính Medium Format</Button>
          <Button className="btn2">Xem tất cả</Button>
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
              <div
                className="me-4 ms-1 my-4 border rounded shadow4"
                key={item.id}
                style={{ display: "inline-block" }}
              >
                <Card className="prdItem">
                  <Card.Img
                    variant="top"
                    src={item.images}
                    className="p-4 img"
                  />

                  {item.discountPercentage > 0 && (
                    <Card.Text className="sale">
                      -{item.discountPercentage}%
                    </Card.Text>
                  )}

                  <Card.Body>
                    <a href={`/product/${item.id}`} className="card-title">
                      <Card.Title className="prdName">{item.name}</Card.Title>
                    </a>

                    <Card.Text className="price">
                      {" "}
                      {item.price.toLocaleString("vi-VN")} VND
                    </Card.Text>
                    <Card.Text className="original-price">
                      {item.discountPercentage > 0 ? (
                        <>
                          {item.originalPrice.toLocaleString("vi-VN")} VND{" "}
                          <br />
                        </>
                      ) : (
                        <br />
                      )}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
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
      <div className=" mx-5 my-4">
        <div>
          <h3>Máy quay phim</h3>
        </div>

        <div className="py-2">
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
                <div
                  style={{ display: "inline-block", border: "none" }}
                  className="me-4 ms-1 my-4 border rounded shadow4"
                  key={item.id}
                >
                  <Card className="prdItem">
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="p-4 img"
                    />

                    {item.discountPercentage > 0 && (
                      <Card.Text className="sale">
                        -{item.discountPercentage}%
                      </Card.Text>
                    )}
                    <Card.Body>
                      <a href={`/product/${item.id}`} className="card-title">
                        <Card.Title className="prdName">{item.name}</Card.Title>
                      </a>

                      <Card.Text className="price">
                        {" "}
                        {item.price.toLocaleString("vi-VN")} VND
                      </Card.Text>

                      <Card.Text className="original-price">
                        {item.discountPercentage > 0 ? (
                          <>
                            {item.originalPrice.toLocaleString("vi-VN")} VND{" "}
                            <br />
                          </>
                        ) : (
                          <br />
                        )}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Carouselm>
          </div>
        </div>
      </div>
      {/* anh banner 2 */}
      <div className="img-container m-5 rounded">
        <a href={`/product`} className="card-title ">
          <img
            // alt="/product"
            src={imgBanner5}
            width="100%"
            className="d-block align-top hover-zoom"
          />
        </a>
      </div>
      {/* anh banner 3 */}
      <div className="m-5 d-flex justify-content-between">
        <div className="img-container rounded">
          <a href={`/product`}>
            <img src={imgBanner6} className="bannerbottom hover-zoom" />
          </a>
        </div>

        <div className="img-container rounded">
          <a href={`/product`}>
            <img src={imgBanner7} className="bannerbottom hover-zoom" />
          </a>
        </div>

        <div className="img-container rounded">
          <a href={`/product`}>
            <img src={imgBanner8} className="bannerbottom hover-zoom" />
          </a>
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
              <Card.Img variant="top" src={item.image} className="hover-zoom" />
            </div>
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="bi bi-clock-history">{item.date}</Card.Text>
              <Card.Text className="text-truncate-3">
                {item.description}
              </Card.Text>
              <a href={`/product`} className="card-title">
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
