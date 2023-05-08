import FloatingLabel from "react-bootstrap/FloatingLabel"
import Col from "react-bootstrap/Col"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import React, { useState } from "react"
import Row from "react-bootstrap/Row"
import { Link, useHistory } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import { ToastContainer, toast } from "react-toastify"
import { ThreeDots } from "react-loader-spinner"
import Cookies from "js-cookie"

import Theme from "../../assets/Theme"

import "./index.css"
import "react-toastify/dist/ReactToastify.css"

function CandidateLogin() {
  const history = useHistory()
  const [validated, setValidated] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")
  const [isLoading, setIsLoading] = useState(false)
  const [loginDetails, setLoginDetails] = useState({
    emailOrNum: "",
    password: "",
  })

  const handleInputChange = (e) => {
    const value = e.target.value
    setLoginDetails((prevState) => {
      return {
        ...prevState,
        [e.target.name]: value,
      }
    })
  }

  const onSuccessLogin = (token, userId) => {
    setIsLoading(false)
    toast.success("Login successful!", {
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
    Cookies.set("userToken", token)
    localStorage.setItem("userId", userId)
    setTimeout(() => {
      history.replace("/candidate", { from: "login" })
    }, 1000)
  }

  const onFailureLogin = (message) => {
    setIsLoading(false)
    toast.error(`${message}!`, {
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

  const handleSubmit = async (event) => {
    event.preventDefault()
    setValidated(true)
    if (loginDetails.emailOrNum !== "" && loginDetails.password !== "") {
      setIsLoading(true)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginDetails),
      }

      const response = await fetch(
        "http://localhost:5000/candidate/login",
        options
      )

      const data = await response.json()
      if (response.ok) {
        onSuccessLogin(data.jwtToken, data.userId)
      } else {
        onFailureLogin(data.message)
      }
    }
  }

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
          <Container>
            <p className="website-name">Website</p>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="dark-mode-active" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Website
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="dark-mode-active">
                <div className="justify-content-end flex-grow-1 nav-link-container">
                  <Link
                    to="/login/candidate"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/candidate/create-account/step-1"
                    style={{
                      marginRight: "8px",
                      color: "#333333",
                      textDecoration: "none",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Candidate
                  </Link>
                  <Link
                    to="/employee/home"
                    style={{
                      marginRight: "8px",
                      color: "#333333",
                      textDecoration: "none",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Employer / Post Job
                  </Link>
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <ToastContainer />
      <div className="candidate-login-container p-2">
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-4 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ backgroundColor: "white" }}
        >
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
                      checked={true}
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
                      checked={false}
                    />
                  </Link>
                </div>
              ))}
            </Stack>
          </Form.Group>

          <Form
            action=""
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            onChange={handleInputChange}
          >
            <Row className="mb-3">
              <Form.Group as={Col} md="12" controlId="emailOrNum">
                <FloatingLabel controlId="emailId" label="Email ID / Number">
                  <Form.Control
                    required
                    name="emailOrNum"
                    placeholder="email"
                    defaultValue=""
                    className="form-control pr-5"
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Provide a Registered Email/Mobile Number.
                  </Form.Control.Feedback>
                </FloatingLabel>
              </Form.Group>

              <Form.Group
                as={Col}
                md="12"
                controlId="password"
                className="mt-2"
              >
                <div className="position-relative">
                  <FloatingLabel
                    controlId="password"
                    label="Enter your Password"
                  >
                    <Form.Control
                      required
                      type={passwordInputType}
                      name="password"
                      placeholder="Password"
                      defaultValue=""
                      className="form-control pr-5"
                      style={{ overflow: "hidden" }}
                    />

                    <span
                      className=" bg-white"
                      style={{
                        cursor: "pointer",
                        marginRight: "10px",
                        position: "absolute",
                        right: "0px",
                        top: "15px",
                      }}
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
                    <Form.Control.Feedback type="invalid">
                      Please Enter Your Password
                    </Form.Control.Feedback>
                  </FloatingLabel>
                </div>
              </Form.Group>

              <Link
                to="/candidate/change-password"
                className="text-start mt-3"
                style={{
                  color: "blue",
                  textDecoration: "none",
                  width: "150px",
                }}
              >
                Forget Password?
              </Link>
            </Row>

            <div className="d-grid gap-2 mt-3">
              <Button
                style={{ width: "100%", display: "grid", placeItems: "center" }}
                type="submit"
                variant="primary"
                size="lg"
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
                  "Login"
                )}
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
                Don't have an account ?{" "}
                <Link
                  to="/candidate/create-account/step-1"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  Create account
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default CandidateLogin
