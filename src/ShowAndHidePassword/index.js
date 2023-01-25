import React from "react"
import { Form } from "react-bootstrap"
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
        <div className="card mt-3 p-2" style={{ height: "55px" }}>
          <form
            onSubmit={submitForm}
            style={{
              height: "100%",
              display: "flex",
              gap: "10px",
              alignItems: "center",
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
                border: 0,
                height: "100%",
                width: "90%",
                outline: "none",
                paddingLeft: "5px",
                color: "#000000",
              }}
            />
            <i onClick={Eye}>
              {" "}
              {eye ? (
                <AiFillEye style={{ fontSize: "20px" }} />
              ) : (
                <AiFillEyeInvisible style={{ fontSize: "20px" }} />
              )}
            </i>
          </form>
        </div>
      </div>
    </>
  )
}

export default ShowAndHidePassword
