import React, { useEffect, useState } from "react";
import { newDetails } from "../Data";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./News.css"; // Ensure the CSS is imported
import NewsCategory from "../../components/NewsCategory";
import FeaturedNews from "../../components/FeaturedNews";
import { useParams } from "react-router-dom";
import { imageBaseUrl } from "../../api/axiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

const NewsDetail = () => {

  const [newDetail, setNewDetail] = useState({});
  const { urlDetail, urlNew } = useParams();


  useEffect(() => {
    const fetchNewDetail = async () => {
      try {
        const response = await fetch(`http://192.168.245.190:8002/api/member/news-detail/${urlDetail}`);
        //const response = await fetch(`http://192.168.245.190:8002/api/member/news-detail/${urlNew}`);
        const data = await response.json();
        if (data.status === true && data.data) {
          setNewDetail(data.data);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchNewDetail();
  }, [urlNew, urlDetail]);

  // State để lưu trữ thông tin bình luận
  const [commentData, setCommentData] = useState({
    fullName: "",
    email: "",
    content: "",
  });

  // Hàm xử lý khi người dùng nhập liệu
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCommentData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Hàm xử lý khi người dùng gửi bình luận
  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: commentData.fullName,
      email: commentData.email,
      content: commentData.content,
      postId: newDetail.news_id, // Lấy từ newDetail
    };

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Vui lòng đăng nhập để gửi bình luận.");
      return;
    }

    try {
      const response = await axios.post(
        "http://192.168.245.190:8002/api/member/add-comment",
        payload,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      if (response.data.status === true) {
        toast.success("Gửi bình luận thành công!");
        // Reset form sau khi gửi thành công
        setCommentData({ fullName: "", email: "", content: "" });
      } else {
        toast.error("Gửi bình luận thất bại. Vui lòng thử lại.");
      }
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Có lỗi xảy ra khi gửi bình luận.");
    }
  };

  if (!newDetail) {
    return <div>Không tìm thấy tin tức</div>;
  }

  return (
    <div className="py-4" style={{ backgroundColor: "#f4f4f4" }}>
      <div className="container">
        <h4>TIN TỨC</h4>
        <Row className="justify-content-between">
          <Col
            lg={9}
            className="mt-3"
            style={{ backgroundColor: "white", height: "auto" }}
          >
            <div
              className="news-detail-content"
              style={{ backgroundColor: "white", padding: 20 }}
            >
              <h5>{newDetail.title}</h5>
              <div className="d-flex align-items-center">
                <p className="me-3 bi bi-person">Team dev</p>
                <p className="bi bi-clock-history me-1" /> <p>
                  {/* {newDetail.news?.date_post} */}
                  {new Date(newDetail.news?.date_post * 1000).toLocaleDateString("vi-VN", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </p>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: newDetail.description }}
              />{" "}
            </div>

            {/* Form nhập bình luận */}
            <div className="m-3">
              <h5>Gửi bình luận của bạn</h5>
              <Form onSubmit={handleSubmitComment}>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>Họ tên</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Nhập họ tên"
                        name="fullName"
                        value={commentData.fullName}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Nhập email"
                        name="email"
                        value={commentData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3" controlId="formContent">
                  <Form.Label>Nội dung bình luận</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Nhập nội dung bình luận"
                    name="content"
                    value={commentData.content}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Gửi bình luận
                </Button>
              </Form>
            </div>
          </Col>

          <Col lg={3} xs={12} className="mt-3" style={{ marginRight: -12 }}>
            <div className="sticky-sidebar">
              <NewsCategory />
              <FeaturedNews />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default NewsDetail;
