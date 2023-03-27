import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import { useState } from "react"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

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
            <hr className="desktop-resume-count" />
            <div style={{ maxWidth: "680px" }}>
              {internData.length !== 0 ? (
                internData.map((data, index) => (
                  <div
                    className="application col-lg-12 col-md-12 search-course-right   mb-0 mt-2 p-3       border-secondary rounded container reveal  p-3  rounded border border-secondary"
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
                          className="mb-1"
                        >
                          <p style={{ marginRight: "10px", fontWeight: "300" }}>
                            Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          </p>
                          <div className="perks-mobile">
                            {data.skills.length > 3 ? (
                              <>
                                <h6 className="preview-perks">
                                  {data.skills[0]}
                                </h6>
                                <h6 className="preview-perks">
                                  {data.skills[1]}
                                </h6>
                                <h6 className="preview-perks">
                                  {data.skills[2]}{" "}
                                </h6>{" "}
                                ...
                              </>
                            ) : (
                              data.skills.map((each, i) => (
                                <h6 className="preview-perks" key={i}>
                                  {each}
                                </h6>
                              ))
                            )}
                          </div>
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
                            Availability : &nbsp; {data.availability}
                          </p>
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
                            variant="outline-success"
                            size="sm"
                            className=" mt-3"
                            onClick={(e) => handleActiveType(e)}
                          >
                            Interested
                          </Button>{" "}
                          <Button
                            variant="outline-primary"
                            className=" mt-3"
                            size="sm"
                            onClick={(e) => handleActiveType(e)}
                          >
                            Shortlisted
                          </Button>
                          <Button
                            variant="outline-secondary"
                            className=" mt-3"
                            size="sm"
                            onClick={(e) => handleActiveType(e)}
                          >
                            Hire
                          </Button>{" "}
                          <Button
                            variant="outline-secondary"
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
                              variant="outline-success"
                              size="sm"
                              className="mt-3"
                              onClick={(e) => handleActiveType(e)}
                            >
                              Interested
                            </Button>{" "}
                            <Button
                              variant="outline-primary"
                              className=" mt-3"
                              size="sm"
                              onClick={(e) => handleActiveType(e)}
                            >
                              Shortlisted
                            </Button>{" "}
                            <Button
                              variant="outline-secondary"
                              className=" mt-3"
                              size="sm"
                              onClick={(e) => handleActiveType(e)}
                            >
                              Hire
                            </Button>
                            <Button
                              variant="outline-secondary"
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
                          <p
                            className="mt-4"
                            style={{ color: "blue", marginBottom: "0px" }}
                          >
                            View Application
                          </p>
                        </div>
                      </Link>
                      <p style={{ fontSize: "12px", margin: "0px" }}>
                        Update: 1 day ago
                      </p>
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
    <>
      <EmployeeHome />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div className=" mt-2">
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
                      Search CV
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

              <h6 style={{ color: "blue", cursor: "pointer" }}>
                {" "}
                Advanced Filter
              </h6>
            </Form.Group>
          </div>

          <div className="col-lg-12 col-md-12    rounded ">
            <div className="main-resume-container">
              <div
                style={{ height: "35rem", width: "" }}
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

              <div className="custom-select">
                <Navbar bg="light" expand="lg">
                  <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="me-auto p-2 pt-3">
                        <p
                          onClick={(e) => handleActiveType(e)}
                          className={
                            activeType === "Interested" ? "activeType" : ""
                          }
                          style={{ cursor: "pointer", fontWeight: "400" }}
                        >
                          Interested
                        </p>
                        <p
                          onClick={(e) => handleActiveType(e)}
                          className={
                            activeType === "Shortlisted" ? "activeType " : ""
                          }
                          style={{ cursor: "pointer", fontWeight: "400" }}
                        >
                          Shortlisted
                        </p>
                        <p
                          onClick={(e) => handleActiveType(e)}
                          className={activeType === "Hire" ? "activeType" : ""}
                          style={{ cursor: "pointer", fontWeight: "400" }}
                        >
                          Hire
                        </p>
                        <p
                          onClick={(e) => handleActiveType(e)}
                          className={
                            activeType === "Not Interested" ? "activeType" : ""
                          }
                          style={{ cursor: "pointer", fontWeight: "400" }}
                        >
                          Not Interested
                        </p>
                      </Nav>
                    </Navbar.Collapse>
                  </Container>
                </Navbar>

                <p
                  style={{
                    marginBottom: "5px",
                    marginTop: "5px",
                    fontSize: "14px",
                  }}
                  className="p-2"
                >
                  2038 resumes
                </p>
              </div>

              <div
                style={{
                  fontSize: "17px",
                  fontWeight: "400",
                  height: "35rem",
                  overflow: "scroll",
                }}
                className="col-lg-10 col-md-10 search-course-right   mb-0        border-secondary rounded container reveal  p-1    rounded border border-secondary"
              >
                <p className="desktop-resume-count">2038 resumes</p>
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
    </>
  )
}

export default EmployeeFindResume
