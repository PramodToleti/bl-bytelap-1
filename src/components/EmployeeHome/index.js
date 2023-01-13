import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"

import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

function EmployeeHome() {
  return (
    <>
      {["sm"].map((expand) => (
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
                  <Nav.Link href="/login" className="fs-5 mx-5">
                    Premium
                  </Nav.Link>
                  <Nav.Link href="/login" className="fs-5">
                    Post Job
                  </Nav.Link>
                  <Link to="/employee/dashboard" className="fs-5 nav-link">
                    Dashboard
                  </Link>

                  <NavDropdown
                    className="fs-5"
                    title={<span className="fs-5">Profile</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">
                      Company Limited
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action3">
                      Info@demo.com
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <Link
                      to="/employee/account-setting"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Account setting
                    </Link>
                    <NavDropdown.Item href="#action5">
                      Support Center
                    </NavDropdown.Item>
                    <Link
                      to="/login"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Logout
                    </Link>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default EmployeeHome
