import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "react-datepicker/dist/react-datepicker.css"
import CheckboxDropdown from "../../../CheckboxDropdowm"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import ProgressBar from "react-bootstrap/ProgressBar"

import "./index.css"
import LanguageDropdown from "../../../LanguageDropdown"
import ChooseJobTitle from "../../../ChooseJobTitle"
import TextArea from "antd/es/input/TextArea"
import DynamicProjectForm from "../../../DynamicProjectForm"
import DynamicAchievements from "../../../DynamicAchievements"
import DynamicEducationJob from "../../../DynamicEducationJob"

function Internship() {
  const [validated, setValidated] = useState(false)
  const [salaryType, setSalaryType] = useState("")
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [shift, setShift] = useState("Day Shift")
  const [skills, setSkills] = useState([])
  const [degree, setDegree] = useState({})
  const [coverLetter, setCoverLetter] = useState("")
  const [aboutUs, setAboutUs] = useState("")
  const [projects, setProjects] = useState({})
  const [acheivements, setAcheivements] = useState("")
  const [languages, setLanguages] = useState([])

  const handleTitle = (e) => {
    setJobTitle(e)
    console.log(jobTitle)
  }

  const handleJobTime = (e) => {
    if (e.target.value !== "Select an option") setJobTime(e.target.value)
  }

  const handleShift = (e) => {
    setShift(e.target.value)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
  }

  const handleDegree = (e) => {
    setDegree(e)
  }

  const handleCoverLetter = (e) => {
    setCoverLetter(e.target.value)
  }

  const handleAboutUs = (e) => {
    setAboutUs(e.target.value)
  }

  const handleProject = (e) => {
    setProjects(e)
  }

  const handleAchievements = (e) => {
    setAcheivements(e.target.value)
  }

  const handleLanguages = (e) => {
    let languages = []
    e.map((each) => languages.push(each.value))
    setLanguages(languages)
  }

  const [state, setState] = useState({
    selectedSkills: [],
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.stopPropagation()
    }

    setValidated(true)
  }

  const handleSelectionChange = (selected) => {
    setState({
      ...state,
      selectedSkills: selected,
    })
  }

  const renderSalaryType = () => {
    switch (salaryType) {
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control type="number" placeholder="2k/Month" />
          </Form.Group>
        )
      case "Negotiable":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="number" placeholder="5000" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="number" placeholder="10,000/month" />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Performance based":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control type="number" placeholder="Min assumed amount" />
          </Form.Group>
        )

      default:
        return (
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Min</Form.Label>
              <Form.Control type="number" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Max</Form.Label>
              <Form.Control type="number" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        )
    }
  }

  let now = 0
  function progressBar() {
    if (jobTitle !== "" && jobTime !== "" && shift !== "") now = 10
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0
    )
      now = 20
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0 &&
      degree.degree !== "" &&
      degree.field &&
      degree.city !== ""
    )
      now = 30
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0 &&
      coverLetter !== ""
    )
      now = 40
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      aboutUs !== ""
    )
      now = 50
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      aboutUs !== "" &&
      acheivements !== ""
    )
      now = 70
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      shift !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      aboutUs !== "" &&
      acheivements !== "" &&
      languages.length !== 0
    )
      now = 90
    if (now > 0)
      return (
        <ProgressBar now={now} label={`${now}%`} style={{ height: "25px" }} />
      )
    return null
  }

  return (
    <>
      {progressBar()}
      <Form
        action=""
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
        className="p-3"
      >
        <Row className="mb-3">
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label>Job Tittle</Form.Label>
              <ChooseJobTitle handleTitle={handleTitle} />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Looking for Full time or Part time Job? </Form.Label>
              <Form.Select onChange={handleJobTime}>
                <option> Select an option </option>
                <option> Full-Time </option>
                <option>Part-Time</option>
                <option>Both</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label>What is the Shift?</Form.Label>
              <Form.Control
                type="text"
                placeholder="Day Shift"
                disabled
                onChange={handleShift}
              />
            </Form.Group>
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <CheckboxDropdown
              onSelectionChange={handleSelectionChange}
              handleSkills={handleSkills}
            />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <DynamicEducationJob handleDegree={handleDegree} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <Form.Label>Cover Letter</Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleCoverLetter} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <Form.Label>About us</Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleAboutUs} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <DynamicProjectForm handleProject={handleProject} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <DynamicAchievements handleAchievements={handleAchievements} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <LanguageDropdown handleLanguages={handleLanguages} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%" }}
          >
            <p style={{ fontSize: "18px", marginBottom: "0px" }}>
              Available - Actively looking for internships and immediate joiner
            </p>
          </div>
        </Row>
        <Button type="submit">Submit</Button>
      </Form>
    </>
  )
}

export default Internship
