import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../components/AppHeader.css";

function AppHeader() {
  return (
    <Navbar expand="lg" className="custom-navbar pb-0">
      <Container> 
        <DropdownButton id="dropdown-basic-button" title="DANH MỤC SẢN PHẨM">
          <Dropdown.Item
            href="#/action-"
            className="d-flex justify-content-between"
          >
            <div>Máy ảnh</div>
            <div>{">"}</div>

            <div className="sub-dropdown">
            <Dropdown.Item href="#/subaction1">Máy ảnh DSLR</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Mirrorless</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Compact</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Instax</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Medium</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Flim</Dropdown.Item>
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            href="#/action-"
            className="d-flex justify-content-between"
          >
            <div>Ống kính</div>
            <div>{">"}</div>

            <div className="sub-dropdown">
            <Dropdown.Item href="#/subaction1">Máy ảnh DSLR</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Mirrorless</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Compact</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Instax</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Medium</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Flim</Dropdown.Item>
            </div>
          </Dropdown.Item>

          <Dropdown.Item href="#/actio">Máy quay</Dropdown.Item>

          <Dropdown.Item
            href="#/action-"
            className="d-flex justify-content-between"
          >
            <div>Camera hành động</div>
            <div>{">"}</div>

            <div className="sub-dropdown">
              <Dropdown.Item href="#/subaction1">Máy ảnh DSLR</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Mirrorless</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Compact</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Instax</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Medium</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Flim</Dropdown.Item>
            </div>
          </Dropdown.Item>

          <Dropdown.Item
            href="#/action-"
            className="d-flex justify-content-between"
          >
            <div>Drone</div>
            <div>{">"}</div>

            <div className="sub-dropdown">
            <Dropdown.Item href="#/subaction1">Máy ảnh DSLR</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Mirrorless</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Compact</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Instax</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Medium</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Flim</Dropdown.Item>
            </div>
          </Dropdown.Item>
          <Dropdown.Item
            href="#/action-"
            className="d-flex justify-content-between"
          >
            <div>Phụ kiện máy ảnh</div>
            <div>{">"}</div>

            <div className="sub-dropdown">
            <Dropdown.Item href="#/subaction1">Máy ảnh DSLR</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Mirrorless</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Compact</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Instax</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Medium</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Máy ảnh Flim</Dropdown.Item>
            </div>
          </Dropdown.Item>
        </DropdownButton>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{ backgroundColor: "white" }}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="Home">
              Trang chủ
            </Nav.Link>

            <Nav.Link href="/introduce" className="Home">
              Giới thiệu
            </Nav.Link>

            <NavDropdown title="Sản phẩm" href="/new-product" className="Home">
              <NavDropdown.Item href="/new-product">
                Sẩn phẩm mới
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Sản phẩm nổi bật
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/news" className="Home">
              Tin tức
            </Nav.Link>

            <Nav.Link href="/contact" className="Home">
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;
