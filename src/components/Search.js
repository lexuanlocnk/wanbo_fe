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
      className="custom-navbar px-5 py-4"
      style={{ borderBottom: "1px solid gray" }}
    >
      <Container
        fluid
        className="d-flex justify-content-center align-items-center"
      >
        <Link to="/home">
          <img
            alt="Wanbo Logo"
            src={wanboLogo}
            width="auto"
            height="40"
            className="d-inline-block align-top me-5"
          />
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse
          id="navbarScroll"
          className="mx-5"
          style={{ position: "relative" }}
        >
          <input
            style={{
              width: "80%",
              height: 43,
              border: "1px solid #ccc",
              outline: "none",
              paddingLeft: 15,
              borderRadius: 5,
            }}
            placeholder="Tìm kiếm"
          />

          <Button className="search">
            <img
              alt="Search"
              src={search}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </Button>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
          <div className="me-2">
            <img
              alt="Call"
              src={call}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
          Gọi mua hàng <br /> 01245678910
        </div>

        <div className="d-flex align-items-center mx-4">
          <div className="me-2">
            <img
              alt="User"
              src={user}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>

          <Col >
            <a href={`/login`} style={{color: "white"}}>Tài khoản</a> <br />
            <a href={`/login`} style={{color: "white"}}>Đăng nhập</a>
          </Col>
        </div>

        <Button
          variant="outline-light"
          onClick={() => navigate("/cart")}
          style={{ position: "relative" }}
        >
          <Badge
            bg="primary"
            style={{ position: "absolute", left: 27, top: 7 }}
          >
            {totalItems}
          </Badge>
          <span
            className="bi bi-basket"
            style={{ fontSize: 24, marginRight: 15 }}
          />
          Giỏ hàng
        </Button>
      </Container>
    </Navbar>
  );
}

export default Search;
