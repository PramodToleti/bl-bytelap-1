import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

function EmployeeStep2() {
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
      <p className="text-center">Company Info</p>

      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Please enter your first.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Please enter you last name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label> You Role </Form.Label>
            <Form.Select>
              <option> Select an option </option>
              <option> Owner </option>
              <option>Human Resource</option>
              <option>Junior Human Resource</option>
              <option>Marketing Specialist</option>
              <option>Junior Marketing Specialist</option>
              <option>CEO</option>
              <option>CTO</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <Form.Label>Company website</Form.Label>
            <Form.Control
              required
              type="link"
              placeholder="Paste URL"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Enter your company website URL.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <Stack direction="horizontal" gap={3}>
              <input className="d-none" type="file" />
              <button className="btn btn-outline-primary">Upload Logo</button>
            </Stack>
            <Form.Control.Feedback type="invalid">
              Please upload company logo.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            className="mb-3 mt-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Company Address</Form.Label>
            <Form.Control
              required
              text="type"
              as="textarea"
              rows={2}
              placeholder=""
            />
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-2"
            controlId="validationCustom01"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="link"
              placeholder="Create password"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Please create your password
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              required
              type="link"
              placeholder="confirm password"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Please confirm your password
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3 mt-4">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <div className="d-grid gap-2 mt-2">
          <Link to="/employee">
            <Button
              type="submit"
              variant="outline-secondary"
              size="lg"
              style={{ width: "100%" }}
            >
              Submit
            </Button>
          </Link>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeStep2
