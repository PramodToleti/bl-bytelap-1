import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import EmployeeHome from "../../EmployeeHome"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"
import StickyBox from "react-sticky-box"

import { Link } from "react-router-dom"

import "./index.css"

function ViewApplicant() {
  return (
    <div style={{ padding: "15px", marginBottom: "20px" }}>
      <EmployeeHome />

      {/*Dashboard Header*/}
      <div
        className="col-lg-12 col-md-12 search-course-right pt-3 mb-3 bg-light rounded container reveal   rounded "
        style={{
          position: "sticky",
          top: "0",
          zIndex: "1",
          backgroundColor: "#eee",
          color: "#000000",
        }}
      >
        <p style={{ display: "flex", gap: "10px", marginBottom: "0px" }}>
          <Link
            to="/employee/dashboard/active-posts"
            style={{ marginBottom: "0", marginBottom: "20px" }}
            className="nav-link"
          >
            Dashboard
          </Link>
          <Link
            to="/employee/dashboard/active-posts/job"
            className="nav-link"
          >{`> CV Applicant's`}</Link>
          {`> Nilesh`}
        </p>
      </div>
      {/*Applicant*/}

      <div>
        <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark    rounded container reveal  p-3   rounded border ">
          <div>
            <h1 className="resume-username">Nilesh</h1>
            <p className="resume-job-title">Android developer</p>
          </div>
          <div className="skills">
            <p>
              Skill's: <span className="skill-name">React Native</span>
              <span className="skill-name">Node js</span>
              <span className="skill-name">SQL</span>
            </p>
          </div>
        </div>
        <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark         rounded container reveal  p-3   rounded border     ">
          <h1 className="resume-side-heading">
            Qualification:{" "}
            <span
              style={{
                fontWeight: "400",
                marginLeft: "10px",
                fontSize: "18px",
              }}
            >
              BE [CS]
            </span>
          </h1>
        </div>
        <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark         rounded container reveal  p-3   rounded border     ">
          <h1 className="resume-side-heading">Cover Letter:</h1>
          <p>
            Eager and passionate marketing professional with a background in
            branding, digit marketing and advertising. Driven team player with
            strong.
          </p>
        </div>
        <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark mb-3        rounded container reveal  p-3   rounded border     ">
          <h1 className="resume-side-heading">About:</h1>
          <p>I have enough skills to grab this position.</p>
          <ul style={{ listStyleType: "none" }}>
            <li style={{ marginBottom: "9px" }}>
              I have done multiple projects.
            </li>
            <li style={{ marginBottom: "9px" }}>
              I have learned react js, react native in my college duration
            </li>
            <li style={{ marginBottom: "9px" }}>
              During college work as a team excutive
            </li>
          </ul>
        </div>
        <div>
          <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark  mb-2   rounded container reveal  p-3   rounded border ">
            <h1 className="resume-side-heading">Project</h1>
            <span style={{ color: "blue", cursor: "pointer" }}>
              https://www.project.com{" "}
              {<HiOutlineExternalLink className="link-icon" />}
            </span>
            <p style={{ marginTop: "10px" }}>
              I worked on this project as a back-end developer and contributed
              to testing department.
            </p>
            <span style={{ color: "blue", cursor: "pointer" }}>
              https://www.project1.com{" "}
              {<HiOutlineExternalLink className="link-icon" />}
            </span>
            <p style={{ marginTop: "10px" }}>
              I built all the web pages to this project
            </p>
          </div>
          <div className="applicant-card col-lg-12 col-md-12 search-course-right  mb-3  p-3  bg-light text-dark  mb-3       rounded container reveal  p-3   rounded border     ">
            <h1 className="resume-side-heading">Achievements</h1>
            <p>First prize in quize competition</p>
            <p>View certificate</p>
          </div>
          <div className="applicant-card col-lg-12 col-md-12 search-course-right mb-3   p-3  bg-light text-dark  mb-2       rounded container reveal  p-3   rounded border     ">
            <div>
              <h1 className="resume-side-heading">Language:</h1>
            </div>
            <div style={{ display: "flex", gap: "20px" }}>
              <p>English</p>
              <p>Hindi</p>
              <p>Marathi</p>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
            }}
            className="applicant-card col-lg-12 col-md-12 search-course-right mb-3   bg-light text-dark         rounded container reveal  p-3   rounded border     "
          >
            <div>
              <h1 className="resume-side-heading" style={{ margin: "0" }}>
                Available:{" "}
              </h1>
            </div>
            <div>
              <p>Available for 3-Months duration for full time position</p>
            </div>
          </div>
        </div>
      </div>
      {/*Btns container*/}
      {/*<div
        className="col-lg-12 col-md-12 search-course-right   mb-2 pb-2          rounded container reveal    rounded border     "
        style={{}}
      >
        <div className="interested-btn-container-applicant">
          <Button variant="success" size="sm" className=" mt-3">
            Interested
          </Button>{" "}
          <Button variant="primary" className=" mt-3" size="sm">
            Shortlisted
          </Button>{" "}
          <Button variant="danger" className=" mt-3" size="sm">
            Not interested
          </Button>{" "}
          <Button variant="light" className=" mt-3" size="sm">
            Call
          </Button>{" "}
          <Button variant="link" className=" mt-3" size="sm">
            Resume
          </Button>
          <div>
            <AiOutlineLeft className="mt-3 arrow-btns" />
          </div>
          <div style={{ cursor: "pointer" }}>
            <AiOutlineRight className="mt-3 arrow-btns" />
          </div>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="mobile-arrow-container">
          <div>
            <AiOutlineLeft className="mt-3 " />
          </div>
          <div style={{ cursor: "pointer" }}>
            <AiOutlineRight className="mt-3 " />
          </div>
        </div>
            </div>*/}
    </div>
  )
}

export default ViewApplicant
