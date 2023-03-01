import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import "react-datepicker/dist/react-datepicker.css"
import CheckboxDropdown from "../../../CheckboxDropdowm"

import React, { useState, useEffect } from "react"
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
import DynamicTraining from "../../../DynamicTraining"
import InternshipPreview from "../../../CandidateRegisterPreview/InternshipPreview"
import ChooseCity from "../../../ChooseCity"

function Internship(props) {
  const [validated, setValidated] = useState(false)
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState("")
  const [skills, setSkills] = useState([])
  const [degree, setDegree] = useState([])
  const [coverLetter, setCoverLetter] = useState("")
  const [projectDetails, setProjectDetails] = useState([])
  const [training, setTraining] = useState([])
  const [achievements, setAchievements] = useState([])
  const [languages, setLanguages] = useState([])
  const [availability, setAvailability] = useState("")
  const [isFilled, setIsFilled] = useState(true)
  const [custom, setCustom] = useState("")

  const data = {
    jobTitle,
    jobTime,
    jobType,
    skills,
    degree,
    coverLetter,
    projectDetails,
    training,
    achievements,
    languages,
    availability,
  }

  useEffect(() => {
    //Callback function
  }, [data])

  {
    /*const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.pageYOffset > progressRef.current.offsetTop)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

const progressRef = useRef(null)*/
  }

  const handleTitle = (e) => {
    setJobTitle(e)
  }

  const handleJobTime = (e) => {
    if (e.target.value !== "Select an option") setJobTime(e.target.value)
  }

  const handleJobtype = (e) => {
    setJobType(e.target.value)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
  }

  const onChangeCity = (e) => {
    setCity(e)
  }

  const handleDegree = (e) => {
    setDegree(e)
  }

  const handleCoverLetter = (e) => {
    setCoverLetter(e.target.value)
  }

  const handleProject = (projectDetails) => {
    setProjectDetails(projectDetails)
  }

  const handleTraining = (training) => {
    setTraining(training)
  }

  const handleAchievements = (achievements) => {
    setAchievements(achievements)
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

  let now = 0
  function progressBar() {
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== ""
    )
      now = 20
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== ""
    )
      now = 30

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0
    )
      now = 50
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0
    )
      now = 60
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0
    )
      now = 70

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0
    )
      now = 80

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0 &&
      languages.length !== 0
    )
      now = 90

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0 &&
      languages.length !== 0 &&
      availability !== ""
    )
      now = 100

    {
      /*const progressBarStyle = {
      width: isFixed ? "90%" : "100%",
      maxWidth: "790px",
      position: isFixed ? "fixed" : "relative",
      top: isFixed ? "20px" : null,
      zIndex: 999,
      transition: "all 0.2s ease-out",
    }*/
    }

    return (
      <>
        {/*} <div style={{ position: "relative" }}>
        <div ref={progressRef} style={{ height: "25px" }} />
        <div style={{ display: isFixed ? "block" : "none", height: "25px" }} />
        <ProgressBar now={now} label={`${now}%`} style={progressBarStyle} />
    </div> */}
        <ProgressBar
          now={now}
          label={`${now}%`}
          style={{ height: "25px", position: "sticky" }}
        />
      </>
    )
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
            <h5>
              Job Info <span style={{ color: "red" }}>*</span>
            </h5>
            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label>Job Tittle</Form.Label>
              <ChooseJobTitle handleTitle={handleTitle} />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>
                Looking for Full time or Part time Internship?{" "}
              </Form.Label>
              <Form.Select onChange={handleJobTime}>
                <option> Select an option </option>
                <option> Full-Time </option>
                <option>Part-Time</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label> Job Type</Form.Label>
              <Form.Select onChange={handleJobtype}>
                <option>Select</option>
                <option>Office</option>
                <option>Work from Home</option>
                <option>Any</option>
              </Form.Select>
            </Form.Group>

            <CheckboxDropdown
              onSelectionChange={handleSelectionChange}
              handleSkills={handleSkills}
            />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Cover Letter <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleCoverLetter} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Graduation <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <DynamicEducationJob handleDegree={handleDegree} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicProjectForm handleProject={handleProject} />
          </div>

          {/*<div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>About us</Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleAboutUs} />
          </div>*/}

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label className="mb-3">Training / Course</Form.Label>
            <DynamicTraining handleTraining={handleTraining} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicAchievements handleAchievements={handleAchievements} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <LanguageDropdown handleLanguages={handleLanguages} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Availability <span style={{ color: "red" }}>*</span>
            </Form.Label>
            {custom !== "" ? (
              <Form.Select className="mb-3" disabled value={availability}>
                <option>Select</option>
              </Form.Select>
            ) : (
              <Form.Select
                className="mb-3"
                onChange={(e) => setAvailability(e.target.value)}
              >
                <option>Select</option>
                <option>
                  I am immediate joiner & Available For Full Time.
                </option>
                <option>I can join within one or two week . </option>
                <option>
                  I am available for Full Time From 1 Jan 2022 to 28 March 2022
                </option>
              </Form.Select>
            )}
            <Form.Control
              type="text"
              placeholder="Custom"
              className="mb-3"
              onChange={(e) => {
                setCustom(e.target.value)
                setAvailability(e.target.value)
              }}
            />
          </div>
        </Row>
        {isFilled ? null : (
          <>
            <span
              style={{
                color: "red",
                fontFamily: "Roboto",
              }}
            >
              *Fill all the required field to save
            </span>
            <br />
          </>
        )}
        <Row className="justify-content-center">
          {/*<Button type="button" variant="secondary" className="col-sm-2 mx-4 mt-2">Preview</Button>*/}
          <InternshipPreview data={data} />
          <Button
            type="submit"
            onClick={() =>
              now === 100 ? setIsFilled(true) : setIsFilled(false)
            }
            className="col-sm-2 mt-2"
          >
            Save
          </Button>
        </Row>
      </Form>
    </>
  )
}

export default Internship
