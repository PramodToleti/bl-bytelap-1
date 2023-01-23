import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseField from "../ChooseField"
import TextArea from "antd/es/input/TextArea"
import ChooseFile from "../ChooseFile"

const DynamicAchievements = () => {
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
      <Form.Label className="mb-3">Acheivements</Form.Label>
      {bookRoomData.map((data, i) => {
        return (
          <Row className="" key={i}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control type="text" className="mb-3" />
            </Form.Group>
            <Form.Group className="mb-4">
              <Form.Label className="mb-3">Upload Certificate:</Form.Label>
              <ChooseFile />
            </Form.Group>
          </Row>
        )
      })}
      <Row>
        <Col className="mb-2 d-flex justify-content-between">
          <Button variant="outline-primary" onClick={handleAddFields}>
            Add More Acheivements
          </Button>
          {bookRoomData.length > 1 && (
            <Button variant="danger" onClick={handleRemoveFields}>
              Remove
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  )
}

export default DynamicAchievements
