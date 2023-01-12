import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"

import { Link } from "react-router-dom"

import Row from "react-bootstrap/Row"
import Internship1 from "./Internship1"

function Internship2() {
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
    <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
      <Link to="/my-info" className="header-nav-link">
        My Info
      </Link>

      <Link to="/graduation" className="header-nav-link">
        Graduation
      </Link>
      <Link to="/account-setting/internship-1" className="header-nav-link">
        Register Myself
      </Link>

      <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
        <p className="text-center">Step 2-3</p>

        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>Cover Letter</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={4}
                placeholder=""
              />
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About us</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={8}
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2">
              <Form.Label>Duration of join Internship </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> Immediate joiner </option>
                <option> Within a week </option>
                <option> Within a two week </option>
                <option>Custom Date</option>
              </Form.Select>
            </Form.Group>
          </Row>

          <div className="d-grid gap-2 mt-5">
            <Link to="/account-setting/internship-3">
              <Button variant="primary" size="lg" style={{ width: "100%" }}>
                Save & Next
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Internship2
