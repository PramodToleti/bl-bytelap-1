import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import { useState } from "react"
import Popup from "reactjs-popup"

import JobSearchField from "../JobSearchField"
import JobLocationField from "../JobLocationField"
import EmployeeHome from "../components/EmployeeHome"

import "./index.css"
import "reactjs-popup/dist/index.css"

const EmployeeFindResume = () => {
  const [activeType, setActiveType] = useState("")
  const [lgShow, setLgShow] = useState(false)
  const [activeResume, setActiveResume] = useState("Internship")

  console.log(activeResume)

  const handleActiveType = (e) => {
    setActiveType(e.target.textContent)
  }

  let internData = JSON.parse(localStorage.getItem("registerData"))

  if (internData === null) {
    return (
      <>
        <EmployeeHome />
        <p>
          Not Jobs Available. Please{" "}
          <Link
            to="/employee"
            style={{
              color: "black",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            Go Back
          </Link>
        </p>
      </>
    )
  } else {
    internData = internData.internship
  }

  const renderActiveResume = () => {
    switch (activeResume) {
      case "Internship":
        return (
          <>
            <p
              style={{
                marginBottom: "5px",
                marginTop: "5px",
                fontSize: "14px",
              }}
            >
              89 applications
            </p>
            <div style={{ maxHeight: "350px", overflow: "scroll" }}>
              {internData.length !== 0 ? (
                internData.map((data, index) => (
                  <div
                    style={{ overflow: "scroll", maxHeight: "340px" }}
                    className="application col-lg-12 col-md-12 search-course-right   mb-0 mt-2 p-4       border-secondary rounded container reveal  p-3  rounded border border-secondary"
                    key={index}
                  >
                    <div className="">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <h4>Nilesh</h4>
                          <p>{data.jobTitle}</p>
                        </div>
                        <div>
                          <p className="location">
                            <ImLocation
                              style={{ fontSize: "20px", color: "grey" }}
                            />{" "}
                            Indore, MP
                          </p>
                        </div>
                      </div>
                      <div className="mt-3">
                        <div>
                          <p>
                            <span style={{ fontWeight: "300" }}>
                              Cover Letter:
                            </span>{" "}
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data.coverLetter}
                          </p>
                        </div>
                      </div>

                      <div className="card-container-mobile">
                        <div
                          style={{ display: "flex", flexWrap: "wrap" }}
                          className="mb-3"
                        >
                          <p style={{ marginRight: "10px", fontWeight: "300" }}>
                            Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          </p>
                          {data.skills.map((each) => (
                            <p className="preview-skills">{each}</p>
                          ))}
                        </div>

                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <p style={{ marginRight: "10px", fontWeight: "300" }}>
                            Portfolio &nbsp;&nbsp;&nbsp;:
                          </p>

                          {data.projectDetails.map((each) => (
                            <a
                              href=""
                              style={{
                                color: "Blue",
                                textDecoration: "none",
                                fontWeight: "500",
                              }}
                            >
                              {each.title} &nbsp;&nbsp;&nbsp;
                            </a>
                          ))}
                        </div>

                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          <p style={{ marginRight: "10px", fontWeight: "300" }}>
                            Availability :
                          </p>
                          <p>{data.availability}</p>
                        </div>
                      </div>
                      <div className="card-container">
                        <div
                          className="skill-header"
                          style={{ fontWeight: "300" }}
                        >
                          Skills
                        </div>
                        <div className="colon">:</div>
                        <div className="react">
                          {data.skills.map((each) => (
                            <p className="preview-skills">
                              {each} &nbsp;&nbsp;&nbsp;
                            </p>
                          ))}
                        </div>
                        <div
                          className="portfolio"
                          style={{ fontWeight: "300" }}
                        >
                          Portfolio
                        </div>
                        <div className="colon">:</div>
                        <div className="ekart">
                          {data.projectDetails.map((each) => (
                            <a
                              href=""
                              style={{
                                color: "Blue",
                                textDecoration: "none",
                                fontWeight: "500",
                              }}
                            >
                              {each.title} &nbsp;&nbsp;&nbsp;
                            </a>
                          ))}
                        </div>
                        <div
                          className="available"
                          style={{ fontWeight: "300" }}
                        >
                          Available
                        </div>
                        <div className="colon">:</div>
                        <div className="yes">{data.availability}</div>
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
                        to="/employee/dashboard/active-posts/job/internship/view-applicant"
                        className="nav-link"
                        onClick={console.log(index)}
                      >
                        <div style={{ display: "flex", justifyContent: "end" }}>
                          <p className="mt-4" style={{ color: "blue" }}>
                            View Application
                          </p>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-applications">
                  <h1>No Applications Found.</h1>
                </div>
              )}
            </div>
          </>
        )

      case "Fresher":
        return <p>Not data found</p>

      case "Experience":
        return <p>Not data found</p>

      default:
        return null
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <div style={{ padding: "10px" }} className="container mt-2">
        <div className="search-filter-container container">
          <div className="search-container">
            <Row className="mb-4">
              <Form.Group
                as={Col}
                md="4"
                className="mt-3"
                controlId="validationCustom03"
              >
                <InputGroup size="md">
                  <JobSearchField />
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="4"
                className="mt-3"
                controlId="validationCustom04"
              >
                <InputGroup size="md">
                  <JobLocationField />
                </InputGroup>
              </Form.Group>
              <Form.Group
                as={Col}
                md="2"
                className="mt-3"
                controlId="validationCustom04"
              >
                <div className="d-grid gap-3">
                  <Button variant="primary" size="md">
                    Search
                  </Button>
                </div>
              </Form.Group>
            </Row>
          </div>
          <Form.Group
            as={Col}
            md="4"
            className="mb-3 mt-4 "
            style={{
              display: "flex",
              gap: "15px",
              alignItems: "center",
            }}
          >
            <Form.Select
              style={{ maxWidth: "150px" }}
              onChange={(e) => setActiveResume(e.target.value)}
            >
              <option>Internship</option>
              <option>Fresher</option>
              <option>Experience</option>
            </Form.Select>

            <h6> Advanced Filter</h6>
          </Form.Group>
        </div>

        <div className="col-lg-12 col-md-12  p-3  rounded ">
          <div className="d-flex justify-content-around">
            <div
              style={{ height: "35rem", width: "", marginRight: "13px" }}
              className="col-lg-2 col-md-2 search-course-right mr-3  mb-0 side-bar-container pl-4       border-secondary rounded container reveal  p-3    rounded border border-secondary"
            >
              <p
                className={activeType === "Interested" ? "activeType" : ""}
                style={{ cursor: "pointer" }}
                onClick={(e) => handleActiveType(e)}
              >
                Interested
              </p>
              <p
                className={
                  activeType === "Shortlisted" ? "activeType mt-4" : "mt-4"
                }
                style={{ cursor: "pointer" }}
                onClick={(e) => handleActiveType(e)}
              >
                Shortlisted
              </p>
              <p
                className={activeType === "Hire" ? "activeType mt-4" : "mt-4"}
                style={{ cursor: "pointer" }}
                onClick={(e) => handleActiveType(e)}
              >
                Hire
              </p>
              <p
                className={
                  activeType === "Not Interested" ? "activeType mt-4" : "mt-4"
                }
                style={{ cursor: "pointer" }}
                onClick={(e) => handleActiveType(e)}
              >
                Not Interested
              </p>
              <hr />
              <p className="pl-2">Team</p>
            </div>

            <div
              style={{
                fontSize: "17px",
                fontWeight: "400",
                height: "35rem",
              }}
              className="col-lg-10 col-md-10 search-course-right   mb-0        border-secondary rounded container reveal  p-3    rounded border border-secondary"
            >
              <div className="custom-select">
                <Popup
                  trigger={
                    <button
                      style={{
                        background: "transparent",
                        border: "0",
                      }}
                    >
                      {" "}
                      Sort{" "}
                    </button>
                  }
                  position="bottom left"
                  offset={[0, 10]}
                >
                  <p>Interested</p>
                  <p>Shortlisted</p>
                  <p>Hire</p>
                  <p>Not Interested</p>
                </Popup>
              </div>

              {renderActiveResume()}
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

export default EmployeeFindResume
