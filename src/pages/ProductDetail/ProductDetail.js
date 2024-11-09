import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Detail.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import { Collapse, Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

import Accordion from "react-bootstrap/Accordion";
import { auto } from "@popperjs/core";
import LightboxButton from "../../components/LightboxButton";
import ModelDetail from "../../components/ModelDetail";
import BoxProduct from "../../components/componentProduct/BoxProduct";
import { CartContext } from "../Cart/CartContext";
import FeaturedNews from "../../components/FeaturedNews";
import BoxCart from "../../components/componentProduct/BoxCart";
import HomeApi from "../../api/homeApi";
import { imageBaseUrl } from "../../api/axiosConfig";

const ProductDetail = ({ children, eventKey, item }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { urlProduct } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await fetch(
          `http://192.168.245.190:8002/api/member/product-detail/${urlProduct}`
        );
        const data = await response.json();
        if (data.status === true && data.productDetail) {
          setProduct(data.productDetail);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProductDetail();
  }, [urlProduct]);

  // Lấy hàm addToCart từ context
  const { addToCart } = useContext(CartContext);

  //model
  const [modalShow, setModalShow] = useState(false);

  // State để lưu số lượng sản phẩm
  const [quantity, setQuantity] = useState(1);

  // Hàm để tăng số lượng
  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm để giảm số lượng (không giảm dưới 1)
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const [smShow, setSmShow] = useState(false);
  //modal thông báo chưa đăng nhập
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleAddToCart = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setShow(true)
      setTimeout(() => {
        navigate("/login");
      }, 2000);
      return;
    }
    addToCart({
      product_id: product.ProductId,
      picture: product.Image,
      cat_name: product.Category,
      title: product.ProductName,
      quality: quantity,
      price: product.Price,
    });

    setSmShow(true);
  };

  if (!product) {
    return <h1 className="m-5">Sản phẩm</h1>;
  }

  return (
    <div style={{ backgroundColor: "#f4f4f4" }} className="py-4">
      <div className="container">
        <div className="row p-4 pb-5" style={{ backgroundColor: "white" }}>
          <div
            className="col-md-7 d-flex flex-column align-items-center"
            style={{ position: "relative" }}
          >
            <img
              className="img imgdetail fade-in"
              src={`${imageBaseUrl}${product.Image}`}
              alt={product.name}
            />
            <div className="d-flex justify-content-between mt-3">
              {product && product.Image && (
                <img
                  src={`${imageBaseUrl}${product.Image}`}
                  alt="Thumbnail 1"
                  className="thumbnail-image"
                />
              )}
            </div>
            <LightboxButton productId={product.ProductId} />
          </div>
          <div className="col-md-5">
            <h4 className="fw-bold">{product.ProductName}</h4>
            <h6>Danh mục: {product.Category}</h6>
            <div className="d-flex align-items-center">
              <p className="pricedetail me-3">
                {product.Price
                  ? `${product.Price.toLocaleString("vi-VN")} đ`
                  : "N/A"}
              </p>

              <p className="original-priceDetail">
                {product.PriceOld != null ? (
                  <>
                    {product.PriceOld
                      ? `${product.PriceOld.toLocaleString("vi-VN")} đ`
                      : "N/A"}
                  </>
                ) : (
                  <br />
                )}
              </p>
            </div>
            <p className="VAT">Giá đã bao gồm 10% VAT</p>

            <div className="d-flex mt-1 align-items-center">
              <Col xs="auto" className="me-4">
                Số lượng:
              </Col>
              <Col xs="auto">
                <div className="border p-1 d-flex align-items-center">
                  <button
                    className="btn btn-link p-0"
                    onClick={decreaseQuantity}
                    style={{
                      width: 30,
                      backgroundColor: "white",
                      textDecoration: "none",
                    }}
                  >
                    <b className="operationDetail">-</b>
                  </button>
                  <span className="quantity-display px-3">{quantity}</span>
                  <button
                    className="btn btn-link p-0"
                    onClick={increaseQuantity}
                    style={{
                      width: 30,
                      backgroundColor: "white",
                      textDecoration: "none",
                    }}
                  >
                    <b className="operationDetail">+</b>
                  </button>
                </div>
              </Col>
            </div>

            {/* Nút mua hàng */}
            <Button variant="danger" className="my-3 p-2 buy">
              MUA NGAY <br />
              Giao hàng tận nơi hoặc nhận tại cửa hàng
            </Button>
            <div className="d-flex justify-content-between">
              <Button
                variant="primary"
                className="adddetail"
                onClick={handleAddToCart}
              >
                THÊM VÀO GIỎ HÀNG
              </Button>

              {/* modal thêm thất bại*/}
              <Modal show={show} onHide={handleClose} animation={false} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Thông báo</Modal.Title>
                </Modal.Header>
                <Modal.Body>Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng!</Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleClose}>
                    Ok
                  </Button>
                </Modal.Footer>
              </Modal>

              {/* modal thêm thành công*/}
              <Modal
                size="xl"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
              >
                <Modal.Header
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  <Modal.Title id="example-modal-sizes-title-sm">
                    <i className="bi bi-check-circle me-2" />
                    Đã thêm{" "}
                    <a
                      href={`/product/${product.id}`}
                      style={{ fontSize: 24, color: "white" }}
                    >
                      [{product.ProductName}]
                    </a>{" "}
                    vào giỏ hàng
                    <i className="bi bi-x-lg" style={{ position: "absolute", right: 20, cursor: "pointer" }} onClick={() => setSmShow(false)} />
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <BoxCart isInModal={true} />
                </Modal.Body>
              </Modal>

              <Button variant="primary" className="adddetail">
                TRẢ GÓP <br />
                <p style={{ fontSize: 12 }}>(Mua trả góp lãi suất thấp)</p>
              </Button>
            </div>
            <Card className="mt-3">
              <Card.Header as="h5" className="danger">
                <i className="bi bi-gift-fill me-2"></i>
                KHUYẾN MÃI
              </Card.Header>
              <Card.Body>
                <li className="f14">Nhập mã LOFI thêm 5% đơn hàng</li>
                <li className="f14">Giảm giá 10% khi mua từ sản phẩm thứ 2</li>
                <li className="f14">Tặng phiếu mua hàng khi mua từ 1000k</li>
                <li className="f14">Đổi trả hàng trong vòng 30 ngày</li>
              </Card.Body>
            </Card>
          </div>
        </div>

        <Row className="justify-content-between">
          <Col
            md={7}
            className="mt-4 p-4"
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <h5 className="tblack fw-bold">Thông tin chi tiết sản phẩm</h5>
            <hr />
            <div className="d-flex flex-column align-items-center">
              <h5>{product.ProductName}</h5>
              <img
                className="img mb-4"
                src={`${imageBaseUrl}${product.Image}`}
                alt={product.ProductName}
                style={{ width: "45%", height: "auto" }}
              />

              {/* Nội dung Collapse */}
              <Collapse in={open}>
                <div
                  id="product-collapse"
                  className="w-100 mt-3 product-description"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: product.productDescription,
                    }}
                  ></div>
                </div>
              </Collapse>

              {/* Nút để mở/đóng Collapse */}
              <Button
                variant="outline-dark"
                onClick={() => setOpen(!open)}
                aria-controls="product-collapse"
                aria-expanded={open}
                className="close"
              >
                {open ? "Thu gọn" : "Xem thêm"}
              </Button>
            </div>
          </Col>
          <Col md={5} xs={12} className="mt-4" style={{ marginRight: -12 }}>
            <Col
              className="p-4"
              style={{ height: "auto", backgroundColor: "white" }}
            >
              <h5 className="tblack fw-bold">Thông số kỹ thuật</h5>
              <hr />
              <Table striped bordered hover>
                <tbody>
                  <tr>
                    <td>Focal Length</td>
                    <td>Mark</td>
                  </tr>
                  <tr>
                    <td>Maximum Aperture</td>
                    <td> f/1.8</td>
                  </tr>
                  <tr>
                    <td>Lens Mount</td>
                    <td>Canon RF</td>
                  </tr>
                  <tr>
                    <td>Lens Format Coverage</td>
                    <td>Full-Frame</td>
                  </tr>
                  <tr>
                    <td>Angle of View</td>
                    <td>84°</td>
                  </tr>
                  <tr>
                    <td>Minimum Focus Distance</td>
                    <td>5.5" / 14 cm</td>
                  </tr>
                </tbody>
              </Table>
              <Button
                variant="outline-primary"
                style={{ width: "100%" }}
                onClick={() => setModalShow(true)}
              >
                Xem cấu hình chi tiết
              </Button>

              <ModelDetail
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>

            <Col style={{ height: "auto", backgroundColor: "white" }}>
              <FeaturedNews />
            </Col>
          </Col>
        </Row>

        {/* <h3 className="my-4">SẢN PHẨM CÙNG LOẠI</h3>

        <div className="d-flex justify-content-center mx-2">
          {topItems.map((item) => (
            <BoxProduct key={item.id} item={item} />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ProductDetail;
