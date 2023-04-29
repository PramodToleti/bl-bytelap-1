import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileAchievement from "./ChooseFileAchievement"
import TextArea from "antd/es/input/TextArea"
import DatePicker from "react-datepicker"

const DynamicAchievements = (props) => {
  const [achievements, setAchievements] = useState([
    {
      achievement: "",
      title: "",
      month: "",
      year: "",
    },
  ])

  const [fileInputs, setFileInputs] = useState([null])

  const handleAddFields = () => {
    setAchievements([
      ...achievements,
      {
        achievement: "",
        file: null,
      },
    ])
  }

  const handleRemoveFields = (index) => {
    const values = [...achievements]
    values.pop()
    setAchievements(values)
  }

  const onChangeAchievements = (e, index) => {
    const values = [...achievements]
    values[index].achievement = e.target.value
    setAchievements(values)
  }

  const handleFileUpload = (event, index) => {
    const newFileInputs = [...fileInputs]
    newFileInputs[index] = event.target.files[0]
    setFileInputs(newFileInputs)

    const newAchievements = [...achievements]
    newAchievements[index].file = event.target.files[0]
    setAchievements(newAchievements)
  }

  useEffect(() => {
    achievements.every((achievement) => {
      if (achievement.achievement !== "" || achievement.file !== null) {
        props.handleAchievements(achievements)
      }
    })
  }, [achievements, props])

  return (
    <Form>
      <Form.Label className="mb-2">
        Acheivements / Awards & Recognition
      </Form.Label>
      {achievements.map((data, index) => (
        <Row className="" key={index}>
          <Form.Group className="mb-4">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => {
                const values = [...achievements]
                values[index].title = e.target.value
                setAchievements(values)
              }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicText">
            <TextArea
              rows={3}
              value={data.achievement}
              onChange={(e) => onChangeAchievements(e, index)}
              placeholder="Eg. First Prize in Quiz Competition (Optional)"
            />
          </Form.Group>
          {/* <Form.Group className="mb-2">
            <ChooseFileAchievement
              handleFileUpload={handleFileUpload}
              index={index}
            />
          </Form.Group> */}

          <Form.Group className="mb-2">
            <Form.Group className="mb-3" style={{ width: "100%" }}>
              <div className="mt-3 custom-date">
                <div className="date-container">
                  <Form.Label className="mt-3">Month</Form.Label>
                  <DatePicker
                    className="year-date"
                    dateFormat="MMM"
                    placeholderText="Month"
                    showMonthYearPicker={true}
                    autoComplete="false"
                    selected={achievements[index].month}
                    onChange={(date) => {
                      const values = [...achievements]
                      values[index].month = date
                      setAchievements(values)
                    }}
                  />
                  <Form.Label className="mt-3">Year</Form.Label>
                  <DatePicker
                    className="year-date"
                    dateFormat="yyyy"
                    placeholderText="Year"
                    showMonthYearPicker={true}
                    autoComplete="false"
                    selected={achievements[index].year}
                    onChange={(date) => {
                      const values = [...achievements]
                      values[index].year = date
                      setAchievements(values)
                    }}
                  />
                </div>
              </div>
            </Form.Group>
          </Form.Group>

          {achievements.length > 1 && index !== achievements.length - 1 && (
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
        {achievements.length < 2 && (
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
        {achievements.length > 1 && (
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
