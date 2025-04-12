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
import BoxProduct from "../../components/componentProduct/BoxProduct";
import FlashSaleCountdown from "../../components/FlashSaleCountdown";
import HomeBanner from "../../components/homeBanner";
import HomeApi from "../../api/homeApi";
import { imageBaseUrl } from "../../api/axiosConfig";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { color } from "framer-motion";
import CIcon from "@coreui/icons-react";
import { cilArrowRight } from "@coreui/icons";

const Home = (props) => {
  const [categoryData, setCategoryData] = useState([]);
  const [flashSaleData, setFlashSaleData] = useState([]);
  const [newTopData, setNewTopData] = useState([]);
  const [loading, setLoading] = useState(false);
  const dragRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 5;
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
      items: 5,
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

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    dragRef.current = false;
    setIsDragging(false);

    // Add global event listeners to detect drag outside component
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const deltaX = Math.abs(e.clientX - startXRef.current);
    const deltaY = Math.abs(e.clientY - startYRef.current);

    if (deltaX > dragThreshold || deltaY > dragThreshold) {
      dragRef.current = true;
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    // Clean up global event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    // Keep dragRef.current true for a short time to prevent click right after drag
    setTimeout(() => {
      dragRef.current = false;
    }, 100);
  };

  const handleCardClick = (e) => {
    // If dragging, prevent all clicks
    if (isDragging || dragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleLinkClick = (e) => {
    // Prevent navigation if we're dragging
    if (isDragging || dragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div>
      <div className="my-4 container">
        <HomeBanner />

        {/* item category Data */}
        <Swiper
          className="py-4 border rounded shadow4 p-4 m-3 swiper-category"
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          speed={1100}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            650: {
              slidesPerView: 2,
            },
            904: {
              slidesPerView: 3,
            },
            1224: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 5,
            },
            3000: {
              slidesPerView: 6,
            },
          }}
        >
          {categoryData && categoryData.length > 0
            ? categoryData.map((item) => (
                <SwiperSlide>
                  <div
                    className="d-flex align-items-center mx-3"
                    key={item.id}
                    onMouseDown={handleMouseDown}
                    onClick={handleCardClick}
                  >
                    <div className="flex-grow-1">
                      <Link
                        to={`/product?catUrl=${item.CatUrl}`}
                        className="card-title"
                        onClick={handleLinkClick}
                      >
                        <h6 className="f16">{item?.Category}</h6>
                      </Link>
                      <p className="card-text tgray">
                        Số lượng: {item.countProduct}
                      </p>
                    </div>
                    <img
                      src={`${imageBaseUrl}${item.imageCategory}`}
                      alt={item.name}
                      className="card-img-top img m-4"
                      style={{
                        width: "100px",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </SwiperSlide>
              ))
            : []}
        </Swiper>
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
            arrows={false}
            removeArrowOnDeviceType={["mobile"]}
          >
            {flashSaleData && flashSaleData.length > 0
              ? flashSaleData.map((item) => {
                  return <BoxProduct key={item.ProductId} item={item} />;
                })
              : []}
          </Carouselm>
        </div>
      </div>

      {/* May chieu */}
      {categoryData && categoryData.length > 0
        ? categoryData.map((item) => {
            return (
              <div className=" align-items-center container ">
                <div className="row">
                  <div className=" col-7 col-md-6 d-flex">
                    <Link
                      style={{
                        textTransform: "uppercase",
                        marginTop: 10,
                        fontWeight: "Bold",
                        fontSize: 20,
                      }}
                      to={`/product?catUrl=${item.CatUrl}`}
                    >
                      {item?.Category}
                    </Link>
                  </div>
                  <div className=" col-5 col-md-6 d-flex justify-content-end">
                    <Button
                      href={`/product?catUrl=${item?.CatUrl}`}
                      className="btn2"
                    >
                      Xem tất cả
                    </Button>
                  </div>
                </div>

                <div className="py-2">
                  <Swiper
                    className="py-4 swiper-category"
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    speed={1100}
                    breakpoints={{
                      0: {
                        slidesPerView: 2,
                      },
                      650: {
                        slidesPerView: 2,
                      },
                      904: {
                        slidesPerView: 3,
                      },
                      1224: {
                        slidesPerView: 5,
                      },
                      1500: {
                        slidesPerView: 5,
                      },
                      3000: {
                        slidesPerView: 6,
                      },
                    }}
                  >
                    {item?.ProductChild && item.ProductChild?.length > 0
                      ? item.ProductChild?.map((item) => (
                          <SwiperSlide>
                            <BoxProduct key={item.ProductId} item={item} />
                          </SwiperSlide>
                        ))
                      : []}
                  </Swiper>
                </div>
              </div>
            );
          })
        : []}

      {/* anh banner 2 */}
      <div className="my-5 container">
        <div className="img-container rounded" style={{ overflow: "hidden" }}>
          <Link to="/product" className="banner">
            <img
              style={{ objectFit: "cover", border: 15, maxHeight: "400px" }}
              src="https://wanbo.cn/cdn/shop/files/3_33b7f516-cc50-4a3e-8487-ba768b98ca8b.jpg?v=1716813493&width=2000"
              className="d-block w-100 img-fluid align-top hover-zoom"
              alt="Banner lớn"
            />
          </Link>
        </div>
      </div>

      {/* Ba hình ảnh banner nhỏ */}
      <div className="my-5 container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <Link to="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/1_5.jpg?v=1717726984&width=550"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 1"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <Link to="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/2_3.jpg?v=1717726987&width=750"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 2"
                />
              </Link>
            </div>
          </div>

          <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="img-container rounded">
              <Link to="/product">
                <img
                  src="https://wanbo.cn/cdn/shop/files/211022-wanboT6_-_-_0337.jpg?v=1716115219&width=1500"
                  className="bannerbottom hover-zoom img-fluid"
                  alt="Banner nhỏ 3"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* tin tuc */}
      <div className=" mt-5" />
      <h5
        className="container mt-5 fw-bold"
        style={{
          textTransform: "uppercase",
          marginTop: 10,
          fontWeight: "Bold",
        }}
      >
        TIN TỨC
      </h5>

      <div className="d-flex justify-content-between mb-5 container row">
        {newTopData.map((item) => (
          <Card
            className="news col-lg-3 col-md-6 col-sm-12"
            style={{ border: "none" }}
          >
            <Link
              to={`/news/${item.url_cat}/${item.friendly_url}`}
              style={{ borderRadius: "6px" }}
            >
              <div className="img-container">
                <Card.Img
                  variant="top"
                  src={`${imageBaseUrl}${item.picture}`}
                  className="hover-zoom"
                  style={{
                    maxHeight: "75%",
                    maxWidth: "100%",
                    borderRadius: "10px",
                  }}
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
                    {new Date(item.date_post * 1000).toLocaleDateString(
                      "vi-VN",
                      {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      }
                    )}
                  </Card.Text>
                </div>
                <Card.Text className="text-truncate-3 tgray">
                  {item.short}
                </Card.Text>
                <a
                  href={`/news/${item.url_cat}/${item.friendly_url}`}
                  className="card-title"
                >
                  <h6 className="h6 f14 tblack fw-bold">
                    Xem thêm{" "}
                    <CIcon
                      icon={cilArrowRight}
                      style={{ color: "#F97F6C", width: 20 }}
                    />
                  </h6>
                </a>
              </Card.Body>
            </Link>
          </Card>
        ))}
      </div>

      <div className=" mb-5" />
    </div>
  );
};

export default Home;
