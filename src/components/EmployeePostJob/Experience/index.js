import React, { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import CheckboxDropdown from "../../../CheckboxDropdowm"
import ChooseCity from "../../../ChooseCity"
import PerksDropdown from "../../../PerksDropdown"
import SupplementaryDropdown from "../../../SupplementaryDropdown"
import ChooseJobTitle from "../../../ChooseJobTitle"
import AddRemove from "../../../AddRemove"
import LanguageDropdown from "../../../LanguageDropdown"

import "./index.css"
import "react-datepicker/dist/react-datepicker.css"

function Experience() {
  const [validated, setValidated] = useState(false)
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState([])
  const [shift, setShift] = useState("")
  const [skills, setSkills] = useState([])
  const [jobDescription, setDescription] = useState("")
  const [experience, setExperience] = useState({
    years: "",
    month: "",
  })
  const [salaryType, setSalaryType] = useState("")
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" })
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
    supplementary,
    perks,
    languages,
    openings,
    location,
    education,
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
    setLocation(e.target.value)
  }

  const handleEducation = (e) => {
    setEducation(e)
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

      default:
        return (
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Min</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                required
                onChange={(e) =>
                  setSalaryRange({ ...salaryRange, from: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Max</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                required
                onChange={(e) =>
                  setSalaryRange({ ...salaryRange, to: e.target.value })
                }
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid zip.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        )
    }
  }

  return (
    <div
      className="col-lg-6 col-md-4 search-course-right  bg-light mb-4 mt-4 p-2    rounded container reveal  p-4 mb-5 rounded border "
      style={{ width: "100%" }}
    >
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
              <option>Both</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job Type</Form.Label>
            <Form.Select onChange={(e) => setJobType(e.target.value)}>
              <option>Select an option</option>
              <option> Office </option>
              <option>Remote</option>
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

          <CheckboxDropdown handleSkills={handleSkills} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job description</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              onChange={(e) => setDescription(e.target.value)}
            />
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
              </Form.Select>
            </Form.Group>
          </Row>

          {renderSalaryType()}

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
            <Form.Control type="text" onChange={(e) => handleLocation(e)} />
          </Form.Group>
        </Row>

        <div className="preview-container">
          <Button variant="outline-primary">Preview</Button>
        </div>
        <div className="save-container">
          <Button variant="success">Save Draft</Button>
          <Button variant="primary">Post Job</Button>
        </div>
      </Form>
    </div>
  )
}

export default Experience
