import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../components/AppHeader.css";

function Address() {
  return (
    <Navbar
      className="custom-navbar"
      style={{ borderBottom: "0.5px solid #DCDCDC" }}
    >
      <div className="container">
        <div className="timeOpen d-flex justify-content-center align-items-center">
          <i className="bi bi-envelope" />
          <span className="ms-1">support@wanbo.cn</span>
        </div>
        <div className="compare-nav-container timeOpen">
          <a href="/compare-product">
            <i className="bi bi-arrow-left-right" style={{ marginLeft: 5 }} />
            <span style={{ marginLeft: 5 }}>So sánh sản phẩm</span>
          </a>
        </div>
      </div>
    </Navbar>
  );
}

export default Address;
