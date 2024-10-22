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

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Giả sử có điều kiện kiểm tra email và mật khẩu đúng (giả lập)
    if (email === "admin@example.com" && password === "password123") {
      // Điều hướng sang trang chủ sau khi đăng nhập thành công
      navigate("/home");
    } else {
      setError("Email hoặc mật khẩu không chính xác.");
    }
  };

  return (
    <div className="login-container p-5">
      <Container className="p-4 login-box">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={8} xl={4}>
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
                  placeholder="Họ"
                  required
                  style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="text"
                  placeholder="Tên"
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
                Đăng Nhập
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
