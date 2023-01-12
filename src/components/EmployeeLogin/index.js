import FloatingLabel from "react-bootstrap/FloatingLabel"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row"

function EmployeeLogin() {
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
    <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group className="mb-3 mt-2" controlId="formBasicText">
          <Stack direction="horizontal" gap={3}>
            <label className="mx-1">Login </label>
            <label className="mx-1">Sales/Enquiry </label>
          </Stack>
        </Form.Group>

        <Form.Group as={Col} md="12" controlId="validationCustom01">
          <FloatingLabel controlId="floatingText" label="Registered Mail ID">
            <Form.Control
              required
              type="text"
              placeholder="Registered Mail ID"
              defaultValue=""
            />
            <Form.Control.Feedback type="invalid">
              Please Provide a Registered Mail ID.
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
      </Row>
      <p className="text-start mt-3" style={{ color: "blue" }}>
        Forget Password?
      </p>

      <div className="d-grid gap-2 mt-3">
        <Button type="submit" variant="outline-secondary" size="lg">
          Login
        </Button>
      </div>
      <p className="text-center mt-3">
        I'm New Client <a href="">Create account </a>
      </p>
    </Form>
  )
}

export default EmployeeLogin
