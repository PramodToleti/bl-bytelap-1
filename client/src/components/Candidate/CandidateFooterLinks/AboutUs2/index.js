import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import CandidateFooter from "../../CandidateFooter"
import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Theme from "../../../../assets/Theme"

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
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="about-us-2 ">
              <h4 className="text-center mb-4">About Us</h4>
              <p className="mb-3">
                Welcome to our job search engine, a platform dedicated to
                connecting job seekers with their dream careers and employers
                with the best talent.
                <br /> Our mission is to make job searching stress-free and
                efficient for everyone. Our platform offers a user-friendly
                experience, innovative technology, and personalized support to
                ensure that users have access to the latest tools and resources.
                We are a team of passionate professionals with expertise in
                various fields, including software development, data analysis,
                marketing, and customer service. We work tirelessly to improve
                our platform and services to meet the needs of our users.
              </p>
              <p className="mb-3">
                Privacy and security are our top priorities. We understand the
                importance of keeping personal information safe and
                confidential. Our platform uses advanced security measures to
                protect against cyber threats and fraud.
              </p>
              <p className="mb-3">
                We value diversity and inclusivity and believe that everyone
                deserves equal opportunities. We welcome job seekers of all
                backgrounds and work with employers who share our values to
                create diverse and inclusive workplaces.
              </p>
              <p>
                Thank you for choosing our job search engine. We are committed
                to helping you find your dream job or the perfect candidate for
                your organization.
              </p>
            </div>
          </div>
        </div>
      </div>
      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default AboutUs2
