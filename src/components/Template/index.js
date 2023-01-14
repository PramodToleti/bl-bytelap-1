import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Form, Card, Row, Col, FormControl, Image } from "react-bootstrap"
import { RiAccountCircleLine } from "react-icons/ri"
import { TbSchool } from "react-icons/tb"

import "./index.css"

const Template = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    title: "",
    address: "",
    email: "",
    mobileNumber: "",
    personDetails: "",
    image: null,
    show: false,
    schoolName: "",
    degree: "",
    startDate: "",
    endDate: "",
    city: "",
    description: "",
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const renderResume = () => (
    <div className="preview-container">
      <div className="user-details-container">
        {image && (
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            rounded
            className="image-card"
          />
        )}
        <div className="user-details">
          <h1 className="user-name">
            {state.firstName} {state.lastName}
          </h1>
          <p className="job-title">{state.title}</p>
          <p className="address">{state.address}</p>
          <p className="mobile-no">{state.mobileNumber}</p>
          <a
            href="https://mail.google.com/mail/"
            target={"_blank"}
            className="email"
          >
            {state.email}
          </a>
        </div>
      </div>
      <div className="resume-body">
        <div className="profile-container">
          {state.personDetails !== "" && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                marginTop: "5px",
              }}
            >
              <RiAccountCircleLine className="heading-icon" />
              <h1 className="profile-heading">Profile</h1>
            </div>
          )}
          <p className="profile-description">{state.personDetails}</p>
        </div>
        {state.schoolName !== "" && (
          <div className="education-container">
            {state.schoolName !== "" && (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                  marginTop: "5px",
                }}
              >
                <TbSchool className="heading-icon" />
                <h1 className="profile-heading">Education</h1>
              </div>
            )}
            <p className="school-name">{state.schoolName}</p>
            {state.startDate !== "" && state.endDate !== "" && (
              <p className="school-date">
                {new Date(state.startDate).toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "short",
                })}{" "}
                -{" "}
                {new Date(state.endDate).toLocaleDateString("en-US", {
                  year: "2-digit",
                  month: "short",
                })}
              </p>
            )}
            <p className="profile-description">{state.description}</p>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="template-container">
      <div className="details-container">
        <Card className="mb-3 p-3">
          <Card.Body>
            <Form>
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                  marginBottom: "20px",
                }}
              >
                About
              </h1>
              <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Upload a Photo</Form.Label>
                  <FormControl type="file" onChange={handleImageChange} />
                </Form.Group>
              </Col>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      placeholder="Enter your last name"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Job Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      placeholder="Enter your Job Title"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      placeholder="Enter your Address"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="tel"
                      name="mobileNumber"
                      placeholder="Enter your mobile number"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label> Personal Details</Form.Label>
                  <Form.Control
                    style={{ height: "70px" }}
                    type="text"
                    name="personDetails"
                    onChange={handleChange}
                  />
                </Form.Group>
              </Col>
              <Form.Group>
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Roboto",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Education
                </h1>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>School Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="schoolName"
                        placeholder="Enter your school name"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Degree</Form.Label>
                      <Form.Control
                        type="text"
                        name="degree"
                        placeholder="Enter your degree"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="startDate"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="endDate"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        type="text"
                        name="city"
                        placeholder="Enter your city"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <Form.Control
                        style={{ height: "70px" }}
                        type="text"
                        name="description"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              <Form.Group className="mb-3">
                <h1
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Roboto",
                    marginTop: "30px",
                    marginBottom: "20px",
                  }}
                >
                  Skills
                </h1>
              </Form.Group>
            </Form>
          </Card.Body>
          <div className="demo-btn-container">
            <Button variant="primary" onClick={handleShow}>
              Preview
            </Button>

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>{renderResume()}</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </Card>
      </div>
      <div className="resume-container">{renderResume()}</div>
    </div>
  )
}

export default Template
