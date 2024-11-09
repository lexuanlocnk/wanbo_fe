import React, { useState } from "react";
import {
  Button,
  Form,
  Container,
  Row,
  Col,
  Alert,
  Collapse,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountName, setaccountName] = useState("");
  const [numberPhone, setnumberPhone] = useState("");
  const [fullName, setfullName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postRegister({
        email,
        password,
        accountName,
        numberPhone,
        fullName
      });

      if (response.data.status === false) {
        if (response.data.message === "existUserName") {
          setError("Tên tài khoản đã tồn tại. Vui lòng chọn tên khác.");
        }
        else if (response.data.message === "existEmail") {
          setError("Email đã tồn tại. Vui lòng chọn email khác.");
        }
        else {
          setError(response.data.message || "Có lỗi xảy ra.");
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    }
  }

  return (
    <div className="login-container p-5">
      <Container className="p-4 login-box">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={8} xl={5}>
            <h2 className="text-center" style={{ fontWeight: 400 }}>
              ĐĂNG KÝ
            </h2>
            <p className="text-center mb-4" style={{ fontSize: 14 }}>
              Đã có tài khoản,{" "}
              <a href={`/login`} style={{ color: "blue" }}>
                đăng nhập tại đây
              </a>
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="text-center">

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Họ và tên"
                  value={fullName}
                  onChange={(e) => setfullName(e.target.value)}
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên đăng nhập"
                  value={accountName}
                  onChange={(e) => setaccountName(e.target.value)}
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="number"
                  placeholder="Số điện thoại"
                  value={numberPhone}
                  onChange={(e) => setnumberPhone(e.target.value)}
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Control
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 p-2">
                Đăng ký
              </Button>

              <p className="mt-4">Hoặc đăng nhập bằng</p>

              <div className="d-flex justify-content-center">
                <Button
                  variant="primary"
                  className="me-2"
                  style={{ width: 140 }}
                >
                  <i className="bi bi-facebook me-2" />
                  Facebook
                </Button>

                <Button
                  variant="danger"
                  className="ms-2"
                  style={{ width: 140 }}
                >
                  <i className="bi bi-google me-2" />
                  Google
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
