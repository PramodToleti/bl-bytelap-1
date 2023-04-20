import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import EmployeeHome from "../EmployeeHome"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import { Oval } from "react-loader-spinner"

import "react-toastify/dist/ReactToastify.css"

function MyInfo() {
  const [userData, setData] = useState({
    userId: "",
    firstName: "",
    lastName: "",
    mobileNumber: "",
  })
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const token = Cookies.get("employeeToken")
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
        "http://localhost:5000/employee/my-info",
        options
      )
      const data = await response.json()
      if (response.ok) {
        setData({
          userId: data._id,
          firstName: data.firstName,
          lastName: data.lastName,
          officialEmail: data.officialEmail,
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
    const token = Cookies.get("employeeToken")

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    }

    const response = await fetch(
      "http://localhost:5000/employee/update-info",
      options
    )

    const resdata = await response.json()
    if (response.ok) {
      setIsLoading(false)
      toast.success("Updated successfully", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    } else {
      console.log(resdata)
      toast.error("Something went wrong", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  return (
    <>
      <ToastContainer />
      <EmployeeHome />
      <div
        style={{
          margin: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "90vh",
        }}
      >
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-0 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ backgroundColor: "white" }}
        >
          <p className="text-center mb-5 fs-3"> My info </p>

          <Form action="">
            <Row className="mb-3">
              <Form.Group as={Col} md="6">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue={userData.firstName}
                  onChange={(e) =>
                    setData({ ...userData, firstName: e.target.value })
                  }
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=""
                  defaultValue={userData.lastName}
                  onChange={(e) =>
                    setData({ ...userData, lastName: e.target.value })
                  }
                />

                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Email ID </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                defaultValue={userData.officialEmail}
                onChange={(e) =>
                  setData({ ...userData, officialEmail: e.target.value })
                }
              />
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
              <Button
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

export default MyInfo
