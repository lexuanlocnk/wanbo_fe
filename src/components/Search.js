import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import wanboLogo from '../assets/logo.webp';
import search from '../assets/search-512.webp';
import call from '../assets/call.png';
import user from '../assets/user.png';
import "../components/AppHeader.css"; 
import { Link } from 'react-router-dom';

function Search() {
  return (
    <Navbar expand="lg" className="custom-navbar px-3 py-4">
      <Container fluid className="d-flex justify-content-center align-items-center">
        <img
          alt=""
          src={wanboLogo}
          width="auto"
          height="40"
          className="d-inline-block align-top me-5"
        />
        <Navbar.Toggle aria-controls="navbarScroll" />
        
        <Navbar.Collapse id="navbarScroll" className="mx-5">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="custom-search"
              aria-label="Search"
            />
            
            <Button >
                <img
                alt=""
                src={search}
                width="auto"
                height="30"
                className="d-inline-block align-top"
            /></Button>
          </Form>
        </Navbar.Collapse>

        <div className="d-flex align-items-center">
            <div className="me-2">
                <img
                alt=""
                src={call}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                />
            </div>
            <a href="#">Gọi mua hàng <br /> 01245668899</a>
        </div>
      
        <div className="d-flex align-items-center mx-4">
            <div className="me-2">
                <img
                alt=""
                src={user}
                width="auto"
                height="30"
                className="d-inline-block align-top"
                />
            </div>
            <a href="#">Tài khoản <br />
            
            <a href="#">Đăng nhập</a></a>
            
        </div>
   
        <Button variant="outline-light">Giỏ hàng</Button>

      </Container>
    </Navbar>
  );
}

export default Search;
