import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { useHistory } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import { ThreeDots } from "react-loader-spinner"
import Cookies from "js-cookie"

import CreateAccountNav from "../CreateAccountNav"

import "react-toastify/dist/ReactToastify.css"

function CandidateStep2() {
  const history = useHistory()
  const step1Data = history.location.state
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [graduationData, setGraduationData] = useState({
    degree: "",
    field: "",
    college: "",
    city: "",
    from: "",
    to: "",
    currentGoHere: false,
  })

  const onSuccessSubmit = async (candidateDetails) => {
    setIsLoading(true)
    const formData = new FormData()
    formData.append("file", candidateDetails.file)
    formData.append("firstName", candidateDetails.firstName)
    formData.append("lastName", candidateDetails.lastName)
    formData.append("emailId", candidateDetails.emailId)
    formData.append("password", candidateDetails.createPassword)
    formData.append("mobileNumber", candidateDetails.mobileNumber)
    formData.append("city", candidateDetails.city)
    formData.append("agreeToTerms", candidateDetails.agreeToTerms)
    formData.append(
      "graduation",
      JSON.stringify(candidateDetails.graduationData)
    )
    const options = {
      method: "POST",
      body: formData,
    }

    const response = await fetch(
      "http://localhost:5000/candidate/create-account",
      options
    )

    const data = await response.json()

    if (response.ok) {
      setIsLoading(false)
      toast.success("Account Created successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #00ff00", backgroundColor: "#fff" },
      })
      Cookies.set("userToken", data.jwtToken)
      setTimeout(() => {
        history.push("/candidate")
      }, 1000)
    } else {
      setIsLoading(false)
      toast.error(`${data.message}!`, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #ff0000", backgroundColor: "#fff" },
      })
    }
  }

  const handleInputChange = (e) => {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value
    setGraduationData({ ...graduationData, [e.target.name]: value })
  }

  const isFormFilled = () => {
    for (const key in graduationData) {
      if (
        graduationData.hasOwnProperty(key) &&
        key !== "currentGoHere" &&
        !graduationData[key]
      ) {
        return false
      }
    }
    return true
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
    if (isFormFilled()) {
      const candidateDetails = { ...step1Data, graduationData }
      onSuccessSubmit(candidateDetails)
    } else {
      console.log("Fill the form")
    }
  }

  return (
    <>
      <CreateAccountNav />
      <ToastContainer />
      <div className="p-2">
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ backgroundColor: "white" }}
        >
          <p className="text-end">Step 2-2</p>
          <p className="text-center">Graduation</p>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <Row className="mb-3">
              <Form.Group className="mb-3 mt-2" controlId="degree">
                <Form.Label>Degree </Form.Label>
                <Form.Control required as="select" type="select" name="degree">
                  <option value="">Select an option</option>
                  <option value="master">Master's</option>
                  <option value="bachelor">Bachelor's</option>
                  <option value="diploma">Diploma</option>
                  <option value="h_secondary">High Secondary (12th)</option>
                  <option value="secondary">Secondary (10th)</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </Form.Control>
                <Form.Control.Feedback type="invalid">
                  Please select your degree.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="field">
                <Form.Label>Field of study</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Information Technology"
                  defaultValue=""
                  name="field"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter field of study.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="college">
                <Form.Label>College/University</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder=""
                  defaultValue=""
                  name="college"
                />
                <Form.Control.Feedback type="invalid">
                  Please select your college.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3 mt-2" controlId="city">
                <Form.Label>City</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Indore"
                  defaultValue=""
                  name="city"
                />
                <Form.Control.Feedback type="invalid">
                  Please enter your city.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Group className="mb-3" style={{ width: "100%" }}>
                  <div className="mt-3 custom-date">
                    <div className="date-container">
                      <Form.Label className="mt-3">From</Form.Label>
                      <DatePicker
                        className="year-date"
                        dateFormat="MMM yyyy"
                        placeholderText="MM / YYYY"
                        showMonthYearPicker={true}
                        name="from"
                        selected={graduationData.from}
                        onChange={(e) =>
                          setGraduationData({ ...graduationData, from: e })
                        }
                      />
                      <Form.Label className="mt-3">To</Form.Label>
                      <DatePicker
                        className="year-date"
                        dateFormat="MMM yyyy"
                        placeholderText="MM / YYYY"
                        showMonthYearPicker={true}
                        name="to"
                        selected={graduationData.to}
                        onChange={(e) =>
                          setGraduationData({ ...graduationData, to: e })
                        }
                      />
                    </div>
                  </div>
                </Form.Group>
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Check
                  label="I currently go there "
                  feedback={
                    <div
                      style={{
                        marginTop: ".35rem",
                      }}
                    >
                      You must select if you are currently persuing.
                    </div>
                  }
                  feedbackType="invalid"
                  name="currentGoHere"
                />
              </Form.Group>
            </Row>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                style={{ width: "100%", display: "grid", placeItems: "center" }}
              >
                {isLoading ? (
                  <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Save"
                )}
              </Button>
            </div>

            <p
              className="text-start mt-3"
              onClick={() => {
                history.push("/candidate/create-account/step-1", {
                  step1Data,
                })
              }}
            >
              Back
            </p>
          </Form>
        </div>
      </div>
    </>
  )
}

export default CandidateStep2
