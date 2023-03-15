import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"
import { useState } from "react"
import { Button } from "react-bootstrap"
import Slider from "react-slick"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import Popup from "reactjs-popup"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Form from "react-bootstrap/Form"
import Stack from "react-bootstrap/Stack"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { toast } from "react-toastify"

import "reactjs-popup/dist/index.css"
import "react-toastify/dist/ReactToastify.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../../Theme"
import AboutUs from "../FooterLinks/AboutUs"
import Blog from "../FooterLinks/Blog"
import ContactUs from "../FooterLinks/ContactUs"
import Media from "../FooterLinks/Media"
import PrivacyPolicy from "../FooterLinks/PrivacyPolicy"
import TermsAndConditions from "../FooterLinks/TermsAndConditions"
import ChooseFile from "../../../ChooseFile"

import "./index.css"
import SkeletonContainer from "../../../SkeletonContainer"

function EmployeeUnregistered() {
  const [isNext, setIsNext] = useState(false)

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  const [activeLink, setActiveLink] = useState(null)

  const renderSteps = () => {
    if (!isNext) {
      return (
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ width: "100%" }}
        >
          <Form action="" noValidate>
            <Row className="mb-3">
              <p className="text-end mt-1">Step 1-2</p>
              <p className="text-center mt-3">Create Employer Account</p>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <FloatingLabel controlId="floatingText" label="Company Name">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Demo Solution inc"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your company name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mt-3"
                controlId="validationCustom01"
              >
                <FloatingLabel
                  controlId="floatingText"
                  label="Official Email ID"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Info@company.com"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter official email ID.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <button className=" mt-1 text-center btn btn-outline-primary">
              Get Code
            </button>
            <button className=" mt-1 mx-1 text-center btn btn-outline-secondary">
              Enter Code
            </button>
            <p className="text-start mt-1">
              {" "}
              <Link to="" style={{ textDecoration: "none", color: "blue" }}>
                Resend again{" "}
              </Link>
            </p>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
                onClick={() => setIsNext(true)}
              >
                Verify & Next
              </Button>
            </div>
          </Form>
        </div>
      )
    }

    return (
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2    border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ width: "100%" }}
      >
        <p className="text-end">Step 2-2</p>
        <p className="text-center">Company Info</p>

        <Form action="" noValidate>
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter you last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label> You Role </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> Owner </option>
                <option>Human Resource</option>
                <option>Junior Human Resource</option>
                <option>Marketing Specialist</option>
                <option>Junior Marketing Specialist</option>
                <option>CEO</option>
                <option>CTO</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Company website</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="Paste URL"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Enter your company website URL.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label className="mt-2">Upload Company Logo </Form.Label>
              <Stack
                direction="horizontal"
                gap={3}
                style={{
                  marginTop: "7px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <input className="d-none" type="file" />
                <ChooseFile />
              </Stack>
              <Form.Control.Feedback type="invalid">
                Please upload company logo.
              </Form.Control.Feedback>
            </Form.Group>
            <small className="text-start text-muted mt-3">
              PDF,Doc,Docx, | Max:2MB
            </small>

            <Form.Group
              className="mb-3 mt-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Company Address</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={2}
                placeholder=""
              />
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-2"
              controlId="validationCustom01"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="Create password"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please create your password
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                required
                type="link"
                placeholder="confirm password"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your password
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-4">
            <Form.Check
              required
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <div className="d-grid gap-2 mt-2">
            <Link to="/employee">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    )
  }

  const renderEmployeeHome = () => {
    switch (activeLink) {
      case "About us":
        return <AboutUs />
      case "Blog":
        return <Blog />
      case "Contact us":
        return <ContactUs />
      case "Media":
        return <Media />
      case "Privacy Policy":
        return <PrivacyPolicy />
      case "Terms & Condition":
        return <TermsAndConditions />

      default:
        return (
          <>
            <div className="post-job-content">
              <Popup
                trigger={<Button>Post a Job</Button>}
                position="center center"
                contentStyle={{
                  borderRadius: "10px",
                  padding: "20px",
                  boxShadow: "0px 0px 10px 0px #ccc",
                }}
                modal
              >
                <div className="post-job-modal">{renderSteps()}</div>
              </Popup>

              <div className="post-job-options">
                <div className="option-container">
                  <h4>1</h4>
                  <h6>Create Account</h6>
                </div>
                <div className="option-container">
                  <h4>2</h4>
                  <h6>Post Job</h6>
                </div>
                <div className="option-container">
                  <h4>3</h4>
                  <h6>Select Resume's & Hire</h6>
                </div>
              </div>
            </div>

            <div className="landing-page-content container mb-5 p-5">
              <h2>Haven't found the perfect candidate yet?</h2>
              <p>Perfect Post for the Perfect Candidate.</p>
              <div className="skeleton-content mb-4">
                <div className="desktop-text">
                  <h5>Intern's Candidate</h5>
                  <p>Get intern candidates</p>
                </div>
                <SkeletonContainer />
                <div className="mobile-text">
                  <h5>Intern's Candidate</h5>
                  <p>Get intern candidates</p>
                </div>
              </div>

              <div className="skeleton-content mb-4">
                <SkeletonContainer />
                <div style={{ textAlign: "center" }}>
                  <h5>Fresher Candidates</h5>
                  <p>Get Trained/Certified & Fresher candidates</p>
                </div>
              </div>

              <div className="skeleton-content mb-4">
                <div className="desktop-text">
                  <h5>Experience Candidates</h5>
                  <p>Select Experience candidate's with Advance Filter</p>
                </div>
                <SkeletonContainer />
                <div className="mobile-text">
                  <h5>Experience Candidates</h5>
                  <p>Select Experience candidate's with Advance Filter</p>
                </div>
              </div>
            </div>

            <div className="media-coverage-container">
              <h4>Product Recommendations</h4>
              <div className="carousel-container">
                <div className="carousel-card">
                  <Slider {...settings}>
                    <div>
                      <div className="recommendation-card">
                        <img
                          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "100%",
                            boxShadow: "0px 0px 10px 0px #ccc",
                            marginTop: "5px",
                          }}
                        />
                        <p style={{ textAlign: "start" }}>
                          They are logical and simple to work with, quietly
                          listen to your requirement, and provide you with
                          excellent counsel from a distance. At the core of
                          their customer-centricity is the automation technology
                          they use, which entails bringing the Talent closer to
                          each stage of the process.
                        </p>
                      </div>
                      <div className="user-role-container mt-3">
                        <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                        <p>Founder of Demo Technologies</p>
                      </div>
                    </div>
                    <div>
                      <div className="recommendation-card">
                        <img
                          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "100%",
                            boxShadow: "0px 0px 10px 0px #ccc",
                            marginTop: "5px",
                          }}
                        />
                        <p style={{ textAlign: "start" }}>
                          They are logical and simple to work with, quietly
                          listen to your requirement, and provide you with
                          excellent counsel from a distance. At the core of
                          their customer-centricity is the automation technology
                          they use, which entails bringing the Talent closer to
                          each stage of the process.
                        </p>
                      </div>
                      <div className="user-role-container mt-3">
                        <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                        <p>Founder of Demo Technologies</p>
                      </div>
                    </div>
                    <div>
                      <div className="recommendation-card">
                        <img
                          src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1678802253~exp=1678802853~hmac=7ee8e42d48509b8eb6f7cdfcb4b505a2048d44c09c79e90ff0460f3133224223"
                          style={{
                            width: "100px",
                            height: "100px",
                            borderRadius: "100%",
                            boxShadow: "0px 0px 10px 0px #ccc",
                            marginTop: "5px",
                          }}
                        />
                        <p style={{ textAlign: "start" }}>
                          They are logical and simple to work with, quietly
                          listen to your requirement, and provide you with
                          excellent counsel from a distance. At the core of
                          their customer-centricity is the automation technology
                          they use, which entails bringing the Talent closer to
                          each stage of the process.
                        </p>
                      </div>
                      <div className="user-role-container mt-3">
                        <h6 style={{ fontWeight: "600" }}>Nilesh Ranjan</h6>
                        <p>Founder of Demo Technologies</p>
                      </div>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>

            <div className="media-coverage-container">
              <h4 className="mb-3">Media Coverage</h4>
              <div className="carousel-container">
                <div className="carousel-card">
                  <Slider {...settings}>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                    <div>
                      <a href="">
                        <img
                          src="https://img.freepik.com/free-vector/tiny-people-searching-business-opportunities_74855-19928.jpg?w=1380&t=st=1678801388~exp=1678801988~hmac=b59f7c1ce0a7d8492213ac8a906d3b102361d3977b4d03631ab3703c3ae28b66"
                          style={{ width: "100%" }}
                        />
                      </a>
                    </div>
                  </Slider>
                </div>
              </div>
            </div>
          </>
        )
    }
  }

  return (
    <>
      {/*Header*/}
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 pt-3 ">
          <Container>
            <p className="website-name">Website</p>{" "}
            <p
              className="website-name"
              style={{ marginLeft: "20px", cursor: "pointer" }}
            >
              Find Resume
            </p>
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
                  {/*<Link to="/employee/home" className="fs-5 mr-5 nav-link">
                    Home
                  </Link>*/}
                  <Link to="/employee/post-job" className="fs-5 nav-link">
                    Post Job
                  </Link>
                  <Link
                    to="/employee/dashboard/active-posts"
                    className="fs-5 nav-link"
                  >
                    Dashboard
                  </Link>

                  <Link
                    to="/employee/create-account/step-1"
                    className="fs-5 nav-link"
                  >
                    Create Account
                  </Link>

                  <Theme />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div className="employee-post-job-container">{renderEmployeeHome()}</div>

      {/*Footer*/}
      <footer className="employee-unregistered-footer">
        <div className="footer-details">
          <ul className="footer-sub-container">
            <h5 className="footer-heading">Product</h5>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              About us
            </li>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              Media
            </li>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              Blog
            </li>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              Privacy Policy
            </li>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              Terms & Condition
            </li>
            <li
              className="footer-link"
              onClick={(e) => setActiveLink(e.target.textContent)}
            >
              Contact us
            </li>
          </ul>

          <ul className="footer-sub-container">
            <h5 className="footer-heading">Sales & Enquires</h5>
            <li className="footer-link">Sales@demo.com</li>
            <li className="footer-link">Startup Hiring</li>
            <li className="footer-link">Enterprise Hiring</li>
            <li className="footer-link">91-8888-8888-88</li>
          </ul>

          <ul className="footer-sub-container">
            <h5 className="footer-heading">Employers</h5>
            <li className="footer-link">Post a Job</li>
            <li className="footer-link">FAQ</li>
          </ul>

          <ul className="footer-sub-container">
            <h5 className="footer-heading">Candidate</h5>
            <li className="footer-link">Find a Job</li>
          </ul>
        </div>
        <div className="footer-social-media">
          <p style={{ marginBottom: "20px" }}>Connect with us</p>
          <div className="social-media-container">
            <FaLinkedinIn className="footer-icon" />
            <FaFacebookF className="footer-icon" />
            <FaInstagram className="footer-icon" />
            <FaTwitter className="footer-icon" />
            <FaYoutube className="footer-icon" />
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-bottom-text">
            All rights reserved © 2023 Bytelap Technologies Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  )
}

export default EmployeeUnregistered
