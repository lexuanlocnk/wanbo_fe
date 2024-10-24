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
            {/* Nội dung bên trái chiếm 6 phần */}
            <div
              className=" text-content flex-grow-1 me-md-3"
              style={{ flexBasis: "60%" }}
            >
              <Card.Title className="nameDK" >
                Đăng ký để nhận tin tức khuyến mãi mới nhất
              </Card.Title>
              <Card.Text className="nameTT">
                Bạn hãy để lại email để không bỏ lỡ hàng ngàn sản phẩm và các
                chương trình khuyến mại khác.
              </Card.Text>
            </div>

            {/* Thanh tìm kiếm chiếm 4 phần */}
            <div
              className="search-ft d-flex justify-content-center align-items-center mt-3 mt-md-0"
          
            >
              <Navbar.Collapse
                id="navbarScroll"
                className="flex-grow-1 d-flex justify-content-center mx-0 mx-md-5"
                style={{width:"100%"}}
              >
                <div
                  className="d-flex"
                  style={{ position: "relative" }}
                >
                  <input
                    className="form-control me-2 inputEmail"
                    placeholder="Email của bạn"
                  />
                  <Button className="search">
                    <div  style={{ padding: 2.8}} >Gửi</div>
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
                <a href="#!" className="text-reset">
                  Tầng 6, Tòa nhà Ladeco, 266 Đội Cấn, Quận Ba Đình, TP Hà Nội
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  1900 6750
                </a>
              </p>
              <p>
                <a href="#!" className="text-reset">
                  support@sapo.vn
                </a>
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold">Về chúng tôi</h6>
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
                  <a href="#!" className="text-reset">
                    Trang chủ
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Giới thiệu
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Sản phẩm
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Tin tức
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    liên hệ
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold">Chính sách</h6>
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
                  <a href="#!" className="text-reset">
                    Chính sách giao hàng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Chính sách đổi trả
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Chính sách bán hàng
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Hướng dẫn trả góp
                  </a>
                </p>
              </div>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0">
              <div className="w-100 footer-title-menu">
                <h6 className="text-uppercase mb-0 fw-bold">
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
                  <MDBIcon icon="home" className="me-3" />
                  Mua hàng: 1900 6750
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  Khiếu nại: 1900 6750
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> Bảo hành: 1900 6750
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> Phương thức thanh
                  toán
                </p>
              </div>
              <h6 className="text-uppercase fw-bold">Phương thức thanh toán</h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © Bản quyền thuộc về Lofi Team
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
          | Cung cấp bởi Sapo
        </a>
      </div>
    </MDBFooter>
  );
}
