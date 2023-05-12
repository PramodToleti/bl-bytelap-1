import Cookies from "js-cookie"
import { useState } from "react"
import { Button } from "react-bootstrap"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { Link, useHistory } from "react-router-dom"

const customStyles = {
  content: {
    maxWidth: "300px", // Set max width of the modal
    maxHeight: "300px", // Set max height of the modal
    margin: "auto", // Center align the modal horizontally
    borderRadius: "8px", // Add border radius to give a rounded corner look
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Add shadow for a popup effect
    display: "flex", // Add display flex for centering content and buttons
    flexDirection: "column", // Set flex direction to column for stacking content and buttons
    justifyContent: "center", // Center align content and buttons horizontally
    alignItems: "center", // Center align content and buttons vertically
    padding: "20px", // Add padding to the modal content
  },
  h2: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "30px", // Add margin bottom to the heading
  },
  buttonContainer: {
    display: "flex", // Add display flex for centering buttons
    gap: "10px", // Add gap between buttons
  },
  button: {
    backgroundColor: "#007BFF", // Set background color for the buttons
    color: "#FFF", // Set text color for the buttons
    padding: "10px 20px", // Add padding to the buttons
    borderRadius: "4px", // Add border radius to the buttons
    cursor: "pointer", // Add cursor pointer for hover effect
    border: "none", // Remove button border
    outline: "none", // Remove button outline
    transition: "background-color 0.3s", // Add transition for smooth hover effect
    display: "grid",
    placeItems: "center",
  },
  buttonNo: {
    backgroundColor: "#DC3545", // Set background color for the No button
  },
}

const EmployeeFooter = (props) => {
  const isRegistered = props.isRegistered
  const history = useHistory()

  const handleFindJob = () => {
    if (isRegistered) {
      setIsOpen(true)
    } else {
      history.push("/login", { isRegistered })
    }
  }

  return (
    <>
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
                  ? history.push("/employee/post-job")
                  : history.push("/employee/create-account/step-1")
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
            {!isRegistered ? (
              <li
                className="footer-link"
                onClick={() => {
                  history.push("/candidate/create-account/step-1")
                  window.scrollTo(0, 0)
                }}
              >
                Find a Job
              </li>
            ) : (
              <Popup
                trigger={<li className="footer-link">Find a Job</li>}
                modal
                nested
                className="logout-popup"
                closeOnDocumentClick={false}
              >
                {(close) => (
                  <div>
                    <h2 style={customStyles.h2}>
                      Are you sure you want to Logout?
                    </h2>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "15px",
                      }}
                    >
                      <button
                        onClick={() => {
                          history.replace("/login", { isRegistered })
                          Cookies.remove("employeeToken")
                          close()
                        }}
                        style={customStyles.button}
                      >
                        Yes
                      </button>
                      <button
                        onClick={() => {
                          close()
                        }}
                        style={{
                          ...customStyles.button,
                          ...customStyles.buttonNo,
                        }}
                      >
                        No
                      </button>
                    </div>
                  </div>
                )}
              </Popup>
            )}
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

export default EmployeeFooter
