import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"

import "./index.css"

const DynamicEmployementForm = (props) => {
  const onHandleChange = (e) => {
    const { handleChange } = props
    handleChange(e)
  }

  const [bookRoomData, setBookRoomData] = useState([
    { roomType: "", roomNumber: 0, guest: 0 },
  ])

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
                style={{ border: "1px solid black", backgroundColor: "black" }}
              />
            )}
            <Form.Group>
              <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    name="jobTitle"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={12}>
                <Form.Group className="mb-3">
                  <Form.Label>Company</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
            </Form.Group>
            <Col xs={12} md={12}>
              <Form.Group className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="jobCity"
                  onChange={onHandleChange}
                />
              </Form.Group>
            </Col>
            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="empStartDate"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="empEndDate"
                    onChange={onHandleChange}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Row>
        )
      })}

      <Row>
        <Col className="pt-3 d-flex justify-content-between">
          <Button variant="primary" onClick={handleAddFields}>
            Add More
          </Button>
          {bookRoomData.length > 1 && (
            <Button variant="danger" onClick={handleRemoveFields}>
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

export default DynamicEmployementForm
