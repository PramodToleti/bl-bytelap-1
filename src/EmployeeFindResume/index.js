import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import { useState, useEffect, useRef } from "react"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import Popup from "reactjs-popup"
import { Document, Page } from "react-pdf"

import JobSearchField from "../JobSearchField"
import JobLocationField from "../JobLocationField"
import EmployeeHome from "../components/EmployeeHome"

import "./index.css"
import "reactjs-popup/dist/index.css"

const EmployeeFindResume = (props) => {
  const [activeType, setActiveType] = useState("")
  const [lgShow, setLgShow] = useState(false)
  const [activeResume, setActiveResume] = useState("Internship")

  const [showCard, setShowCard] = useState(false)

  const handleCardClose = () => {
    setShowCard(false)
  }

  const handleActiveType = (e) => {
    setActiveType(e.target.textContent)
  }

  let registerData = JSON.parse(localStorage.getItem("registerData"))

  const internData = registerData.internship
  const fresherData = registerData.fresher
  const experienceData = registerData.experience

  console.log(props.userResume)

  const jobTitle = "React JS Developer"
  const coverLetter =
    "I have desired all the skills and i have very strong back-end knowledge also.I have all the desired skills  I am eager and passionate about new task.."
  const skills = "React, JavaScript, HTML, CSS, Git"
  const portfolio = "Ekart , Wekart "
  const available =
    "Yes i am available for full time and can start job from tommorow. "
  const update = " 1 day ago "

  if (registerData === null) {
    return (
      <>
        <EmployeeHome />
        <p>
          No Jobs Available. Please{" "}
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
  }

  const renderActiveResume = () => {
    switch (activeResume) {
      case "Internship":
        return (
          <>
            <div style={{ maxWidth: "680px" }}>
              {internData.length !== 0 ? (
                internData.map((data, index) => (
                  <div className="application">
                    <Card className="col-lg-5 col-md-5 search-course-right main-details-card  mb-0 mt-0 p-0 bg-light text-dark  border-light rounded container reveal  p-0 mb-0 bg-white  border border-light card-details">
                      <Card.Body className="card-size">
                        <Card.Title>Nilesh</Card.Title>
                        <Card.Text>{data.jobTitle}</Card.Text>
                        <Card.Text className=" text-muted ">
                          CoverLetter &nbsp; : &nbsp; {data.coverLetter}{" "}
                          <Card.Text></Card.Text>
                        </Card.Text>
                        <Card.Text className="perks-mobile text-muted">
                          Skills &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          &nbsp;&nbsp;{" "}
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
                        </Card.Text>
                        <Card.Text className="perks-desktop text-muted">
                          Skills &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          &nbsp;&nbsp;{" "}
                          {data.skills.map((each) => (
                            <p className="preview-skills">{each}</p>
                          ))}
                        </Card.Text>
                        <Card.Text className=" text-muted">
                          Portfolio &nbsp; &nbsp;: &nbsp;&nbsp;{" "}
                          {data.projectDetails.map((each) => (
                            <a
                              href=""
                              style={{
                                color: "Blue",
                                textDecoration: "none",
                                fontWeight: "400",
                              }}
                            >
                              {each.title} &nbsp;&nbsp;&nbsp;
                            </a>
                          ))}
                        </Card.Text>
                        <Card.Text className=" text-muted">
                          Available &nbsp; : &nbsp;&nbsp; {data.availability}
                        </Card.Text>
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
                        <Link
                          to="/employee/dashboard/active-posts/job/internship/view-applicant"
                          className="nav-link"
                        >
                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
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
                      </Card.Body>
                    </Card>
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
        return (
          <>
            <hr className="desktop-resume-count" />
            <div style={{ maxWidth: "680px" }}>
              {fresherData.map((data) => (
                <div className="application">
                  <div className="col-lg-12 col-md-12 search-course-right  card-size mb-0 mt-4 p-4 container reveal  p-3 ">
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
                        <p className="text-muted">
                          <span>Cover Letter </span> : &nbsp;&nbsp;&nbsp;{" "}
                          <span className="text-muted">{data.coverLetter}</span>
                        </p>
                      </div>
                    </div>

                    <div className="card-container-mobile">
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{ marginRight: "10px" }}
                          className="text-muted"
                        >
                          Training/Certified&nbsp;&nbsp;:
                        </p>
                        <div className="mt-1">
                          {data.training.map((each) => (
                            <>
                              <p
                                className="text-muted"
                                style={{ marginBottom: "5px" }}
                              >
                                {each.title} at {each.institute}
                              </p>
                              <p
                                style={{ fontSize: "14px" }}
                                className="text-muted"
                              >
                                {new Date(each.startDate).toLocaleString(
                                  "default",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}{" "}
                                -{" "}
                                {new Date(each.endDate).toLocaleString(
                                  "default",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                            </>
                          ))}
                        </div>
                      </div>

                      <div
                        style={{ display: "flex", flexWrap: "wrap" }}
                        className="mb-1"
                      >
                        <p
                          style={{ marginRight: "10px" }}
                          className="text-muted"
                        >
                          Portfolio &nbsp;&nbsp;&nbsp;&nbsp;:
                        </p>
                        {data.projectDetails.map((each) => (
                          <a
                            href={each.url}
                            style={{
                              color: "Blue",
                              textDecoration: "none",
                              marginTop: "3px",
                            }}
                          >
                            {each.title} &nbsp;&nbsp;&nbsp;
                          </a>
                        ))}
                      </div>

                      <div
                        style={{ display: "flex", flexWrap: "wrap" }}
                        className="text-muted mb-3"
                      >
                        <p className="text-muted">
                          Preferred Location&nbsp;:&nbsp;{" "}
                        </p>
                        {data.preferredLocation.map((each) => (
                          <p className="text-muted">{each.value}, &nbsp;</p>
                        ))}
                      </div>

                      <div
                        style={{ display: "flex", flexWrap: "wrap" }}
                        className="text-muted perks-mobile mb-3"
                      >
                        <p style={{ marginRight: "10px" }}>
                          Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                        </p>
                        {data.skills.length > 3 ? (
                          <>
                            <h6 className="preview-perks">{data.skills[0]}</h6>
                            <h6 className="preview-perks">{data.skills[1]}</h6>
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

                      <div
                        style={{ display: "flex", flexWrap: "wrap" }}
                        className="mb-3"
                      >
                        <p
                          style={{ marginRight: "10px" }}
                          className="text-muted"
                        >
                          Availability &nbsp;: &nbsp;{data.availability}
                        </p>
                      </div>
                    </div>

                    <div className="card-container">
                      <p className="mt-1 text-muted">Training/Certified</p>
                      <div className="mt-1">:</div>
                      <div className="course-f">
                        <div className="mt-1">
                          {data.training.map((each) => (
                            <>
                              <p
                                className="text-muted"
                                style={{ marginBottom: "5px" }}
                              >
                                {each.title} at {each.institute}
                              </p>
                              <p
                                style={{ fontSize: "14px" }}
                                className="text-muted"
                              >
                                {new Date(each.startDate).toLocaleString(
                                  "default",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}{" "}
                                -{" "}
                                {new Date(each.endDate).toLocaleString(
                                  "default",
                                  {
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}
                              </p>
                            </>
                          ))}
                        </div>
                      </div>
                      <div className="skill-header-f text-muted">
                        <p className="text-muted">Skills</p>
                      </div>
                      <div className="colon">:</div>
                      <div className="react-f text-muted">
                        {data.skills.map((each) => (
                          <p className="preview-skills">{each}</p>
                        ))}
                      </div>
                      <div className="portfolio-f text-muted">Portfolio</div>
                      <div className="colon">:</div>
                      <div className="ekart-f">
                        {data.projectDetails.map((each) => (
                          <a
                            href={each.url}
                            style={{
                              color: "Blue",
                              textDecoration: "none",
                              marginTop: "3px",
                            }}
                          >
                            {each.title} &nbsp;&nbsp;&nbsp;
                          </a>
                        ))}
                      </div>

                      <div className="preferred-f text-muted">
                        Preferred Location
                      </div>
                      <div className="colon">:</div>
                      <div className="location-f text-muted">
                        {data.preferredLocation.map((each) => (
                          <span className="text-muted">
                            {each.value}, &nbsp;
                          </span>
                        ))}
                      </div>
                      <div className="available-f text-muted">Available</div>
                      <div className="colon">:</div>
                      <div className="yes-f text-muted">
                        {data.availability}
                      </div>
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
              ))}
            </div>
          </>
        )

      case "Experience":
        return <p>No data found</p>

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
                <Popup
                  trigger={
                    <p className="pl-2" style={{ cursor: "pointer" }}>
                      {" "}
                      Team{" "}
                    </p>
                  }
                  modal
                  nested
                >
                  <div className="container p-4">
                    <div classname="container">
                      <div className="d-flex justify-content-center">
                        <p>Team Access</p>
                      </div>
                      <Form.Group className="mt-3 mb-4">
                        <Form.Control
                          type="text"
                          placeholder="Enter Email ID"
                        />
                      </Form.Group>
                      <div className="d-flex justify-content-end">
                        <Button variant="primary">Invite</Button>
                      </div>
                    </div>
                  </div>
                </Popup>
              </div>

              <div className="custom-select">
                <Container>
                  <Row>
                    <Col>
                      <div className="d-flex justify-content-start">
                        <Button
                          variant="light"
                          onClick={() => setShowCard(true)}
                        >
                          <div
                            style={{
                              border: "1px solid grey",
                              borderRadius: "5px",
                              padding: "5px",
                              cursor: "pointer",
                              width: "50px",
                            }}
                          >
                            <RxHamburgerMenu size={24} color="grey" />
                          </div>
                        </Button>
                      </div>
                      <Card
                        className={
                          showCard ? "message-card" : "hide-message-card"
                        }
                      >
                        <Card.Header>
                          <div className="d-flex justify-content-end">
                            <Button variant="light" onClick={handleCardClose}>
                              <FaTimes size={24} />
                            </Button>
                          </div>
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            <p
                              className={
                                activeType === "Interested" ? "activeType" : ""
                              }
                              style={{ cursor: "pointer" }}
                              onClick={(e) => handleActiveType(e)}
                            >
                              Interested
                            </p>
                            <p
                              className={
                                activeType === "Shortlisted"
                                  ? "activeType mt-4"
                                  : "mt-4"
                              }
                              style={{ cursor: "pointer" }}
                              onClick={(e) => handleActiveType(e)}
                            >
                              Shortlisted
                            </p>
                            <p
                              className={
                                activeType === "Hire"
                                  ? "activeType mt-4"
                                  : "mt-4"
                              }
                              style={{ cursor: "pointer" }}
                              onClick={(e) => handleActiveType(e)}
                            >
                              Hire
                            </p>
                            <p
                              className={
                                activeType === "Not Interested"
                                  ? "activeType mt-4"
                                  : "mt-4"
                              }
                              style={{ cursor: "pointer" }}
                              onClick={(e) => handleActiveType(e)}
                            >
                              Not Interested
                            </p>
                            <hr />
                            <Popup
                              trigger={
                                <p
                                  className="pl-2"
                                  style={{ cursor: "pointer" }}
                                >
                                  {" "}
                                  Team{" "}
                                </p>
                              }
                              modal
                              nested
                            >
                              <div className="container p-3">
                                <div classname="container">
                                  <div className="d-flex justify-content-center">
                                    <p>Team Access</p>
                                  </div>
                                  <Form.Group className="mt-3 mb-4">
                                    <Form.Control
                                      type="text"
                                      placeholder="Enter Email ID"
                                    />
                                  </Form.Group>
                                  <div className="d-flex justify-content-end">
                                    <Button variant="primary">Invite</Button>
                                  </div>
                                </div>
                              </div>
                            </Popup>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>

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
                <hr className="desktop-resume-count" />
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
          <Modal.Body>
            <div>
              <Document file={props.userResume}>
                <Page pageNumber={1} />
              </Document>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  )
}

export default EmployeeFindResume
