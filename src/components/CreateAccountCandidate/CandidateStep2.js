import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

function CandidateStep2() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  return (
    <div className="p-2">
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-end">Step 2-2</p>
        <p className="text-center">Graduation</p>

        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Degree </Form.Label>
              <Form.Control
                required
                as="select"
                type="select"
                name="payment_method"
              >
                <option value="">Select an option</option>
                <option value="master">Master's</option>
                <option value="bachelor">Bachelor's</option>
                <option value="diploma">Diploma</option>
                <option value="h_secondary">High Secondary (12th)</option>
                <option value="secondary">Secondary (10th)</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select your degree.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Field of study</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Information Technology"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter field of study.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>College/University</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=""
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please select your college.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Indore"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Group className="mb-3" style={{ width: "100%" }}>
                <div className="mt-3 custom-date">
                  <div className="date-container">
                    <Form.Label className="mt-3">From</Form.Label>
                    <DatePicker
                      className="year-date"
                      dateFormat="MMM yyyy"
                      placeholderText="MM / YYYY"
                      showMonthYearPicker={true}
                    />
                    <Form.Label className="mt-3">To</Form.Label>
                    <DatePicker
                      className="year-date"
                      dateFormat="MMM yyyy"
                      placeholderText="MM / YYYY"
                      showMonthYearPicker={true}
                    />
                  </div>
                </div>
              </Form.Group>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                required
                label="I currently go there "
                feedback="You must select if you are currently persuing."
                feedbackType="invalid"
              />
            </Form.Group>
          </Row>

          <div className="d-grid gap-2 mt-5">
            <Link to="/candidate">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                style={{ width: "100%" }}
              >
                Save
              </Button>
            </Link>
          </div>

          <Link
            to="/candidate/create-account/step-1"
            style={{ textDecoration: "none", color: "#000000" }}
          >
            <p className="text-start mt-3">Back</p>
          </Link>
        </Form>
      </div>
    </div>
  )
}

export default CandidateStep2
