import FloatingLabel from "react-bootstrap/FloatingLabel"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"

import Row from "react-bootstrap/Row"

function CandidateLogin() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
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

        <Form.Group
          as={Col}
          md="12"
          className="mt-3"
          controlId="validationCustom01"
        >
          <FloatingLabel controlId="floatingText" label="Password">
            <Form.Control
              required
              type="password"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Incorrect password.
            </Form.Control.Feedback>
          </FloatingLabel>
        </Form.Group>
        <p className="text-start mt-3" style={{ color: "blue" }}>
          Forget Password?
        </p>
      </Row>

      <div className="d-grid gap-2 mt-3">
        <Button type="submit" variant="primary" size="lg">
          Login
        </Button>
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
          Don't have an account ? <a href="">Create account </a>
        </p>
      </div>
    </Form>
  )
}

export default CandidateLogin
