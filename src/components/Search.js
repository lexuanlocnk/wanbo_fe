import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import wanboLogo from "../assets/logo.webp";
import search from "../assets/search-512.webp";
import call from "../assets/call.png";
import user from "../assets/user.png";
import "../components/AppHeader.css";
import { Link, useNavigate } from "react-router-dom";

function Search() {
  const navigate = useNavigate();
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
        <a href="/home">
        <img
          alt=""
          src={wanboLogo}
          width="auto"
          height="40"
          className="d-inline-block align-top me-5"
        />
        </a>
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
              alt=""
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
              alt=""
              src={call}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
         
            Gọi mua hàng <br /> 01245668899
         
        </div>

        <div className="d-flex align-items-center mx-4">
          <div className="me-2">
            <img
              alt=""
              src={user}
              width="auto"
              height="30"
              className="d-inline-block align-top"
            />
          </div>
       
            Tài khoản <br />
            Đăng nhập
        </div>

        <Button variant="outline-light" onClick={() => navigate("/cart")}>
          Giỏ hàng
        </Button>
      </Container>
    </Navbar>
  );
}

export default Search;
