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
            {bookRoomData.length > 1 && i !== 0 && (
              <div className="d-flex justify-content-center">
                <hr
                  className="separator mt-1 mb-3"
                  style={{
                    border: "1px solid #9e9e9e",
                    backgroundColor: "#9e9e9e",
                    width: "99%",
                  }}
                />
              </div>
            )}
            <Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="schoolName"
                  onChange={onHandleChange}
                  placeholder="Graduation / University"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="degree"
                  onChange={onHandleChange}
                  placeholder="Field of Study"
                />
              </Form.Group>
            </Form.Group>
          </Row>
        )
      })}

      <Row>
        <Col className="pt-3 d-flex justify-content-between">
          <Button size="sm" variant="primary" onClick={handleAddFields}>
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
