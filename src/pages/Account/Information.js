import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InformationCategory from "./InformationCategory";
import axios from "axios";
import AccountInfo from "./ComponentsInfo/AccountInfo";
import Orders from "./ComponentsInfo/Orders";
import ChangePassword from "./ComponentsInfo/ChangePassword";
import AddressBook from "./ComponentsInfo/AddressBook";
import OrderDetail from "./ComponentsInfo/OrderDetail";

const Information = () => {
    const [selectedComponent, setSelectedComponent] = useState("info");
    const [userData, setUserData] = useState({ email: "", username: "", phone: "" });
    const [error, setError] = useState("");

    // Lấy thông tin user
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get("http://192.168.245.190:8002/api/member/information-member", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
                .then(response => {
                    setUserData({
                        email: response.data.member.email,
                        username: response.data.member.full_name,
                        phone: response.data.member.phone,
                    });
                })
                .catch(() => setError("Không thể tải thông tin tài khoản"));
        } else {
            setError("Không tìm thấy tài khoản");
        }
    }, []);

    const handleSelect = (component) => {
        setSelectedComponent(component);
    };

    const renderContent = () => {
        switch (selectedComponent) {
            case "info":
                return <AccountInfo userData={userData} setUserData={setUserData} />;
            case "orders":
                return <Orders />;
            case "orderDetail":
                return <OrderDetail />;
            case "changePassword":
                return <ChangePassword />;
            case "addressBook":
                return <AddressBook />;
            default:
                return <AccountInfo userData={userData} setUserData={setUserData} />;
        }
    };

    return (
        <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
            <div className="container">
                <Row className="justify-content-between">
                    <Col lg={3} xs={12} className="mt-3">
                        <InformationCategory onSelect={handleSelect} />
                    </Col>
                    <Col lg={9} className="mt-3" style={{ backgroundColor: "white" }}>
                        <div className="flex-wrap m-3">
                            {renderContent()}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Information;
