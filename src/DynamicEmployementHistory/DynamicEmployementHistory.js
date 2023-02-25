import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import TextArea from "antd/es/input/TextArea"
import { Form, Button, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"

const DynamicEmployementHistory = (props) => {
  const [checkbox, toggleCheckbox] = useState(false)

  const [employmentHistory, setEmploymentHistory] = useState([
    {
      profile: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
      present: false,
    },
  ])

  const handleAddFields = () => {
    const values = [...employmentHistory]
    values.push({
      profile: "",
      company: "",
      location: "",
      startDate: "",
      endDate: "",
      responsibilities: "",
      present: "",
    })
    setEmploymentHistory(values)
  }

  const handleRemoveFields = (index) => {
    const values = [...employmentHistory]
    values.splice(index, 1)
    setEmploymentHistory(values)
  }

  const onChangeProfile = (e, index) => {
    const list = [...employmentHistory]
    list[index].profile = e.target.value
    setEmploymentHistory(list)
  }

  const onChangeCompany = (e, index) => {
    const list = [...employmentHistory]
    list[index].company = e.target.value
    setEmploymentHistory(list)
  }

  const onChangeLocation = (e, index) => {
    const list = [...employmentHistory]
    list[index].location = e.target.value
    setEmploymentHistory(list)
  }

  const onChangeStart = (date, index) => {
    const list = [...employmentHistory]
    list[index].startDate = date
    setEmploymentHistory(list)
  }

  const onChangeEnd = (date, index) => {
    const list = [...employmentHistory]
    list[index].endDate = date
    setEmploymentHistory(list)
  }

  const handlePresent = (e, i) => {
    const list = [...employmentHistory]
    list[i].present = e.target.checked
    setEmploymentHistory(list)
  }

  const onChangeResponsibilities = (e, index) => {
    const list = [...employmentHistory]
    list[index].responsibilities = e.target.value
    setEmploymentHistory(list)
  }

  useEffect(() => {
    employmentHistory.every((each) => {
      if (
        each.profile !== "" &&
        each.company !== "" &&
        each.location &&
        each.startDate !== "" &&
        each.responsibilities !== ""
      )
        props.handleHistory(employmentHistory)
    })
  }, [employmentHistory, props])

  return (
    <Form>
      <h5>Employment History</h5>
      {employmentHistory.map((data, i) => {
        return (
          <Row key={i}>
            <Form.Group controlId={`jobProfile-${i}`} className="mb-3">
              <Form.Label>Job Profile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg. PHP Developer"
                required
                value={data.profile}
                onChange={(e) => onChangeProfile(e, i)}
                name="profile"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid job profile
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={`company-${i}`} className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg. Bytelap Technologies"
                required
                value={data.company}
                onChange={(e) => onChangeCompany(e, i)}
                name="company"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid company
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId={`location-${i}`} className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                required
                value={data.location}
                name="location"
                onChange={(e) => onChangeLocation(e, i)}
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid location
              </Form.Control.Feedback>
            </Form.Group>

            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <Form.Group className="mb-3 col-sm-4">
                <Form.Label>From</Form.Label>
                <DatePicker
                  placeholderText=""
                  className="year-date mb-3"
                  selected={data.startDate}
                  onChange={(date) => onChangeStart(date, i, "startDate")}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-sm-4">
                <Form.Label>To</Form.Label>
                {data.present ? (
                  <Form.Control
                    type="text"
                    className="year-date mb-3"
                    placeholder="Present"
                    disabled
                  />
                ) : (
                  <DatePicker
                    placeholderText=""
                    className="year-date mb-3"
                    selected={data.endDate}
                    onChange={(date) => onChangeEnd(date, i)}
                  />
                )}
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Check
                  type="checkbox"
                  label="Present"
                  id={`present-${i}`}
                  className="custom-control-input ml-1 mb-3"
                  checked={data.present}
                  onChange={(e) => handlePresent(e, i)}
                />
              </Form.Group>
            </div>

            <Form.Group controlId={`responsibilities-${i}`} className="mb-3">
              <Form.Label>Key Responsibilities (Optional)</Form.Label>
              <TextArea
                rows={7}
                value={data.responsibilities}
                onChange={(e) => onChangeResponsibilities(e, i)}
                name="responsibilities"
              />
            </Form.Group>
            {employmentHistory.length > 1 &&
              i !== employmentHistory.length - 1 && (
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
            Add More
          </Button>
          {employmentHistory.length > 1 && (
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
    </Form>
  )
}

export default DynamicEmployementHistory
