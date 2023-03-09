import EmployeeHome from "../../../EmployeeHome"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import "./index.css"

function ViewApplicantExperience() {
  return (
    <div style={{ padding: "15px", marginBottom: "20px" }}>
      <EmployeeHome />

      {/*Dashboard Header*/}
      <div
        className="col-lg-12 col-md-12 search-course-right pt-3 mb-3 rounded container reveal   rounded "
        style={{
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
            to="/employee/dashboard/active-posts/job/experience"
            className="nav-link"
          >{`> CV Applicant's`}</Link>
          {`> Nilesh`}
        </p>
      </div>
      {/*Applicant*/}
      <div>
        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h2 className="mb-4">Nilesh</h2>
          <h4 className="mb-3">React JS Developer</h4>
          <div className="role-container mb-3">
            <div style={{ display: "flex", gap: "20px" }} className="mt-2">
              <h5>Experience: </h5>

              <p>4.5 Years</p>

              <div style={{ display: "flex", gap: "10px" }}>
                <BiRupee style={{ color: "grey", fontSize: "25px" }} />
                <p>6 LPA</p>
              </div>
            </div>
          </div>
          <div className="skills-container mb-3">
            <h4 className="mb-3" style={{ marginRight: "20px" }}>
              Skill's:{" "}
            </h4>

            <h6 className="preview-skills">React Native</h6>

            <h6 className="preview-skills">Node JS</h6>

            <h6 className="preview-skills">SQL</h6>
          </div>
          <MdLocationOn style={{ color: "grey", fontSize: "30px" }} />{" "}
          <span style={{ color: "grey" }}>Indore, MP</span>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Cover Letter:</h4>
          <p className="mb-3" style={{ overflowWrap: "break-word" }}>
            Eager and passionate marketing professional with a background in
            branding, digital marketing and advertising. Driven team player with
            strong. Ihave enough skils to grab this position . I have done
            multiple projects .
          </p>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Experience</h4>
          <ul>
            <li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5>Senior Web Developer</h5>
                  <p>Bytelap Technologies, Indore</p>
                </div>
                <div>January 2019 - Present</div>
              </div>
              <div>
                <p>
                  Design the reliable offline apps for the field forces for
                  their daily reporting task Managing Play Store Account & bug
                  fixing with play storebeta testing & bug reports play
                  storebeta testing & bug reports play ..
                </p>
                <p>* Development of Java apis for the mobile application,</p>
                <p> * Recently completed A Android App with Kotlin .</p>
                <p> *Meanwhile worked on some React Native and Flutter apps.</p>
              </div>
            </li>

            <hr />

            <li>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h5>Junior Web Developer</h5>
                  <p>Creative Solutions, Pune</p>
                </div>
                <div>January 2018 - January 2019</div>
              </div>
              <div>
                <p>
                  Design the reliable offline apps for the field forces for
                  their daily reporting task Managing Play Store Account & bug
                  fixing with play storebeta testing & bug reports play
                  storebeta testing & bug reports play ..
                </p>

                <p>* Learn reliable and optimiced code techniques.</p>
                <p>* Learn to implement how to implement oop's concept</p>

                <p>
                  * Developed Firebase Cloud Function in Javascript & Typescript
                  .
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Projects: </h4>
          <ul className="projects-list">
            <li>
              <a href="www.exp.com" style={{ textDecoration: "none" }}>
                clothekart
              </a>
              <HiOutlineExternalLink style={{ color: "grey" }} />
            </li>
            <p
              style={{
                fontSize: "15px",
                marginTop: "14px",
                overflowWrap: "break-word",
              }}
            >
              I worked on this project as a back-end developer and contribute to
              testing department.
            </p>

            <li>
              <a href="www.exp.com" style={{ textDecoration: "none" }}>
                indikart
              </a>
              <HiOutlineExternalLink style={{ color: "grey" }} />
            </li>
            <p
              style={{
                fontSize: "15px",
                marginTop: "14px",
                overflowWrap: "break-word",
              }}
            >
              I built to this project all the web pages.
            </p>
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Internship Training / Course</h4>
          <ul className="internships-list">
            <li className="mb-3" style={{ width: "100%" }}>
              <div className="preview-date-container">
                <div>
                  <h6 style={{ fontSize: "18px" }}>Android Development</h6>
                  <p>Coderclub LLP</p>
                </div>
                <p style={{ fontSize: "15px", marginBottom: "10px" }}>
                  Jan 2022 - Mar 2022
                </p>
              </div>

              <a style={{ textDecoration: "none", color: "blue" }}>
                View Certificate
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Achievements / Awards & Recognition</h4>
          <ul className="internships-list">
            <li className="mb-3">
              <div
                className="achievements-container"
                style={{ maxWidth: "100%", wordBreak: "break-all" }}
              >
                <h6>First prize in quiz competetion</h6>
              </div>
              <a style={{ textDecoration: "none", color: "blue" }}>
                View Certificate
              </a>
            </li>
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Education:</h4>
          <ul>
            <li>
              <div className="preview-date-container">
                <div>
                  <h6>B-Tech, Information Technology(IT)</h6>
                  <p>Sushila Devi Bansal college of Technology, Indore</p>{" "}
                </div>

                <p style={{ fontSize: "15px" }}>Jan 2018 - Mar 2022</p>
              </div>
            </li>
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Languages:</h4>
          <div className="languages-list">
            <p>English</p>
            <p>Hindi</p>
            <p>Marati</p>
          </div>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div>
            <h4 className="mb-3">Available:</h4>
            <p>Actively looking for job and can join within a week</p>
          </div>
        </div>
      </div>

      {/*Btns container*/}
      <div>
        <div
          className="interested-btn-container-applicant"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
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
            View Resume
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ViewApplicantExperience
