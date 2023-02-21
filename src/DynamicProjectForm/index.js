import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseField from "../ChooseField"
import TextArea from "antd/es/input/TextArea"

const DynamicProjectForm = (props) => {
  const [projectDetails, setProjectDetails] = useState({
    url: "",
    about: "",
  })

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

  const onChangeUrl = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      url: e.target.value,
    }))
  }

  const onChangeAboutProject = (e) => {
    setProjectDetails((prevState) => ({
      ...prevState,
      about: e.target.value,
    }))
  }

  useEffect(() => {
    if (projectDetails.url !== "" && projectDetails.about !== "") {
      props.handleProject(projectDetails)
    }
  }, [projectDetails, props])

  return (
    <Form>
      <Form.Label className="mb-3">Projects</Form.Label>
      {bookRoomData.map((data, i) => {
        return (
          <Row className="" key={i}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                className="mb-3"
                placeholder="Paste URL"
                onChange={onChangeUrl}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <TextArea
                rows={4}
                placeholder="Roles & Responsibility"
                onChange={onChangeAboutProject}
              />
            </Form.Group>
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
          <Col className="mb-2 d-flex justify-content-between">
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

export default DynamicProjectForm
