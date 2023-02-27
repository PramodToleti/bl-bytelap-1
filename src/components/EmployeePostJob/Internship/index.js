import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"

import PerksDropdown from "../../../PerksDropdown"
import LanguageDropdown from "../../../LanguageDropdown"
import LocationDropdown from "../../../LocationCheckbox"
import ChooseJobTitle from "../../../ChooseJobTitle"
import AddRemove from "../../../AddRemove"
import CheckboxDropdown from "../../../CheckboxDropdowm"
import ChooseCity from "../../../ChooseCity"
import InternshipPostPreview from "../../../EmployeePostPreview/InternshipPostPreview"

import "react-datepicker/dist/react-datepicker.css"
import "./index.css"

function Internship() {
  const [validated, setValidated] = useState(false)
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState([])
  const [duration, setDuration] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [skills, setSkills] = useState([])
  const [responsibilities, setResponsibilities] = useState("")
  const [salaryType, setSalaryType] = useState("")
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" })
  const [perks, setPerks] = useState([])
  const [languages, setLanguages] = useState([])
  const [openings, setOpenings] = useState("")
  const [location, setLocation] = useState([])
  const [education, setEducation] = useState([])
  const [checked, setChecked] = useState(false)

  const data = {
    jobTitle,
    jobTime,
    jobType,
    city,
    duration,
    checked,
    startDate,
    endDate,
    skills,
    responsibilities,
    salaryType,
    salaryRange,
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

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleChangeEnd = (date) => {
    setEndDate(date)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
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

  useEffect(() => {
    if (salaryType === "Fixed") setSalaryRange("5k/month")
  }, [salaryType])

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
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control
              type="number"
              placeholder="5k/Month"
              onChange={(e) => setSalaryRange(e.target.value)}
            />
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
      case "Performance based":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control
              type="number"
              placeholder="Min assumed amount"
              onChange={(e) => setSalaryRange(e.target.value)}
            />
          </Form.Group>
        )

      default:
        return (
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Min</Form.Label>
              <Form.Control
                type="number"
                placeholder=""
                required
                onChange={(e) => setSalaryRange({ from: e.target.value })}
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
                onChange={(e) => setSalaryRange({ to: e.target.value })}
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
      className="col-lg-6 col-md-4 search-course-right   mb-4 mt-4 p-4  rounded container reveal mb-5 rounded border "
      style={{ width: "100%", background: "white" }}
    >
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Internship</Form.Label>
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
            <Form.Label>Duration of Internship </Form.Label>
            <Form.Select onChange={(e) => setDuration(e.target.value)}>
              <option>Select an option </option>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
              <option> 6 </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>What is the Shift to this Job Position</Form.Label>
            <Form.Control type="text" placeholder="Day Shift" disabled />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Internship Start Date</Form.Label>
            <Form.Check
              type="checkbox"
              label="Immediate Joiner (within next 30 days)"
              checked={checked}
              onChange={(e) => {
                setChecked(e.target.checked)
              }}
            />
            {/*<div className="custom-date-container">
              <div
                onClick={handleCustomDateClick}
                style={{ marginRight: "10px" }}
              >
                Custom Date
              </div>
              <div className={date ? "show-date" : "hide-date"}>
                : {date?.toDateString()}
              </div>
            </div>
            {showDatePicker && (
              <DatePicker selected={date} onChange={handleDateChange} inline />
            )}*/}

            <div className="mt-3 custom-date">
              <p style={{ marginTop: "8px" }}>Custom Date: </p>

              <div style={{ display: "flex", gap: "15px" }}>
                <div style={{ display: "flex" }}>
                  <Form.Label
                    style={{
                      marginRight: "10px",
                      marginTop: "8px",
                      fontSize: "17px",
                    }}
                  >
                    From
                  </Form.Label>
                  <Form.Group className="mb-3" style={{ display: "flex" }}>
                    <DatePicker
                      placeholderText=""
                      className="year-date"
                      selected={startDate}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </div>
                <div style={{ display: "flex" }}>
                  <Form.Label
                    style={{
                      marginRight: "10px",
                      marginTop: "8px",
                      fontSize: "17px",
                    }}
                  >
                    To
                  </Form.Label>
                  <Form.Group className="mb-3" style={{ display: "flex" }}>
                    <DatePicker
                      placeholderText=""
                      className="year-date"
                      selected={endDate}
                      onChange={handleChangeEnd}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </Form.Group>

          <CheckboxDropdown handleSkills={handleSkills} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Intern's responsibilities</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              onChange={(e) => setResponsibilities(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Salary Range</Form.Label>
              <Form.Select onChange={(e) => setSalaryType(e.target.value)}>
                <option>Select</option>
                <option> Fixed </option>
                <option>Negotiable</option>
                <option>Performance based</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {renderSalaryType()}

          <PerksDropdown handlePerks={handlePerks} />

          <LanguageDropdown handleLanguages={handleLanguages} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setOpenings(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Which location do you prefer looking for intern's ? (optional)
            </Form.Label>
            <LocationDropdown handleLocation={handleLocation} />
          </Form.Group>

          <AddRemove handleEducation={handleEducation} />
        </Row>

        <InternshipPostPreview data={data} />
        <div className="save-container">
          <Button variant="success">Save Draft</Button>
          <Button variant="primary">Post Job</Button>
        </div>
      </Form>
    </div>
  )
}

export default Internship
