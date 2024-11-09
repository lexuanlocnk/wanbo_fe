import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import AccountApi from "../../api/AccountApi";
import PasswordResetModal from "./PasswordResetModal";

const Login = () => {
  const [emailNew, setEmailNew] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);
  const [show, setShow] = useState(false);

  const [passwordToken, setPasswordToken] = useState("");
  const [passwordNew, setPasswordNew] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postLogin({
        email,
        password,
      });

      if (response.data.status === false) {
        setError(response.data.message || "Email hoặc mật khẩu không chính xác.");
      } else {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      setError("Email hoặc mật khẩu không chính xác.");
    }
  };

  const handleClose = () => setShow(false);

  const handleShow = async (e) => {
    e.preventDefault();
    if (emailNew.trim() === "") {
      setError("Vui lòng nhập email.");
      return;
    }
    setLoad(true);
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postforgetPassword({ email: emailNew });
      if (response.data.status === false) {
        setError(response.data.mess === "Email no exist" ? "Email không chính xác" : response.data.mess);
      } else {
        setShow(true);
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoad(false);
      setOpen(false)
    }
  };

  const handlePasswordChange = async () => {
    if (passwordNew !== confirmPassword) {
      setError("Mật khẩu xác nhận không khớp.");
      return;
    }
    setLoad(true);
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postforgetPasswordChange({
        password_token: passwordToken,
        password_new: passwordNew,
      });
      if (response.data.status === false) {
        setError(response.data.mess);
      } else {
        navigate("/login");
        setShow(false);
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.");
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className="login-container p-5">
      <Container className="p-4 login-box">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={8} xl={5}>
            <h2 className="text-center" style={{ fontWeight: 400 }}>ĐĂNG NHẬP</h2>
            <p className="text-center mb-4" style={{ fontSize: 14 }}>
              Nếu bạn chưa có tài khoản,{" "}
              <a href={`/register`} style={{ color: "blue" }}>đăng ký tại đây</a>
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group controlId="formBasicEmail" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ padding: 12, backgroundColor: "#f4f4f4" }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mb-3">
              <Form.Control
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: 12, backgroundColor: "#f4f4f4" }}
              />
            </Form.Group>

            <Button variant="primary" className="w-100 p-2" onClick={handleSubmit}>Đăng Nhập</Button>

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
                  <Form.Group controlId="formBasicEmail" className="my-3">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      value={emailNew}
                      onChange={(e) => setEmailNew(e.target.value)}
                      style={{ padding: 12, backgroundColor: "#f4f4f4" }}
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    className="w-100 p-2"
                    onClick={handleShow}
                    disabled={!emailNew.trim() || load}
                  >
                    {load ? "Đang gửi mã code..." : "Lấy lại mật khẩu"}
                  </Button>
                </div>
              </Collapse>
            </p>

            {/* Password Reset Modal */}
            <PasswordResetModal
              show={show}
              handleClose={handleClose}
              passwordToken={passwordToken}
              setPasswordToken={setPasswordToken}
              passwordNew={passwordNew}
              setPasswordNew={setPasswordNew}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              handlePasswordChange={handlePasswordChange}
              load={load}
            />

            <p className="text-center">Hoặc đăng nhập bằng</p>

            <div className="d-flex justify-content-center">
              <Button variant="primary" className="me-2" style={{ width: 140 }}>
                <i className="bi bi-facebook me-2" /> Facebook
              </Button>
              <Button variant="danger" className="ms-2" style={{ width: 140 }}>
                <i className="bi bi-google me-2" /> Google
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
