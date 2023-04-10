import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"

import "./index.css"

const CandidateFooter = (props) => {
  const isRegistered = props.isRegistered
  const history = useHistory()

  return (
    <footer className="employee-unregistered-footer mt-4">
      <div className="footer-details">
        <ul className="footer-sub-container">
          <h5 className="footer-heading">Product</h5>
          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candidate/about-us", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            About us
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candidate/media", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Media
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candiate/blog", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Blog
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candidate/privacy-policy", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Privacy Policy
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candidate/terms-and-condition", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Terms & Condition
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/candidate/contact-us", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Contact us
          </li>

          <li
            className="footer-link privacy-policy"
            onClick={() => {
              history.push("/report-issue", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Report Issue
          </li>
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Candidate</h5>
          <li
            className="footer-link"
            onClick={() => {
              isRegistered
                ? history.push("/candidate", { isRegistered })
                : history.push("/login", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Find a Job
          </li>
          {!isRegistered && (
            <li
              className="footer-link"
              onClick={() => {
                isRegistered
                  ? history.push("/candidate", { isRegistered })
                  : history.push("/candidate/create-account/step-1", {
                      isRegistered,
                    })
                window.scrollTo(0, 0)
              }}
            >
              Create Account
            </li>
          )}
          <li
            className="footer-link"
            onClick={() => {
              history.push("/candidate/career", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Career
          </li>
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Jobs By Places</h5>
          <li className="footer-link">Jobs in Indore</li>
          <li className="footer-link">Jobs in Gwallor</li>
          <li className="footer-link">Jobs in Jabalpur</li>
          <li className="footer-link">Jobs in Ujjain</li>
          <li className="footer-link">Jobs in Dewas</li>
          <li className="footer-link">Jobs in Madhya Pradesh</li>
        </ul>

        <ul className="footer-sub-container">
          <h5 className="footer-heading">Employers</h5>
          <li
            className="footer-link"
            onClick={() => {
              history.push("/employee/home", { isRegistered })
              window.scrollTo(0, 0)
            }}
          >
            Post a Job
          </li>

          <li
            className="footer-link"
            onClick={() => {
              history.push("/employee/create-account/step-1", {
                isRegistered,
              })
              window.scrollTo(0, 0)
            }}
          >
            Create Account
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

export default CandidateFooter
