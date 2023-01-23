import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import CheckboxDropdown from "../../../CheckboxDropdowm"
import ChooseCity from "../../../ChooseCity"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Col, FormGroup } from "react-bootstrap"

import "./index.css"
import PerksDropdown from "../../../PerksDropdown"
import SupplementaryDropdown from "../../../SupplementaryDropdown"
import DynamicEducationForm from "../../../DynamicEducationForm"
import DynamicEducationJob from "../../../DynamicEducationJob"
import DynamicPostJobFresher from "../../../DynamicPostJobFresher"
import ShiftDropdown from "../../../ShiftDropdown"
import ChooseJobTitle from "../../../ChooseJobTitle"
import AddRemove from "../../../AddRemove"
import LanguageDropdown from "../../../LanguageDropdown"

function Fresher() {
  const [validated, setValidated] = useState(false)
  const [jobType, setJobType] = useState("")
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
      case "Lac":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control type="number" placeholder="1 lac" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="number" placeholder="3 lac" />
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
                  <Form.Control type="number" placeholder="10k" />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control type="number" placeholder="20k" />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control type="number" placeholder="20k/Month" />
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
    <div
      className="col-lg-6 col-md-4 search-course-right bg-light  mb-4 mt-4 p-2     rounded container reveal  p-4 mb-5  rounded border "
      style={{ width: "100%" }}
    >
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Fresher</Form.Label>
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
            <Form.Label>What is the Shift to this Fresher Position</Form.Label>
            <Form.Select>
              <option>Select an option</option>
              <option>Day</option>
              <option>Night</option>
              <option>Rotational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <AddRemove />
          </Form.Group>

          <CheckboxDropdown onSelectionChange={handleSelectionChange} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job description</Form.Label>
            <Form.Control as="textarea" rows="5" />
          </Form.Group>

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

          <SupplementaryDropdown />
          <PerksDropdown />

          <LanguageDropdown />

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
