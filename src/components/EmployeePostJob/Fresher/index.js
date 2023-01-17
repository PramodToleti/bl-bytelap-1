import Stack from "react-bootstrap/Stack"
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

function Fresher() {
  const [validated, setValidated] = useState(false)
  const [jobType, setJobType] = useState("Office")
  const [salaryType, setSalaryType] = useState("")
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

  console.log(salaryType)

  const renderSalaryType = () => {
    switch (salaryType) {
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control type="text" placeholder="2k/Month" disabled />
          </Form.Group>
        )
      case "Negotiable":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Negoitable</Form.Label>
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
            <Form.Label>Performance based</Form.Label>
            <Form.Control type="number" placeholder="Min assumed amount" />
          </Form.Group>
        )

      default:
        return (
          <Row className="mb-3">
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Min</Form.Label>
              <Form.Control type="text" placeholder="" required />
              <Form.Control.Feedback type="invalid">
                Please provide a valid state.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="validationCustom03">
              <Form.Label>Max</Form.Label>
              <Form.Control type="text" placeholder="" required />
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
      className="col-lg-6 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary"
      style={{ width: "100%" }}
    >
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle</Form.Label>
            <Form.Control
              type="email"
              placeholder="software developer , digital marketing"
            />
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
            <Form.Label>What is the Shift to this Fresher Position</Form.Label>
            <Form.Select>
              <option>Select an option </option>
              <option> Day </option>
              <option>Night </option>
              <option>Rotational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Internship Start Date</Form.Label>
            <Form.Check
              type="checkbox"
              label="Immediate Joiner (within next 30 days)"
            />
            <div className="custom-date-container">
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
            )}
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

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Language's</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>
              Which location do you prefer looking for intern's ? (optional)
            </Form.Label>
            <Form.Control type="text" />
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

export default Fresher
