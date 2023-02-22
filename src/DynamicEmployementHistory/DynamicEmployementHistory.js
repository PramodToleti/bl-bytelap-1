import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import TextArea from "antd/es/input/TextArea"
import { Form, Button, Row, Col } from "react-bootstrap"
import DatePicker from "react-datepicker"

const DynamicEmployementHistory = () => {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [checkbox, toggleCheckbox] = useState(false)

  const handleChangeStart = (date) => {
    setStartDate(date)
  }

  const handleChangeEnd = (date) => {
    setEndDate(date)
  }

  {
    /*useEffect(() => {
    if (
      degree.degree !== "" &&
      degree.field !== "" &&
      degree.city !== "" &&
      degree.startDate !== "" &&
      degree.endDate !== ""
    ) {
      props.handleDegree(degree)
    }
  }, [degree, props])*/
  }

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

  return (
    <Form>
      {bookRoomData.map((data, i) => {
        return (
          <Row key={i}>
            <h5>Employement History</h5>
            <Form.Group controlId="employement-profile" className="mb-3">
              <Form.Label>Job Profile</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg. PHP Developer"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid job profile
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="employement-company" className="mb-3">
              <Form.Label>Company</Form.Label>
              <Form.Control
                type="text"
                placeholder="Eg. Bytelap Technologies"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid company
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="employement-location" className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" required />
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
                  selected={startDate}
                  onChange={handleChangeStart}
                />
              </Form.Group>
              <Form.Group className="mb-3 col-sm-4">
                <Form.Label>To</Form.Label>
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
              </Form.Group>
              <Form.Group className="mt-4">
                <Form.Check
                  type="checkbox"
                  label="Present"
                  id="checkbox"
                  className="custom-control-input ml-1 mb-3"
                  checked={checkbox}
                  onChange={() => toggleCheckbox(!checkbox)}
                />
              </Form.Group>
            </div>

            <Form.Group controlId="responsibilities" className="mb-3">
              <Form.Label>Key Responsibilities (Optional)</Form.Label>
              <TextArea rows={7} />
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
            Add More
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
    </Form>
  )
}

export default DynamicEmployementHistory
