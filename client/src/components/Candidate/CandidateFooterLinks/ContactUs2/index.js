import { Button, Form } from "react-bootstrap"
import { GoLocation } from "react-icons/go"
import { MdOutlineEmail } from "react-icons/md"
import { BsTelephone } from "react-icons/bs"
import { useLocation, Link } from "react-router-dom"

import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Theme from "../../../../assets/Theme"
import CandidateFooter from "../../CandidateFooter"

const ContactUs2 = () => {
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

      <div className="contact-us-container container mt-4 mb-3">
        <h3 className="mb-4">Contact Us</h3>
        <div className="contact-us">
          <Form className="contact-form-container">
            <Form.Control type="text" placeholder="Name" className="mb-4" />
            <Form.Control type="number" placeholder="Number" className="mb-4" />
            <Form.Control
              type="email"
              placeholder="Email ID"
              className="mb-4"
            />
            <Form.Control type="text" placeholder="Message" className="mb-4" />
            <Button variant="primary" className="mb-3">
              Send
            </Button>
          </Form>
          <div className="address-container">
            <div className="address-details-container">
              <MdOutlineEmail className="address-icons" />
            </div>
            <div className="address-details-container">
              <p className="mt-1">Support@gmail.com</p>
            </div>
            <div className="address-details-container">
              <GoLocation className="address-icons" />
            </div>
            <div className="address-details-container">
              <p>
                Indore, India 10,Sunshine Nalanda Seasons of Joy, Deuguradia
                452016 , Indore.
              </p>
            </div>

            <div className="address-details-container">
              <BsTelephone className="address-icons" />
            </div>
            <div className="address-details-container">
              <p className="mt-1">91-8888-8888-88</p>
            </div>
          </div>
        </div>
      </div>
      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default ContactUs2
