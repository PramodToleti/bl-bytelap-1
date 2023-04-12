import { Form } from "react-bootstrap"
import { useState } from "react"
import { useLocation } from "react-router-dom"
import "./index.css"
import TextArea from "antd/es/input/TextArea"
import ChooseFile from "../../../../assets/ChooseFile"
import CandidateFooter from "../../CandidateFooter"
import HomeHeader from "../../CandidateHome"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { Link } from "react-router-dom"
import Theme from "../../../../assets/Theme"

const ReportIssue2 = () => {
  const location = useLocation()
  const isRegistered = location.state?.isRegistered
  const [fileName, setFileName] = useState("Choose File")

  const handleChange = (event) => {
    setFileName(event.target.files[0].name)
  }

  const handleIssueSubmit = (e) => {
    e.preventDefault()
    e.stopPropagation()
    const form = e.currentTarget
    if (form.checkValidity() === false) {
      e.preventDefault()
      e.stopPropagation()
    }
    form.classList.add("was-validated")
  }

  return (
    <>
      {isRegistered ? (
        <HomeHeader />
      ) : (
        ["sm"].map((expand) => (
          <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
            <Container>
              <p className="website-name">Website</p>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header className="dark-mode-active" closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Website
                  </Offcanvas.Title>
                </Offcanvas.Header>

                <Offcanvas.Body className="dark-mode-active">
                  <div className="justify-content-end flex-grow-1 nav-link-container">
                    <Link
                      to="/login/candidate"
                      style={{
                        textDecoration: "none",
                        marginRight: "5px",
                        color: "#333333",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Login
                    </Link>
                    <Link
                      to="/candidate/create-account/step-1"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Candidate
                    </Link>
                    <Link
                      to="/employee/home"
                      style={{
                        marginRight: "8px",
                        color: "#333333",
                        textDecoration: "none",
                        marginTop: "8px",
                        fontSize: "18px",
                      }}
                    >
                      Employer / Post Job
                    </Link>
                    <Theme />
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))
      )}
      <div className="container report-container pt-5 pb-5">
        <div className="issue-container">
          <h2 className="mb-4" align="center">
            Report
          </h2>
          <p>We will revert to the specified email address in 24 hours</p>

          <div className="container card rounder border p-5 issue-form-container m-0 mt-2">
            <Form onSubmit={handleIssueSubmit}>
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>
                  <span style={{ color: "red" }}>*</span> Name:{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide your Name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail2" className="mb-3">
                <Form.Label>
                  <span style={{ color: "red" }}>*</span> Email:{" "}
                </Form.Label>
                <Form.Control type="email" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid Email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail3" className="mb-3">
                <Form.Label>Mobile No : </Form.Label>
                <Form.Control type="number" placeholder="" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail4" className="mb-3">
                <Form.Label>
                  <span style={{ color: "red" }}>*</span> Subject/Concern:{" "}
                </Form.Label>
                <Form.Control type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid subject.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail5" className="mb-5">
                <Form.Label>
                  <span style={{ color: "red" }}>*</span> Details of Concern:{" "}
                </Form.Label>
                <TextArea rows={6} type="text" placeholder="" required />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" className="mb-3 mt-3">
                {/* <Form.Label>Attach Screenshot :</Form.Label>
                <ChooseFile /> */}

                <div className="d-flex flex-direction-row">
                  <Form.Label className="mr-2">Attach Screenshot :</Form.Label>

                  <label htmlFor="file-input" className="issue-choose-file">
                    {fileName}
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    style={{ display: "none" }}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>

              <div className="d-flex justify-content-center">
                <button className="btn btn-primary" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>

      <CandidateFooter isRegistered={isRegistered} />
    </>
  )
}

export default ReportIssue2
