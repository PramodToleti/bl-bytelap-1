import FloatingLabel from "react-bootstrap/FloatingLabel"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"
import { Oval } from "react-loader-spinner"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import CreateAccountNav from "../CreateAccountNav"

function EmployeeStep1() {
  const history = useHistory()
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState("")
  const [timeStamp, setTimeStamp] = useState("")
  const [companyDetails, setCompanyDetails] = useState({
    companyName: "",
    officialEmail: "",
    otp: "",
  })

  const onSuccessOtp = (message, otp) => {
    setIsLoading(false)
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        border: "2px solid #00ff00",
        backgroundColor: "#fff",
        marginTop: "30px",
        margin: "20px",
      },
    })
    setOtp(otp)
    setTimeStamp(Date.now())
  }

  const onFailureOtp = (message) => {
    setIsLoading(false)
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        border: "2px solid #ff0000",
        backgroundColor: "#fff",
        marginTop: "30px",
        margin: "20px",
      },
    })
  }

  const onGetCode = async () => {
    if (companyDetails.officialEmail === "") {
      toast.error("Email can't be Empty", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      return
    }
    if (timeStamp === "" || Date.now() - timeStamp > 300000) {
      setIsLoading(true)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: companyDetails.officialEmail,
        }),
      }

      const response = await fetch(
        "http://localhost:5000/otp-verification/send-otp",
        options
      )
      const data = await response.json()
      if (response.ok) {
        onSuccessOtp(data.message, data.otp)
      } else {
        onFailureOtp(data.message)
      }
    } else {
      toast.error("OTP already sent", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  const onResend = () => {
    if (timeStamp !== "" && Date.now() - timeStamp < 300000) {
      toast.error("Try again after 5 mins", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    } else {
      onGetCode()
    }
  }

  const isFormFilled = () => {
    for (const key in companyDetails) {
      if (companyDetails.hasOwnProperty(key) && !companyDetails[key]) {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    setValidated(true)
    if (isFormFilled() && isFormValid(event.target)) {
      if (parseInt(otp) !== parseInt(companyDetails.otp)) {
        toast.error("Invalid OTP", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          style: {
            border: "2px solid #ff0000",
            backgroundColor: "#fff",
            marginTop: "30px",
            margin: "20px",
          },
        })
        return
      }
      if (Date.now() - timeStamp > 300000) {
        toast.error("OTP Expired", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          style: {
            border: "2px solid #ff0000",
            backgroundColor: "#fff",
            marginTop: "30px",
            margin: "20px",
          },
        })
        return
      }
      toast.success("Verified Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setTimeout(() => {
        history.push("/employee/create-account/step-2", companyDetails)
      }, 1000)
    } else {
      console.log("Fill the form")
    }
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCompanyDetails({ ...companyDetails, [name]: value })
  }

  return (
    <>
      <CreateAccountNav />
      <ToastContainer />
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "5px",
        }}
      >
        <div className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2      border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <Row className="mb-3">
              <p className="text-end mt-1">Step 1-2</p>
              <p className="text-center mt-3 mb-3">Create Employer Account</p>
              <Form.Group as={Col} md="12" controlId="validationCustom01">
                <FloatingLabel controlId="floatingText" label="Company Name">
                  <Form.Control
                    required
                    type="text"
                    placeholder="Demo Solution inc"
                    defaultValue=""
                    name="companyName"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter your company name.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                className="mt-3"
                controlId="validationCustom01"
              >
                <FloatingLabel
                  controlId="floatingText"
                  label="Official Email ID"
                >
                  <Form.Control
                    required
                    type="email"
                    placeholder="Info@company.com"
                    defaultValue=""
                    name="officialEmail"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please enter official email ID.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>
            </Row>

            <div
              style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}
            >
              <div>
                <button
                  className=" mt-1 text-center btn btn-primary"
                  type="button"
                  onClick={onGetCode}
                  style={{ display: "grid", placeItems: "center" }}
                >
                  {isLoading ? (
                    <Oval
                      height={20}
                      width={20}
                      color="#ffffff"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#ffffff"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  ) : (
                    "Get Code"
                  )}
                </button>
                {timeStamp && (
                  <p
                    style={{
                      color: "#dc3545",
                      fontSize: ".775rem",
                      marginBottom: "0px",
                      marginTop: "4px",
                    }}
                  >
                    Expires in 5min
                  </p>
                )}
              </div>

              <Form.Group className="mt-1" controlId="otp">
                <Form.Control
                  required
                  type="number"
                  placeholder="Enter Code"
                  name="otp"
                  defaultValue=""
                  style={{
                    maxWidth: "120px",
                    maxHeight: "40px",
                    border: "1px solid grey",
                  }}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the Code
                </Form.Control.Feedback>
              </Form.Group>
            </div>
            <p
              className="text-start mt-1"
              style={{
                textDecoration: "none",
                color: "blue",
                cursor: "pointer",
              }}
              onClick={onResend}
            >
              {" "}
              Resend again{" "}
            </p>

            <div className="d-grid gap-2 mt-3">
              <Button
                type="submit"
                variant="outline-secondary"
                size="lg"
                style={{ width: "100%" }}
              >
                Verify & Next
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default EmployeeStep1
