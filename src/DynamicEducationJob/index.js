import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap"

import ChooseCity from "../ChooseCity"
import ChooseField from "../ChooseField"

const DynamicEducationJob = (props) => {
  const { handleDegree } = props
  let userDegree = { degree: "", field: "", city: "" }

  const onChangeDegree = (e) => {
    userDegree.degree = e.target.value
    console.log(userDegree)
  }

  const onChangeField = (e) => {
    userDegree.field = e[0].label
    console.log(userDegree)
  }

  const onChangeCity = (e) => {
    userDegree.city = e[0].label
    console.log(userDegree)
  }

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
      <Form.Label>Graduation</Form.Label>
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
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Degree</Form.Label>
              <Form.Select required onChange={onChangeDegree}>
                <option>None</option>
                <option>Master's</option>
                <option>Bachelor's</option>
                <option>Diploma</option>
                <option>High Secondary (12th)</option>
                <option>Secondary (10th)</option>
                <option>Doctorate</option>
                <option>Other</option>
              </Form.Select>
              <Form.Control.Feedback>
                Please select a degree
              </Form.Control.Feedback>
            </Form.Group>
            <FormGroup className="mb-3 ">
              <ChooseField onChangeField={onChangeField} />
            </FormGroup>
            <Form.Group className="mb-3">
              <ChooseCity onChangeCity={onChangeCity} />
            </Form.Group>
          </Row>
        )
      })}

      <Row>
        <Col className=" mb-3 d-flex justify-content-between">
          <Button variant="outline-primary" onClick={handleAddFields}>
            Add More Education
          </Button>
          {bookRoomData.length > 1 && (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={handleRemoveFields}
            >
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

export default DynamicEducationJob
