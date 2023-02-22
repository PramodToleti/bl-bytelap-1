import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import DatePicker from "react-datepicker"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileTraining from "./ChooseFileTraining"

const DynamicTraining = (props) => {
  const [trainings, setTrainings] = useState([
    { training: "", startDate: "", endDate: "", file: null },
  ])
  const [fileInputs, setFileInputs] = useState([null])

  const onChangeTraining = (e, index) => {
    const newTrainings = [...trainings]
    newTrainings[index].training = e.target.value
    setTrainings(newTrainings)
  }

  const handleChangeStart = (date, index) => {
    const newTrainings = [...trainings]
    newTrainings[index].startDate = date
    setTrainings(newTrainings)
  }

  const handleChangeEnd = (date, index) => {
    const newTrainings = [...trainings]
    newTrainings[index].endDate = date
    setTrainings(newTrainings)
  }

  const handleFile = (event, index) => {
    const newFileInputs = [...fileInputs]
    newFileInputs[index] = event.target.files[0]
    setFileInputs(newFileInputs)

    const newTrainings = [...trainings]
    newTrainings[index].file = event.target.files[0]
    setTrainings(newTrainings)
  }

  const handleAddFields = () => {
    setTrainings([
      ...trainings,
      { training: "", startDate: "", endDate: "", file: null },
    ])
    setFileInputs([...fileInputs, null])
  }

  const handleRemoveFields = (index) => {
    const newTrainings = [...trainings]
    newTrainings.splice(index, 1)
    setTrainings(newTrainings)

    const newFileInputs = [...fileInputs]
    newFileInputs.splice(index, 1)
    setFileInputs(newFileInputs)
  }

  useEffect(() => {
    trainings.every((each) => {
      if (
        each.training !== "" &&
        each.startDate !== "" &&
        each.endDate !== "" &&
        each.file !== null
      )
        props.handleTraining(trainings)
    })
  }, [trainings, props])

  return (
    <Form>
      {trainings.map((training, index) => (
        <Row className="" key={index}>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Control
              type="text"
              value={training.training}
              onChange={(e) => onChangeTraining(e, index)}
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
                    selected={training.startDate}
                    onChange={(date) => handleChangeStart(date, index)}
                  />
                  <Form.Label className="mt-3">To</Form.Label>
                  <DatePicker
                    placeholderText="Date"
                    className="year-date"
                    selected={training.endDate}
                    onChange={(date) => handleChangeEnd(date, index)}
                  />
                </div>
              </div>
            </Form.Group>
          </Form.Group>
          <Form.Group className="mb-2">
            <ChooseFileTraining handleFile={handleFile} index={index} />
          </Form.Group>

          {trainings.length > 1 && index !== trainings.length - 1 && (
            <hr
              className="separator mt-4 mb-4"
              style={{
                border: "1px solid black",
                backgroundColor: "black",
              }}
            />
          )}
        </Row>
      ))}
      <Row>
        {trainings.length < 2 && (
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
        {trainings.length > 1 && (
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
