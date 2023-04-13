import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

import CreateAccountNav from "../CreateAccountNav"
import ChooseFile from "../../assets/ChooseFile"
import "./index.css"

function EmployeeStep2() {
  const history = useHistory()
  const companyDetails = history.location.state
  const [validated, setValidated] = useState(false)
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [passwordInputType, setPasswordInputType] = useState("password")
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password")
  const [companyInfo, setCompanyInfo] = useState({
    firstName: "",
    lastName: "",
    role: "",
    companyWebsite: "",
    companyLogo: null,
    companyAddress: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  })

  const isFormFilled = () => {
    for (const key in companyDetails) {
      if (
        (companyDetails.hasOwnProperty(key) && !companyDetails[key]) ||
        (key === "password" && formData[key].length < 5)
      ) {
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

  const handleInputChange = (event) => {
    const { name, value } = event.target
    if (name === "") {
      setCompanyInfo((prevState) => ({
        ...prevState,
        companyLogo: event.target.files[0],
      }))
    } else {
      setCompanyInfo({ ...companyInfo, [name]: value })
    }
    !passwordMatch && setPasswordMatch(true)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
    if (isFormFilled() && isFormValid(event.target)) {
      if (companyInfo.password !== companyInfo.confirmPassword) {
        setPasswordMatch(false)
        return
      } else {
        setPasswordMatch(true)
      }
      console.log({ ...companyDetails, ...companyInfo })
    } else {
      console.log("Fill the form")
    }
  }

  return (
    <>
      <CreateAccountNav />
      <div
        style={{
          margin: "8px",
        }}
      >
        <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2    border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
          <p className="text-end">Step 2-2</p>
          <p className="text-center">Company Info</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  defaultValue=""
                  name="firstName"
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
                  placeholder="Last name"
                  defaultValue=""
                  name="lastName"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter you last name.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mt-2">
                <Form.Label> You Role </Form.Label>
                <Form.Control
                  as={"select"}
                  name="role"
                  isInvalid={companyInfo.role === "" && validated}
                  required
                >
                  <option> Select an option </option>
                  <option> Owner </option>
                  <option>Human Resource</option>
                  <option>Junior Human Resource</option>
                  <option>Marketing Specialist</option>
                  <option>Junior Marketing Specialist</option>
                  <option>CEO</option>
                  <option>CTO</option>
                  <option>Other</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select your role.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="companyWebsite">
                <Form.Label>Company website</Form.Label>
                <Form.Control
                  required
                  type="link"
                  placeholder="Paste URL"
                  defaultValue=""
                  name="companyWebsite"
                />
                <Form.Control.Feedback type="invalid">
                  Enter your company website URL.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mt-3"
                controlId="companyLogo"
              >
                <Form.Label className="mt-2">Upload Company Logo </Form.Label>
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
                </Stack>
              </Form.Group>
              <small className="text-start text-muted mt-3">
                PDF,Doc,Docx, | Max:2MB
              </small>
              {companyInfo.companyLogo === null && validated && (
                <p
                  style={{
                    color: "#dc3545",
                    marginTop: "10px",

                    fontSize: ".875rem",
                  }}
                >
                  Please upload company logo.
                </p>
              )}

              <Form.Group className="mb-3 mt-3" controlId="companyAddress">
                <Form.Label>Company Address</Form.Label>
                <Form.Control
                  required
                  text="type"
                  as="textarea"
                  rows={2}
                  placeholder=""
                  name="companyAddress"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your company address.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} md="12" controlId="createPapassword">
                <Form.Label>Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    required
                    type={passwordInputType}
                    name="password"
                    placeholder="Password"
                    defaultValue=""
                    className="form-control pr-5"
                    value={companyInfo.password}
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y bg-white"
                    style={{ cursor: "pointer", marginRight: "10px" }}
                    onClick={() =>
                      setPasswordInputType(
                        passwordInputType === "password" ? "text" : "password"
                      )
                    }
                  >
                    {passwordInputType === "password" ? (
                      <AiFillEyeInvisible id="passwordToggleIcon" />
                    ) : (
                      <AiFillEye id="passwordToggleIcon" />
                    )}
                  </span>
                </div>
                {companyInfo.password === "" && validated && (
                  <p
                    className="mt-3"
                    style={{ color: "#dc3545", fontSize: ".825rem" }}
                  >
                    Please enter a password
                  </p>
                )}

                {companyInfo.password !== "" &&
                  companyInfo.password.length < 5 &&
                  validated && (
                    <p
                      className="mt-3"
                      style={{ color: "#dc3545", fontSize: ".825rem" }}
                    >
                      Password must be at least 5 characters
                    </p>
                  )}
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                controlId="confirmPassword"
                className="mt-2 mb-4"
              >
                <Form.Label>Confirm Password</Form.Label>
                <div className="position-relative">
                  <Form.Control
                    required
                    type={confirmPasswordInputType}
                    name="confirmPassword"
                    placeholder="Password"
                    defaultValue=""
                    value={companyInfo.confirmPassword}
                    className="form-control pr-5"
                  />
                  <span
                    className="position-absolute top-50 end-0 translate-middle-y bg-white"
                    style={{
                      cursor: "pointer",
                      zIndex: 1,
                      marginRight: "10px",
                    }}
                    onClick={() =>
                      setConfirmPasswordInputType(
                        confirmPasswordInputType === "password"
                          ? "text"
                          : "password"
                      )
                    }
                  >
                    {confirmPasswordInputType === "password" ? (
                      <AiFillEyeInvisible id="confirmPasswordToggleIcon" />
                    ) : (
                      <AiFillEye id="confirmPasswordToggleIcon" />
                    )}
                  </span>
                </div>
                {companyInfo.confirmPassword === "" && validated && (
                  <p
                    className="mt-3"
                    style={{ color: "#dc3545", fontSize: ".825rem" }}
                  >
                    Please confirm your password
                  </p>
                )}
                {!passwordMatch && (
                  <p
                    className="mt-3"
                    style={{
                      color: "#dc3545",
                      fontSize: ".875rem",
                    }}
                  >
                    Passwords do not match
                  </p>
                )}
              </Form.Group>

              <Form.Group className="mb-3  terms-container">
                <Form.Check
                  required
                  feedback={
                    <div
                      style={{
                        position: "absolute",
                        marginTop: "1.5rem",
                        marginBottom: "1rem",
                      }}
                    >
                      You must agree before submitting.
                    </div>
                  }
                  feedbackType="invalid"
                  className="terms-and-conditions"
                  name="agreeToTerms"
                />

                <Form.Label
                  className="terms-label"
                  style={{ fontSize: "16px", marginBottom: "30px" }}
                >
                  Agree to
                  <Link
                    to="/employee/privacy-policy"
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
                    to="/employee/terms-and-condition"
                    onClick={() => {
                      window.scrollTo(0, 0)
                    }}
                    style={{ textDecoration: "none" }}
                  >
                    Terms and Conditions
                  </Link>
                </Form.Label>
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Submit
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EmployeeStep2
