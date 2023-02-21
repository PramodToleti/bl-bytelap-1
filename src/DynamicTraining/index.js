import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import DatePicker from "react-datepicker"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileTraining from "./ChooseFileTraining"

const DynamicTraining = (props) => {
  const [training, setTraining] = useState({
    training: "",
    startDate: "",
    endDate: "",
    file: null,
  })
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [file, setFile] = useState(null)
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

  const onChangeAchievements = (e) => {
    setTraining((prevState) => ({
      ...prevState,
      training: e.target.value,
    }))
  }

  const handleChangeStart = (date) => {
    setStartDate(date)
    setTraining((prevState) => ({
      ...prevState,
      startDate: date,
    }))
  }

  const handleChangeEnd = (date) => {
    setEndDate(date)
    setTraining((prevState) => ({
      ...prevState,
      endDate: date,
    }))
  }

  const handleFile = (event) => {
    setFile(event.target.files[0])
    setTraining((prevState) => ({
      ...prevState,
      file: event.target.files[0],
    }))
  }

  useEffect(() => {
    if (
      training.training !== "" &&
      training.startDate !== "" &&
      training.endDate !== "" &&
      training.file !== null
    ) {
      props.handleTraining(training)
    }
  }, [training, file, props])

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
      <Form.Label className="mb-3">Training / Course</Form.Label>
      {bookRoomData.map((data, i) => {
        return (
          <Row className="" key={i}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                onChange={onChangeAchievements}
                placeholder="Eg. React JS at Coderclub Institute"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Group className="mb-3" style={{ width: "100%" }}>
                <div className="mt-3 custom-date">
                  <div className="date-container">
                    <Form.Label className="mt-3">From</Form.Label>
                    <DatePicker
                      placeholderText="Date"
                      className="year-date"
                      selected={startDate}
                      onChange={handleChangeStart}
                    />
                    <Form.Label className="mt-3">To</Form.Label>
                    <DatePicker
                      placeholderText="Date"
                      className="year-date"
                      selected={endDate}
                      onChange={handleChangeEnd}
                    />
                  </div>
                </div>
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-2">
              <ChooseFileTraining handleFile={handleFile} />
            </Form.Group>
            {bookRoomData.length > 1 && i !== bookRoomData.length - 1 && (
              <hr
                className="separator mt-4 mb-4"
                style={{
                  border: "1px solid black",
                  backgroundColor: "black",
                }}
              />
            )}
          </Row>
        )
      })}
      <Row>
        {bookRoomData.length < 2 && (
          <Col className="mb-2 d-flex justify-content-end">
            <Button
              variant="outline-primary"
              className="ml-auto"
              onClick={handleAddFields}
            >
              Add More
            </Button>
          </Col>
        )}
        {bookRoomData.length > 1 && (
          <Col className="mb-2  mt-4 d-flex justify-content-between">
            <Button variant="danger" onClick={handleRemoveFields}>
              Remove
            </Button>

            <Button
              variant="outline-primary"
              className="ml-auto"
              onClick={handleAddFields}
            >
              Add More
            </Button>
          </Col>
        )}
      </Row>
    </Form>
  )
}

export default DynamicTraining
