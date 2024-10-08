import React, { useState } from "react";
import { newItems, newsItems, cameraItem, lendItem } from "../Data";
import { useParams } from "react-router-dom";
import "./Detail.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import Accordion from "react-bootstrap/Accordion";
import { auto } from "@popperjs/core";
import LightboxButton from "../../components/LightboxButton";
import ModelDetail from "../../components/ModelDetail";

const ProductDetail = ({ children, eventKey }) => {
  const { id } = useParams();
  const product = lendItem.find((item) => item.id === parseInt(id));

  //model
  const [modalShow, setModalShow] = useState(false);

  //lấy 5 sản phẩm đầu tương tự
  const topItems = lendItem.slice(0, 5);

  // lưu hình ảnh đầu tiên
  const [mainImage, setMainImage] = useState(product.images[0]);

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

  if (!product) {
    return <h1 className="m-5">Sản phẩm</h1>; // Hoặc thông báo lỗi khác
  }

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="p-5">
        <div className="row p-4 pb-5" style={{ backgroundColor: "white" }}>
          <div
            className="col-md-7 d-flex flex-column align-items-center"
            style={{ position: "relative" }}
          >
            <img
              className="img imgdetail fade-in"
              src={mainImage}
              alt={product.name}
            />

            <div className="d-flex justify-content-between mt-3">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  onClick={() => setMainImage(img)} // Cập nhật ảnh lớn khi nhấn vào
                  style={{
                    border:
                      mainImage === img ? "1px solid #007bff" : "1px #ddd",
                  }}
                  className="thumbnail-image"
                />
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", width: "15%" }}>
            <LightboxButton productId={product.id} />
          </div>

          <div className="col-md-5">
            <h3>{product.name}</h3>
            <h6>Thương hiệu Canon</h6>
            <div className="d-flex align-items-center">
              <p className="pricedetail me-3">
                {" "}
                {product.price.toLocaleString("vi-VN")} VND
              </p>

              <p className="original-priceDetail">
                {product.discountPercentage > 0 ? (
                  <>
                    {product.originalPrice.toLocaleString("vi-VN")} VND <br />
                  </>
                ) : (
                  <br />
                )}
              </p>
            </div>
            <p className="VAT">Giá đã bao gồm 10% VAT</p>
            <Row className="quantity-controls mt-1 ms-1 align-items-center">
              Số lượng:
              <div className="ms-3 align-items-center detailQuantity">
                <button
                  className="btn"
                  onClick={decreaseQuantity}
                  style={{ border: "none" }}
                >
                  <b className="operationDetail">-</b>
                </button>
                <span className="quantity-display mx-2">{quantity}</span>
                <button
                  className="btn"
                  onClick={increaseQuantity}
                  style={{ border: "none" }}
                >
                  <b className="operationDetail">+</b>
                </button>
              </div>
            </Row>

            {/* Nút mua hàng */}
            <Button variant="danger" className="my-3 p-2 buy">
              MUA NGAY <br />
              Giao hàng tận nơi hoặc nhận tại cửa hàng
            </Button>
            <div className="d-flex justify-content-between">
              <Button variant="primary" className="adddetail">
                THÊM VÀO GIỎ HÀNG
              </Button>
              <Button variant="primary" className="adddetail">
                Trả góp <br />
                (Mua trả góp lãi suất thấp)
              </Button>
            </div>
            <Card className="mt-3">
              <Card.Header as="h5" className="danger">
                <i className="bi bi-gift-fill me-2"></i>
                KHUYẾN MÃI
              </Card.Header>
              <Card.Body>
                <li>Nhập mã LOFI thêm 5% đơn hàng</li>
                <li>Giảm giá 10% khi mua từ sản phẩm thứ 2</li>
                <li>Tặng phiếu mua hàng khi mua từ 1000k</li>
                <li>Đổi trả hàng trong vòng 30 ngày</li>
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
            <h5>Thông tin chi tiết sản phẩm</h5>
            <hr />
            <div className="d-flex flex-column align-items-center">
              <p>{product.description}</p>
              <img
                className="img"
                src={product.images[1]}
                alt={product.name}
                style={{ width: "45%", height: "auto" }}
              />

              <Accordion className="d-flex flex-column align-items-center shadow3 mt-5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>
                    {" "}
                    <b>Xem thêm</b>
                  </Accordion.Header>
                  <Accordion.Body style={{ width: "100%" }}>
                    <h2>
                      Cảm biến FullFrame BSI CMOS 45.7MP và Bộ xử lý EXPEED 5
                    </h2>
                    <p>{product.description}</p>

                    <div className="d-flex justify-content-center">
                      <img
                        className="img imgdetail2"
                        src={product.images[2]}
                        alt={product.name}
                      />
                    </div>

                    <p>{product.description}</p>

                    <h3>Hệ thống Multi-CAM 20K 153 điểm lấy nét</h3>

                    <p>{product.description}</p>

                    <div className="d-flex justify-content-center">
                      <img
                        className="img imgdetail2"
                        src={product.images[2]}
                        alt={product.name}
                      />
                    </div>

                    <p>{product.description}</p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>

          <Col md={5} xs={12} className="mt-4" style={{ marginRight: -12 }}>
            <Col
              className="p-4"
              style={{ height: "auto", backgroundColor: "white" }}
            >
              <h5>Thông số kỹ thuật</h5>
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

            <Col
              className="p-3 mt-4"
              style={{ height: "auto", backgroundColor: "white" }}
            >
              <h5>Tin nổi bật</h5>
              <hr />
              <div className="d-flex flex-wrap">
                {newsItems.map((item) => (
                  <Card
                    key={item.id}
                    className="m-1 d-flex flex-column flex-md-row" // Flex theo cột khi màn hình nhỏ, theo hàng khi màn hình lớn
                  style={{border:"none"}}
                  >
                    <Card.Img
                      variant="top"
                      src={item.image}
                      className="p-2"
                      style={{
                        width: "25%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                    <div className="d-flex flex-column justify-content-center mx-2">
                      <Card.Title className="mb-0">{item.title}</Card.Title>
                      <a href={`/product`} className="card-title">
                        <h6 className="mb-0">Xem thêm</h6>
                      </a>
                    </div>
                  </Card>
                ))}
              </div>
            </Col>
          </Col>
        </Row>

        <h3 className="my-4">SẢN PHẨM CÙNG LOẠI</h3>

        <div className="row">
          {topItems.map((item) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg mb-4" key={item.id}>
              <Card
                className="border rounded shadow4"
                style={{ width: "100%" }}
              >
                <Card.Img
                  variant="top"
                  src={item.images}
                  className="p-4 img"
                  style={{ objectFit: "cover", height: "auto" }}
                />

                {item.discountPercentage > 0 && (
                  <Card.Text className="sale">
                    -{item.discountPercentage}%
                  </Card.Text>
                )}

                <Card.Body>
                  <a
                    href={`/product/${item.id}`}
                    className="card-title"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Card.Title
                      style={{
                        whiteSpace: "normal",
                        wordWrap: "break-word",
                        height: 55,
                        fontSize: 17,
                      }}
                    >
                      {item.name}
                    </Card.Title>
                  </a>

                  <Card.Text className="price">
                    {item.price.toLocaleString("vi-VN")} VND
                  </Card.Text>
                  <Card.Text className="original-price">
                    {item.discountPercentage > 0 ? (
                      <>
                        {item.originalPrice.toLocaleString("vi-VN")} VND <br />
                      </>
                    ) : (
                      <br />
                    )}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;