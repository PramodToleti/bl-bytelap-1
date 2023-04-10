import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import CandidateFooter from "../../CandidateFooter"
import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Theme from "../../../../Theme"

const AboutUs2 = () => {
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
      <h1 className="mt-3 mb-3">About us</h1>
      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default AboutUs2
