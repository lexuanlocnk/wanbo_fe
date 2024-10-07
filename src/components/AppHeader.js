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
    <Navbar expand="lg" className="custom-navbar px-5 ">
      <Container fluid>
        <DropdownButton id="dropdown-basic-button" title="Danh mục sản phẩm">
          <Dropdown.Item href="#/action-" className="">
            Máy ảnh
            <Dropdown className="sub-dropdown">
              <Dropdown.Item href="#/subaction1">Sub Item 1</Dropdown.Item>
              <Dropdown.Item href="#/subaction2">Sub Item 2</Dropdown.Item>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item href="#/action">
            Ống kính
            <Dropdown className="sub-dropdown">
              <Dropdown.Item href="#/subaction3">Sub Item 3</Dropdown.Item>
              <Dropdown.Item href="#/subaction4">Sub Item 4</Dropdown.Item>
            </Dropdown>
          </Dropdown.Item>
          <Dropdown.Item href="#/actio">Máy quay</Dropdown.Item>
          <Dropdown.Item href="#/acti">Camera</Dropdown.Item>
          <Dropdown.Item href="#/act">Drone</Dropdown.Item>
          <Dropdown.Item href="#/ac">Phụ kiện máy ảnh</Dropdown.Item>
        </DropdownButton>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/home" className="Home">
              Trang chủ
            </Nav.Link>

            <Nav.Link href="/introduce" className="Home">
              Giới thiệu
            </Nav.Link>

            <NavDropdown title="Sản phẩm" href="#action" className="Home">
              <NavDropdown.Item href="#action1">
                Wanbo T Series
              </NavDropdown.Item>
              <NavDropdown.Item href="#action2">
                Wanbo X Series
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
