import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useState } from "react"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import Slider from "react-slick"

import AboutUs from "../Employee/FooterLinks/AboutUs"
import Blog from "../Employee/FooterLinks/Blog"
import ContactUs from "../Employee/FooterLinks/ContactUs"
import Media from "../Employee/FooterLinks/Media"
import PrivacyPolicy from "../Employee/FooterLinks/PrivacyPolicy"
import TermsAndConditions from "../Employee/FooterLinks/TermsAndConditions"

import "./index.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const PostJob = () => {
  const [activeLink, setActiveLink] = useState(null)

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            <div className="post-job-content mb-5">
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
      <div className="employee-post-job-container">{renderEmployeeHome()}</div>

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

export default PostJob
