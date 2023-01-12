import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"

import "bootstrap/dist/css/bootstrap.min.css"

const HomeHeader = (props) => {
  const { navigateToRegister } = props
  const updatenavigation = () => {
    navigateToRegister()
  }

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
              <Nav.Link href="/" className="fs-4">
                Home
              </Nav.Link>

              <NavDropdown
                title="Profile"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="fs-4"
              >
                <NavDropdown.Item href="/saved-job">Saved Job</NavDropdown.Item>

                <NavDropdown.Item
                  href="/account-setting/internship-1"
                  onClick={updatenavigation}
                >
                  Register Myself
                </NavDropdown.Item>

                <NavDropdown.Item href="/account-setting">
                  Account Setting
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/login" className="fs-4">
                Logout
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))
}

export default HomeHeader
