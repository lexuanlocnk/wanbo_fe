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
import { Link } from "react-router-dom";

function Address() {
  return (
    <Navbar
      className="custom-navbar px-5"
      style={{ borderBottom: "1px solid gray" }}
    >
      <>Giờ mở cửa: 08:30 - 21:30 các ngày trong tuần</>
    </Navbar>
  );
}

export default Address;
