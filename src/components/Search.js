import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../pages/Cart/CartContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import wanboLogo from "../assets/wanbo.png"; // wanbo.png
import user from "../assets/user.png";
import "../components/AppHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Card } from "react-bootstrap";
import axios from "axios";
import { imageBaseUrl } from "../api/axiosConfig";
import HomeApi from "../api/homeApi";

function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce((total, item) => total + item.quality, 0);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const isLoggedIn = Boolean(localStorage.getItem("token"));

  const fetchSuggestions = async (key) => {
    const homeApi = new HomeApi();
    try {
      // const response = await axios.get(`http://192.168.245.190:8002/api/member/search-product`, {
      //   params: { key },
      // });
      const response = await homeApi.getSearch({ params: { key } });
      if (response.data.status) {
        setSuggestions(response.data.product);
        setShowSuggestions(true);
      }
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchKey(value);

    // Clear previous timeout
    if (typingTimeout) {
      clearTimeout(typingTimeout);
    }

    // Set new timeout
    setTypingTimeout(
      setTimeout(() => {
        if (value) {
          fetchSuggestions(value);
        } else {
          setShowSuggestions(false);
        }
      }, 1000)
    );
  };

  const handleSearch = () => {
    if (searchKey.trim()) {
      navigate(`/search?key=${encodeURIComponent(searchKey)}`);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${suggestion.UrlProduct}`);
    setShowSuggestions(false);
  };

  return (
    <Navbar expand="lg" className="custom-navbar" style={{ borderBottom: "0.5px solid #DCDCDC" }}>
      <Container fluid className="d-flex justify-content-between align-items-center flex-wrap container">
        {/* Logo */}
        <div className="d-flex align-items-center justify-content-between w-100 w-md-auto mb-2 mb-lg-0">
          <Link to="/home" className="d-flex align-items-center">
            <img alt="Wanbo Logo" src={wanboLogo} width="auto" height="40" className="d-inline-block align-top" />
          </Link>

          {/* Thanh tìm kiếm và các nút */}
          <div className="d-flex flex-column flex-md-row-reverse align-items-end w-100">
            <div className="d-flex align-items-center mt-2 mt-md-0">
              {/* Gọi mua hàng */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <i className="bi bi-telephone-inbound-fill" style={{ fontSize: 20 }}></i>
                <div style={{ fontSize: 13, fontWeight: "600", marginLeft: 5 }}>
                  Gọi mua hàng <br />
                  <span>1900 6739</span>
                </div>
              </div>

              {/* Tài khoản */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <i className="bi bi-person-fill" style={{ fontSize: 30 }}></i>
                <div style={{ fontSize: 13, fontWeight: "600", color: "#000", marginLeft: 5 }}>
                  <a className="login-nav-btn" href="/information" style={{ color: "#000" }}>
                    Tài khoản
                  </a>{" "}
                  <br />
                  {isLoggedIn ? (
                    <a className="login-nav-btn" onClick={handleLogout} style={{ color: "#000", cursor: "pointer" }}>
                      Đăng xuất
                    </a>
                  ) : (
                    <a className="login-nav-btn" href="/login" style={{ color: "#000" }}>
                      Đăng nhập
                    </a>
                  )}
                </div>
              </div>
              <a className="bi-telephone d-block d-md-none" style={{ fontSize: 22, marginRight: 15, color: "white" }} />
              {/* Giỏ hàng */}
              <Button
                variant="outline-primary"
                onClick={() => navigate("/cart")}
                className="position-relative d-flex align-items-end align-items-centers button-cart"
                style={{ color: "#000", border: "1px solid #000" }}
              >
                <Badge bg="primary" style={{ position: "absolute", left: 27, top: 7, fontSize: 10 }}>
                  {totalItems}
                </Badge>
                <i className="bi bi-basket " style={{ fontSize: 22, marginRight: 15 }} />
                <div className="d-none d-md-flex mb-1">Giỏ hàng</div>
              </Button>
            </div>
          </div>
        </div>
        {/* Thanh tìm kiếm */}

        <div className="meme">
          <div className="d-flex justify-content-center" style={{ Width: 800, position: "relative" }}>
            <input
              className="form-control me-2"
              placeholder="Tìm kiếm"
              value={searchKey}
              onFocus={(e) => {
                e.target.style.boxShadow = "none";
              }}
              onChange={handleInputChange}
              style={{ height: 43, border: "1px solid #ccc", paddingLeft: 15, borderRadius: 5 }}
            />
            <Button className="search" onClick={handleSearch}>
              <div className="bi bi-search" style={{ padding: 2.7 }} />
            </Button>
          </div>
          {/* Gợi ý */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="search__item-result show" style={{ width: "100%", marginTop: "3px" }}>
              {suggestions.map((item) => (
                <div
                  key={item.ProductId}
                  className="suggestion-item d-flex"
                  onClick={() => handleSuggestionClick(item)}
                >
                  <div className="me-2">
                    <img variant="top" src={`${imageBaseUrl}${item.Image}`} style={{ width: 50 }} />
                  </div>
                  <div>
                    <div >{item.ProductName}</div>
                    <span
                      style={{
                        fontSize: 15,
                        color: " #ff0048",
                        fontWeight: "600"
                      }}>
                      {item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : ""}
                    </span>

                    <span className="original-price tgray fw-bold ms-2">
                      {item.PriceOld ? `${item.PriceOld.toLocaleString("vi-VN")} đ` : ""}
                    </span>

                  </div>

                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </Navbar>
  );
}

export default Search;
