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
import { motion } from "framer-motion";
import CIcon from "@coreui/icons-react";
import { cilCaretBottom, cilCaretTop, cilList } from "@coreui/icons";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
const AppHeader = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isLargeOpen, setIsLargeOpen] = useState(false);
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
        <DropdownButton
          id="dropdown-basic-button"
          title={
            <span className="d-flex align-items-center">
              <CIcon icon={cilList} className="me-2 dropdown-icon" /> DANH MỤC
              SẢN PHẨM
            </span>
          }
          onMouseEnter={() => setIsLargeOpen(true)}
          onMouseLeave={() => setIsLargeOpen(false)}
          onClick={() => setIsLargeOpen(!isLargeOpen)}
          show={isLargeOpen}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{
              opacity: isLargeOpen ? 1 : 0,
              y: isLargeOpen ? -4 : -10,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="dropdown-menu show d-none d-lg-block"
          >
            {categories.map((category) => (
              <Dropdown.Item
                as={Link}
                key={category.friendly_url}
                to={`/product?catUrl=${category.friendly_url}`}
                className="d-flex justify-content-between dropdown-item"
              >
                {category.cat_name}
              </Dropdown.Item>
            ))}
          </motion.div>
          <div className="d-lg-none">
            {categories.map((category) => (
              <Dropdown.Item
                as={Link}
                key={category.friendly_url}
                to={`/product?catUrl=${category.friendly_url}`}
                className="d-flex justify-content-between dropdown-item"
              >
                {category.cat_name}
              </Dropdown.Item>
            ))}
          </div>
        </DropdownButton>

        <Navbar.Toggle
          aria-controls="navbarScroll"
          style={{
            border: "1px solid #ccc",
            outline: "none",
            backgroundColor: "white",
          }}
        />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "500px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/home" className="Home">
              Trang chủ
            </Nav.Link>

            <Nav.Link as={Link} to="/introduce" className="Home">
              Giới thiệu
            </Nav.Link>

            <NavDropdown
              title={
                <span className="d-flex align-items-center nav-dropdown">
                  Sản phẩm
                  <motion.i
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="ms-2"
                  >
                    <i class="bi bi-caret-down-fill"></i>
                  </motion.i>
                </span>
              }
              to="/product"
              className="Home"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
              onClick={() => setIsOpen(!isOpen)}
              show={isOpen}
            >
              <motion.i
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? -4 : -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="dropdown-menu show d-none d-lg-block"
              >
                <NavDropdown.Item
                  as={Link}
                  to="/new-product"
                  className="dropdown-item"
                >
                  Sản phẩm mới
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/product?catUrl=wanbo-t"
                  className="dropdown-item"
                >
                  Sản phẩm
                </NavDropdown.Item>
              </motion.i>
              <div className="d-lg-none">
                <NavDropdown.Item
                  as={Link}
                  to="/new-product"
                  className="dropdown-item"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Sản phẩm mới
                </NavDropdown.Item>
                <NavDropdown.Item
                  as={Link}
                  to="/product?catUrl=wanbo-t"
                  className="dropdown-item"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Sản phẩm
                </NavDropdown.Item>
              </div>
            </NavDropdown>

            <Nav.Link as={Link} to="/news/tin-khuyen-mai" className="Home">
              Tin tức
            </Nav.Link>

            <Nav.Link as={Link} to="/contact" className="Home">
              Liên hệ
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppHeader;
