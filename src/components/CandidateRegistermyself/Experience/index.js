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
import TextArea from "antd/es/input/TextArea"
import DynamicProjectForm from "../../../DynamicProjectForm"
import DynamicAchievements from "../../../DynamicAchievements"
import DynamicEducationJob from "../../../DynamicEducationJob"

function Experience() {
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
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle</Form.Label>
            <ChooseJobTitle />
          </Form.Group>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Looking for Full time or Part time Job? </Form.Label>
            <Form.Select>
              <option> Select an option </option>
              <option> Full-Time </option>
              <option>Part-Time</option>
              <option>Both</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>What is the Shift to this Fresher Position</Form.Label>
            <Form.Select>
              <option>Select an option</option>
              <option>Day</option>
              <option>Night</option>
              <option>Rotational</option>
            </Form.Select>
          </Form.Group>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <Row className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Col xs={6}>
              <Form.Group className="mb-3">
                <Form.Select placeholder="From">
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
                <Form.Select placeholder="To">
                  {[1, 2, 3, 4, 5, 6, 7, , 9, 10, 11, 12, 13, 14, 15].map(
                    (each) => (
                      <option>{each}</option>
                    )
                  )}
                </Form.Select>
              </Form.Group>
            </Col>
          </Row>

          {/*<Row className="mb-3">
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

                    {renderSalaryType()}*/}
          <Row>
            <Col xsm={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Salary</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Col>
          </Row>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <CheckboxDropdown onSelectionChange={handleSelectionChange} />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <DynamicEducationJob />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <Form.Label>Cover Letter</Form.Label>
          <TextArea rows={6} className="mb-3" />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <Form.Label>About us</Form.Label>
          <TextArea rows={6} className="mb-3" />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <DynamicProjectForm />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <DynamicAchievements />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <LanguageDropdown />
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right bg-light text-dark  mb-3    rounded container reveal  p-4  rounded border "
          style={{ width: "100%" }}
        >
          <p style={{ fontSize: "18px", marginBottom: "0px" }}>
            Notice Period - Actively looking for internship and immediate joiner
          </p>
        </div>
      </Row>
    </Form>
  )
}

export default Experience
