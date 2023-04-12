import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import CandidateHome from "../CandidateHome"
import ChooseFile from "../../../assets/ChooseFile"

function CandidateMyinfo() {
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
      <CandidateHome />
      <div
        className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
        style={{ backgroundColor: "white" }}
      >
        <p className="text-center">My Info</p>

        <Form
          action=""
          noValidate
          validated={validated}
          onSubmit={handleSubmit}
        >
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your first.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Last name"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter you last name.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Email ID</Form.Label>
              <Form.Control
                required
                type="Email"
                placeholder="Email id"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your email id.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
                required
                type="number"
                placeholder="Number"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your number
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="city"
                placeholder="city"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              as={Col}
              md="12"
              className="mt-3"
              controlId="validationCustom01"
            >
              <Stack
                direction="horizontal"
                gap={3}
                style={{
                  marginTop: "7px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <input className="d-none" type="file" />
                <ChooseFile />
                <div className="or-container">
                  {" "}
                  <p
                    style={{
                      marginTop: "8px",
                    }}
                  >
                    OR
                  </p>
                </div>
                <Link to="/create-resume">
                  <button className=" btn btn-outline-secondary">Create</button>
                </Link>
              </Stack>
              <Form.Control.Feedback type="invalid">
                Please upload your resume.
              </Form.Control.Feedback>
            </Form.Group>
            <small className="text-start text-muted mt-3">
              PDF,Doc,Docx, | Max:2MB
            </small>
          </Row>

          <div className="d-grid gap-2 mt-5">
            <Link to="/candidate">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                style={{ width: "100%" }}
              >
                Save
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </>
  )
}

export default CandidateMyinfo
