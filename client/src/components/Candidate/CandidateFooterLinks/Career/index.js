import "./index.css"
import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

import CandidateFooter from "../../CandidateFooter"
import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Theme from "../../../../assets/Theme"

const career = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered

  const careerDetails = [
    {
      title: "DevOps Engineer",
      jobType: "Full Time",
      experience: "2-3 years",
    },
    {
      title: "Software Architect",
      jobType: "Full Time",
      experience: "2-3 years",
    },
    {
      title: "Sr. React js Developer",
      jobType: "Full Time",
      experience: "2-3 years",
    },
    {
      title: "Node js Developer",
      jobType: "Full Time",
      experience: "2-3 years",
    },
    {
      title: "Buisiness Relationship Manager",
      jobType: "Full Time",
      experience: "3-5 years",
    },
  ]

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

      <div className="career-container container pt-5 pb-5">
        <div className="career-card-container">
          <h4 className="mb-4">Career</h4>
          <div className="career-details-container">
            {careerDetails.map((eachCareer) => (
              <div className="career-card">
                <div className="career-card-header">
                  <h5>{eachCareer.title}</h5>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      maxWidth: "200px",
                    }}
                  >
                    <p>{eachCareer.jobType}</p>
                    <p>{eachCareer.experience}</p>
                  </div>
                </div>
                <div className="d-flex justify-content-end">
                  <button className="career-card-button">Apply</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default career
