import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"

import EmployeeHome from "../../../EmployeeHome"

import "./index.css"
import { useState } from "react"

function ActiveJobFresher() {
  const [activeType, setActiveType] = useState("")
  const [lgShow, setLgShow] = useState(false)

  const handleActiveType = (e) => {
    setActiveType(e.target.textContent)
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <EmployeeHome />
      <div style={{ padding: "10px" }}>
        <div className="col-lg-12 col-md-12   mb-4 p-2   p-3 mb-5   rounded ">
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
              <p
                className={
                  activeType === "Interested" ? "activeType mt-4" : "mt-4"
                }
              >
                Interested
              </p>
              <p
                className={
                  activeType === "Shortlisted" ? "activeType mt-4" : "mt-4"
                }
              >
                Shortlisted
              </p>
              <p className={activeType === "Hire" ? "activeType mt-4" : "mt-4"}>
                Hire{" "}
              </p>
              <p
                className={
                  activeType === "Not Interested" ? "activeType mt-4" : "mt-4"
                }
              >
                {" "}
                Not Interested
              </p>
            </div>

            <div
              style={{
                fontSize: "17px",
                fontWeight: "400",
              }}
              className="col-lg-10 col-md-10 search-course-right   mb-0  p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
            >
              <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-0 p-0       border-secondary rounded container reveal  p-3 mb-0    rounded border border-secondary">
                <Form.Group
                  className="mb-0 mt-0 fs-10"
                  controlId="formBasicText"
                >
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
                          checked={true}
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

              <Form.Group
                as={Col}
                md="6"
                className="mb-3 mt-4 "
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <Form.Select>
                  <option> Select Post</option>
                  <option> React JS </option>
                  <option>PHP developer</option>
                </Form.Select>

                <Form.Control type="text" placeholder="Search by Name" />

                <h5>Filter</h5>
              </Form.Group>

              <p className="mt-3">89 applications</p>

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

              <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-4       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <h4>Nilesh</h4>
                    <p>React JS Developer</p>
                  </div>
                  <div>
                    <p className="location">
                      <ImLocation style={{ fontSize: "20px", color: "grey" }} />{" "}
                      Indore, MP
                    </p>
                  </div>
                </div>

                <div className="mt-3">
                  <div>
                    <p>
                      Cover Letter : &nbsp;&nbsp;&nbsp; I have all the desired
                      skills and I have very strong back-end knowledge also . I
                      am quick learner , positive attitude , highly dedicated
                      positive .I am Eager and passionate about the new as well
                      with challenges task.
                    </p>
                  </div>
                </div>

                <div className="mt-3 training-header">
                  Trained/Certified:
                  <div>
                    <h6>React js internship at Bytelap Technologies</h6>
                    <p style={{ fontSize: "14px" }}>Jan 2023 - Mar 2023</p>
                  </div>
                </div>

                <div className="mt-3 portfolio-header-application">
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
                    Ekart
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
                    Wekart
                  </a>
                </div>

                <div className="mt-3 location-header">
                  Preferred Location:
                  <div>Indore, Pune, Mumbai, Bangalore, Chennai, Thane</div>
                </div>

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
                  <p className="availability">
                    Availability:{" "}
                    <span className="availability-header">
                      I can join immediately within a week
                    </span>
                  </p>
                </div>
                <div className="mt-3"></div>
                <div>
                  <div className="interested-btn-container">
                    <Button
                      variant="success"
                      size="sm"
                      className=" mt-3"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Interested
                    </Button>{" "}
                    <Button
                      variant="primary"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Shortlisted
                    </Button>
                    <Button
                      variant="primary"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Hire
                    </Button>{" "}
                    <Button
                      variant="danger"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Not Interested
                    </Button>{" "}
                    <Button variant="light" className=" mt-3" size="sm">
                      Call
                    </Button>{" "}
                    <Button
                      variant="link"
                      className=" mt-3"
                      size="sm"
                      onClick={() => setLgShow(true)}
                    >
                      View Resume
                    </Button>
                  </div>
                </div>

                <div>
                  <div className="interested-btn-container-desktop">
                    <div className="btns-container">
                      <Button
                        variant="success"
                        size="sm"
                        className="mt-3"
                        onClick={(e) => handleActiveType(e)}
                      >
                        Interested
                      </Button>{" "}
                      <Button
                        variant="primary"
                        className=" mt-3"
                        size="sm"
                        onClick={(e) => handleActiveType(e)}
                      >
                        Shortlisted
                      </Button>{" "}
                      <Button
                        variant="primary"
                        className=" mt-3"
                        size="sm"
                        onClick={(e) => handleActiveType(e)}
                      >
                        Hire
                      </Button>
                      <Button
                        variant="danger"
                        className=" mt-3"
                        size="sm"
                        onClick={(e) => handleActiveType(e)}
                      >
                        Not Interested
                      </Button>{" "}
                    </div>
                    <div>
                      <Button variant="light" className=" mt-3" size="sm">
                        Call
                      </Button>{" "}
                      <Button
                        variant="link"
                        className=" mt-3"
                        size="sm"
                        onClick={() => setLgShow(true)}
                      >
                        View Resume
                      </Button>
                    </div>
                  </div>
                </div>

                <Link
                  to="/employee/dashboard/active-posts/job/fresher/view-applicant"
                  className="nav-link"
                >
                  <div style={{ display: "flex", justifyContent: "end" }}>
                    <p className="mt-4" style={{ color: "blue" }}>
                      View Application
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  )
}

export default ActiveJobFresher
