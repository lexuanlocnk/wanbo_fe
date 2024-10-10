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

const Login = () => {
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
    <div style={{ backgroundColor: "#f4f4f4" }} className="p-5">
      <Container className="p-4" style={{ backgroundColor: "#ffffff" }}>
        <Row className="justify-content-md-center">
          <Col md={4}>
            <h2 className="text-center" style={{ fontWeight: 400 }}>
              ĐĂNG NHẬP
            </h2>
            <p className="text-center mb-4" style={{ fontSize: 14 }}>
              Nếu bạn chưa có tài khoản,{" "}
              <a href={`/register`} style={{ color: "blue" }}>
                đăng ký tại đây
              </a>
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleSubmit} className="text-center">
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  //   className="p-2"
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

              <p className="text-center pt-3" style={{ fontSize: 14 }}>
                <a
                  onClick={() => setOpen(!open)}
                  aria-controls="example-collapse-text"
                  aria-expanded={open}
                  style={{ color: "black", cursor: "pointer" }}
                >
                  Quên mật khẩu
                </a>

                <Collapse in={open}>
                  <div id="example-collapse-text">
                    <Form.Group controlId="formBasicEmail" className="my-4">
                      <Form.Control
                        type="email"
                        placeholder="Email"
                        required
                        className="p-2"
                        style={{ backgroundColor: "#f4f4f4", width: "100%" }}
                      />
                    </Form.Group>

                    <Button variant="primary" className="w-100 p-2">
                       lấy lại mật khẩu
                    </Button>
                  </div>
                </Collapse>
              </p>

              <p>Hoặc đăng nhập bằng</p>

              <Button variant="primary" className="me-3" style={{width: 140}}>
                <i className="bi bi-facebook me-3" />
                Facebook
              </Button>

              <Button variant="danger" className="ms-3" style={{width: 140}}> 
                <i className="bi bi-google me-3" />
                Google
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
