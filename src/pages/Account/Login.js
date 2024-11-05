import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Alert, Collapse } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import AccountApi from "../../api/AccountApi";
import Modal from 'react-bootstrap/Modal';

const Login = () => {
  const [emailNew, setEmailNew] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [load, setLoad] = useState(false);

  const [passwordToken, setPasswordToken] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postLogin({
        email,
        password,
      });

      if (response.data.status === false) {
        if (response.data.message === "existUserName") {
          setError("Tên tài khoản đã tồn tại. Vui lòng chọn tên khác.");
        }
        else {
          setError(response.data.message || "Email hoặc mật khẩu không chính xác.");
        }
      } else {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      setError("Email hoặc mật khẩu không chính xác.");
    }
  };

  //boostrap modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);


  const handleShow = async (e) => {
    e.preventDefault();
    if (emailNew.trim() === "") {
      // alert("Vui lòng nhập email.");
      return;
    }
    setLoad(true)
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postforgetPassword({
        email: emailNew
      });

      if (response.data.status === false) {
        if (response.data.mess === "Email no exist") {
          setError("Email không chính xác");
        }
        else {
          setError(response.data.mess);
        }
      } else {
        setShow(true)
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.", error);
    } finally {
      setLoad(false)
    }
  };


  const handleShow2 = async (e) => {
    e.preventDefault();
    const accountApi = new AccountApi();
    try {
      const response = await accountApi.postforgetPasswordChange({
        password_token: passwordToken,
        password_new: passwordNew
      });

      if (response.data.status === false) {
        if (response.data.mess === "Email no exist") {
          setError("lỗi");
        }
        else {
          setError(response.data.mess);
        }
      } else {
        navigate("/login")
      }
    } catch (error) {
      setError("Có lỗi xảy ra. Vui lòng thử lại.", error);
    }
  };

  return (
    <div className="login-container p-5">
      <Container className="p-4 login-box">
        <Row className="justify-content-center">
          <Col sm={12} md={10} lg={8} xl={4}>
            <h2 className="text-center" style={{ fontWeight: 400 }}>ĐĂNG NHẬP</h2>
            <p className="text-center mb-4" style={{ fontSize: 14 }}>
              Nếu bạn chưa có tài khoản,{" "}
              <a href={`/register`} style={{ color: "blue" }}>đăng ký tại đây</a>
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            {/* <Form name="myForm" onSubmit={handleSubmit} className="text-center"> */}
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
                // required
                name="password"
                style={{ padding: 12, backgroundColor: "#f4f4f4" }}
              />
            </Form.Group>

            <Button variant="primary" className="w-100 p-2" onClick={handleSubmit}>Đăng Nhập</Button>


            {/* quen mat khau */}
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
                    disabled={!emailNew.trim() || load} // Chặn nút nếu email trống
                  >
                    {load ? "Đang gửi mã code..." : "Lấy lại mật khẩu"}

                  </Button>
                </div>
              </Collapse>
            </p>

            <Modal show={show} onHide={handleClose} className="mt-5">
              <Modal.Header closeButton>
                <Modal.Title>Mã code đã được gửi tới mail của bạn</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Form>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Mã code</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nhập mã"
                      value={passwordToken}
                      onChange={(e) => setPasswordToken(e.target.value)}
                      autoFocus
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.formBasicPassword">
                    <Form.Label>Mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Mật khẩu"
                      value={passwordNew}
                      onChange={(e) => setPasswordNew(e.target.value)}
                      autoFocus
                    />
                  </Form.Group>

                  {/* <Form.Group className="mb-3" controlId="exampleForm.formBasicPassword">
                    <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Mật khẩu"
                      autoFocus
                    />
                  </Form.Group> */}

                </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" onClick={handleShow2}>
                  Xác nhận
                </Button>
              </Modal.Footer>
            </Modal>

            <p className="text-center">Hoặc đăng nhập bằng</p>

            <div className="d-flex justify-content-center">
              <Button variant="primary" className="me-2" style={{ width: 140 }}>
                <i className="bi bi-facebook me-2" /> Facebook
              </Button>
              <Button variant="danger" className="ms-2" style={{ width: 140 }}>
                <i className="bi bi-google me-2" /> Google
              </Button>
            </div>
            {/* </Form> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
