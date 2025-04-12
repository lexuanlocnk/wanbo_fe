import React, { useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Card from "react-bootstrap/Card";
import wanboLogo from "../assets/wanbo.png"; //wanbo.png
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showPolicy, setShowPolicy] = useState(false);
  const [showAdvice, setShowAdvice] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <MDBFooter bgColor="light" className="text-center text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
        <Card className="text-white w-100 d-flex flex-row justify-content-center align-items-center text-center">
          <Card.Img
            src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/bg-mail.png?1705828865662"
            alt="Card image"
            height={180}
          />
          <Card.ImgOverlay className="d-flex flex-column flex-md-row justify-content-between align-items-center">
            <div
              className=" text-content flex-grow-1 me-md-3"
              style={{ flexBasis: "60%" }}
            >
              <Card.Title className="nameDK">
                ĐĂNG KÝ ĐỂ NHẬN TIN TỨC MỚI NHẤT
              </Card.Title>
              <Card.Text className="nameTT">
                Bạn hãy để lại email để không bỏ lỡ hàng ngàn sản phẩm và các
                chương trình khuyến mại khác.
              </Card.Text>
            </div>

            <div className="search-ft d-flex justify-content-center align-items-center mt-3 mt-md-0">
              <Navbar.Collapse
                id="navbarScroll"
                className="flex-grow-1 d-flex justify-content-center mx-0 mx-md-5"
                style={{ width: "100%" }}
              >
                <div className="d-flex" style={{ position: "relative" }}>
                  <input
                    className="form-control me-2 inputEmail p-4"
                    placeholder="Nhập email của bạn"
                    onFocus={(e) => {
                      e.target.style.boxShadow = "none";
                    }}
                  />
                  <Button className="search px-4">
                    <div style={{ padding: 6 }}>Gửi</div>
                  </Button>
                </div>
              </Navbar.Collapse>
            </div>
          </Card.ImgOverlay>
        </Card>
      </section>

      <section className="">
        <MDBContainer className="text-start text-md-start mt-5">
          <MDBRow className="mt-5 justify-content-center">
            <MDBCol md="3" lg="4" xl="5" className=" mb-2">
              {/* <img
                alt=""
                src={wanboLogo}
                width="100%"
                className="d-inline-block align-top mb-2"
              /> */}
              <span className="footer_company_name">
                Công ty TNHH Nguyên Kim
              </span>
              <p>
                <a className="text-reset22 d-flex  align-items-center ">
                  <i className="bi bi-send me-2" style={{ fontSize: 25 }} />{" "}
                  <div>
                    245B Trần Quang Khải, Phường Tân Định, Quận 1, Hồ Chí Minh
                  </div>
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset22 d-flex  align-items-center  "
                >
                  <i
                    className="bi bi-telephone me-2"
                    style={{ fontSize: 25 }}
                  />
                  <div>Hotline: 1900 6739</div>
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset22 d-flex  align-items-center  "
                >
                  <i className="bi bi-envelope me-2" style={{ fontSize: 25 }} />
                  <div>Email: cskh@nguyenkimvn.vn</div>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold text-reset2">
                  Về chúng tôi
                </h6>
                <div className="collapse-menu-btn">
                  <i
                    onClick={() => setShowAboutUs(!showAboutUs)}
                    className={`bi bi-dash transform-dash ${
                      showAboutUs
                        ? "transition-dash-rotate1"
                        : "transition-dash-rotate2"
                    }`}
                  ></i>
                  <i
                    onClick={() => setShowAboutUs(!showAboutUs)}
                    className={`bi bi-dash fixed-dash ${
                      showAboutUs ? "transition-dash-disappear" : ""
                    }`}
                  ></i>
                </div>
              </div>
              <div className={`about-sub-item ${showAboutUs ? "show" : ""}`}>
                <p>
                  <Link
                    to="/home"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Trang chủ
                  </Link>
                </p>
                <p>
                  <Link
                    to="/introduce"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Giới thiệu
                  </Link>
                </p>
                <p>
                  <Link
                    to="/product?catUrl=wanbo-t"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Sản phẩm
                  </Link>
                </p>
                <p>
                  <Link
                    to="/news/tin-khuyen-mai"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Tin tức
                  </Link>
                </p>
                <p>
                  <Link
                    to="/contact"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Liên hệ
                  </Link>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold text-reset2">
                  Chính sách
                </h6>
                <div className="collapse-menu-btn">
                  <i
                    onClick={() => setShowPolicy(!showPolicy)}
                    className={`bi bi-dash transform-dash ${
                      showPolicy
                        ? "transition-dash-rotate1"
                        : "transition-dash-rotate2"
                    }`}
                  ></i>
                  <i
                    onClick={() => setShowPolicy(!showPolicy)}
                    className={`bi bi-dash fixed-dash ${
                      showPolicy ? "transition-dash-disappear" : ""
                    }`}
                  ></i>
                </div>
              </div>
              <div className={`about-sub-item ${showPolicy ? "show" : ""}`}>
                <p>
                  <Link
                    to="/return-policy"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Chính sách đổi trả
                  </Link>
                </p>
                <p>
                  <Link
                    to="/delivery-and-payment"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Giao hàng & thanh toán
                  </Link>
                </p>
                <p>
                  <Link
                    to="/warranty-terms"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Điều khoản bảo hành
                  </Link>
                </p>
                <p>
                  <Link
                    to="/privacy-policy"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Chính sách bảo mật
                  </Link>
                </p>
                <p>
                  <Link
                    to="/cookie-policy"
                    className="text-reset2"
                    onClick={scrollToTop}
                  >
                    Chính sách Cookie
                  </Link>
                </p>
              </div>
            </MDBCol>
            <MDBCol md="4" lg="3" xl="3" className=" mb-md-0">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold text-reset2">
                  Tư vấn khách hàng
                </h6>
                <div className="collapse-menu-btn">
                  <i
                    onClick={() => setShowAdvice(!showAdvice)}
                    className={`bi bi-dash transform-dash ${
                      showAdvice
                        ? "transition-dash-rotate1"
                        : "transition-dash-rotate2"
                    }`}
                  ></i>
                  <i
                    onClick={() => setShowAdvice(!showAdvice)}
                    className={`bi bi-dash fixed-dash ${
                      showAdvice ? "transition-dash-disappear" : ""
                    }`}
                  ></i>
                </div>
              </div>
              <div className={`about-sub-item ${showAdvice ? "show" : ""}`}>
                <p>
                  Mua hàng:{" "}
                  <span className="text-reset2 fw-bold">1900 6739</span>
                </p>
                <p>
                  Khiếu nại:{" "}
                  <span className="text-reset2 fw-bold">0933.808 837</span>
                </p>
                <p>
                  Bảo hành:{" "}
                  <span className="text-reset2 fw-bold">0933.806.678 </span>
                </p>
              </div>
              <div>
                <h6 className="text-uppercase fw-bold text-reset2 my-2">
                  Phương thức thanh toán
                </h6>
                <img
                  alt=""
                  src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/icon_payment_1.png?1708522711041"
                  className="d-inline-block align-top "
                />
                <img
                  alt=""
                  src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/icon_payment_2.png?1708522711041"
                  className="d-inline-block align-top mb-2"
                />
                <img
                  alt=""
                  src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/icon_payment_3.png?1708522711041"
                  className="d-inline-block align-top mb-2"
                />
                <img
                  alt=""
                  src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/icon_payment_4.png?1708522711041"
                  className="d-inline-block align-top mb-2"
                />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © Bản quyền thuộc về Wanbo Team |
        <a className="text-reset2 fw-bold ms-1" href="https://mdbootstrap.com/">
          Cung cấp bởi Sapo
        </a>
      </div>
    </MDBFooter>
  );
}
