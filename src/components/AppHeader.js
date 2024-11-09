import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import HomeApi from "../api/homeApi";
import "../components/AppHeader.css";
import { useEffect, useState } from "react";

const AppHeader = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      const homeApi = new HomeApi();
      try {
        const response = await homeApi.getMenuCategory();
        if (response.status && Array.isArray(response.data.data)) {
          setCategories(response.data.data);
        } else {
          console.error("Expected an array but got:", response.data);
        }
      } catch (err) {
        console.log("Fetch MenuCategory Data Error: ", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <Navbar
      expand="lg"
      className="custom-navbar pb-0 "
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <Container>
        <DropdownButton id="dropdown-basic-button" title="DANH MỤC SẢN PHẨM">
          {categories.map((category) => (
            <Dropdown.Item
              key={category.friendly_url}
              href={`/${category.friendly_url}`} // Link đến trang danh mục sản phẩm
              className="d-flex justify-content-between"
            >
              <div>{category.cat_name}</div>
            </Dropdown.Item>
          ))}
        </DropdownButton>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{
            border: "1px solid #ccc",
            outline: "none",
            backgroundColor: "white"
          }}
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

            <Nav.Link href="/news/tin-khuyen-mai" className="Home">
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
};

export default AppHeader;
