import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import search from "../assets/search-512.webp";

import Card from "react-bootstrap/Card";

import Logo from "../assets/logo.webp";
import { auto } from "@popperjs/core";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between border-bottom">
        <Card className="text-white d-flex flex-row justify-content-center align-items-center text-center">
          <Card.Img
            src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/bg-mail.png?1705828865662"
            alt="Card image"
            height={180}
          />
          <Card.ImgOverlay>
            <Card.Title>Đăng ký để nhận tin tức khuyến mãi mới nhất</Card.Title>
            <Card.Text>
              Bạn hãy để lại email để không bỏ lỡ hàng ngàn sản phẩm và các
              chương trình khuyến mại khác
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <img
                alt=""
                src="https://bizweb.dktcdn.net/100/482/909/themes/903912/assets/logo_footer.png?1708522711041"
                width="150px"
                className="d-inline-block align-top mb-5"
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

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Về chúng tôi</h6>
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
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Chính sách</h6>
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
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Tư vấn khách hàng</h6>
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
                <MDBIcon icon="print" className="me-3" /> Phương thức thanh toán
              </p>
              <h6 className="text-uppercase fw-bold mb-4">
                Phương thức thanh toán
              </h6>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
      {/* <div style={{width: "100%"}}>
        <ifram
          width="100%"
          height="500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=245%20Tr%E1%BA%A7n%20Quang%20Kh%E1%BA%A3i,%20P.%20T%C3%A2n%20%C4%90%E1%BB%8Bnh,%20Qu%E1%BA%ADn%201,%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh+(Showroom%20SMC)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps systems</a>
        </ifram>
      </div> */}
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
