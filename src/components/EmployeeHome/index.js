import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"

import { Link } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../Theme"
import { set } from "mobx"

function EmployeeHome(props) {
  const { setJobCardClick } = props
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 pt-3">
          <Container>
            <p className="website-name">Website</p>{" "}
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
                <div className="justify-content-end flex-grow-1 pe-3 nav-link-container">
                  <Link to="/employee" className="fs-5 mr-5 nav-link">
                    Home
                  </Link>
                  <Link to="/employee/post-job" className="fs-5 nav-link">
                    Post Job
                  </Link>
                  <Link
                    to="/employee/dashboard/active-posts"
                    className="fs-5 nav-link"
                  >
                    Dashboard
                  </Link>

                  <NavDropdown
                    className="fs-5"
                    title={<span className="fs-5">Profile</span>}
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <Link
                      to="#action3"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Nelson Tech
                    </Link>
                    <Link
                      to="#action3"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Info@demo.com
                    </Link>
                    <NavDropdown.Divider />
                    <NavDropdown
                      className="ml-3"
                      style={{ marginLeft: "9px" }}
                      title={<span className="fs-7">Account Setting</span>}
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <Link
                        to="/employee/account-setting/my-info"
                        className="nav-link"
                        style={{ marginLeft: "9px" }}
                      >
                        Edit Profile
                      </Link>
                      <Link
                        to="/employee/account-setting/company-setting"
                        className="nav-link"
                        style={{ marginLeft: "9px" }}
                      >
                        Company Profile
                      </Link>
                      <Link
                        to="/employee/forgot-password"
                        className="nav-link"
                        style={{ marginLeft: "9px" }}
                      >
                        Change Password
                      </Link>
                    </NavDropdown>
                    <Link
                      to="#action5"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Support Center
                    </Link>
                    <Link
                      to="/login"
                      className="nav-link"
                      style={{ marginLeft: "9px" }}
                    >
                      Logout
                    </Link>
                  </NavDropdown>
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

export default EmployeeHome
