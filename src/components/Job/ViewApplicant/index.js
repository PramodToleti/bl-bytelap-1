import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import EmployeeHome from "../../EmployeeHome"
import { Link } from "react-router-dom"

import "./index.css"
import DashboardHeader from "../../Dashboard/DashboardHeader"

function ViewApplicant() {
  return (
    <>
      <EmployeeHome />

      <div className="col-lg-12 col-md-12 search-course-right   mb-4 p-2 bg-light text-dark  rounded container reveal  p-3 mb-5 bg-white rounded ">
        <p style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/employee/dashboard/active-posts"
            style={{ marginBottom: "0", marginBottom: "20px" }}
            className="nav-link"
          >
            Dashboard
          </Link>
          {`> View Applicant's`}
        </p>

        <div className="d-flex justify-content-around">
          <div
            style={{ height: "58rem", width: "", marginRight: "13px" }}
            className="col-lg-2 col-md-2 search-course-right mr-3  mb-0 side-bar-container p-2 pl-4 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary"
          >
            <h5 className="mt-3">Applied 147</h5>
            <p className="mt-4">Interested</p>
            <p className="mt-4">Shortlisted</p>
            <p className="mt-4">Hire </p>
            <p className="mt-4"> Not Interested</p>
          </div>

          <div
            style={{
              height: "58rem",
              width: "",
              fontSize: "17px",
              fontWeight: "400",
              overflow: "auto",
            }}
            className="col-lg-10 col-md-10 search-course-right   mb-0  p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary"
          >
            <div className="dashboard-nav-mobile">
              <DashboardHeader />
            </div>
            <div className="col-lg-12 col-md-12 search-course-right dashboard-options  mb-0 mt-0 p-0 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-0 bg-secondary rounded border border-secondary">
              <Form.Group className="mb-0 mt-0 fs-10" controlId="formBasicText">
                <Stack direction="horizontal" gap={3}>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-0">
                      <Form.Check
                        inline
                        label="Internship"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />

                      <Form.Check
                        className="ms-auto"
                        inline
                        label="Fresher"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        className="ms-auto"
                        inline
                        label="Experience"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                    </div>
                  ))}
                </Stack>
              </Form.Group>
            </div>

            <Form.Group as={Col} md="3" className="mb-3 mt-4 ">
              <Form.Select>
                <option> Select Post</option>
                <option> React JS </option>
                <option>PHP developer</option>
              </Form.Select>
            </Form.Group>

            <p className="mt-3">89 applications</p>
            <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-4 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
              <div>
                <h1 className="resume-username">Nilesh</h1>
                <p className="resume-job-title">Android developer</p>
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
                <h1 className="resume-side-heading">Cover Letter:</h1>
                <p>
                  Eager and passionate marketing professional with a background
                  in branding, digit marketing and advertising. Driven team
                  player with strong.
                </p>
                <h1 className="resume-side-heading">About:</h1>
                <p>I have enough skills to grab this position.</p>
                <ul>
                  <li>I have done multiple projects.</li>
                  <li>
                    I have learned react js, react native in my college duration
                  </li>
                  <li>During college work as a team excutive</li>
                </ul>
                <h1 className="resume-side-heading">Project</h1>
                <span>https://www.project.com</span>
                <p>
                  I worked on this project as a back-end developer and
                  contributed to testing department.
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
                    alignItems: "flex-start",
                    gap: "10px",
                    marginTop: "25px",
                  }}
                >
                  <h1 className="resume-side-heading" style={{ margin: "0" }}>
                    Available:{" "}
                  </h1>
                  <p>Available for 3-Months duration for full time position</p>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ViewApplicant
