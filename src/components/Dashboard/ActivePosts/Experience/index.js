import "./index.css"
import React, { useState } from "react"
import { Button } from "react-bootstrap"

const Experience = (props) => {
  const { onJobCardClick } = props
  const [isJobOpened, setJobOption] = useState(false)
  const [showResume, setShowResume] = useState(false)

  const renderResume = () => (
    <div>
      <h1 className="resume-username">Nilesh</h1>
      <p className="resume-job-title">Android developer</p>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "320px",
          justifyContent: "space-between",
          marginTop: "30px",
        }}
      >
        <p>Experience</p>
        <p>Expectation</p>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "320px",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <p>2 Yrs</p>
        <p>₹ Not disclosed</p>
      </div>
      <p>
        Skill's:{" "}
        <span style={{ marginRight: "15px", marginLeft: "5px" }}>
          React Native
        </span>
        <span style={{ marginRight: "15px" }}>Node js</span>
        <span style={{ marginRight: "13px" }}>SQL</span>
      </p>
      <h1 className="resume-side-heading">Qualification: </h1>
      <p>BE [CS]</p>
      <div style={{ display: "flex", alignItems: "center", marginTop: "30px" }}>
        <h1
          className="resume-side-heading"
          style={{ marginTop: "0", fontSize: "16px" }}
        >
          Current designation -{" "}
        </h1>
        <p style={{ marginBottom: "4px", marginLeft: "8px" }}>
          React js developer
        </p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <h1
          className="resume-side-heading"
          style={{ marginTop: "0", fontSize: "16px" }}
        >
          Current company -{" "}
        </h1>
        <p style={{ marginBottom: "4px", marginLeft: "8px" }}>Nelson Inc</p>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {" "}
        <h1
          className="resume-side-heading"
          style={{ marginTop: "0", fontSize: "16px" }}
        >
          Previous designation -{" "}
        </h1>
        <p style={{ marginBottom: "4px", marginLeft: "8px" }}>
          React js developer
        </p>
      </div>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "25px" }}
      >
        {" "}
        <h1
          className="resume-side-heading"
          style={{ marginTop: "0", fontSize: "16px" }}
        >
          Previous company -{" "}
        </h1>
        <p style={{ marginBottom: "4px", marginLeft: "8px" }}>Nelson Inc</p>
      </div>

      <h1 className="resume-side-heading" style={{ marginTop: "0" }}>
        Cover Letter:
      </h1>

      <p>
        Eager and passionate marketing professional with a background in
        branding, digit marketing and advertising. Driven team player with
        strong.
      </p>
      <h1 className="resume-side-heading">About:</h1>
      <p>I have enough skills to grab this position.</p>
      <ul>
        <li>I have done multiple projects.</li>
        <li>I have learned react js, react native in my college duration</li>
        <li>During college work as a team excutive</li>
      </ul>
      <h1 className="resume-side-heading">Project</h1>
      <span>https://www.project.com</span>
      <p>
        I worked on this project as a back-end developer and contributed to
        testing department.
      </p>
      <span>https://www.project1.com</span>
      <p>I built all the web pages to this project</p>
      <h1 className="resume-side-heading">Achievements</h1>
      <p>First prize in quize competition</p>
      <p>View certificate</p>
      <h1 className="resume-side-heading">Language:</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>English</p>
        <p>Hindi</p>
        <p>Marathi</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <h1
          className="resume-side-heading"
          style={{ marginTop: "0", fontSize: "17px" }}
        >
          Notice Period:{" "}
        </h1>
        <p style={{ marginBottom: "4px", marginLeft: "8px" }}>
          Current company notice period 45 days
        </p>
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
        <p>Interested</p>
        <p>Shortlisted</p>
        <p>Not Interested</p>
      </div>
      <p>Call</p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <p style={{ textDecoration: "underline" }}>Resume</p>
      </div>
    </div>
  )

  const renderApplication = () => (
    <>
      <p>89 applications</p>
      <Button
        variant="outline-dark"
        style={{ width: "100%", marginBottom: "10px" }}
      >
        Select Post
      </Button>
      <p>Applied</p>
      <div className="application">
        <h1 className="user-name">Nilesh</h1>
        <p className="job-title">Android developer</p>
        <div
          style={{
            display: "flex",
            width: "300px",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <p>Experience</p>
          <p>Expectation</p>
        </div>
        <div
          style={{
            display: "flex",
            width: "320px",
            justifyContent: "space-between",
            marginBottom: "6px",
          }}
        >
          <p>2 Yrs</p>
          <p>₹ Not disclosed</p>
        </div>
        <p className="skills">
          Skill's:{" "}
          <span style={{ marginRight: "15px", marginLeft: "5px" }}>
            React Native
          </span>
          <span style={{ marginRight: "15px" }}>Node js</span>
          <span style={{ marginRight: "13px" }}>SQL</span>
        </p>
        <p className="portfolio" style={{ marginBottom: "5px" }}>
          Portfolio:{" "}
          <span style={{ color: "Blue", marginLeft: "8px" }}>
            {" "}
            https://www.project.com
          </span>{" "}
        </p>
        <p style={{ color: "Blue", marginBottom: "15px", marginTop: "0" }}>
          {" "}
          https://www.project1.com
        </p>{" "}
        <p className="availability">
          Availability:{" "}
          <span style={{ marginLeft: "8px" }}>
            3 Month Full-Time Position for Immediate Joiners
          </span>
        </p>
        <div className="interested-btn-container">
          <Button
            variant="success"
            style={{ fontSize: "12px", minHeight: "40px" }}
          >
            Interested
          </Button>
          <Button
            variant="primary"
            style={{ fontSize: "12px", minHeight: "40px" }}
          >
            Shortlisted
          </Button>
          <Button
            variant="warning"
            style={{ fontSize: "12px", minHeight: "40px" }}
          >
            Not Interested
          </Button>
        </div>
        <div className="call-container">
          <p>Call</p>
          <p style={{ textDecoration: "underline" }}>Resume</p>
        </div>
        <p>View Application</p>
      </div>
    </>
  )

  return isJobOpened ? (
    <div
      className="application-container"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setShowResume(true)
      }}
    >
      {showResume ? renderResume() : renderApplication()}
    </div>
  ) : (
    <div
      className="job-container"
      onClick={() => {
        setJobOption(true)
        onJobCardClick()
      }}
    >
      <div className="job-header">
        <h1 className="job-name">Android developer</h1>
        <div className="action-btn-container">
          <button type="button" className="action-btn">
            Open
          </button>
          <button type="button" className="action-btn">
            Action
          </button>
        </div>
      </div>
      <h1 className="view-applicants">View Applicant's</h1>
      <p className="time">1 day ago</p>
    </div>
  )
}

export default Experience
