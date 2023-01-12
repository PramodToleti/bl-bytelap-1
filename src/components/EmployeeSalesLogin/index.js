import FloatingLabel from "react-bootstrap/FloatingLabel"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import InputGroup from "react-bootstrap/InputGroup"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

function EmployeeSalesLogin() {
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
                  checked={false}
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
                  checked={true}
                />
              </Link>
            </div>
          ))}
        </Stack>
      </Form.Group>

      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              <Link to="/login/employee" style={{ color: "grey" }}>
                <label className="mx-1 employee-login-btn">Login </label>
              </Link>
              <Link
                to="/login/employee/sales-enquiry"
                style={{ color: "grey" }}
              >
                <label className="mx-1 employee-login-btn">Sales/Enquiry</label>
              </Link>
            </Stack>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <FloatingLabel controlId="floatingText" label="Name">
              <Form.Control
                required
                type="text"
                placeholder="Name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <FloatingLabel controlId="floatingText" label="Mobile number">
              <Form.Control
                required
                type="number"
                placeholder="Mobile number"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your number.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12 mt-3" controlId="validationCustom01">
            <FloatingLabel controlId="floatingText" label=" Company Name">
              <Form.Control
                required
                type="text"
                placeholder="Company Name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter company name.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12 mt-3" controlId="validationCustom01">
            <FloatingLabel controlId="floatingText" label="Designation">
              <Form.Control
                required
                type="text"
                placeholder="Designation"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your designation.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12 mt-3" controlId="validationCustom01">
            <FloatingLabel controlId="floatingText" label="Email">
              <Form.Control
                required
                type="email"
                placeholder="Name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email id.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12 mt-3" controlId="validationCustom01">
            <FloatingLabel controlId="floatingText" label="City">
              <Form.Control
                required
                type="text"
                placeholder="City"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </FloatingLabel>
          </Form.Group>
        </Row>

        <div className="d-grid gap-2 mt-5">
          <Button type="submit" variant="primary" size="lg">
            Get a call back
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default EmployeeSalesLogin
