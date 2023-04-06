import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"

const EmployeeFooter = (props) => {
  const isRegistered = props.isRegistered
  const history = useHistory()

  return (
    <footer className="employee-unregistered-footer">
      <div className="footer-details">
        <ul className="footer-sub-container">
          <h5 className="footer-heading">Product</h5>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/about-us", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            About us
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/media", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Media
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/blog", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Blog
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/privacy-policy", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Privacy Policy
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/terms-and-condition", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Terms & Condition
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/report-issue", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Report Issue
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/contact-us", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Contact us
          </li>
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Sales & Enquires</h5>
          <li className="footer-link">Sales@demo.com</li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/startup-hiring", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Startup Hiring
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/employee/enterprise-hiring", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Enterprise Hiring
          </li>
          <li className="footer-link">91-8888-8888-88</li>
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Employers</h5>
          <li
            className="footer-link"
            onClick={() => {
              isRegistered
                ? history.push("/employee")
                : history.push("/employee/home")
              window.scrollTo(0, 0)
            }}
          >
            Post a Job
          </li>
          <li className="footer-link">FAQ</li>
          {!isRegistered && (
            <li
              className="footer-link"
              onClick={() => {
                isRegistered
                  ? history.push("/employee")
                  : history.push("/employee/create-account/step-1")
              }}
            >
              Create Account
            </li>
          )}
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Candidate</h5>
          <li
            className="footer-link"
            onClick={() => {
              history.push("/login", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Find a Job
          </li>
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
  )
}

export default EmployeeFooter
