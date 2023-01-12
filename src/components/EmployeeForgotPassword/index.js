import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import FloatingLabel from "react-bootstrap/FloatingLabel"
import Col from "react-bootstrap/Col"
import { Link } from "react-router-dom"

function EmployeeLForgotPassword() {
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
      <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <h5 className="text-center mt-1">Recover Password</h5>
            <Form.Group
              className="mb-3 mt-5
    "
              controlId="formBasicText"
            >
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <FloatingLabel
                  controlId="floatingText"
                  label="Registered official Email ID"
                >
                  <Form.Control
                    required
                    type="text"
                    placeholder="Registered Official Email iD"
                    defaultValue=""
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Provide a Registered Mail ID.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <button className=" mt-3 text-center btn btn-outline-primary">
                Get Code
              </button>
              <button className=" mt-3 mx-3 text-center btn btn-outline-secondary">
                Enter Code
              </button>
              <p className="text-start mt-3">
                {" "}
                <a href="">Resend again </a>
              </p>
            </Form.Group>

            <p className="text-center mt-1">
              <Link to="/create-new-password">
                <button className=" text-center btn btn-primary">
                  Verify & Create
                </button>
              </Link>
            </p>
          </Row>
        </Form>
      </div>
    </div>
  )
}

export default EmployeeLForgotPassword
