import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../Theme"

const HomeHeader = () => {
  return ["sm"].map((expand) => (
    <Navbar key={expand} bg="" expand={expand} className="mb-3">
      <Container>
        <Link to="/" style={{ color: "black", textDecoration: "none" }}>
          <h1 className="website-name">Website</h1>
        </Link>

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
              <Link to="/" className="fs-4 nav-link">
                Home
              </Link>

              <NavDropdown
                title={<span className="fs-4">Profile</span>}
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="fs-4 profile-nav"
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
              <Link to="/login" className="fs-4  nav-link">
                Logout
              </Link>
              <Theme />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))
}

export default HomeHeader
