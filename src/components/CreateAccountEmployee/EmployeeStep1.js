import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

function EmployeeStep1() {
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
        margin: "5px",
      }}
    >
      <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <p className="text-end mt-1">Step 1-2</p>
            <p className="text-center mt-3">Create Employer Account</p>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <FloatingLabel controlId="floatingText" label="Company Name">
                <Form.Control
                  required
                  type="text"
                  placeholder="Demo Solution inc"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your company name.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <FloatingLabel controlId="floatingText" label="Official Email ID">
                <Form.Control
                  required
                  type="email"
                  placeholder="Info@company.com"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter official email ID.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>
          </Row>

          <div style={{ display: "flex", gap: "10px" }}>
            <button className=" mt-1 text-center btn btn-outline-primary">
              Get Code
            </button>

            <Form.Group className="mt-1" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Code"
                defaultValue=""
                style={{
                  maxWidth: "110px",
                  maxHeight: "40px",
                  border: "1px solid grey",
                }}
              />
            </Form.Group>
          </div>
          <p className="text-start mt-1">
            {" "}
            <Link to="" style={{ textDecoration: "none", color: "blue" }}>
              Resend again{" "}
            </Link>
          </p>

          <div className="d-grid gap-2 mt-3">
            <Link to="/employee/create-account/step-2">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Verify & Next
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default EmployeeStep1
