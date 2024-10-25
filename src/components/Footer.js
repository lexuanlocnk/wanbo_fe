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
import Card from "react-bootstrap/Card";
import "./footer.css";

export default function Footer() {
  const [showAboutUs, setShowAboutUs] = useState();
  const [showPolicy, setShowPolicy] = useState();
  const [showAdvice, setShowAdvice] = useState();

  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
        <Card className="text-white d-flex flex-row justify-content-center align-items-center text-center">
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
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-2">
              <img
                alt=""
                src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/logo_footer.png?1708522711041"
                width="150px"
                className="d-inline-block align-top mb-2"
              />
              <p>
                <a
                  href=""
                  className="text-reset22 d-flex  align-items-center  justify-content-center"
                >
                  <i className="bi bi-send me-2" style={{ fontSize: 25 }} />{" "}
                  <div>
                    Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội
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
                  <div>1900 6750</div>
                </a>
              </p>
              <p>
                <a
                  href=""
                  className="text-reset22 d-flex  align-items-center  "
                >
                  <i className="bi bi-envelope me-2" style={{ fontSize: 25 }} />
                  <div>support@sapo.vn</div>
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto">
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
                  <a href="#!" className="text-reset2">
                    Trang chủ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Giới thiệu
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Sản phẩm
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Tin tức
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Liên hệ
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
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
                  <a href="#!" className="text-reset2">
                    Chính sách giao hàng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Chính sách đổi trả
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Chính sách bán hàng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset2">
                    Hướng dẫn trả góp
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0">
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
                  <span className="text-reset2 fw-bold">1900 6750</span>
                </p>
                <p>
                 
                  Khiếu nại:{" "}
                  <span className="text-reset2 fw-bold">1900 6750</span>
                </p>
                <p>
                  Bảo hành:{" "}
                  <span className="text-reset2 fw-bold">1900 6750</span>
                </p>
                <p>
                  <h6 className=" text-uppercase fw-bold text-reset2">
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
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © Bản quyền thuộc về Lofi Team
        <a className="text-reset2 fw-bold" href="https://mdbootstrap.com/">
          | Cung cấp bởi Sapo
        </a>
      </div>
    </MDBFooter>
  );
}
