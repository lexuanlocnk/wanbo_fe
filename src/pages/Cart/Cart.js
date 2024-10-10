import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Collapse, Form, FormCheck } from "react-bootstrap";
import BoxCart from "../../components/componentProduct/BoxCart";
import "../../pages/Cart/Cart.css";

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart } = useContext(CartContext);
  const [selectedItems, setSelectedItems] = useState([]); // Lưu trữ các mục được chọn
  const [selectAll, setSelectAll] = useState(false);

  const [deliveryDate, setDeliveryDate] = useState(""); // Ngày giao hàng
  const [isCompanyInvoice, setIsCompanyInvoice] = useState(false); // Trạng thái checkbox "Xuất hóa đơn công ty"
  const [companyInfo, setCompanyInfo] = useState({
    name: "",
    taxCode: "",
    address: "",
    email: "",
  });

  // Hàm để tăng số lượng
  const increaseQuantity = (id) => {
    updateQuantity(id, 1);
  };

  // Hàm để giảm số lượng
  const decreaseQuantity = (id, quantity) => {
    if (quantity > 1) {
      updateQuantity(id, -1);
    } else {
      removeFromCart(id);
    }
  };

  // Hàm để xử lý chọn/deselect các mục
  const handleSelectItem = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  // Hàm để xử lý "Chọn tất cả"
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedItems([]); // Bỏ chọn tất cả
    } else {
      setSelectedItems(cartItems.map((item) => item.id)); // Chọn tất cả các mục
    }
    setSelectAll(!selectAll); // Cập nhật trạng thái "Chọn tất cả"
  };

  // Hàm để xóa các mục đã chọn
  const handleRemoveSelectedItems = () => {
    selectedItems.forEach((id) => removeFromCart(id));
    setSelectedItems([]); // Reset danh sách đã chọn sau khi xóa
  };

  // Tính tổng tiền của giỏ hàng
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Hàm xử lý khi checkbox "Xuất hóa đơn công ty" được chọn
  const handleCompanyInvoiceChange = () => {
    setIsCompanyInvoice(!isCompanyInvoice);
  };

  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container">
        <h3 className="mb-4">GIỎ HÀNG</h3>
        {cartItems.length === 0 ? (
          <p>Giỏ hàng của bạn trống.</p>
        ) : (
          <div>
            <div>
              <Row style={{ backgroundColor: "white" }}>
                <Col md={8} className="p-4 ">
                  {/* list cart */}

                  <BoxCart />
                </Col>

                {/* Phần thời gian giao hàng */}
                <Col md={4} className="my-5">
                  <h5 variant="success" style={{ width: "100%" }}>
                    Thời gian giao hàng
                  </h5>
                  <hr />
                  <div className="mt-3">
                    <div className="d-flex">
                      <input
                        type="date"
                        value={deliveryDate}
                        onChange={(e) => setDeliveryDate(e.target.value)}
                        className="form-control"
                      />
                      <Form.Select aria-label="Chọn thời gian" className="ms-3">
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
