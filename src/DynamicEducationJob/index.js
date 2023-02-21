import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap"
import DatePicker from "react-datepicker"

import ChooseCity from "../ChooseCity"
import ChooseField from "../ChooseField"

import "./index.css"

const DynamicEducationJob = (props) => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [checkbox, toggleCheckbox] = useState(false)
  const [degree, setDegree] = useState({
    degree: "",
    field: "",
    city: "",
    startDate: "",
    endDate: "",
  })

  const handleChangeStart = (date) => {
    setStartDate(date)
    setDegree((prevState) => ({
      ...prevState,
      startDate: date,
    }))
  }

  const handleChangeEnd = (date) => {
    setEndDate(date)
    setDegree((prevState) => ({
      ...prevState,
      endDate: date,
    }))
  }

  const onChangeDegree = (e) => {
    setDegree((prevState) => ({
      ...prevState,
      degree: e.target.value,
    }))
  }

  const onChangeField = (e) => {
    setDegree((prevState) => ({
      ...prevState,
      field: e[0].label,
    }))
  }

  const onChangeCity = (e) => {
    setDegree((prevState) => ({
      ...prevState,
      city: e[0].label,
    }))
  }

  useEffect(() => {
    if (
      degree.degree !== "" &&
      degree.field !== "" &&
      degree.city !== "" &&
      degree.startDate !== "" &&
      degree.endDate !== ""
    ) {
      props.handleDegree(degree)
    }
  }, [degree, props])

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
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Select required onChange={onChangeDegree}>
                <option>Degree</option>
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

            <Form.Group className="mb-3" style={{ width: "100%" }}>
              <Form.Label style={{ marginBottom: "0px" }}>
                Year of Completion
              </Form.Label>
              <div className="mt-3 custom-date">
                <div className="date-container">
                  <DatePicker
                    placeholderText=""
                    className="year-date mb-3"
                    selected={startDate}
                    onChange={handleChangeStart}
                  />

                  {checkbox ? (
                    <DatePicker
                      placeholderText="Present"
                      className="year-date mb-3"
                      selected={endDate}
                      onChange={handleChangeEnd}
                      disabled
                    />
                  ) : (
                    <DatePicker
                      placeholderText=""
                      className="year-date mb-3"
                      selected={endDate}
                      onChange={handleChangeEnd}
                    />
                  )}

                  <Form.Check
                    type="checkbox"
                    label="Present"
                    id="checkbox"
                    className="custom-control-input ml-1 mb-3"
                    checked={checkbox}
                    onChange={() => toggleCheckbox(!checkbox)}
                  />
                </div>
              </div>
            </Form.Group>
            {bookRoomData.length > 1 && i !== bookRoomData.length - 1 && (
              <hr
                className="separator mt-4 mb-4"
                style={{
                  border: "1px solid #000000",
                  backgroundColor: "#000000",
                }}
              />
            )}
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
