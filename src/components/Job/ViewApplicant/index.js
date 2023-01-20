import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import EmployeeHome from "../../EmployeeHome"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { Link } from "react-router-dom"

import "./index.css"

function ViewApplicant() {
  return (
    <>
      <EmployeeHome />

      <div
        className="col-lg-12 col-md-12 search-course-right  p-2      rounded container reveal  p-2  rounded "
        style={{ backgroundColor: "#ffffff" }}
      >
        <p style={{ display: "flex", gap: "10px" }}>
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
      <div
        className="col-lg-12 col-md-12 search-course-right   mb-0 mt-2 p-4       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{
          height: "550px",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div
          style={{ overflow: "auto", maxHeight: "440px" }}
          className="applicant-card"
        >
          <div>
            <h1 className="resume-username">Nilesh</h1>
            <p className="resume-job-title">Android developer</p>
          </div>
          <div>
            <p>
              Skill's:{" "}
              <span style={{ marginRight: "15px", marginLeft: "5px" }}>
                React Native
              </span>
              <span style={{ marginRight: "15px" }}>Node js</span>
              <span style={{ marginRight: "13px" }}>SQL</span>
            </p>
          </div>
          <div>
            <h1 className="resume-side-heading">Qualification: </h1>
            <p>BE [CS]</p>
          </div>
          <div>
            <h1 className="resume-side-heading">Cover Letter:</h1>
            <p>
              Eager and passionate marketing professional with a background in
              branding, digit marketing and advertising. Driven team player with
              strong.
            </p>
          </div>
          <div>
            <h1 className="resume-side-heading">About:</h1>
            <p>I have enough skills to grab this position.</p>
            <ul>
              <li>I have done multiple projects.</li>
              <li>
                I have learned react js, react native in my college duration
              </li>
              <li>During college work as a team excutive</li>
            </ul>
          </div>
          <div>
            <div>
              <h1 className="resume-side-heading">Project</h1>
              <span>https://www.project.com</span>
              <p>
                I worked on this project as a back-end developer and contributed
                to testing department.
              </p>
              <span>https://www.project1.com</span>
              <p>I built all the web pages to this project</p>
              <h1 className="resume-side-heading">Achievements</h1>
              <p>First prize in quize competition</p>
              <p>View certificate</p>
            </div>
            <div>
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
                marginTop: "25px",
              }}
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
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                maxWidth: "350px",
                marginTop: "25px",
                gap: "10px",
              }}
            >
              <div>
                <p>Interested</p>
              </div>
              <div>
                <p>Shortlisted</p>
              </div>
              <p>Not Interested</p>
            </div>
            <div>
              <p>Call</p>
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ textDecoration: "underline" }}>Resume</p>
          </div>
          <div>
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
                <AiOutlineLeft className="mt-3" />
              </div>
              <div style={{ cursor: "pointer" }}>
                <AiOutlineRight className="mt-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewApplicant
