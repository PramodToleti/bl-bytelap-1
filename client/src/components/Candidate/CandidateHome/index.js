import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, useHistory } from "react-router-dom"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../../assets/Theme"
import Cookies from "js-cookie"

const HomeHeader = () => {
  const history = useHistory()

  const activeThemeStyles = (theme) => {
    const darkTheme = theme ? "dark-theme" : "light-theme"
  }

  const onClickLogOut = () => {
    Cookies.remove("userToken")
    localStorage.removeItem("userId")
    history.replace("/login")
  }

  return ["sm"].map((expand) => (
    <Navbar key={expand} bg="" expand={expand} className="mb-3  nav-bar">
      <Container>
        <p
          className="website-name"
          style={{
            textDecoration: "none",
            color: "#333333",
            marginTop: "8px",
            fontSize: "18px",
          }}
        >
          Website
        </p>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              style={{
                textDecoration: "none",
                marginRight: "5px",
                color: "#333333",
                marginTop: "8px",
                fontSize: "18px",
              }}
            >
              Website
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <div className="justify-content-end flex-grow-1 nav-link-container">
              <Link
                to="/candidate"
                className="nav-link"
                style={{
                  textDecoration: "none",
                  marginRight: "5px",
                  color: "#333333",
                  marginTop: "8px",
                  fontSize: "18px",
                }}
              >
                Home
              </Link>

              <Link
                to="/candidate/register-myself"
                className=" nav-link"
                style={{
                  textDecoration: "none",
                  marginRight: "5px",
                  color: "#333333",
                  marginTop: "8px",
                  fontSize: "18px",
                }}
              >
                Register Myself
              </Link>

              <NavDropdown
                title={
                  <span
                    className=""
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Profile
                  </span>
                }
                id={`offcanvasNavbarDropdown-expand-${expand}`}
                className="fs-4 profile-nav"
              >
                <Link
                  to="/candidate/account-setting/my-info"
                  className="nav-link mb-1"
                >
                  Edit Profile
                </Link>
                <Link
                  to="/candidate/change-password"
                  className=" nav-link mb-1"
                >
                  Change Password
                </Link>
                <Link to="/candidate/certification" className=" nav-link mb-1">
                  Certification
                </Link>

                <p
                  className="nav-link mb-1"
                  onClick={onClickLogOut}
                  style={{ cursor: "pointer" }}
                >
                  Logout
                </p>
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
