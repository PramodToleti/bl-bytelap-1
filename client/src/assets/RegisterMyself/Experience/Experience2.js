import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

import HomeHeader from "../../components/HomeHeader"

function Experience2() {
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
    <>
      <HomeHeader />
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <Link to="/account-setting/my-info" className="header-nav-link">
          My Info
        </Link>

        <Link to="/account-setting/graduation" className="header-nav-link">
          Graduation
        </Link>
        <Link to="/account-setting/internship-1" className="header-nav-link">
          Register Myself
        </Link>
        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5    rounded">
          <p className="text-center">Step 2-3</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Cover Letter</Form.Label>
                <Form.Control
                  required
                  text="type"
                  as="textarea"
                  rows={3}
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
                <Form.Label>What is your notice period ? </Form.Label>
                <Form.Select>
                  <option> Select an option </option>
                  <option> 15 days </option>
                  <option> 45 days </option>
                  <option>Custom Date</option>
                </Form.Select>
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 mt-5">
              <Link to="/account-setting/experience-3">
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Save & Next
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Experience2
