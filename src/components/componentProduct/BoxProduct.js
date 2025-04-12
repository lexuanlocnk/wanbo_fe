import React, { useContext, useState, useEffect, useRef } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CartContext } from "../../pages/Cart/CartContext";
import { Modal } from "react-bootstrap";
import BoxCart from "./BoxCart";
import ProductViewed from "../../ProductQuickView/ProductViewed";
import "./box-product.css";
import componentProduct from "./componentProduct.css";
import { Drawer, Space } from "antd";
import { imageBaseUrl } from "../../api/axiosConfig";
import axios from "axios";
import HomeApi from "../../api/homeApi";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BoxProduct = ({ item }) => {
  const { cartItems, addToCart } = useContext(CartContext);
  const [smShow, setSmShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [quickView, setQuickView] = useState(false);
  const [quantityView, setQuantityView] = useState(1);
  const [isCompared, setIsCompared] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const navigate = useNavigate();
  const dragRef = useRef(false);
  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const [isDragging, setIsDragging] = useState(false);
  const dragThreshold = 5;
  // hàm so sánh sản phẩm
  useEffect(() => {
    // Lấy danh sách sản phẩm từ localStorage khi Drawer được mở
    if (isCompared) {
      const storedCompareList =
        JSON.parse(localStorage.getItem("compareList")) || [];
      setCompareList(storedCompareList.slice(0, 3)); // Giới hạn 3 sản phẩm
    }
  }, [isCompared]);

  const handleOpenCompare = () => {
    let storedCompareList =
      JSON.parse(localStorage.getItem("compareList")) || [];
    // Kiểm tra nếu sản phẩm đã có trong danh sách so sánh
    if (storedCompareList.find((product) => product.id === item.ProductId)) {
      toast.info("Sản phẩm này đã có trong danh sách so sánh!");
      // setIsCompared(true);
      return;
    }
    // Kiểm tra nếu đã có tối đa 3 sản phẩm trong danh sách so sánh
    if (storedCompareList.length >= 3) {
      toast.warn("Chỉ có thể so sánh tối đa 3 sản phẩm.");
      setIsCompared(true);
      return;
    }

    // Kiểm tra nếu danh mục của sản phẩm mới khớp với danh mục của các sản phẩm đã thêm
    if (
      storedCompareList.length > 0 &&
      storedCompareList[0].category !== item.Category
    ) {
      toast.warn("Chỉ có thể so sánh các sản phẩm cùng danh mục.");
      return;
    }

    storedCompareList.push({
      id: item.ProductId,
      name: item.ProductName,
      price: item.Price,
      priceOld: item.PriceOld,
      image: item.Image,
      category: item.Category,
    });

    localStorage.setItem("compareList", JSON.stringify(storedCompareList));
    toast.success(`Đã thêm sản phẩm vào danh sách so sánh`);
    setIsCompared(true);
  };

  const handleCloseCompare = () => {
    setIsCompared(false);
  };
  //modal thông báo chưa đăng nhập
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleAddToCartN = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShow(true);
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }
    addToCart({
      product_id: item.ProductId,
      picture: item.Image,
      cat_name: item.Category,
      title: item.ProductName,
      quality: quantity,
      price: item.Price,
    });

    setSmShow(true);
  };

  const handleRemoveFromCompare = (productId) => {
    const storedCompareList =
      JSON.parse(localStorage.getItem("compareList")) || [];

    // Loại bỏ sản phẩm có id bằng productId
    const updatedCompareList = storedCompareList.filter(
      (product) => product.id !== productId
    );

    // Cập nhật lại localStorage và state
    localStorage.setItem("compareList", JSON.stringify(updatedCompareList));
    setCompareList(updatedCompareList);
  };

  const sale = Math.round(((item.PriceOld - item.Price) / item.PriceOld) * 100);

  const handleMouseDown = (e) => {
    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    dragRef.current = false;
    setIsDragging(false);

    // Add global event listeners to detect drag outside component
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseMove = (e) => {
    const deltaX = Math.abs(e.clientX - startXRef.current);
    const deltaY = Math.abs(e.clientY - startYRef.current);

    if (deltaX > dragThreshold || deltaY > dragThreshold) {
      dragRef.current = true;
      setIsDragging(true);
    }
  };

  const handleMouseUp = () => {
    // Clean up global event listeners
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);

    // Keep dragRef.current true for a short time to prevent click right after drag
    setTimeout(() => {
      dragRef.current = false;
    }, 100);
  };

  const handleCardClick = (e) => {
    // If dragging, prevent all clicks
    if (isDragging || dragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  const handleLinkClick = (e) => {
    // Prevent navigation if we're dragging
    if (isDragging || dragRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
  return (
    <div
      className="my-4 rounded box-product mx-1"
      key={item.ProductId}
      style={{ display: "inline-block", position: "relative", width: "98%" }}
    >
      <Card
        className="prdItem shadow4"
        style={{ border: "1px solid #f0f0f0" }}
        onMouseDown={handleMouseDown}
        onClick={handleCardClick}
      >
        <Link to={`/product/${item.UrlProduct}`} onClick={handleLinkClick}>
          <Card.Img
            variant="top"
            src={`${imageBaseUrl}${item.Image}`}
            className="img"
          />
        </Link>
        {sale > 0 && <Card.Text className="sale">-{sale} %</Card.Text>}
        <Card.Body>
          <Link
            to={`/product/${item.UrlProduct}`}
            className="prdName"
            onClick={handleLinkClick}
          >
            {item.ProductName}
          </Link>
          <div className="price">
            {item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : "N/A"}
          </div>
          {sale > 0 ? (
            <div className="original-price tgray fw-bold">
              {item.PriceOld
                ? `${item.PriceOld.toLocaleString("vi-VN")} đ`
                : "N/A"}
            </div>
          ) : (
            <div style={{ margin: 20 }}></div>
          )}

          {/* hover hiện 3 nút */}
          <div className="hover-buttons">
            <Button className="icon-buttons" onClick={handleAddToCartN}>
              <i className="bi bi-cart-plus" />
            </Button>
            {/* modal thêm thất bại*/}
            <Modal show={show} onHide={handleClose} animation={false} centered>
              <Modal.Header closeButton>
                <Modal.Title>Thông báo</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                  Ok
                </Button>
              </Modal.Footer>
            </Modal>

            <Modal
              size="xl"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header
                className="custom-modal-header"
                style={{ backgroundColor: "#0d6efd", color: "white" }}
              >
                <Modal.Title id="example-modal-sizes-title-sm">
                  <i className="bi bi-check-circle me-2" />
                  Đã thêm{" "}
                  <Link
                    to={`/product/${item.UrlProduct}`}
                    style={{ fontSize: 20, color: "white", fontWeight: "400" }}
                  >
                    [{item.ProductName}]
                  </Link>{" "}
                  vào giỏ hàng
                  <i
                    className="bi bi-x-lg"
                    style={{
                      position: "absolute",
                      right: 20,
                      cursor: "pointer",
                    }}
                    onClick={() => setSmShow(false)}
                  />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BoxCart isInModal={true} />
              </Modal.Body>
            </Modal>

            <Button className="icon-buttons" onClick={() => setQuickView(true)}>
              <i className="bi bi-eye" />
            </Button>
            <Modal
              size="xl"
              className=""
              dialogClassName="modal-product-viewed"
              show={quickView}
            >
              <Modal.Body className="box-product-viewed">
                <ProductViewed
                  item={item}
                  quantityView={quantityView}
                  setQuantityView={setQuantityView}
                  setQuickView={setQuickView}
                />
              </Modal.Body>
            </Modal>

            <Button className="icon-buttons" onClick={handleOpenCompare}>
              <i className="bi bi-repeat" />
            </Button>
          </div>
        </Card.Body>
      </Card>

      <Drawer
        title="So sánh sản phẩm"
        placement="bottom"
        width={500}
        open={isCompared}
        extra={<Space></Space>}
        onClose={handleCloseCompare}
        className="compare-drawer"
      >
        <div className="d-flex flex-wrap">
          {compareList.map((product) => (
            <div key={product.id} className="item-compare-wrap m-1">
              <a className="item-compare-img-thumb">
                <img
                  src={`${imageBaseUrl}${product.image}`}
                  alt={product.name}
                />
              </a>
              <div className="product-info">
                <a className="product-name">{product.name}</a>
                <div className="price-box">
                  <span className="price">
                    {product.price
                      ? `${product.price.toLocaleString("vi-VN")} đ`
                      : ""}
                  </span>
                  <span className="compare-price">
                    {product.priceOld
                      ? `${product.priceOld.toLocaleString("vi-VN")} đ`
                      : ""}
                  </span>
                </div>
                <div
                  className="remove-compare-item"
                  onClick={() => handleRemoveFromCompare(product.id)}
                >
                  Xoá
                </div>
              </div>
            </div>
          ))}
          <div className="compare-navigate-but">
            <Link to="/compare-product">Đi đến trang so sánh sản phẩm</Link>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default BoxProduct;
