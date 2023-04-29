import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import DatePicker from "react-datepicker"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileTraining from "./ChooseFileTraining"
import TextArea from "antd/es/input/TextArea"

const DynamicTraining = (props) => {
  const [trainings, setTrainings] = useState([
    {
      title: "",
      institute: "",
      startDate: "",
      endDate: "",
      file: null,
      resposibilities: "",
      isPresent: false,
    },
  ])
  const [fileInputs, setFileInputs] = useState([null])
  const [activeOption, setActiveOption] = useState("Course")

  const handleTitle = (e, index) => {
    const newTrainings = [...trainings]
    newTrainings[index].title = e.target.value
    setTrainings(newTrainings)
  }

  const handleInstitute = (e, index) => {
    const newTrainings = [...trainings]
    newTrainings[index].institute = e.target.value
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
      { title: "", institute: "", startDate: "", endDate: "", file: null },
    ])
    setFileInputs([...fileInputs, null])
  }

  const handleRemoveFields = () => {
    const newTrainings = [...trainings]
    newTrainings.pop()
    setTrainings(newTrainings)

    const newFileInputs = [...fileInputs]
    newFileInputs.pop()
    setFileInputs(newFileInputs)
  }

  useEffect(() => {
    trainings.every((each) => {
      if (
        each.title !== "" ||
        each.institute !== "" ||
        each.startDate !== "" ||
        each.endDate !== "" ||
        each.file !== null
      )
        props.handleTraining(trainings)
    })
  }, [trainings, props])

  return (
    <Form>
      {trainings.map((training, index) => (
        <Row className="" key={index}>
          <Col
            md={12}
            className="d-flex flex-directon-row mb-2"
            style={{ gap: "35px" }}
          >
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Check type="radio">
                <Form.Check.Input
                  type="radio"
                  onChange={() => setActiveOption("Course")}
                  checked={activeOption === "Course"}
                />
                <Form.Check.Label
                  style={{
                    fontSize: "17px",
                    color: "#000",
                    marginLeft: "10px",
                  }}
                >
                  Course
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Check type="radio">
                <Form.Check.Input
                  type="radio"
                  onChange={() => setActiveOption("Training")}
                  checked={activeOption === "Training"}
                />
                <Form.Check.Label
                  style={{
                    fontSize: "17px",
                    color: "#000",
                    marginLeft: "10px",
                  }}
                >
                  Training/Exp
                </Form.Check.Label>
              </Form.Check>
            </Form.Group>
          </Col>
          <Form.Group className="mb-4" controlId="formBasicText">
            <Form.Control
              type="text"
              value={training.title}
              onChange={(e) => handleTitle(e, index)}
              placeholder="Eg. React Native, Digital Marketing"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="institute">
            <Form.Control
              type="text"
              value={training.institute}
              onChange={(e) => handleInstitute(e, index)}
              placeholder="Company / Institute name"
            />
          </Form.Group>
          {activeOption === "Training" && (
            <Form.Group className="mb-2" controlId="formBasicText">
              <TextArea
                rows={4}
                placeholder="Roles & Responsibilites (Optional)"
                value={training.resposibilities}
                onChange={(e) => {
                  const newTrainings = [...trainings]
                  newTrainings[index].resposibilities = e.target.value
                  setTrainings(newTrainings)
                }}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3" style={{ width: "100%" }}>
            <div className=" custom-date">
              <div className="date-container">
                <Form.Label className="mt-3">From</Form.Label>
                <DatePicker
                  className="year-date"
                  selected={training.startDate}
                  onChange={(date) => handleChangeStart(date, index)}
                  dateFormat="MMM yyyy"
                  placeholderText="MM / YYYY"
                  showMonthYearPicker={true}
                  autoComplete="false"
                />
                <Form.Label className="mt-3">To</Form.Label>
                {training.isPresent ? (
                  <Form.Control
                    type="text"
                    className="year-date"
                    placeholder="Present"
                    disabled
                  />
                ) : (
                  <DatePicker
                    className="year-date"
                    dateFormat="MMM yyyy"
                    placeholderText="MM / YYYY"
                    showMonthYearPicker={true}
                    selected={training.endDate}
                    onChange={(date) => handleChangeEnd(date, index)}
                    autoComplete="false"
                  />
                )}
              </div>
            </div>
          </Form.Group>
          <Form.Group className="mb-1">
            <Form.Check>
              <Form.Check.Input
                type="checkbox"
                checked={training.isPresent}
                onChange={(e) => {
                  const newTrainings = [...trainings]
                  newTrainings[index].isPresent = e.target.checked
                  setTrainings(newTrainings)
                }}
              />
              <Form.Check.Label
                style={{
                  fontSize: "17px",
                  color: "#000",
                  marginLeft: "8px",
                }}
              >
                Present
              </Form.Check.Label>
            </Form.Check>
          </Form.Group>
          {/* <Form.Group className="mb-2">
            <ChooseFileTraining handleFile={handleFile} index={index} />
          </Form.Group> */}

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
