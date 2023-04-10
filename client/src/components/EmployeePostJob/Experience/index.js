import React, { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { ToastContainer } from "react-toastify"
import { toast } from "react-toastify"
import moment from "moment/moment"

import CheckboxDropdown from "../../../CheckboxDropdowm"
import ChooseCity from "../../../ChooseCity"
import PerksDropdown from "../../../PerksDropdown"
import SupplementaryDropdown from "../../../SupplementaryDropdown"
import ChooseJobTitle from "../../../ChooseJobTitle"
import AddRemove from "../../../AddRemove"
import LanguageDropdown from "../../../LanguageDropdown"
import ExperiencePostPreview from "../../../EmployeePostPreview/ExperiencePostPreview"
import LocationDropdown from "../../../LocationCheckbox"
import Draft from "../../../Draft"

import "./index.css"
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css"

function Experience() {
  const [validated, setValidated] = useState(false)
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState("")
  const [shift, setShift] = useState("")
  const [skills, setSkills] = useState([])
  const [jobDescription, setDescription] = useState("")
  const [experience, setExperience] = useState({
    years: "",
    month: "",
  })
  const [salaryType, setSalaryType] = useState("")
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" })
  const [incentives, setIncentives] = useState("")
  const [incentivesValue, setIncentivesValue] = useState("")
  const [supplementary, setSupplemantary] = useState([])
  const [perks, setPerks] = useState([])
  const [languages, setLanguages] = useState([])
  const [openings, setOpenings] = useState("")
  const [location, setLocation] = useState([])
  const [education, setEducation] = useState([])

  const data = {
    jobTitle,
    jobTime,
    jobType,
    city,
    shift,
    skills,
    jobDescription,
    experience,
    salaryType,
    salaryRange,
    incentives,
    incentivesValue,
    supplementary,
    perks,
    languages,
    openings,
    location,
    education,
    time: moment(),
  }

  const handlePostJob = () => {
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      (jobType !== "" || city.length !== 0) &&
      shift !== "" &&
      skills.length !== 0 &&
      jobDescription !== "" &&
      experience.years !== "" &&
      experience.month !== "" &&
      (salaryType !== "" || salaryRange !== "") &&
      supplementary.length !== 0 &&
      perks.length !== 0 &&
      languages.length !== 0 &&
      openings !== "" &&
      location.length !== 0 &&
      education.length !== 0
    ) {
      toast.success("Job Posted successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #00ff00", backgroundColor: "#fff" },
      })
      const jobData = JSON.parse(localStorage.getItem("experienceJob"))
      if (jobData === null) {
        localStorage.setItem("experienceJob", JSON.stringify([data]))
      } else {
        jobData.unshift(data)
        localStorage.setItem("experienceJob", JSON.stringify(jobData))
      }
      window.scrollTo(0, 0)
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    } else {
      toast.error("Please fill all the fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #ff0000", backgroundColor: "#fff" },
      })
    }
  }

  const handleTitle = (e) => {
    setJobTitle(e)
  }

  const onChangeCity = (e) => {
    setCity(e)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
  }

  const handleSupplementary = (e) => {
    setSupplemantary(e)
  }

  const handlePerks = (e) => {
    setPerks(e)
  }

  const handleLanguages = (e) => {
    let languages = []
    e.map((each) => languages.push(each.value))
    setLanguages(languages)
  }

  const handleLocation = (e) => {
    setLocation(e)
  }

  const handleEducation = (e) => {
    setEducation(e)
  }

  const handleDescription = (e) => {
    setDescription(e)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
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
                    min="0"
                    max="99"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, from: e.target.value })
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
                    min="0"
                    max="99"
                    oninput="validity.valid||(value=''); if(value>99) value='99'; if(value<0) value='0';"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Per Month":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10k"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, from: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="20k"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control
              type="number"
              placeholder="20k/Month"
              onChange={(e) => setSalaryRange(e.target.value)}
            />
          </Form.Group>
        )
      case "Not Disclosed":
        return <Form.Group className="mb-3 mt-2"></Form.Group>

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
                      setSalaryRange({ ...salaryRange, from: e.target.value })
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
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )

      default:
        return null
    }
  }

  return (
    <div
      className="col-lg-6 col-md-4 search-course-right  mb-4 mt-4 p-2    rounded container reveal  p-4 mb-5 rounded border "
      style={{ width: "100%", background: "white" }}
    >
      <ToastContainer style={{ padding: "15px" }} />
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Experience</Form.Label>
            <ChooseJobTitle handleTitle={handleTitle} />
          </Form.Group>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Full time or Part time </Form.Label>
            <Form.Select onChange={(e) => setJobTime(e.target.value)}>
              <option> Select an option </option>
              <option> Full-Time </option>
              <option>Part-Time</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job Type</Form.Label>
            <Form.Select onChange={(e) => setJobType(e.target.value)}>
              <option>Select an option</option>
              <option> Office </option>
              <option>Work from Home</option>
            </Form.Select>
          </Form.Group>
          {jobType === "Office" && (
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <ChooseCity onChangeCity={onChangeCity} />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Form.Group className="mb-3 mt-2">
            <Form.Label>
              What is the Shift to this Experience Position
            </Form.Label>
            <Form.Select onChange={(e) => setShift(e.target.value)}>
              <option>Select an option</option>
              <option>Day</option>
              <option>Night</option>
              <option>Rotational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <AddRemove handleEducation={handleEducation} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <CheckboxDropdown handleSkills={handleSkills} />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job description</Form.Label>
            <Draft handleDescription={handleDescription} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Select
                  placeholder="From"
                  onChange={(e) =>
                    setExperience({ ...experience, years: e.target.value })
                  }
                >
                  {[0, 1, 2, 3, 4, 5, 6, 7, , 9, 10, 11, 12, 13, 14, 15].map(
                    (each) => (
                      <option>{each}</option>
                    )
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Select
                  placeholder="To"
                  onChange={(e) =>
                    setExperience({ ...experience, month: e.target.value })
                  }
                >
                  {[1, 2, 3, 4, 5, 6, 7, , 9, 10, 11, 12, 13, 14, 15].map(
                    (each) => (
                      <option>{each}</option>
                    )
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Salary Range</Form.Label>
              <Form.Select onChange={(e) => setSalaryType(e.target.value)}>
                <option>Select</option>
                <option>Lac</option>
                <option> Per Month </option>
                <option>Fixed</option>
                <option>Not Disclosed</option>
                <option>Negotiable</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {renderSalaryType()}

          {salaryType === "Fixed" && (
            <Form.Group
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <Form.Check
                onChange={() => {
                  setIncentives(!incentives)
                }}
              />
              <Form.Label>Incentives</Form.Label>
            </Form.Group>
          )}

          {incentives && (
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                type="number"
                onChange={(e) => setIncentivesValue(e.target.value)}
              />
            </Form.Group>
          )}

          <SupplementaryDropdown handleSupplementary={handleSupplementary} />
          <PerksDropdown handlePerks={handlePerks} />

          <LanguageDropdown handleLanguages={handleLanguages} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setOpenings(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>
              Which location do you prefer looking for intern's ? (optional)
            </Form.Label>
            <LocationDropdown handleLocation={handleLocation} />
          </Form.Group>
        </Row>

        <ExperiencePostPreview data={data} />
        <div className="save-container">
          <Button variant="success">Save Draft</Button>
          <Button variant="primary" onClick={handlePostJob}>
            Post Job
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Experience
