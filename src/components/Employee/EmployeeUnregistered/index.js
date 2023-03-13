import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"

import "bootstrap/dist/css/bootstrap.min.css"
import Theme from "../../../Theme"

import "./index.css"

function EmployeeUnregistered() {
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 pt-3 ">
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

      <div className="post-job-container">
        <div className="post-job-content">
          <Link to="/employee/post-job">
            <Button>Post Job</Button>
          </Link>
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
      </div>

      <footer className="employee-unregistered-footer">
        <div className="footer-details">
          <ul className="footer-sub-container">
            <h5 className="footer-heading">Product</h5>
            <li className="footer-link">About us</li>
            <li className="footer-link">Media</li>
            <li className="footer-link">Blog</li>
            <li className="footer-link">Privacy Policy</li>
            <li className="footer-link">Terms & Condition</li>
            <li className="footer-link">Contact us</li>
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
