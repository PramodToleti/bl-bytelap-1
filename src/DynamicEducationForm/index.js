import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"

import "./index.css"

const DynamicEducationForm = (props) => {
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
                style={{
                  border: "1px solid #000000",
                  backgroundColor: "#000000",
                }}
              />
            )}
            <Form.Group>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>School Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="schoolName"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Degree</Form.Label>
                    <Form.Control
                      type="text"
                      name="degree"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Start Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="startDate"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>End Date</Form.Label>
                    <Form.Control
                      type="date"
                      name="endDate"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      name="schoolCity"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                      type="text"
                      name="branch"
                      onChange={onHandleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form.Group>
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

export default DynamicEducationForm
