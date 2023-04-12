import { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Form, Card, Row, Col, Image } from "react-bootstrap"

import CheckboxDropdown from "../../assets/CheckboxDropdowm"
import DynamicEducationForm from "../../assets/DynamicEducationForm"
import DynamicEmployementForm from "../../assets/DynamicEmployementForm"

import "./index.css"

const Template = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showTemplate, setShowTemplate] = useState(false)

  const handleShowTemplate = () => setShowTemplate(true)
  const handleCloseTemplate = () => setShowTemplate(false)

  const [image, setImage] = useState(null)

  const handleImageChange = (e) => {
    setImage(e.target.files[0])
  }

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    title: "",
    city: "",
    email: "",
    mobileNumber: "",
    professionalTitle: "",
    personDetails: "",
    image: null,
    show: false,
    schoolName: "",
    degree: "",
    branch: "",
    startDate: "",
    endDate: "",
    description: "",
    links: "",
    linkList: [],
    jobTitle: "",
    company: "",
    jobCity: "",
    empStartDate: "",
    empEndDate: "",
    schoolCity: "",
    course: "",
    courseStartDate: "",
    courseEndDate: "",
    institution: "",
    hobbies: "",
    hobbieList: [],
    selectedSkills: [],
    employementList: [],
  })

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectionChange = (selected) => {
    setState({
      ...state,
      selectedSkills: selected,
    })
  }

  const onAddLink = () => {
    if (state.links !== "") {
      setState({
        ...state,
        linkList: [...state.linkList, state.links],
      })
    }
  }

  const onAddHobby = () => {
    if (state.hobbies !== "") {
      setState({
        ...state,
        hobbieList: [...state.hobbieList, state.hobbies],
      })
    }
  }

  const onRemoveHobby = () => {
    const newList = state.hobbieList
    newList.pop()
    setState({
      ...state,
      hobbieList: [...newList],
    })
  }

  const onRemoveLink = () => {
    const newList = state.linkList
    newList.pop()
    setState({
      ...state,
      linkList: [...newList],
    })
  }

  console.log(state.employementList)

  const renderResume = () => (
    <div className="preview-container">
      <div className="user-details-container">
        {/*{image && (
          <Image
            src={URL.createObjectURL(image)}
            alt="Uploaded"
            rounded
            className="image-card"
          />
        )}*/}
        <div className="user-details">
          <h1 className="user-name">
            {state.firstName} {state.lastName}
          </h1>

          <div className="personal-details">
            <p className="user-city">{state.city}</p>
            <div>
              <p className="address">{state.address}</p>
              <p className="mobile-no">{state.mobileNumber}</p>
              <a
                href="https://mail.google.com/mail/"
                target={"_blank"}
                className="email"
                rel="noreferrer"
              >
                {state.email}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="resume-summary">
        <div style={{ width: "40%" }}>
          {state.title !== "" && <p className="job-title">{state.title}</p>}
          <p className="description">{state.description}</p>
        </div>
        <div style={{ width: "25%" }}>
          {state.selectedSkills.length !== 0 && (
            <>
              <p className="job-title">Skills</p>
              {state.selectedSkills.map((each) => (
                <li key={each.value} style={{ fontSize: "10px" }}>
                  {each.label}
                </li>
              ))}
            </>
          )}
        </div>
        <div style={{ width: "25%" }}>
          {state.linkList.length !== 0 && (
            <>
              <p className="job-title">Projects</p>
              {state.linkList.map((each) => (
                <a
                  key={each}
                  style={{
                    fontSize: "8px",
                    color: "blue",
                    textDecoration: "none",
                    wordBreak: "break-word",
                  }}
                >
                  {each}
                </a>
              ))}
            </>
          )}
        </div>
      </div>
      <div className="resume-employement">
        <div style={{ width: "55%" }}>
          {state.jobTitle !== "" && (
            <h1 className="employeement-heading">Employement History</h1>
          )}
          <p className="job-title">{state.jobTitle}</p>
          <p className="company-name">
            {state.company}, {state.jobCity}
          </p>
          {state.empStartDate !== "" && state.empEndDate !== "" && (
            <p className="school-date">
              {new Date(state.empStartDate).toLocaleDateString("en-US", {
                year: "2-digit",
                month: "short",
              })}{" "}
              -{" "}
              {new Date(state.empEndDate).toLocaleDateString("en-US", {
                year: "2-digit",
                month: "short",
              })}
            </p>
          )}
        </div>
        <div style={{ width: "50%" }}>
          {state.schoolName !== "" && (
            <h1 className="employeement-heading">Education</h1>
          )}
          {state.branch !== "" && state.degree !== "" && (
            <p className="job-title">{`${state.degree}(${state.branch})`}</p>
          )}
          <p className="company-name">
            {state.schoolName}, {state.schoolCity}
          </p>
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
        </div>
      </div>
      <div className="resume-courses">
        <div style={{ width: "55%" }}>
          {state.course !== "" && (
            <h1 className="employeement-heading">Courses</h1>
          )}
          <p className="job-title">{state.course}</p>
          <p className="company-name">{state.institution}</p>
          {state.courseStartDate !== "" && state.courseEndDate !== "" && (
            <p className="school-date">
              {new Date(state.courseStartDate).toLocaleDateString("en-US", {
                year: "2-digit",
                month: "short",
              })}{" "}
              -{" "}
              {new Date(state.courseEndDate).toLocaleDateString("en-US", {
                year: "2-digit",
                month: "short",
              })}
            </p>
          )}
        </div>
        <div style={{ width: "50%" }}>
          {state.hobbieList.length !== 0 && (
            <>
              <h1 className="employeement-heading">Hobbies</h1>
              {state.hobbieList.map((each) => (
                <li
                  key={each}
                  style={{
                    fontSize: "13px",
                    wordBreak: "break-word",
                  }}
                >
                  {each}
                </li>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <div className="template-container">
      <div className="details-container" style={{ width: "100%" }}>
        <Card className="mb-3 p-3" style={{ width: "100%" }}>
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
                Personal Details
              </h1>
              {/*<Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Upload a Photo</Form.Label>
                  <FormControl type="file" onChange={handleImageChange} />
                </Form.Group>
              </Col>*/}
              <Row>
                {/* User Details */}
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
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
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="city"
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
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              {/* Professional Summary */}
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
                  Professional Summary
                </h1>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                      type="text"
                      name="title"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label> Description</Form.Label>
                    <Form.Control
                      style={{ height: "70px" }}
                      type="text"
                      name="description"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Group>
              <Col xs={12} md={12} className="mb-3">
                {/*<Form.Group className="mb-3">
                  <Form.Label>Skills</Form.Label>
                  <Form.Control
                    type="text"
                    name="skills"
                    onChange={handleChange}
                  />
                </Form.Group>*/}
                <CheckboxDropdown onSelectionChange={handleSelectionChange} />
              </Col>
              <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Projects</Form.Label>
                  <Form.Control
                    type="text"
                    name="links"
                    placeholder="paste URL"
                    onChange={handleChange}
                  />
                  <Button
                    className="mt-3 btn btn-sm"
                    style={{ marginRight: "10px" }}
                    onClick={onAddLink}
                  >
                    Add
                  </Button>
                  <Button
                    variant="outline-danger"
                    className="mt-3 btn btn-sm"
                    onClick={onRemoveLink}
                  >
                    Remove
                  </Button>
                </Form.Group>
              </Col>
              {/* Employement Details */}
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  fontFamily: "Roboto",
                  marginTop: "30px",
                  marginBottom: "20px",
                }}
              >
                Employement
              </h1>
              <DynamicEmployementForm handleChange={handleChange} />
              {/* Eduation Details */}
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
              <DynamicEducationForm handleChange={handleChange} />
              {/* Courses */}
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
                  Courses
                </h1>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Course</Form.Label>
                    <Form.Control
                      type="text"
                      name="course"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Label>Institution</Form.Label>
                    <Form.Control
                      type="text"
                      name="institution"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Row>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Start Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="courseStartDate"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={12} md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>End Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="courseEndDate"
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Form.Group>
              {/* Hobbies */}
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
                  Hobbies
                </h1>
                <Col xs={12} md={12}>
                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      name="hobbies"
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Form.Group>
              <Button
                onClick={onAddHobby}
                className="btn btn-sm"
                style={{
                  marginRight: "15px",
                }}
              >
                Add
              </Button>
              <Button
                variant="outline-danger"
                className="btn btn-sm"
                onClick={onRemoveHobby}
              >
                Remove
              </Button>
            </Form>
          </Card.Body>
          <div className="demo-btn-container">
            <Button variant="primary" onClick={handleShow}>
              Preview
            </Button>
            <Button
              variant="primary"
              style={{ marginLeft: "10px" }}
              onClick={handleShowTemplate}
            >
              Template
            </Button>
            <Modal show={showTemplate} onHide={handleCloseTemplate}>
              <Modal.Header closeButton>
                <Modal.Title>Preview</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1673701789/WhatsApp_Image_2023-01-14_at_18.06.53_y90vxe.jpg"
                  className="template-image"
                />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseTemplate}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>

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
