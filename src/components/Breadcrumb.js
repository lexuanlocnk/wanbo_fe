import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import axiosClient from "../api/axiosConfig";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const [newsTitle, setNewsTitle] = useState("");
  const [productTitle, setProductTitle] = useState("");
  // Đối tượng ánh xạ các đường dẫn sang tiếng Việt
  const breadcrumbLabels = {
    home: "Trang chủ",
    product: "Sản phẩm",
    introduce: "Giới thiệu",
    contact: "Liên hệ",
    news: "Tin tức",
    new: "Tin tức",
    cart: "Giỏ hàng",
    login: "Đăng nhập",
    register: "Đăng ký",
    checkout: "Thanh toán",
    search: "Tìm kiếm",
    information: "Thông tin tài khoản",
    "tin-khuyen-mai": "Tin khuyến mãi",
    "compare-product": "So sánh sản phẩm",
    "new-product": "Sản phẩm mới ",
    "delivery-and-payment": "Giao hàng và thanh toán",
    "return-policy": "Chính sách đổi trả",
    "warranty-terms": "Điều khoản bảo hành",
    "privacy-policy": "Chính sách bảo mật",
    "cookie-policy": "Chính sách cookie",
    thankyou: "Cám ơn",
    orderdetail: "Chi tiết đơn hàng",
  };

  const fetchNewDetail = async () => {
    try {
      if (pathnames[0] === "news" && pathnames.length > 1) {
        const slug = pathnames[2];
        const res = await axiosClient(`/member/news-detail/${slug}`);
        if (res.data.status === true) {
          setNewsTitle(res.data.data.title);
        }
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (pathnames[0] === "news" && pathnames.length > 2) {
      fetchNewDetail();
    }
  }, [location.pathname]);

  const fetchProductDetail = async () => {
    try {
      if (pathnames[0] === "product" && pathnames.length > 1) {
        const slug = pathnames[1];
        const res = await axiosClient(`/member/product-detail/${slug}`);
        if (res.data.status === true) {
          setProductTitle(res.data.productDetail.ProductName);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (pathnames[0] === "product" && pathnames.length > 1) {
      fetchProductDetail();
    }
  }, [location.pathname]);

  // Xử lý hiển thị Breadcrumb
  const breadcrumbItems = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    // Kiểm tra nếu là số thì gán nhãn "Chi tiết đơn hàng"
    const isNumber = /^\d+$/.test(pathname);
    let label = isNumber
      ? `Chi tiết đơn hàng ${pathname}`
      : breadcrumbLabels[pathname] || pathname;
    // Nếu là tin tức thì dùng tiêu đề bài viết
    if (pathnames[0] === "news" && index === 2) {
      label = newsTitle || "Đang tải...";
    }

    if (pathnames[0] === "product" && index === 1) {
      label = productTitle || "Đang tải...";
    }
    return (
      <span key={routeTo}>
        {!isLast ? (
          <Link to={routeTo} className="breadcrumb-item">
            {label}
          </Link>
        ) : (
          <span className="breadcrumb-item" style={{ color: "#2854e5" }}>
            {label}
          </span>
        )}
        {!isLast && <span className="breadcrumb-separator"> {">"} </span>}
      </span>
    );
  });

  if (location.pathname === "/home") {
    return null;
  }

  return (
    <nav aria-label="pathname" className="py-1">
      <div className="container">
        <div className="timeOpen">
          <Link to="/home">Trang chủ</Link>
          <span className="breadcrumb-separator">{" > "}</span>
          {breadcrumbItems}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
