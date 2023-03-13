import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../../Theme"

const HomeHeader = () => {
  const activeThemeStyles = (theme) => {
    const darkTheme = theme ? "dark-theme" : "light-theme"
    console.log(darkTheme)
  }

  return ["sm"].map((expand) => (
    <Navbar key={expand} bg="" expand={expand} className="mb-3">
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
              <Link to="/candidate" className="fs-4 nav-link">
                Home
              </Link>

              <Link to="/candidate/register-myself" className="fs-4 nav-link">
                Register Myself
              </Link>

              <NavDropdown
                title={<span className="fs-4">Profile</span>}
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="fs-4 profile-nav"
              >
                <Link
                  to="/candidate/account-setting/my-info"
                  className="nav-link"
                >
                  Edit Profile
                </Link>
                <Link to="/candidate/change-password" className=" nav-link">
                  Change Password
                </Link>
                <Link to="/login" className=" nav-link">
                  Logout
                </Link>
              </NavDropdown>

              <Theme activeThemeStyles={activeThemeStyles} />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))
}

export default HomeHeader
