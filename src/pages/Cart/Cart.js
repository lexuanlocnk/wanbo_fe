import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Collapse, Form, FormCheck } from "react-bootstrap";
import BoxCart from "../../components/componentProduct/BoxCart";
import "../../pages/Cart/Cart.css";
import DatePicker from "react-datepicker"; // Import DatePicker từ react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import style cho DatePicker

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]); // Lưu trữ các mục được chọn
  const [selectAll, setSelectAll] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState(); // Ngày giao hàng
  const [isCompanyInvoice, setIsCompanyInvoice] = useState(false); // Trạng thái checkbox "Xuất hóa đơn công ty"
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    taxCode: "",
    address: "",
    email: "",
  });

  // Hàm xử lý khi checkbox "Xuất hóa đơn công ty" được chọn
  const handleCompanyInvoiceChange = () => {
    setIsCompanyInvoice(!isCompanyInvoice);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container">
        <h3 className="mb-4">GIỎ HÀNG</h3>
        {cartItems.length === 0 ? (
          <h5 className="m-5">Giỏ hàng của bạn trống.</h5>
        ) : (
          <div>
            <div>
              <Row style={{ backgroundColor: "white", justifyContent: "space-evenly" }}>
                <Col lg={9} xs={12} className="p-4 ">
                  {/* list cart */}
                  <BoxCart />
                </Col>

                {/* Phần thời gian giao hàng */}
                <Col lg={3} xs={12} className="my-5">
                  <div style={{ backgroundColor: "#F5F5F5" }} className="p-2">
                    <h5 variant="success" style={{ width: "100%" }}>
                      Thời gian giao hàng
                    </h5>
                    <div className="mt-3">
                      <div className="d-flex">
                        {/* Sử dụng DatePicker để chọn ngày */}
                        <DatePicker
                          selected={deliveryDate}
                          onChange={(date) => setDeliveryDate(date)}
                          className="form-control "
                          dateFormat="dd/MM/yyyy"
                          minDate={new Date()} // Không cho phép chọn ngày trước hôm nay
                          placeholderText="Chọn ngày"
                          style={{ fontSize: 14 }}
                        />
                        <Form.Select aria-label="Chọn thời gian" className="ms-1" style={{ fontSize: 14.5 }}>
                          <option>Chọn thời gian</option>
                          <option value="1">08h00 - 12h00</option>
                          <option value="2">14h00 - 18h00</option>
                          <option value="3">19h00 - 21h00</option>
                        </Form.Select>
                      </div>
                    </div>

                    <div className="mt-2">
                      <FormCheck
                        label="Xuất hóa đơn công ty"
                        checked={isCompanyInvoice}
                        onChange={handleCompanyInvoiceChange}
                      />
                    </div>

                    {/* Sử dụng Collapse để thêm hiệu ứng xổ xuống */}
                    <Collapse in={isCompanyInvoice}>
                      <div>
                        <div className="mt-3">
                          <input
                            type="text"
                            placeholder="Tên công ty"
                            value={companyInfo.name}
                            onChange={(e) =>
                              setCompanyInfo({
                                ...companyInfo,
                                name: e.target.value,
                              })
                            }
                            className="form-control mt-3"
                          />
                          <input
                            type="text"
                            placeholder="Mã số thuế"
                            value={companyInfo.taxCode}
                            onChange={(e) =>
                              setCompanyInfo({
                                ...companyInfo,
                                taxCode: e.target.value,
                              })
                            }
                            className="form-control mt-3"
                          />
                          <textarea
                            type="text"
                            placeholder="Địa chỉ công ty (bao gồm Phường/Xã, Quận/Huyện, Tỉnh/Thành phố nếu có)"
                            value={companyInfo.address}
                            onChange={(e) =>
                              setCompanyInfo({
                                ...companyInfo,
                                address: e.target.value,
                              })
                            }
                            className="form-control mt-3"
                          />
                          <input
                            type="email"
                            placeholder="Email nhận hoá đơn"
                            value={companyInfo.email}
                            onChange={(e) =>
                              setCompanyInfo({
                                ...companyInfo,
                                email: e.target.value,
                              })
                            }
                            className="form-control mt-3"
                          />
                        </div>
                      </div>
                    </Collapse>
                  </div>
                </Col>
              </Row>

            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
