import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import NavDropdown from "react-bootstrap/NavDropdown"
import { Link, useHistory } from "react-router-dom"

import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../assets/Theme"
import "./index.css"
import Cookies from "js-cookie"

function EmployeeHome() {
  const history = useHistory()
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg=""
          expand={expand}
          className="mb-3 pt-1 pb-2 nav-bar"
        >
          <Container>
            <p
              className="website-name"
              style={{
                textDecoration: "none",
                marginRight: "5px",
                color: "#333333",
                marginTop: "18px",
                fontSize: "18px",
              }}
            >
              Website
            </p>{" "}
            <Link
              to="/employee/find-resume"
              className="website-name find-resume"
              style={{
                cursor: "pointer",
                fontSize: "18px",
                textDecoration: "none",
                color: "#333333",
                marginTop: "16px",
              }}
            >
              Find Resume
            </Link>
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
                <div className="justify-content-end flex-grow-1 pe-3 nav-link-container">
                  <Link
                    to="/employee/subscriptions"
                    className=" mr-5 nav-link"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Subscription
                  </Link>
                  <Link
                    to="/employee"
                    className=" mr-5 nav-link"
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
                    to="/employee/post-job"
                    className=" nav-link"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Post Job
                  </Link>
                  <Link
                    to="/employee/dashboard/active-posts"
                    className=" nav-link"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Dashboard
                  </Link>

                  <NavDropdown
                    style={{ marginTop: "8px" }}
                    title={
                      <span
                        style={{
                          textDecoration: "none",
                          marginRight: "5px",
                          color: "#333333",
                          fontSize: "18px",
                        }}
                      >
                        Profile
                      </span>
                    }
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

                    <p
                      className="nav-link"
                      style={{ marginLeft: "9px", cursor: "pointer" }}
                      onClick={() => {
                        Cookies.remove("employeeToken")
                        localStorage.removeItem("userId")
                        history.push("/login")
                      }}
                    >
                      Logout
                    </p>
                  </NavDropdown>
                  {/*  <Theme /> */}
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
