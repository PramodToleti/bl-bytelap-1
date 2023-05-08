import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import { ThreeDots } from "react-loader-spinner"
import Cookies from "js-cookie"

import CreateAccountNav from "../CreateAccountNav"
import ChooseFile from "../../assets/ChooseFile"

import "./index.css"
import "react-toastify/dist/ReactToastify.css"

function EmployeeStep2() {
  const history = useHistory()
  const companyDetails = history.location.state
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
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

  if (companyDetails === undefined) {
    history.replace("/employee/create-account/step-1")
  }

  console.log(companyInfo)

  const onSuccess = (message, token, userId) => {
    setIsLoading(true)
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      style: { border: "2px solid #00ff00", backgroundColor: "#fff" },
    })
    Cookies.set("employeeToken", token)
    localStorage.setItem("userId", userId)
    setTimeout(() => {
      history.replace("/employee/")
    }, 2000)
  }

  const onError = (message) => {
    setIsLoading(true)
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      style: { border: "2px solid #ff0000", backgroundColor: "#fff" },
    })
  }

  const onSuccessSubmit = async (details) => {
    const formData = new FormData()
    formData.append("file", details.companyLogo)
    formData.append("companyName", details.companyName)
    formData.append("officialEmail", details.officialEmail)
    formData.append("firstName", details.firstName)
    formData.append("lastName", details.lastName)
    formData.append("role", details.role)
    formData.append("companyWebsite", details.companyWebsite)
    formData.append("aboutCompany", details.aboutCompany)
    formData.append("companyAddress", details.companyAddress)
    formData.append("password", details.password)
    formData.append("agreeToTerms", details.agreeToTerms)

    const options = {
      method: "POST",
      body: formData,
    }

    const response = await fetch(
      "http://localhost:5000/employee/create-account",
      options
    )
    const data = await response.json()
    if (response.ok) {
      onSuccess(data.message, data.jwtToken, data.userId)
    } else {
      onError(data.message)
    }
  }

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
    const { name } = event.target
    const value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value
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
    setIsLoading(true)
    if (isFormFilled() && isFormValid(event.target)) {
      if (companyInfo.password !== companyInfo.confirmPassword) {
        setPasswordMatch(false)
        return
      } else {
        setPasswordMatch(true)
      }
      onSuccessSubmit({ ...companyDetails, ...companyInfo })
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

              <Form.Group className="mb-2 mt-3" controlId="aboutCompany">
                <Form.Label>About Company</Form.Label>
                <Form.Control
                  required
                  text="type"
                  as="textarea"
                  rows={2}
                  placeholder=""
                  name="aboutCompany"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter about your company.
                </Form.Control.Feedback>
              </Form.Group>

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
            </Row>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%", display: "grid", placeItems: "center" }}
              >
                {isLoading ? (
                  <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="lightgrey"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EmployeeStep2
