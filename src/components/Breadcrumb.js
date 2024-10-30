import React from "react";
import { useLocation, Link } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Đối tượng ánh xạ các đường dẫn sang tiếng Việt
  const breadcrumbLabels = {
    home: "Trang chủ",
    product: "Sản phẩm",
    introduce: "Giới thiệu",
    contact: "Liên hệ",
    news: "Tin tức",
    cart: "Giỏ hàng",
    login: "Đăng nhập",
    register: "Đăng ký",
    checkout: "Thanh toán",
    "new-product": "Sản phẩm mới ",
    // Thêm các ánh xạ khác ở đây
  };

  const breadcrumbItems = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;
    const label = breadcrumbLabels[pathname] || pathname; // Lấy từ tiếng Việt, nếu không thì giữ nguyên

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
          <span className="breadcrumb-separator"> {">"} </span>
          {breadcrumbItems}
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumb;
