import React, { useContext, useState, useEffect } from "react";
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

const BoxProduct = ({ item }) => {
  const { addToCart } = useContext(CartContext);
  const [smShow, setSmShow] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [quickView, setQuickView] = useState(false);
  const [quantityView, setQuantityView] = useState(1);
  const [isCompared, setIsCompared] = useState(false);
  const [compareList, setCompareList] = useState([]);

  useEffect(() => {
    // Lấy danh sách sản phẩm từ localStorage khi Drawer được mở
    if (isCompared) {
      const storedCompareList = JSON.parse(localStorage.getItem("compareList")) || [];
      setCompareList(storedCompareList.slice(0, 3)); // Giới hạn 3 sản phẩm
    }
  }, [isCompared]);

  const handleOpenCompare = () => {
    let storedCompareList = JSON.parse(localStorage.getItem("compareList")) || [];

    if (storedCompareList.find(product => product.id === item.ProductId)) {
      alert("Sản phẩm này đã có trong danh sách so sánh!");
      return;
    }

    if (storedCompareList.length >= 3) {
      alert("Chỉ có thể so sánh tối đa 3 sản phẩm.");
      return;
    }

    storedCompareList.push({
      id: item.ProductId,
      name: item.ProductName,
      price: item.Price,
      priceOld: item.PriceOld,
      image: item.Image,
    });

    localStorage.setItem("compareList", JSON.stringify(storedCompareList));
    setIsCompared(true);
  };

  const handleCloseCompare = () => {
    setIsCompared(false);
  };

  const handleAddToCart = () => {
    addToCart({
      id: item.ProductId,
      name: item.ProductName,
      price: item.Price,
      images: item.Image,
      quantity: quantity,
      originalPrice: item.PriceOld,
    });
    setSmShow(true);
  };

  const sale = Math.round(((item.PriceOld - item.Price) / item.PriceOld) * 100);

  return (
    <div className="my-4 rounded box-product mx-1" key={item.ProductId} style={{ display: "inline-block", position: "relative", width: "98%" }}>
      <Card className="prdItem border-0 shadow4">
        <a href={`/product/${item.UrlProduct}`}>
          <Card.Img variant="top" src={`${imageBaseUrl}${item.Image}`} className="p-4 img" />
        </a>
        {sale > 0 && <Card.Text className="sale">-{sale} %</Card.Text>}
        <Card.Body>
          <div className="prdName">{item.ProductName}</div>
          <div className="price">{item.Price ? `${item.Price.toLocaleString("vi-VN")} đ` : "N/A"}</div>
          {sale > 0 ? (
            <div className="original-price tgray fw-bold">
              {item.PriceOld ? `${item.PriceOld.toLocaleString("vi-VN")} đ` : "N/A"}
            </div>
          ) : (
            <div style={{ margin: 20 }}></div>
          )}

          <div className="hover-buttons">
            <Button variant="secondary" onClick={handleAddToCart}>
              <i className="bi bi-cart-plus" />
            </Button>

            <Modal size="xl" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
              <Modal.Header className="custom-modal-header" style={{ backgroundColor: "#0d6efd", color: "white" }}>
                <Modal.Title id="example-modal-sizes-title-sm">
                  <i className="bi bi-check-circle me-2" />
                  Đã thêm{" "}
                  <a href={`/product/${item.UrlProduct}`} style={{ fontSize: 20, color: "white", fontWeight: "400" }}>
                    [{item.ProductName}]
                  </a>{" "}
                  vào giỏ hàng
                  <i className="bi bi-x-lg" style={{ position: "absolute", right: 20, cursor: "pointer" }} onClick={() => setSmShow(false)} />
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BoxCart isInModal={true} />
              </Modal.Body>
            </Modal>

            <Button variant="secondary" onClick={() => setQuickView(true)}>
              <i className="bi bi-eye" />
            </Button>
            <Modal size="xl" className="" dialogClassName="modal-product-viewed" show={quickView}>
              <Modal.Body className="box-product-viewed">
                <ProductViewed item={item} quantityView={quantityView} setQuantityView={setQuantityView} setQuickView={setQuickView} />
              </Modal.Body>
            </Modal>

            <Button variant="secondary" onClick={handleOpenCompare}>
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
                <img src={`${imageBaseUrl}${product.image}`} alt={product.name} />
              </a>
              <div className="product-info">
                <a className="product-name">{product.name}</a>
                <div className="price-box">
                  <span className="price">{product.price ? `${product.price.toLocaleString("vi-VN")} đ` : ""}</span>
                  <span className="compare-price">{product.priceOld ? `${product.priceOld.toLocaleString("vi-VN")} đ` : ""}</span>
                </div>
                <div className="remove-compare-item" >
                  Xoá
                </div>
              </div>
            </div>
          ))}
          <div className="compare-navigate-but">
            <a href="/compare-product">Đi đến trang so sánh sản phẩm</a>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default BoxProduct;
