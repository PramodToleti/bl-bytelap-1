import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Row from "react-bootstrap/Row"

function Graduation() {
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
    <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
      <p className="text-end">Step 2-2</p>
      <p className="text-center">Graduation</p>

      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
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
            <Form.Control required type="text" placeholder="" defaultValue="" />
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

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              <input className="d-none" type="file" />
              <Form.Label>From </Form.Label>
              <Form.Select>
                <option> Year </option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </Form.Select>
              <Form.Label> </Form.Label>
              <Form.Select>
                <option> Month </option>
                <option> Month </option>
                <option>January</option>
                <option>Fabruary</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octomber</option>
                <option>November</option>
                <option>December</option>
              </Form.Select>
            </Stack>
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              <input className="d-none" type="file" />
              <Form.Label>To </Form.Label>
              <Form.Select className="mx-3">
                <option> Year </option>
                <option>2010</option>
                <option>2011</option>
                <option>2012</option>
                <option>2013</option>
                <option>2014</option>
                <option>2015</option>
                <option>2016</option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
                <option>2021</option>
                <option>2022</option>
                <option>2023</option>
                <option>2024</option>
                <option>2025</option>
              </Form.Select>
              <Form.Label> </Form.Label>
              <Form.Select>
                <option> Month </option>
                <option>January</option>
                <option>Fabruary</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>Octomber</option>
                <option>November</option>
                <option>December</option>
              </Form.Select>
            </Stack>
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
          <Button type="submit" variant="primary" size="lg">
            Save
          </Button>
        </div>

        <p className="text-start mt-3">Back</p>
      </Form>
    </div>
  )
}

export default Graduation
