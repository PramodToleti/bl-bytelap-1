import { Link } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"

const CreateAccountNav = () =>
  ["sm"].map((expand) => (
    <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
      <Container>
        <p className="website-name">Website</p>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header className="dark-mode-active" closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Website
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body className="dark-mode-active">
            <div className="justify-content-end flex-grow-1 nav-link-container">
              <Link
                to="/login/employee"
                style={{
                  textDecoration: "none",
                  marginRight: "5px",
                  color: "#333333",
                  marginTop: "8px",
                  fontSize: "18px",
                }}
              >
                Already Registered? &nbsp;
                <span style={{ color: "blue", cursor: "pointer" }}>Login</span>
              </Link>
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))

export default CreateAccountNav
