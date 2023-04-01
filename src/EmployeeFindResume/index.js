import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"
import Modal from "react-bootstrap/Modal"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import { useState } from "react"
import Container from "react-bootstrap/Container"
import { Card } from "react-bootstrap"
import { FaTimes } from "react-icons/fa"
import { RxHamburgerMenu } from "react-icons/rx"
import Popup from "reactjs-popup"
import { Document, Page } from "react-pdf"
import Offcanvas from "react-bootstrap/Offcanvas"

import JobSearchField from "../JobSearchField"
import JobLocationField from "../JobLocationField"
import EmployeeHome from "../components/EmployeeHome"

import "./index.css"
import "reactjs-popup/dist/index.css"
import Internship from "./Internship"
import Fresher from "./Fresher"
import Experience from "./Experience"
import Intern from "./AdvancedFilter/Intern"
import Fresh from "./AdvancedFilter/Fresh"
import Exp from "./AdvancedFilter/Exp"

const EmployeeFindResume = (props) => {
  const [activeType, setActiveType] = useState("")
  const [lgShow, setLgShow] = useState(false)
  const [activeResume, setActiveResume] = useState("Internship")

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handleTeamClick = () => {
    offcanvasRef.current.hide()
  }

  console.log(show)

  const handleActiveType = (e) => {
    setActiveType(e.target.textContent)
  }

  let registerData = JSON.parse(localStorage.getItem("registerData"))

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
        return <Internship />

      case "Fresher":
        return <Fresher />

      case "Experience":
        return <Experience />

      default:
        return null
    }
  }

  const renderAdvancedFilter = () => {
    switch (activeResume) {
      case "Internship":
        return <Intern />
      case "Fresher":
        return <Fresh />
      case "Experience":
        return <Exp />

      default:
        null
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

              <Popup
                modal
                closeOnDocumentClick
                trigger={
                  <button
                    style={{
                      color: "blue",
                      fontWeight: "500",
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Advanced Filter
                  </button>
                }
              >
                {(close) => (
                  <div className="popup">
                    <div className="d-flex justify-content-end">
                      <button className="close" onClick={close}>
                        Close
                      </button>
                    </div>
                    <div className="container">{renderAdvancedFilter()}</div>
                  </div>
                )}
              </Popup>
            </Form.Group>
          </div>

          <div className="col-lg-12 col-md-12">
            <div className="main-resume-container">
              <div
                style={{
                  height: "47rem",
                  width: "",
                  borderTopLeftRadius: "10px",
                }}
                className="col-lg-2 col-md-2 search-course-right mr-3  mb-0 side-bar-container       border-secondary  container reveal  p-4     border border-secondary"
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
                  <Button variant="light" onClick={handleShow}>
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
                </Container>

                <Offcanvas
                  show={show}
                  onHide={handleClose}
                  style={{
                    width: "55%",
                    borderTopRightRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title></Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
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
                        activeType === "Hire" ? "activeType mt-4" : "mt-4"
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
                          onClick={handleClose}
                        >
                          {" "}
                          Team{" "}
                        </p>
                      }
                      modal
                      nested
                      closeOnDocumentClick={!show}
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
                  </Offcanvas.Body>
                </Offcanvas>

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
                  height: "47rem",
                  borderTopRightRadius: "10px",
                }}
                className="col-lg-10 col-md-10 search-course-right   mb-0    find-resume-container    border-secondary  container reveal  p-1     border border-secondary"
              >
                <p className="desktop-resume-count">2038 resumes</p>
                <hr className="desktop-resume-count" />
                <div
                  style={{
                    height: "45rem",
                    overflow: "scroll",
                    paddingBottom: "50px",
                  }}
                >
                  {renderActiveResume()}
                  {renderActiveResume()}
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
