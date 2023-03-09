import EmployeeHome from "../../../EmployeeHome"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

import "./index.css"

function ViewApplicantIntern() {
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
            to="/employee/dashboard/active-posts/job/internship"
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
          <h4 className="mb-3">Android Developer</h4>
          <div className="skills-container mb-3">
            <h4 className="mb-3" style={{ width: "100px" }}>
              Skill's:{" "}
            </h4>

            <h6 className="preview-skills">React Native</h6>

            <h6 className="preview-skills">Node JS</h6>

            <h6 className="preview-skills">SQL</h6>
          </div>

          <MdLocationOn style={{ color: "grey", fontSize: "30px" }} />
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
            strong. Ihave enough skils to grab this position
          </p>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Projects: </h4>
          <ul className="projects-list">
            <li>
              <a href="www.1.com" style={{ textDecoration: "none" }}>
                Ecommerce
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
              <a href="www.2.com" style={{ textDecoration: "none" }}>
                Clothing
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

export default ViewApplicantIntern
