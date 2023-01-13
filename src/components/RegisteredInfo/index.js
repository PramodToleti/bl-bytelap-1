import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

import ChooseFile from "../../ChooseFile"
import HomeHeader from "../HomeHeader"

import "./index.css"

function RegisteredInfo() {
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

      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <Link to="/account-setting/my-info" className="header-nav-link">
          My Info
        </Link>

        <Link to="/account-setting/graduation" className="header-nav-link">
          Graduation
        </Link>
        <Link to="/account-setting/internship-1" className="header-nav-link">
          Register Myself
        </Link>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
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
                  <button className=" btn btn-outline-secondary">Create</button>
                </Stack>
              </Form.Group>{" "}
              <small
                className="text-start text-muted "
                style={{ marginTop: "8px" }}
              >
                PDF,Doc,Docx, | Max:2MB
              </small>
            </Row>

            <div className="d-grid gap-2 mt-5">
              <Button type="submit" variant="outline-secondary" size="lg">
                Update
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default RegisteredInfo
