import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"

import ChooseCity from "../ChooseCity"

import "./index.css"

const DynamicPostJobFresher = (props) => {
  const [bookRoomData, setBookRoomData] = useState([
    { roomType: "", roomNumber: 0, guest: 0 },
  ])

  const [jobType, setJobType] = useState("Office")

  const handleChange = (index, event) => {
    const values = [...bookRoomData]
    if (event.target.name === "roomType") {
      values[index].roomType = event.target.value
    } else if (event.target.name === "roomNumber" && event.target.value > 0) {
      values[index].roomNumber = event.target.value
    } else if (event.target.name === "guest" && event.target.value > 0) {
      values[index].guest = event.target.value
    }

    setBookRoomData(values)
  }

  const handleAddFields = () => {
    const values = [...bookRoomData]
    values.push({ roomType: "", roomNumber: 0, guest: 0 })
    setBookRoomData(values)
  }

  const handleRemoveFields = () => {
    const values = [...bookRoomData]
    if (values.length > 1) values.pop()
    setBookRoomData(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(bookRoomData, null, 2))
  }

  return (
    <Form>
      {bookRoomData.map((data, i) => {
        return (
          <Row key={i}>
            {bookRoomData.length > 1 && (
              <hr
                className="separator mt-2 mb-2"
                style={{
                  border: "0.5px solid #000000",
                  backgroundColor: "#000000",
                }}
              />
            )}
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Job Tittle for Frehser</Form.Label>
              <Form.Control
                type="email"
                placeholder="software developer , digital marketing"
              />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Full time or Part time </Form.Label>
              <Form.Select>
                <option> Select an option </option>
                <option> Full-Time </option>
                <option>Part-Time</option>
                <option>Both</option>
              </Form.Select>
            </Form.Group>
          </Row>
        )
      })}

      <Row>
        <Col className="mb-3 d-flex justify-content-between">
          <Button variant="primary" size="sm" onClick={handleAddFields}>
            Add More
          </Button>
          {bookRoomData.length > 1 && (
            <Button variant="danger" size="sm" onClick={handleRemoveFields}>
              Remove
            </Button>
          )}
        </Col>
      </Row>

      {/*<div className="submit-container">
        <Button
          className="mt-5 "
          variant="primary"
          type="submit"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>*/}
    </Form>
  )
}

export default DynamicPostJobFresher
