import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileAchievement from "./ChooseFileAchievement"

const DynamicAchievements = (props) => {
  const [bookRoomData, setBookRoomData] = useState([
    { roomType: "", roomNumber: 0, guest: 0 },
  ])
  const [achievements, setAchievements] = useState({
    achievements: "",
    file: null,
  })
  const [file, setFile] = useState(null)

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

  const onChangeAchievements = (e) => {
    setAchievements((prevState) => ({
      ...prevState,
      achievements: e.target.value,
    }))
  }

  const handleFileUpload = (event) => {
    setFile(event.target.files[0])
    setAchievements((prevState) => ({
      ...prevState,
      file: event.target.files[0],
    }))
  }

  console.log(achievements)

  useEffect(() => {
    if (achievements.achievements !== "" && achievements.file !== null) {
      props.handleAchievements(achievements)
    }
  }, [achievements, file, props])

  return (
    <Form>
      <Form.Label className="mb-3">
        Acheivements / Awards & Recognition
      </Form.Label>
      {bookRoomData.map((data, i) => {
        return (
          <Row className="" key={i}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control
                type="text"
                onChange={onChangeAchievements}
                placeholder="Eg. First Prize in Quiz Competition"
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <ChooseFileAchievement handleFileUpload={handleFileUpload} />
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

export default DynamicAchievements
