import React from "react"
import { FloatingLabel, Form } from "react-bootstrap"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

const ShowAndHidePassword = () => {
  const { useState } = React
  const [inputtext, setinputtext] = useState({
    email: "",
    password: "",
  })

  const [warnemail, setwarnemail] = useState(false)
  const [warnpassword, setwarnpassword] = useState(false)

  const [eye, seteye] = useState(true)
  const [password, setpassword] = useState("password")
  const [type, settype] = useState(false)

  const inputEvent = (event) => {
    const name = event.target.name
    const value = event.target.value
    setinputtext((lastValue) => {
      return {
        ...lastValue,
        [name]: value,
      }
    })
  }

  const submitForm = (e) => {
    e.preventDefault()
    setwarnemail(false)
    setwarnpassword(false)
    if (inputtext.email === "") {
      setwarnemail(true)
    } else if (inputtext.password == "") {
      setwarnpassword(true)
    } else {
      alert("form submitted")
    }
  }

  const Eye = () => {
    if (password === "password") {
      setpassword("text")
      seteye(false)
      settype(true)
    } else {
      setpassword("password")
      seteye(true)
      settype(false)
    }
  }

  return (
    <>
      <div className="container">
        <div
          className="mt-3"
          style={{
            height: "57px",
            margin: "0px",
            width: "100%",
            border: "1px solid #ced4da",
            borderRadius: "5px",
          }}
        >
          <form
            onSubmit={submitForm}
            style={{
              width: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <FloatingLabel
              ontrolId="floatingText"
              label="Enter your password"
              style={{
                width: "100%",
                border: "0px",
                outline: "none",
                height: "55px",
              }}
            >
              <Form.Control
                type={password}
                className={` ${warnpassword ? "warning" : ""} ${
                  type ? "type_password" : ""
                }`}
                placeholder="Enter your password"
                value={inputtext.password}
                onChange={inputEvent}
                name="password"
                style={{
                  border: "0px",
                  padding: "0px",
                  background: "transparent",
                  outline: "none",
                  height: "55px",
                }}
              />
            </FloatingLabel>
            <i onClick={Eye} style={{ marginRight: "10px" }}>
              {" "}
              {eye ? (
                <AiFillEyeInvisible
                  style={{ fontSize: "20px", cursor: "pointer" }}
                />
              ) : (
                <AiFillEye style={{ fontSize: "20px", cursor: "pointer" }} />
              )}
            </i>
          </form>
        </div>
      </div>
    </>
  )
}

export default ShowAndHidePassword
