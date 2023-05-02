import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseFileAchievement from "./ChooseFileAchievement"
import TextArea from "antd/es/input/TextArea"
import DatePicker from "react-datepicker"
import { Typeahead } from "react-bootstrap-typeahead"

const DynamicAchievements = (props) => {
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedMonths, setSelectedMonths] = useState([])
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

  const handleYearChange = (selected) => {
    const yearsLabel = selected[0]?.label || ""
    const yearsValue = selected[0]?.value || ""
    setSelectedYears([{ label: `${yearsLabel} `, value: yearsValue }])
  }

  const handleMonthChange = (selected) => {
    const monthsLabel = selected[0]?.label || ""
    const monthsValue = selected[0]?.value || ""
    setSelectedMonths([{ label: `${monthsLabel}`, value: monthsValue }])
  }

  const currentYear = new Date().getFullYear()
  const yearOptions = Array.from({ length: 12 }, (_, index) => ({
    label: `${currentYear - index}`,
    value: currentYear - index,
  }))

  const monthOptions = Array.from({ length: 12 }, (_, index) => ({
    label: new Date(2000, index).toLocaleString("default", {
      month: "long",
    }),
    value: index + 1,
  }))

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

          <Row className="mb-3">
            <Col xs={6}>
              <Form.Group
                controlId="experience-months"
                className="col-sm-5 mb-2"
                style={{
                  width: "100%",
                }}
              >
                <Form.Label>Month</Form.Label>
                <Typeahead
                  id="month-typeahead"
                  options={monthOptions}
                  placeholder="Month"
                  onChange={(date) => {
                    const values = [...achievements]
                    values[index].month = date
                    setAchievements(values)
                    handleMonthChange(date)
                  }}
                  selected={selectedMonths}
                  filterBy={() => true}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid month
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group
                controlId="experience-years"
                className="col-sm-5 mb-2"
                style={{
                  width: "100%",
                }}
              >
                <Form.Label>Year</Form.Label>
                <Typeahead
                  id="year-typeahead"
                  options={yearOptions}
                  placeholder="Year"
                  onChange={(date) => {
                    const values = [...achievements]
                    values[index].year = date
                    setAchievements(values)
                    handleYearChange(date)
                  }}
                  selected={selectedYears}
                  filterBy={() => true}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid year
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

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
