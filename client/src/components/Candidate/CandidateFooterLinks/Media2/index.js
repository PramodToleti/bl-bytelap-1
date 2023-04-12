import { useLocation } from "react-router-dom"
import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"

import Theme from "../../../../assets/Theme"

import "./index.css"
import CandidateFooter from "../../CandidateFooter"

const Media2 = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  return (
    <>
      {isRegistered ? (
        <HomeHeader />
      ) : (
        ["sm"].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
            <Container>
              <p className="website-name">Website</p>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
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
                      to="/login/candidate"
                      style={{
                        textDecoration: "none",
                        marginRight: "5px",
                        color: "#333333",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/candidate/create-account/step-1"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Candidate
                    </Link>
                    <Link
                      to="/employee/home"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Employer / Post Job
                    </Link>
                    <Theme />
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))
      )}
      <div className="container mt-4">
        <h3 className="mb-4">Recent</h3>
        <div className="main-image-container mb-3">
          <p>Image</p>
        </div>
        <p
          align="end"
          style={{ color: "blue", fontSize: "16px" }}
          className="mb-5"
        >
          Read More...
        </p>

        <div className="media-sub-images-container mb-5">
          <div className="media-sub-images">
            <p>Image</p>
          </div>
          <div className="media-sub-images">
            <p>Image</p>
          </div>
          <div className="media-sub-images">
            <p>Image</p>
          </div>
        </div>
      </div>
      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default Media2
