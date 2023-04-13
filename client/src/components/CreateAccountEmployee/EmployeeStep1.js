import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"
import CreateAccountNav from "../CreateAccountNav"

function EmployeeStep1() {
  const history = useHistory()
  const [validated, setValidated] = useState(false)
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    officialEmail: "",
    otp: "",
  })

  const isFormFilled = () => {
    for (const key in companyDetails) {
      if (companyDetails.hasOwnProperty(key) && !companyDetails[key]) {
        return false
      }
    }
    return true
  }

  const isFormValid = (form) => {
    for (let i = 0; i < form.length; i++) {
      const input = form[i]
      if (!input.validity.valid) {
        return false
      }
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
    if (isFormFilled() && isFormValid(event.target)) {
      history.push("/employee/create-account/step-2", companyDetails)
    } else {
      console.log("Fill the form")
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCompanyDetails({ ...companyDetails, [name]: value })
  }

  return (
    <>
      <CreateAccountNav />
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
            onChange={handleInputChange}
          >
            <Row className="mb-3">
              <p className="text-end mt-1">Step 1-2</p>
              <p className="text-center mt-3 mb-3">Create Employer Account</p>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <FloatingLabel controlId="floatingText" label="Company Name">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Demo Solution inc"
                    defaultValue=""
                    name="companyName"
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
                <FloatingLabel
                  controlId="floatingText"
                  label="Official Email ID"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Info@company.com"
                    defaultValue=""
                    name="officialEmail"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter official email ID.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <div
              style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <button
                className=" mt-1 text-center btn btn-primary"
                type="button"
              >
                Get Code
              </button>

              <Form.Group className="mt-1" controlId="otp">
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Code"
                  name="otp"
                  defaultValue=""
                  style={{
                    maxWidth: "120px",
                    maxHeight: "40px",
                    border: "1px solid grey",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the Code
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <p className="text-start mt-1">
              {" "}
              <Link to="" style={{ textDecoration: "none", color: "blue" }}>
                Resend again{" "}
              </Link>
            </p>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Verify & Next
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EmployeeStep1
