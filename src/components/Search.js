import React, { useContext } from "react";
import { CartContext } from "../pages/Cart/CartContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import wanboLogo from "../assets/logo.webp"; //wanbo.png
import call from "../assets/call.png";
import user from "../assets/user.png";
import "../components/AppHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Col } from "react-bootstrap";

function Search() {
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ borderBottom: "1px solid gray" }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center flex-wrap container"
      >
        {/* Logo */}
        <div className="d-flex align-items-center justify-content-between w-100 w-md-auto mb-2 mb-lg-0">
          <Link to="/home" className="d-flex align-items-center">
            <img
              alt="Wanbo Logo"
              src={wanboLogo}
              width="auto"
              height="40"
              className="d-inline-block align-top"
            />
          </Link>

          {/* Thanh tìm kiếm và các nút */}
          <div className="d-flex flex-column flex-md-row-reverse align-items-end w-100">
            <div className="d-flex align-items-center mt-2 mt-md-0">
              {/* Gọi mua hàng */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <img
                  alt="Call"
                  src={call}
                  width="auto"
                  height="30"
                  className="d-inline-block align-top me-2"
                />
                <div style={{ fontSize: 13, fontWeight: "600" }}>
                  Gọi mua hàng <br />
                  <span >
                    1900 6750
                  </span>
                </div>
              </div>

              {/* Tài khoản */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <img
                  alt="User"
                  src={user}
                  width="auto"
                  height="30"
                  className="d-inline-block align-top me-2"
                />
                 <div style={{ fontSize: 13, fontWeight: "600", color: "white" }}>
                  Tài khoản <br />
                  <a href="/login" style={{color: "white"}} >
                    Đăng nhập
                  </a>
                </div>
              </div>
              <a
                className="bi-telephone d-block d-md-none"
                style={{ fontSize: 22, marginRight: 15, color: "white" }}
              />
              {/* Giỏ hàng */}
              <Button
                variant="outline-primary"
                onClick={() => navigate("/cart")}
                className="position-relative d-flex align-items-end align-items-centers"
                style={{ color: "white", border: "1px solid white" }}
              >
                <Badge
                  bg="primary"
                  style={{
                    position: "absolute",
                    left: 27,
                    top: 7,
                    fontSize: 10,
                  }}
                >
                  {totalItems}
                </Badge>
                <span
                  className="bi bi-basket "
                  style={{ fontSize: 22, marginRight: 15 }}
                />
                <div className="d-none d-md-flex mb-1">Giỏ hàng</div>
              </Button>
            </div>
          </div>
        </div>
        {/* Thanh tìm kiếm */}

        <div className="meme">
          <div
            className="d-flex justify-content-center"
            style={{ Width: 800, position: "relative" }}
          >
            <input
              className="form-control me-2"
              style={{
                height: 43,
                border: "1px solid #ccc",
                outline: "none",
                paddingLeft: 15,
                borderRadius: 5,
              }}
              placeholder="Tìm kiếm"
              onFocus={(e) => {
                e.target.style.boxShadow = "none"; // Loại bỏ hiệu ứng màu xanh
              }}
            />
            <Button className="search">
              <div className="bi bi-search" style={{ padding: 2.8 }} />
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default Search;
