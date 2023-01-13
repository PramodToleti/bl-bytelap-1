import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../Theme"

function LoginPage() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 mt-2">
          <Container>
            <p className="website-name">Website</p>
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
                <div className="justify-content-end flex-grow-1 nav-link-container">
                  <Link
                    to="/login/candidate"
                    className="fs-2 nav-link"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/candidate/create-account/step-1"
                    style={{
                      marginRight: "8px",
                    }}
                  >
                    <Button variant="primary" size="lg">
                      For Candidate
                    </Button>{" "}
                  </Link>
                  <Link
                    to="/employee/create-account/step-1"
                    style={{
                      marginRight: "8px",
                    }}
                  >
                    <Button variant="primary" size="lg">
                      For Employee
                    </Button>{" "}
                  </Link>
                  <Theme />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  )
}

export default LoginPage
