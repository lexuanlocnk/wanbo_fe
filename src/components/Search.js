import React, { useContext } from "react";
import { CartContext } from "../pages/Cart/CartContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import wanboLogo from "../assets/logo.webp";
import search from "../assets/search-512.webp";
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
      className="custom-navbar px-4 py-4"
      style={{ borderBottom: "1px solid gray" }}
    >
      <Container
        fluid
        className="d-flex justify-content-between align-items-center flex-wrap"
      >
        {/* Logo */}
        <Link to="/home" className="d-flex align-items-center mb-2 mb-lg-0">
          <img
            alt="Wanbo Logo"
            src={wanboLogo}
            width="auto"
            height="40"
            className="d-inline-block align-top"
          />
        </Link>

        {/* Toggle menu cho màn hình nhỏ */}
        <Navbar.Toggle aria-controls="navbarScroll" className="me-2" />

        {/* Thanh tìm kiếm */}
        <Navbar.Collapse
          id="navbarScroll"
          className="flex-grow-1 d-flex justify-content-center mx-0 mx-md-5"
        >
          <div
            className="d-flex w-100"
            style={{ maxWidth: 600, position: "relative" }}
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
            />
            <Button className="search">
              <div className="bi bi-search" style={{ padding: 2.8 }} />
            </Button>
          </div>
        </Navbar.Collapse>

        {/* Gọi mua hàng */}
        <div className="d-none d-md-flex align-items-center text-center">
          <div className="me-2">
            <img
              alt="Call"
              src={call}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
          <div>
            Gọi mua hàng <br />{" "}
            <span style={{ fontSize: "0.9rem" }}>01245678910</span>
          </div>
        </div>

        {/* Tài khoản */}
        <div className="d-flex align-items-center mx-lg-4 mt-1">
          <div className="me-2">
            <img
              alt="User"
              src={user}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
          <Col>
            <a href={`/login`} style={{ color: "white", fontSize: "0.9rem" }}>
              Tài khoản
            </a>{" "}
            <br />
            <a href={`/login`} style={{ color: "white", fontSize: "0.9rem" }}>
              Đăng nhập
            </a>
          </Col>
        </div>

        {/* Giỏ hàng */}
        <Button
          variant="outline-light"
          onClick={() => navigate("/cart")}
          className="position-relative d-flex align-items-center mt-1"
        >
          <Badge
            bg="primary"
            style={{ position: "absolute", left: 27, top: 7 }}
          >
            {totalItems}
          </Badge>
          <span
            className="bi bi-basket"
            style={{ fontSize: 24, marginRight: 10 }}
          />
          Giỏ hàng
        </Button>
      </Container>
    </Navbar>
  );
}

export default Search;
