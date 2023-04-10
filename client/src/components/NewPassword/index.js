import FloatingLabel from "react-bootstrap/FloatingLabel"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

function NewPassword() {
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
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <h5 className="text-center mt-1">Enter New Password</h5>
            <Form.Group
              as={Col}
              md="12"
              className="mt-5"
              controlId="validationCustom01"
            >
              <FloatingLabel controlId="floatingText" label=" New Password">
                <Form.Control
                  required
                  type="password"
                  placeholder="new password"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Incorrect password.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <FloatingLabel controlId="floatingText" label="Confirm Password">
                <Form.Control
                  required
                  type="password"
                  placeholder="confirm password"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Incorrect password.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>

          <p className="text-center mt-1">
            <Link to="/">
              <button type="submit" className=" text-center btn btn-primary">
                Update
              </button>
            </Link>
          </p>
        </Form>
      </div>
    </div>
  )
}

export default NewPassword
