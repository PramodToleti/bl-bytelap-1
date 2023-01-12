import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

const HomeHeader = () => {
  return ["sm"].map((expand) => (
    <Navbar key={expand} bg="" expand={expand} className="mb-3">
      <Container>
        <Navbar.Brand href="#">Website</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Website
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className="fs-4 nav-link">
                Home
              </Link>

              <NavDropdown
                title="Profile"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="fs-4"
              >
                <Link to="/saved-job" className="nav-link">
                  Saved Job
                </Link>

                <Link to="/account-setting/internship-1" className="nav-link">
                  Register Myself
                </Link>

                <Link to="/account-setting/internship-1" className="nav-link">
                  Account Setting
                </Link>
              </NavDropdown>
              <Link to="/login/candidate" className="fs-4  nav-link">
                Logout
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))
}

export default HomeHeader
