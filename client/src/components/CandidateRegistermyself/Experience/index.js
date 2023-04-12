import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import ProgressBar from "react-bootstrap/ProgressBar"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { ToastContainer } from "react-toastify"
import moment from "moment/moment"

import CheckboxDropdown from "../../../assets/CheckboxDropdowm"
import ChooseCity from "../../../assets/ChooseCity"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"

import "./index.css"
import LanguageDropdown from "../../../assets/LanguageDropdown"
import ChooseJobTitle from "../../../assets/ChooseJobTitle"
import TextArea from "antd/es/input/TextArea"
import DynamicProjectForm from "../../../assets/DynamicProjectForm"
import DynamicAchievements from "../../../assets/DynamicAchievements"
import DynamicTraining from "../../../assets/DynamicTraining"
import DynamicEmployementHistory from "../../../assets/DynamicEmployementHistory/DynamicEmployementHistory"
import ExperiencePreview from "../../../components/CandidateRegisterPreview/ExperiencePreview"
import DynamicEducationExperience from "../../../assets/DynamicEducationExperience"
import LocationCheckbox from "../../../assets/LocationCheckbox"

function Experience(props) {
  const [validated, setValidated] = useState(false)
  const [salaryType, setSalaryType] = useState("")

  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState("")
  const [skills, setSkills] = useState([])
  const [shift, setShift] = useState("")
  const [degree, setDegree] = useState([])
  const [coverLetter, setCoverLetter] = useState("")
  const [projectDetails, setProjectDetails] = useState([])
  const [training, setTraining] = useState([])
  const [achievements, setAchievements] = useState([])
  const [preferredLocation, setPreferredLocation] = useState("")
  const [employmentHistory, setEmploymentHistory] = useState([])
  const [experience, setExperience] = useState({ years: "", months: "" })
  const [ctc, setCTC] = useState({ lacs: "", thousand: "" })
  const [languages, setLanguages] = useState([])
  const [availability, setAvailability] = useState("")
  const [isFilled, setIsFilled] = useState(true)
  const [custom, setCustom] = useState("")
  const [checkbox, toggleCheckbox] = useState(false)

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
    employmentHistory,
    experience,
    ctc,
    checkbox,
    preferredLocation,
    time: moment(),
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

  const handleDegree = (e) => {
    setDegree(e)
  }

  const handleShift = (e) => {
    setShift(e.target.value)
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

  const handleLocation = (city) => {
    setPreferredLocation(city)
    setCity(city)
  }

  const handleLanguages = (e) => {
    let languages = []
    e.map((each) => languages.push(each.value))
    setLanguages(languages)
  }

  const handleHistory = (e) => {
    setEmploymentHistory(e)
  }

  const [state, setState] = useState({
    selectedSkills: [],
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
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
      jobType !== "" &&
      shift !== ""
    )
      now = 20
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== ""
    )
      now = 30

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== "" &&
      degree.length !== 0
    )
      now = 50
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0
    )
      now = 60
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0
    )
      now = 70

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
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
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0 &&
      languages.length !== 0 &&
      employmentHistory.length !== 0
    )
      now = 90
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== "" &&
      shift !== "" &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0 &&
      languages.length !== 0 &&
      employmentHistory.length !== 0 &&
      availability !== "" &&
      preferredLocation !== "" &&
      experience.years !== "" &&
      experience.months !== "" &&
      ((checkbox === true && ctc.lacs === "" && ctc.thousand === "") ||
        (ctc.lacs !== "" && ctc.thousand !== "" && checkbox === false))
    )
      now = 100

    return (
      <ProgressBar
        now={now}
        label={`${now}%`}
        style={{ height: "25px", position: "sticky" }}
      />
    )
  }

  const onSubmitForm = (event) => {
    event.preventDefault()
    if (now === 100 && isFilled === true) {
      props.handleExperienceData(data)
      toast.success("Data saved successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #00ff00", backgroundColor: "#fff" },
      })
      window.location.reload()
      window.scrollTo(0, 0)
    }

    now === 100 ? setIsFilled(true) : setIsFilled(false)
  }

  const renderSalaryType = () => {
    switch (salaryType) {
      case "Lac":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="1 lac"
                    onChange={(e) =>
                      setSalaryRange((prev) => ({
                        ...prev,
                        from: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="3 lac"
                    onChange={(e) =>
                      setSalaryRange((prev) => ({
                        ...prev,
                        to: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Negotiable":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5000"
                    onChange={(e) =>
                      setSalaryRange((prev) => ({
                        ...prev,
                        from: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10,000/month"
                    onChange={(e) =>
                      setSalaryRange((prev) => ({
                        ...prev,
                        to: e.target.value,
                      }))
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Not Disclosed":
        return <Form.Group className="mb-3 mt-2"></Form.Group>

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

  return (
    <>
      <ToastContainer />
      {progressBar()}
      <Form
        action=""
        noValidate
        validated={validated}
        onSubmit={onSubmitForm}
        style={{ width: "100%" }}
        className="p-3"
      >
        <Row>
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
              <Form.Label>Looking for Full time or Part time? </Form.Label>
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

            <Form.Group className="mb-3 mt-2">
              <Form.Label>What is the Shift?</Form.Label>
              <Form.Select onChange={handleShift}>
                <option>Select an option</option>
                <option>Day</option>
                <option>Night</option>
                <option>Rotational</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills</Form.Label>
              <CheckboxDropdown
                onSelectionChange={handleSelectionChange}
                handleSkills={handleSkills}
              />
            </Form.Group>
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h5 className="mb-3">
              Experience & Current CTC <span style={{ color: "red" }}>*</span>
            </h5>
            {/*<Form.Group>
              <Form.Label>Expected Salary</Form.Label>
              <Form.Select onChange={(e) => setSalaryType(e.target.value)}>
                <option>Select</option>
                <option>Lac</option>
                <option>Negotiable</option>
                <option>Not Disclosed</option>
              </Form.Select>
            </Form.Group>
  {renderSalaryType()}*/}
            <Row>
              <Form.Label>Experience</Form.Label>
              <Form.Group
                controlId="experience-years"
                className="col-sm-5 mb-2"
              >
                <Form.Select
                  onChange={(e) =>
                    setExperience({ ...experience, years: e.target.value })
                  }
                >
                  <option>Years</option>
                  {Array.from({ length: 15 }, (_, index) => (
                    <option key={index}>{index + 1}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid year
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                controlId="experience-months"
                className="col-sm-5 mb-2"
              >
                <Form.Select
                  onChange={(e) =>
                    setExperience({ ...experience, months: e.target.value })
                  }
                >
                  <option>Months</option>
                  {Array.from({ length: 12 }, (_, index) => (
                    <option key={index}>{index + 1}</option>
                  ))}
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid month
                </Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Row>
              <Form.Label>Current CTC</Form.Label>
              {checkbox ? (
                <>
                  <Form.Group controlId="experience" className="col-sm-5 mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="number"
                      value=""
                      placeholder="Lac"
                      disabled
                    />
                  </Form.Group>
                  <Form.Group controlId="experience" className="col-sm-5 mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Thousand"
                      min="0"
                      value=""
                      max="99999"
                      disabled
                    />
                  </Form.Group>
                </>
              ) : (
                <>
                  <Form.Group controlId="experience" className="col-sm-5 mb-3">
                    <Form.Label>From</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Lac"
                      required
                      onKeyDown={(e) => {
                        if (e.target.value.length >= 2) e.preventDefault()
                      }}
                      onChange={(e) => setCTC({ ...ctc, lacs: e.target.value })}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter a valid Amount
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId="experience" className="col-sm-5 mb-3">
                    <Form.Label>To</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Thousand"
                      required
                      min="0"
                      max="99999"
                      onChange={(e) => {
                        if (e.target.value < 0 || e.target.value > 99999) {
                          alert("Please enter a value between 0 and 99999")
                        }
                        setCTC({ ...ctc, thousand: e.target.value })
                      }}
                    />
                    <Form.Control.Feedback type="invalid">
                      Please Enter a valid Amount
                    </Form.Control.Feedback>
                  </Form.Group>
                </>
              )}
            </Row>

            <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
              <Form.Label>Not Disclosed</Form.Label>
              <Form.Check
                type="checkbox"
                onChange={(e) => toggleCheckbox(e.target.checked)}
              />
            </div>
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
            <DynamicEducationExperience handleDegree={handleDegree} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicEmployementHistory handleHistory={handleHistory} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicProjectForm handleProject={handleProject} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label className="mb-3">
              Internship Training / Course (Optional)
            </Form.Label>
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
            <Form.Label>Select Prefered Location</Form.Label>
            <LocationCheckbox handleLocation={handleLocation} />
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
              <Form.Select className="mb-3" disabled>
                <option>Select</option>
              </Form.Select>
            ) : (
              <Form.Select
                className="mb-3"
                onChange={(e) => {
                  setAvailability(e.target.value)
                }}
              >
                <option>Select</option>
                <option>45 days notice period</option>
                <option>Actively looking for a job </option>
                <option>I'm on notice period till 1-01-2023</option>
                <option>I can join within 1 or 2 weeks</option>
                <option>I can join immediatly</option>
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
          <ExperiencePreview data={data} />
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

export default Experience
