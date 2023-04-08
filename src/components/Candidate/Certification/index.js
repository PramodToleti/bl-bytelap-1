import { useState } from "react"

import HomeHeader from "../CandidateHome"
import CandidateFooter from "../CandidateFooter"

import "./index.css"
import { Form } from "react-bootstrap"
import { Link } from "react-router-dom"

const Certification = () => {
  const [activeRadio, setActiveRadio] = useState("all")

  const handleRadioChange = (e) => {
    setActiveRadio(e.target.value)
  }

  const careerDetails = [
    {
      title: "Digital Marketing",
      about:
        "Launch Your Career in Digital Marketing: Learn Essential Skills and Strategies",
      type: "digitalMarketing",
    },
    {
      title: "SEO",
      about: "Unlock Your SEO Potential",
      type: "digitalMarketing",
    },
    {
      title: "React JS",
      about:
        "Learn to Build Dynamic User Interfaces and Launch Your Front-End Development Career",
      type: "programming",
    },
    {
      title: "Angular JS",
      about: "Learn AngularJS and Build Powerful Web Applications",
      type: "programming",
    },
    {
      title: "Node JS",
      about: "Build Dynamic Web Applications with Node.js",
      type: "programming",
    },
    {
      title: "MERN Stack",
      about:
        "Build Dynamic Web Applications with MongoDB, Express, React, and Node.js",
      type: "programming",
    },
    {
      title: "MEAN Stack",
      about:
        "Build Dynamic Web Applications with MongoDB, Express, Angular, and Node.js",
      type: "programming",
    },
  ]

  const activeCertification = careerDetails.filter((each) => {
    if (activeRadio === "all") {
      return each
    } else {
      return each.type === activeRadio
    }
  })

  return (
    <>
      <HomeHeader />
      <div className="certification-container container pt-5 pb-5">
        <div className="header-description card rounder w-100  p-4">
          <p className="certification-header">
            Become a certified with hand's on real world practical project and
            get a paid Internship/Placement in a reputed companies with Website.
          </p>

          <p className="benefits-heading">
            What are the benefits you will get?
          </p>
          <ul className="benefits-container">
            <li>Hands-on practical project experience</li>
            <li>Industry-relevant curriculum</li>
            <li>Get Certification</li>
            <li>Paid internship oppurtunities</li>
            <li>Free Profile Boost worth 499</li>
          </ul>
        </div>
        <div className="enroll-container">
          <p className="enroll-text">
            Internship Opportunities with Top Companies - Get Certified with Us
            Enroll Now
          </p>
        </div>

        <div className="certification-cards-container">
          <div className="certificate-filter mb-3">
            <Form className="filter-form mb-3">
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Check
                  type="radio"
                  name="radioFilter"
                  value="all"
                  id="radioAll"
                  label="All"
                  checked={activeRadio === "all"}
                  onChange={handleRadioChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Check
                  type="radio"
                  name="radioFilter"
                  value="digitalMarketing"
                  id="radioDigitalMarketing"
                  label="Digital Marketing"
                  checked={activeRadio === "digitalMarketing"}
                  onChange={handleRadioChange}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Check
                  type="radio"
                  name="radioFilter"
                  value="programming"
                  id="radioProgramming"
                  label="Programming"
                  checked={activeRadio === "programming"}
                  onChange={handleRadioChange}
                />
              </Form.Group>
            </Form>
          </div>

          <div className="career-details-container mt-5">
            {activeCertification.map((each) => (
              <Link to={`/candidate/certification/${each.type}`}>
                <div className="career-card">
                  <div className="career-card-header">
                    <h5 className="mb-3">{each.title}</h5>
                    <p className="mb-4">{each.about}</p>
                  </div>
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-light"
                      style={{ fontSize: "12px" }}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CandidateFooter />
    </>
  )
}

export default Certification
