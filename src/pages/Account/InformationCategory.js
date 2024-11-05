import React from "react";
import { Nav } from "react-bootstrap";

const InformationCategory = ({ onSelect }) => {
    return (
        <div className="px-3 py-1" style={{ height: "auto", backgroundColor: "white", fontSize: 15 }}>
            <h5 className="my-3">TRANG TÀI KHOẢN</h5>

            <Nav.Link className="my-3" onClick={() => onSelect("info")}>
                Thông tin tài khoản
            </Nav.Link>
            <Nav.Link className="my-3" onClick={() => onSelect("orders")}>
                Đơn hàng của bạn
            </Nav.Link>
            <Nav.Link className="my-3" onClick={() => onSelect("changePassword")}>
                Đổi mật khẩu
            </Nav.Link>
            <Nav.Link className="my-3" onClick={() => onSelect("addressBook")}>
                Địa chỉ của bạn
            </Nav.Link>
        </div>
    );
};

export default InformationCategory;
