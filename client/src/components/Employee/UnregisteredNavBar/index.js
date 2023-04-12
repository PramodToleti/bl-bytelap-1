import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"

import Theme from "../../../assets/Theme"

const UnregisteredNavBar = () => {
  return ["sm"].map((expand) => (
    <Navbar
      key={expand}
      bg=""
      expand={expand}
      className="mb-3 pt-1 pb-2 nav-bar"
    >
      <Container>
        <p className="website-name">Website</p>{" "}
        <Link
          to="/employee/find-resume"
          className="website-name"
          style={{
            marginLeft: "20px",
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
              {/*<Link to="/employee/home" className="fs-5 mr-5 nav-link">
                        Home
                      </Link>*/}
              <Link
                to="/employee/post-job"
                className="nav-link"
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

              <Link
                to="/employee/create-account/step-1"
                className=" nav-link"
                style={{
                  textDecoration: "none",
                  marginRight: "5px",
                  color: "#333333",
                  marginTop: "8px",
                  fontSize: "18px",
                }}
              >
                Create Account
              </Link>

              <Theme />
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))
}

export default UnregisteredNavBar
