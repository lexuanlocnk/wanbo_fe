import React from "react";
import { Modal, Form, Button } from "react-bootstrap";

const PasswordResetModal = ({
    show,
    handleClose,
    passwordToken,
    setPasswordToken,
    passwordNew,
    setPasswordNew,
    confirmPassword,
    setConfirmPassword,
    handlePasswordChange,
    load
}) => {
    return (
        <Modal centered show={show} onHide={handleClose}>
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
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.formBasicPasswordConfirm">
                        <Form.Label>Xác nhận mật khẩu mới</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handlePasswordChange} disabled={load}>
                    {load ? "Đang xử lý..." : "Xác nhận"}
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default PasswordResetModal;
