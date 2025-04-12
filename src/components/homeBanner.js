import Carousel from "react-bootstrap/Carousel";
import img from "./../assets/slider_1.webp";
import img2 from "./../assets/slider_2.webp";
import imgBanner from "./../assets/img_banner_slide.webp";
import imgBanner2 from "./../assets/img_banner_slide_2.webp";
import imgBanner3 from "./../assets/image_service1.webp";
import imgBanner4 from "./../assets/image_service2.webp";
import imgBanner5 from "./../assets/image_service3.webp";
import imgBanner6 from "./../assets/image_service4.webp";
import maychieu from "./../assets/images/maychieu.webp";
import wanboT from "./../assets/images/wanboT.webp";
// Import React và các component của Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import các module nếu cần
import { Navigation, Pagination, Autoplay } from "swiper/modules";
const HomeBanner = () => {
  return (
    <>
      <div className="mt-4">
        <div className="row">
          {/* Phần hình ảnh chính */}
          <div className="col-lg-8 col-md-12 mb-4 ">
            <Carousel fade controls={true} indicators={true}>
              <Carousel.Item
                interval={3000}
                style={{ border: "none", borderRadius: 50 }}
              >
                <img
                  alt=""
                  src="https://wanbo.cn/cdn/shop/files/1_2.png?v=1715770224&width=750"
                  width="100%"
                  className="d-block align-top hover-zoom"
                  style={{
                    borderRadius: 7,
                    objectFit: "cover",
                    height: 352,
                    objectPosition: "center",
                  }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  alt=""
                  src="https://wanbo.cn/cdn/shop/files/1_2_2.png?v=1715770223&width=1500"
                  width="100%"
                  className="d-block align-top hover-zoom"
                  style={{ borderRadius: 7, objectFit: "cover", height: 352 }}
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
                  src="https://xiaomiworld.vn/upload_images/images/davinci-1-pro-__01.jpg"
                  width="100%"
                  className="d-block align-top "
                  style={{ borderRadius: 7, objectFit: "cover", height: 164 }}
                />
              </div>

              {/* Banner 2 */}
              <div className="col-6 col-md-12">
                <img
                  alt=""
                  src="https://miworld.vn/upload_images/images/banner_wanbo.jpg"
                  width="100%"
                  className="d-block align-top"
                  style={{ borderRadius: 7, objectFit: "cover", height: 164 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        className="py-4 swiper-category"
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
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        <SwiperSlide>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center me-3">
              <img
                alt=""
                src={imgBanner3}
                width="50px"
                className="d-block align-top mx-auto"
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-uppercase">Đổi trả dễ dàng</h6>
              <p className="d-none d-md-block" style={{ color: "gray" }}>
                Đổi trả trong 30 ngày đầu tiên cho tất cả các sản phẩm
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center me-3">
              <img
                alt=""
                src={imgBanner4}
                width="50px"
                className="d-block align-top mx-auto"
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-uppercase">Giao hàng toàn quốc</h6>
              <p className="d-none d-md-block" style={{ color: "gray" }}>
                Miễn phí giao hàng với các đơn hàng trị giá trên 5.000.000Đ
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center me-3">
              <img
                alt=""
                src={imgBanner5}
                width="50px"
                className="d-block align-top mx-auto"
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-uppercase">Quà tặng hấp dẫn</h6>
              <p className=" d-none d-md-block" style={{ color: "gray" }}>
                Chương trình khuyến mãi cực lớn và hấp dẫn hàng tháng
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="d-flex align-items-center justify-content-center">
            <div className="text-center me-3">
              <img
                alt=""
                src={imgBanner6}
                width="50px"
                className="d-block align-top mx-auto"
              />
            </div>
            <div className="d-flex flex-column justify-content-center">
              <h6 className="text-uppercase">Hỗ trợ online 24/7</h6>
              <p className=" d-none d-md-block" style={{ color: "gray" }}>
                Luôn hỗ trợ khách hàng 24/24 giờ các ngày trong tuần
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HomeBanner;
