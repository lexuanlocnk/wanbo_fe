import React, { useContext, useState, useEffect, useRef } from "react";
import { CartContext } from "../pages/Cart/CartContext";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import wanboLogo from "../assets/wanbo.png"; // wanbo.png
import user from "../assets/user.png";
import "../components/AppHeader.css";
import { Link, useNavigate } from "react-router-dom";
import { Badge, Card, Dropdown, DropdownToggle } from "react-bootstrap";
import axios from "axios";
import { imageBaseUrl } from "../api/axiosConfig";
import HomeApi from "../api/homeApi";
import { motion } from "framer-motion";
import { auto } from "@popperjs/core";
import CIcon from "@coreui/icons-react";
import { cilCart, cilTrash } from "@coreui/icons";

function Search() {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchKey, setSearchKey] = useState("");
  const [typingTimeout, setTypingTimeout] = useState(null);
  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const totalItems = cartItems.reduce((total, item) => total + item.quality, 0);
  const timeoutRef = useRef(null);
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };
  const { increaseQuantity, decreaseQuantity, removeFromCart } =
    useContext(CartContext);

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
      console.log(cartItems);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    navigate(`/product/${suggestion.UrlProduct}`);
    setShowSuggestions(false);
  };

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(timeoutRef.current);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => {
        setDropdownOpen(false);
      }, 200);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quality,
    0
  );

  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ borderBottom: "0.5px solid #DCDCDC" }}
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
          <div style={{ position: "relative" }}>
            <div className="meme mx-lg-5 d-none d-lg-flex">
              <div
                className="d-flex justify-content-center mx-lg-5"
                style={{ Width: 800, position: "relative" }}
              >
                <input
                  className="form-control me-2"
                  placeholder="Tìm kiếm"
                  value={searchKey}
                  onFocus={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                  onChange={handleInputChange}
                  style={{
                    height: 43,
                    width: 350,
                    border: "1px solid #ccc",
                    paddingLeft: 15,
                    borderRadius: 5,
                  }}
                />
                <Button className="search" onClick={handleSearch}>
                  <div className="bi bi-search" style={{ padding: 2.7 }} />
                </Button>
              </div>
              {/* Gợi ý */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  className="search__item-result show"
                  style={{ width: "100%", marginTop: "3px" }}
                >
                  {suggestions.map((item) => (
                    <div
                      key={item.ProductId}
                      className="suggestion-item d-flex"
                      onClick={() => handleSuggestionClick(item)}
                    >
                      <div className="me-2">
                        <img
                          variant="top"
                          src={`${imageBaseUrl}${item.Image}`}
                          style={{ width: 50 }}
                        />
                      </div>
                      <div>
                        <div>{item.ProductName}</div>
                        <span
                          style={{
                            fontSize: 15,
                            color: " #ff0048",
                            fontWeight: "600",
                          }}
                        >
                          {item.Price
                            ? `${item.Price.toLocaleString("vi-VN")} đ`
                            : ""}
                        </span>

                        <span className="original-price tgray fw-bold ms-2">
                          {item.PriceOld
                            ? `${item.PriceOld.toLocaleString("vi-VN")} đ`
                            : ""}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          {/* Thanh tìm kiếm và các nút */}
          <div className="d-flex flex-column align-items-end w-100">
            <div className="d-flex align-items-center mt-2 mt-md-0">
              {/* Gọi mua hàng */}
              {/* Desktop */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <i
                  className="bi bi-telephone-inbound-fill"
                  style={{ fontSize: 20 }}
                ></i>
                <a
                  href="tel:19006739"
                  style={{ fontSize: 13, fontWeight: "600", marginLeft: 5 }}
                  className="call-hover"
                >
                  Gọi mua hàng <br />
                  <span>1900 6739</span>
                </a>
              </div>
              {/* Mobile */}
              <div className="d-md-none align-items-center text-center me-3 block-phone">
                <a href="tel:19006739">
                  <i
                    className="bi bi-telephone-inbound-fill"
                    style={{ fontSize: 20, color: "black" }}
                  ></i>
                </a>
              </div>

              {/* Tài khoản */}
              {/* Desktop */}
              <div className="d-none d-md-flex align-items-center text-center me-3">
                <i className="bi bi-person-fill" style={{ fontSize: 30 }}></i>
                <div
                  style={{
                    fontSize: 13,
                    fontWeight: "600",
                    color: "#000",
                    marginLeft: 5,
                  }}
                >
                  <Link
                    className="login-nav-btn"
                    to="/information"
                    style={{ color: "#000" }}
                  >
                    Tài khoản
                  </Link>
                  <br />
                  {isLoggedIn ? (
                    <a
                      className="login-nav-btn"
                      onClick={handleLogout}
                      style={{ color: "#000", cursor: "pointer" }}
                    >
                      Đăng xuất
                    </a>
                  ) : (
                    <Link
                      className="login-nav-btn"
                      to="/login"
                      style={{ color: "#000" }}
                    >
                      Đăng nhập
                    </Link>
                  )}
                </div>
              </div>
              {/* Mobile */}
              <Dropdown className="d-md-none me-3">
                <Dropdown.Toggle
                  as="button"
                  className="btn btn-link p-0"
                  style={{ fontSize: 24, color: "#000" }}
                >
                  <i className="bi bi-person-fill" />
                </Dropdown.Toggle>

                <Dropdown.Menu style={{ left: "-100px" }}>
                  <Dropdown.Item as={Link} to="/information">
                    Tài khoản
                  </Dropdown.Item>
                  {isLoggedIn ? (
                    <Dropdown.Item onClick={handleLogout}>
                      Đăng xuất
                    </Dropdown.Item>
                  ) : (
                    <Dropdown.Item as={Link} to="/login">
                      Đăng nhập
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              {/* Giỏ hàng */}
              <div
                className="cart-wrapper"
                style={{ position: "relative", display: "inline-block" }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Button
                  variant="outline-primary"
                  onClick={() => navigate("/cart")}
                  className="position-relative d-flex align-items-end align-items-centers button-cart"
                  style={{ color: "#000", border: "1px solid #000" }}
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
                  <i
                    className="bi bi-basket "
                    style={{ fontSize: 22, marginRight: 15 }}
                  />
                  <div className="d-none d-md-flex mb-1">Giỏ hàng</div>
                </Button>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, x: -100 }}
                    animate={{
                      opacity: dropdownOpen ? 1 : 0,
                      y: dropdownOpen ? 0 : -10,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="dropdown-menu show cart-dropdown"
                  >
                    <div
                      className="cart-items"
                      style={{
                        maxHeight: "340px",
                        overflowY: "auto",
                        padding: "12px 16px",
                      }}
                    >
                      {cartItems.length > 0 ? (
                        cartItems.map((item, index) => (
                          <div
                            key={index}
                            style={{
                              width: "100%",
                              display: "table",
                              position: "relative",
                            }}
                          >
                            <Link
                              to={`/product/${item.friendlyUrlProduct}`}
                              style={{
                                display: "table-cell",
                                width: "24%",
                                verticalAlign: "top",
                                position: "relative",
                              }}
                            >
                              <img
                                src={`${imageBaseUrl}${item.picture}`}
                                style={{ width: 100, height: 100 }}
                              />{" "}
                            </Link>
                            <strong>
                              <Link to={`/product/${item.friendlyUrlProduct}`}>
                                {item.title}
                              </Link>
                            </strong>
                            <a
                              variant="danger"
                              onClick={() => removeFromCart(item.id)}
                              style={{
                                cursor: "pointer",
                                fontSize: 12,
                                position: "absolute",
                                right: 10,
                                top: 0,
                              }}
                            >
                              <CIcon icon={cilTrash} style={{ width: 30 }} />
                            </a>
                            <div>
                              <div className="quality">
                                <p>Số lượng: {item.quality}</p>
                                <div className="d-flex align-items-center">
                                  <button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() =>
                                      decreaseQuantity(item.id, item)
                                    }
                                    className="mx-1 border-end"
                                    style={{
                                      border: "none",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    -
                                  </button>

                                  <Card.Text
                                    style={{
                                      height: 5,
                                      width: 18,
                                      textAlign: "center",
                                      fontSize: 14,
                                    }}
                                  >
                                    {item.quality}
                                  </Card.Text>

                                  <button
                                    variant="outline-secondary"
                                    size="sm"
                                    onClick={() =>
                                      increaseQuantity(item.id, item)
                                    }
                                    className="ms-1 border-start"
                                    style={{
                                      border: "none",
                                      backgroundColor: "white",
                                    }}
                                  >
                                    +
                                  </button>
                                </div>
                              </div>
                              <div
                                className="price"
                                style={{ textAlign: "right" }}
                              >
                                <span
                                  style={{
                                    fontWeight: "bold",
                                    display: "block",
                                    marginBottom: 3,
                                  }}
                                >
                                  {item.price * item.quality
                                    ? `${(
                                        item.price * item.quality
                                      ).toLocaleString("vi-VN")} đ`
                                    : ""}
                                </span>
                              </div>
                            </div>
                            <hr />
                          </div>
                        ))
                      ) : (
                        <div className="d-flex justify-content-center">
                          <CIcon icon={cilCart} style={{ width: 30 }} />
                          <p>Không có sản phẩm nào trong giỏ hàng của bạn</p>
                        </div>
                      )}
                    </div>
                    {cartItems.length > 0 && (
                      <div
                        className="cart-footer"
                        style={{
                          position: "sticky",
                          bottom: 0,
                          backgroundColor: "#f8f9fa",
                          borderTop: "1px solid #ddd",
                          padding: "12px 16px",
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <div>
                          <strong>Tổng: </strong>
                          {cartItems
                            .reduce(
                              (sum, item) => sum + item.price * item.quality,
                              0
                            )
                            .toLocaleString("vi-VN")}{" "}
                          đ
                        </div>
                        <Button
                          size="sm"
                          variant="success"
                          onClick={() => navigate("/checkout")}
                        >
                          Thanh toán
                        </Button>
                      </div>
                    )}
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Thanh tìm kiếm */}
        <div className="meme d-lg-none mx-lg-5">
          <div
            className="d-flex justify-content-center mx-lg-5"
            style={{ Width: 800, position: "relative" }}
          >
            <input
              className="form-control me-2"
              placeholder="Tìm kiếm"
              value={searchKey}
              onFocus={(e) => {
                e.target.style.boxShadow = "none";
              }}
              onChange={handleInputChange}
              style={{
                height: 43,
                border: "1px solid #ccc",
                paddingLeft: 15,
                borderRadius: 5,
              }}
            />
            <Button className="search" onClick={handleSearch}>
              <div className="bi bi-search" style={{ padding: 2.7 }} />
            </Button>
          </div>
          {/* Gợi ý */}
          {showSuggestions && suggestions.length > 0 && (
            <div
              className="search__item-result show"
              style={{ width: "100%", marginTop: "3px" }}
            >
              {suggestions.map((item) => (
                <div
                  key={item.ProductId}
                  className="suggestion-item d-flex"
                  onClick={() => handleSuggestionClick(item)}
                >
                  <div className="me-2">
                    <img
                      variant="top"
                      src={`${imageBaseUrl}${item.Image}`}
                      style={{ width: 50 }}
                    />
                  </div>
                  <div>
                    <div>{item.ProductName}</div>
                    <span
                      style={{
                        fontSize: 15,
                        color: " #ff0048",
                        fontWeight: "600",
                      }}
                    >
                      {item.Price
                        ? `${item.Price.toLocaleString("vi-VN")} đ`
                        : ""}
                    </span>

                    <span className="original-price tgray fw-bold ms-2">
                      {item.PriceOld
                        ? `${item.PriceOld.toLocaleString("vi-VN")} đ`
                        : ""}
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
