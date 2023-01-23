import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import EmployeeHome from "../../EmployeeHome"
import { Link } from "react-router-dom"

import "./index.css"

function ActiveJob() {
  return (
    <div>
      <EmployeeHome />

      <div className="col-lg-12 col-md-12 search-course-right   mb-4 p-2    bg-light   rounded container reveal  p-3 mb-5   rounded ">
        <p style={{ display: "flex", gap: "10px" }}>
          <Link
            to="/employee/dashboard/active-posts"
            style={{ marginBottom: "0", marginBottom: "20px" }}
            className="nav-link"
          >
            Dashboard
          </Link>
          {`> CV applicant's`}
        </p>
        <div className="d-flex justify-content-around">
          <div
            style={{ height: "58rem", width: "", marginRight: "13px" }}
            className="col-lg-2 col-md-2 search-course-right mr-3  mb-0 side-bar-container p-2 pl-4       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
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
            }}
            className="col-lg-10 col-md-10 search-course-right   mb-0  p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          >
            <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-0 p-0       border-secondary rounded container reveal  p-3 mb-0    rounded border border-secondary">
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
                        className=""
                        inline
                        label="Fresher"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        className=""
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

            <p className="mt-3">89 applications</p>

            <Form.Group as={Col} md="3" className="mb-3 mt-4 ">
              <Form.Select>
                <option> Select Post</option>
                <option> React JS </option>
                <option>PHP developer</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              as={Col}
              md="3"
              className="mb-3 mt-4"
              style={{ width: "120px" }}
            >
              <Form.Select className="custom-select">
                <option> Applied</option>
                <option> Interested </option>
                <option>Shortlisted</option>
                <option>Hire</option>
                <option>Not Interested</option>
              </Form.Select>
            </Form.Group>

            <Link
              to="/employee/dashboard/active-posts/job/view-applicant"
              className="nav-link"
            >
              <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-4       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
                <div>
                  <h4>Nilesh</h4>
                </div>
                <div className="mt-3">Android Developer</div>
                <div className="mt-3">
                  Skill's:{" "}
                  <span
                    style={{ marginRight: "15px" }}
                    className="skills-header"
                  >
                    React Native
                  </span>
                  <span style={{ marginRight: "15px" }}>Node js</span>
                  <span style={{ marginRight: "13px" }}>SQL</span>
                </div>
                <div className="mt-3">
                  Portfolio:{" "}
                  <a
                    href=""
                    style={{
                      color: "Blue",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    className="portfolio-header"
                  >
                    https://www.project.com
                  </a>
                  <a
                    href=""
                    style={{
                      color: "Blue",
                      marginBottom: "15px",
                      marginTop: "0",
                      marginLeft: "15px",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    https://www.project1.com
                  </a>
                </div>
                <div className="mt-3">
                  <p className="availability">
                    Availability:{" "}
                    <span style={{ marginLeft: "8px" }}>
                      3 Month Full-Time Position for Immediate Joiners and I am
                      highly motivated...
                      <span style={{ color: "blue" }}>See more</span>
                    </span>
                  </p>
                </div>
                <div className="mt-3"></div>
                <div>
                  <div className="interested-btn-container">
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
                  </div>
                </div>

                <div>
                  <p className="mt-4">View Application</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActiveJob
