import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import CheckboxDropdown from "../../../CheckboxDropdowm"
import ChooseCity from "../../../ChooseCity"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"

import "./index.css"
import PerksDropdown from "../../../PerksDropdown"
import LanguageDropdown from "../../../LanguageDropdown"
import LocationDropdown from "../../../LocationCheckbox"
import ChooseJobTitle from "../../../ChooseJobTitle"
import AddRemove from "../../../AddRemove"

function Internship() {
  const [validated, setValidated] = useState(false)
  const [jobType, setJobType] = useState("")
  const [salaryType, setSalaryType] = useState("")
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")

  const handleChange = (date) => {
    setStartDate(date)
  }

  const handleChangeEnd = (date) => {
    setEndDate(date)
  }

  const [state, setState] = useState({
    selectedSkills: [],
  })
  const [date, setDate] = useState(null)
  const [showDatePicker, setShowDatePicker] = useState(false)

  function handleDateChange(date) {
    setDate(date)
    setShowDatePicker(false)
  }

  function handleCustomDateClick() {
    setShowDatePicker(true)
  }

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

  return (
    <div
      className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-4 mt-4    rounded container reveal  p-4 mb-5 rounded border "
      style={{ width: "100%" }}
    >
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Internship</Form.Label>
            <ChooseJobTitle />
          </Form.Group>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Full time or Part time </Form.Label>
            <Form.Select>
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
              <ChooseCity />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Duration of Internship </Form.Label>
            <Form.Select>
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
                      className="my-custom-datepicker"
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
                      className="my-custom-datepicker"
                      selected={endDate}
                      onChange={handleChangeEnd}
                    />
                  </Form.Group>
                </div>
              </div>
            </div>
          </Form.Group>

          <CheckboxDropdown onSelectionChange={handleSelectionChange} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Intern's responsibilities</Form.Label>
            <Form.Control as="textarea" rows="5" />
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

          <PerksDropdown />

          <LanguageDropdown />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <LocationDropdown />

          <AddRemove />
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

export default Internship
