import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

import React, { useEffect, useState } from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import { Oval } from "react-loader-spinner"

import CandidateHome from "../CandidateHome"
import ChooseFile from "../../../assets/ChooseFile"

function CandidateMyinfo() {
  const [validated, setValidated] = useState(false)
  const [file, setFile] = useState(null)
  const [userData, setData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    emailId: "",
    mobileNumber: "",
    city: "",
  })

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const token = Cookies.get("userToken")
      const userId = localStorage.getItem("userId")

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      }

      const response = await fetch(
        "http://localhost:5000/candidate/my-info",
        options
      )
      const data = await response.json()
      if (response.ok) {
        setData({
          userId: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          emailId: data.emailId,
          mobileNumber: data.mobileNumber,
          city: data.city,
        })
      } else {
        console.log(data)
      }
    }
    fetchData()
  }, [])

  const handleUpdate = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const token = Cookies.get("userToken")

    const formdata = new FormData()

    formdata.append("userId", userData.userId)
    formdata.append("firstName", userData.firstName)
    formdata.append("lastName", userData.lastName)
    formdata.append("emailId", userData.emailId)
    formdata.append("mobileNumber", userData.mobileNumber)
    formdata.append("city", userData.city)
    formdata.append("file", file)

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formdata,
    }

    const response = await fetch(
      "http://localhost:5000/candidate/update-info",
      options
    )

    const data = await response.json()
    if (response.ok) {
      toast.success("Updated Successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setIsLoading(false)
    } else {
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setIsLoading(false)
    }
  }

  const handleFileUpload = (e) => {
    setFile(e)
  }

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
      <ToastContainer />
      <CandidateHome />
      <div style={{ margin: "15px" }}>
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
                  defaultValue={userData.firstName}
                  onChange={(e) =>
                    setData({ ...userData, firstName: e.target.value })
                  }
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
                  defaultValue={userData.lastName}
                  onChange={(e) =>
                    setData({ ...userData, lastName: e.target.value })
                  }
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
                  defaultValue={userData.emailId}
                  onChange={(e) =>
                    setData({ ...userData, emailId: e.target.value })
                  }
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
                  defaultValue={userData.mobileNumber}
                  onChange={(e) =>
                    setData({ ...userData, mobileNumber: e.target.value })
                  }
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
                  defaultValue={userData.city}
                  onChange={(e) =>
                    setData({ ...userData, city: e.target.value })
                  }
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
                  <ChooseFile handleFileUpload={handleFileUpload} />
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
                <Form.Control.Feedback type="invalid">
                  Please upload your resume.
                </Form.Control.Feedback>
              </Form.Group>
              <small className="text-start text-muted mt-3">
                PDF,Doc,Docx, | Max:2MB
              </small>
            </Row>

            <div className="d-grid gap-2 mt-5">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                style={{ width: "100%", display: "grid", placeItems: "center" }}
                onClick={handleUpdate}
              >
                {isLoading ? (
                  <Oval
                    height="20"
                    width="20"
                    radius="9"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Update"
                )}
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default CandidateMyinfo
