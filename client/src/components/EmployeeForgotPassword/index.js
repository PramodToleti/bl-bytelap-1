import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import EmployeeHome from "../EmployeeHome"
import { useState } from "react"
import { ToastContainer, toast } from "react-toastify"
import { ThreeDots } from "react-loader-spinner"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
import Cookies from "js-cookie"

function EmployeeForgotPassword() {
  const [validated, setValidated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [passwordInputType, setPasswordInputType] = useState("password")
  const [confirmPasswordInputType, setConfirmPasswordInputType] =
    useState("password")
  const [password, setPassword] = useState({
    userId: localStorage.getItem("userId"),
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  const handleUpdate = (e) => {
    e.preventDefault()
    setValidated(true)
    if (password.newPassword !== password.confirmPassword) {
      toast.error("Password doesn't match", {
        position: "top-center",
        style: {
          marginTop: "30px",
          margin: "20px",
        },
      })
      return
    }
    if (
      password.oldPassword &&
      password.newPassword &&
      password.confirmPassword
    ) {
      setIsLoading(true)
      fetch("http://localhost:5000/employee/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Cookies.get("employeeToken")}`,
        },
        body: JSON.stringify(password),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "Password updated successfully") {
            toast.success(data.message, {
              position: "top-center",
              style: {
                marginTop: "30px",
                margin: "20px",
              },
            })
            setIsLoading(false)
          } else {
            toast.error(data.message, {
              position: "top-center",
              style: {
                marginTop: "30px",
                margin: "20px",
              },
            })
            setIsLoading(false)
          }
        })
        .catch((err) => {
          toast.error(err.message, {
            position: "top-center",
            style: {
              marginTop: "30px",
              margin: "20px",
            },
          })
          setIsLoading(false)
        })
    }
  }

  return (
    <>
      <ToastContainer />
      <EmployeeHome />
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
              <div className="position-relative">
                <Form.Control
                  required
                  type={passwordInputType}
                  placeholder=""
                  onChange={(e) => {
                    setPassword({ ...password, newPassword: e.target.value })
                  }}
                />

                <span
                  className="position-absolute  bg-white"
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    height: "30px",
                    display: "grid",
                    placeItems: "center",
                    top: "5px",
                    right: "0px",
                  }}
                  onClick={() =>
                    setPasswordInputType(
                      passwordInputType === "password" ? "text" : "password"
                    )
                  }
                >
                  {passwordInputType === "password" ? (
                    <AiFillEyeInvisible
                      id="passwordToggleIcon"
                      style={{ marginBottom: "10px", fontSize: "18px" }}
                    />
                  ) : (
                    <AiFillEye
                      id="passwordToggleIcon"
                      style={{ marginBottom: "10px", fontSize: "18px" }}
                    />
                  )}
                </span>
                <Form.Control.Feedback type="invalid">
                  Please enter your new password.
                </Form.Control.Feedback>
              </div>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="confirmPassword">
              <div className="position-relative">
                <Form.Label>Confirm Password </Form.Label>
                <Form.Control
                  required
                  type={confirmPasswordInputType}
                  placeholder=""
                  onChange={(e) => {
                    setPassword({
                      ...password,
                      confirmPassword: e.target.value,
                    })
                  }}
                />
                <span
                  className="position-absolute  bg-white"
                  style={{
                    cursor: "pointer",
                    marginRight: "10px",
                    height: "30px",
                    display: "grid",
                    placeItems: "center",
                    top: "50px",
                    right: "0px",
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
                    <AiFillEyeInvisible
                      id="confirmPasswordToggleIcon"
                      style={{ marginBottom: "10px", fontSize: "18px" }}
                    />
                  ) : (
                    <AiFillEye
                      id="confirmPasswordToggleIcon"
                      style={{ marginBottom: "10px", fontSize: "18px" }}
                    />
                  )}
                </span>
                <Form.Control.Feedback type="invalid">
                  Please confirm your password.
                </Form.Control.Feedback>
              </div>
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

export default EmployeeForgotPassword
