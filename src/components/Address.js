import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/AppHeader.css";

function Address() {
  return (
    <Navbar
      className="custom-navbar "
      style={{ borderBottom: "1px solid gray" }}
    >
      <div className="container">Giờ mở cửa: 08:30 - 21:30 các ngày trong tuần</div>
      <div className="compare-nav-container">
        <a href="/compare-product">
          <i className="bi bi-arrow-left-right" style={{ marginLeft: 5 }} />
          <span style={{ marginLeft: 5 }}>So sánh sản phẩm</span>
        </a>
      </div>
    </Navbar>
  );
}

export default Address;
