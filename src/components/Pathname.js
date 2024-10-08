// Breadcrumb.js
import React from "react";
import { useLocation, Link } from "react-router-dom";

const Pathname = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  // Xử lý breadcrumb theo từng trang
  const breadcrumbItems = pathnames.map((pathname, index) => {
    const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
    const isLast = index === pathnames.length - 1;

    return (
      <span key={routeTo}>
        {!isLast ? (
          <Link to={routeTo} className="breadcrumb-item">
            {pathname}
          </Link>
        ) : (
          <span className="breadcrumb-item active">{pathname}</span>
        )}
        {!isLast && <span className="breadcrumb-separator"> - </span>}
      </span>
    );
  });

  // Kiểm tra xem có phải là trang chủ không
  if (location.pathname === "/") {
    return null; // Không hiển thị breadcrumb nếu ở trang chủ
  }

  return (
    <nav aria-label="breadcrumb" className="ps-5">
      <div>
        <Link to="/home">Trang chủ</Link> {/* Link về trang chủ */}
        <span className="breadcrumb-separator"> - </span>
        {breadcrumbItems}
      </div>
    </nav>
  );
};

export default Pathname;
