import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"

function LoginPage() {
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
                  <Link
                    to="/login/candidate"
                    className="fs-2"
                    style={{
                      color: "grey",
                      textDecoration: "none",
                      marginRight: "10px",
                      marginTop: "6px",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/candidate/create-account/step-1"
                    style={{
                      marginTop: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <Button variant="primary" size="lg">
                      For Candidate
                    </Button>{" "}
                  </Link>
                  <Link
                    to="/employee/create-account/step-1"
                    style={{
                      marginTop: "8px",
                      marginRight: "8px",
                      marginLeft: "8px",
                    }}
                  >
                    <Button variant="primary" size="lg">
                      For Employee
                    </Button>{" "}
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default LoginPage
