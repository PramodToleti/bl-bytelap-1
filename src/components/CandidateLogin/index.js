import FloatingLabel from "react-bootstrap/FloatingLabel"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

import "./index.css"
import ShowAndHidePassword from "../../ShowAndHidePassword"

function CandidateLogin() {
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
    <div className="candidate-login-container p-2">
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ backgroundColor: "white" }}
      >
        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Stack direction="horizontal" gap={4}>
            {["radio"].map((type) => (
              <div key={`inline-${type}`} className="mb-4">
                <Link to="/login/candidate">
                  <Form.Check
                    inline
                    label="For Candidate"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                    checked={true}
                  />
                </Link>

                <Link to="/login/employee">
                  <Form.Check
                    className="ms-auto"
                    inline
                    label="For Employer"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                    checked={false}
                  />
                </Link>
              </div>
            ))}
          </Stack>
        </Form.Group>

        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <FloatingLabel controlId="floatingText" label="Email ID / Number">
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please Provide a Registered Email/Mobile Number.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Form.Group>

            <ShowAndHidePassword />
            <Link
              to="/candidate/change-password"
              className="text-start mt-3"
              style={{ color: "blue", textDecoration: "none", width: "150px" }}
            >
              Forget Password?
            </Link>
          </Row>

          <div className="d-grid gap-2 mt-3">
            <Link to="/candidate">
              <Button
                style={{ width: "100%" }}
                type="submit"
                variant="primary"
                size="lg"
              >
                Login
              </Button>
            </Link>
          </div>
          <p className="text-center mt-3" style={{ color: "blue" }}>
            OR
          </p>
          <p className="text-center mt-3" style={{ color: "blue" }}>
            Use OTP to Login
          </p>
          <div className="d-grid gap-2 mt-3">
            <Button type="submit" variant="outline-primary" size="lg">
              Sign in with Google
            </Button>
            <p className="text-center mt-3">
              Don't have an account ?{" "}
              <Link
                to="/candidate/create-account/step-1"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Create account
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default CandidateLogin
