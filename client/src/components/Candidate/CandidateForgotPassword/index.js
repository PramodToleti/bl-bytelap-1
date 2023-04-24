import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import CandidateHome from "../CandidateHome"
import { Link } from "react-router-dom"
import HomeHeader from "../CandidateHome"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { ThreeDots } from "react-loader-spinner"

function CandidateForgotPassword() {
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleUpdate = (e) => {
    e.preventDefault()
    setValidated(true)
    if (password.newPassword !== password.confirmPassword) {
      toast.error("Password doesn't match", { position: "top-center" })
      return
    }
    if (
      password.oldPassword &&
      password.newPassword &&
      password.confirmPassword
    ) {
      setIsLoading(true)
      fetch("http://localhost:5000/candidate/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(password),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === 200) {
            toast.success(data.message, { position: "top-center" })
            setIsLoading(false)
          } else {
            toast.error(data.message, { position: "top-center" })
            setIsLoading(false)
          }
        })
        .catch((err) => {
          toast.error(err.message, { position: "top-center" })
          setIsLoading(false)
        })
    }
  }

  return (
    <>
      <ToastContainer />
      <HomeHeader />
      <div className="p-2">
        <div
          className="col-lg-4 col-md-4 search-course-right   mb-0 mt-4 p-2     border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary"
          style={{ backgroundColor: "white" }}
        >
          <p className="text-center mb-5 fs-3"> Change Password </p>

          <Form noValidate validated={validated} onSubmit={handleUpdate}>
            <Form.Group className="mb-3 mt-2" controlId="oldPassword">
              <Form.Label>Old Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=""
                onChange={(e) => {
                  setPassword({ ...password, oldPassword: e.target.value })
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your old password.
              </Form.Control.Feedback>
            </Form.Group>
            <p
              className="text-end"
              style={{ color: "blue", cursor: "pointer" }}
            >
              {" "}
              forgot password ?
            </p>

            <Form.Group className="mb-3 mt-2" controlId="newPassword">
              <Form.Label>New Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=""
                onChange={(e) => {
                  setPassword({ ...password, newPassword: e.target.value })
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your new password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="confirmPassword">
              <Form.Label>Confirm Password </Form.Label>
              <Form.Control
                required
                type="password"
                placeholder=""
                onChange={(e) => {
                  setPassword({ ...password, confirmPassword: e.target.value })
                }}
              />
              <Form.Control.Feedback type="invalid">
                Please confirm your password.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
              <Button
                variant="primary"
                type="submit"
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

export default CandidateForgotPassword
