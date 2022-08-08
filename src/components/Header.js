import React from "react";
//import "./Home.css";
import Flix from "./images/Dflix.png";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Image,
} from "react-bootstrap";

const Header = () => {
  return (
    <>
      <div>
        <Navbar className="navbar navbar-dark bg-dark">
          <Container fluid>
            <Navbar.Brand href="#">D-FLEX</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/movies">Movies</Nav.Link>
                <Nav.Link href="/music">Music</Nav.Link>
                <Nav.Link href="/shop">Shop</Nav.Link>
                <Nav.Link href="/about">About us</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>

              <Image src={Flix} width={100} height={50}></Image>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
