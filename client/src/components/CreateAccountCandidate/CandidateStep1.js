import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"

import ChooseFile from "../../ChooseFile"
import CreateAccountNav from "../CreateAccountNav"

function CandidateStep1() {
  const history = useHistory()
  const [validated, setValidated] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNumber: "",
    city: "",
    file: null,
    agreeToTerms: false,
  })

  const handleInputChange = (e) => {
    if (e.target.name === "") {
      setFormData((prevState) => ({
        ...prevState,
        file: e.target.files[0],
      }))
    } else {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value
      setFormData({ ...formData, [e.target.name]: value })
    }
  }

  const isFormFilled = () => {
    for (const key in formData) {
      if (formData.hasOwnProperty(key) && !formData[key]) {
        return false
      }
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
    if (isFormFilled()) {
      history.push("/candidate/create-account/step-2", { ...formData })
    } else {
      console.log("Fill the form")
    }
  }

  return (
    <>
      <CreateAccountNav />
      <div className="p-2">
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary "
          style={{ backgroundColor: "white" }}
        >
          <p className="text-end">Step 1-2</p>
          <p className="text-center">Create account</p>
          <p className="text-center">My Info</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <Row className="mb-2">
              <Form.Group as={Col} md="12" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="firstName"
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
                controlId="lastName"
              >
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter you last name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mt-3" controlId="emailId">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  required
                  type="Email"
                  name="emailId"
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
                controlId="createPassword"
                className="mt-2"
              >
                <Form.Label>Create Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="createPassword"
                  placeholder="Password"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter agreeToTerms password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                controlId="confirmPassword"
                className="mt-2"
              >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  name="confirmPassword"
                  placeholder="Password"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a password.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mt-3"
                controlId="mobileNumber"
              >
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control
                  required
                  type="number"
                  name="mobileNumber"
                  placeholder="Number"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your number
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mt-3" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="city"
                  name="city"
                  placeholder="city"
                  defaultValue=""
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your city
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" className="mt-3" controlId="file">
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
                    <button className=" btn btn-outline-secondary">
                      Create
                    </button>
                  </Link>
                </Stack>
              </Form.Group>
              <small className="text-start text-muted mt-2 ">
                PDF,Doc,Docx, | Max:2MB
              </small>
              {formData.file === null && validated && (
                <p
                  style={{
                    color: "#dc3545",
                    marginTop: "10px",

                    fontSize: ".875rem",
                  }}
                >
                  Please upload your resume.
                </p>
              )}
            </Row>

            <Form.Group
              className=" mt-4 terms-container"
              controlId="termsAndConditions"
            >
              <Form.Check
                required
                name="agreeToTerms"
                feedback={
                  <div
                    style={{
                      position: "absolute",
                      marginTop: ".25rem",
                    }}
                  >
                    You must agree before submitting.
                  </div>
                }
                feedbackType="invalid"
                className="terms-and-conditions"
              />

              <Form.Label
                className="terms-label mb-3"
                style={{ fontSize: "16px" }}
              >
                Agree to
                <Link
                  to="/candidate/privacy-policy"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                  style={{ textDecoration: "none" }}
                >
                  {" "}
                  Privacy Policy
                </Link>{" "}
                &{" "}
                <Link
                  to="/candidate/terms-and-condition"
                  onClick={() => {
                    window.scrollTo(0, 0)
                  }}
                  style={{ textDecoration: "none" }}
                >
                  Terms and Conditions
                </Link>
              </Form.Label>
            </Form.Group>
            <div className="d-grid gap-2 mt-3">
              {/*  <Link to="/candidate/create-account/step-2"> */}
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Next
              </Button>
              {/*  </Link> */}
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default CandidateStep1
