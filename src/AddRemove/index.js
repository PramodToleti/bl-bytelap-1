import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseField from "../ChooseField"

const AddRemove = (props) => {
  const [education, setEducation] = useState([
    {
      qualification: "",
      field: "",
    },
  ])

  const handleAddFields = () => {
    const values = [...education]
    values.push({ qualification: "", field: "" })
    setEducation(values)
  }

  const handleRemoveFields = () => {
    const values = [...education]
    if (values.length > 1) values.pop()
    setEducation(values)
  }

  const onChangeQualification = (e, i) => {
    const list = [...education]
    list[i].qualification = e.target.value
    setEducation(list)
  }

  const onChangeField = (e, i) => {
    const list = [...education]
    list[i].field = e[0].label
    setEducation(list)
  }

  useEffect(() => {
    education.every((each) => {
      if (each.qualification !== "" && each.field !== "")
        props.handleEducation(education)
    })
  }, [education, props])

  return (
    <Form>
      {education.map((data, i) => {
        return (
          <Row className="" key={i}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Qualification</Form.Label>
              <Form.Select onChange={(e) => onChangeQualification(e, i)}>
                <option>Select an option</option>
                <option>Master's</option>
                <option>Bachelor's</option>
                <option>Diploma</option>
                <option>High Secondary (12th)</option>
                <option>Secondary (10th)</option>
                <option>Doctorate</option>
                <option>Other</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Field </Form.Label>
              <ChooseField onChangeField={(e) => onChangeField(e, i)} />
            </Form.Group>
          </Row>
        )
      })}
      <Row>
        <Col className="mb-4 d-flex justify-content-between">
          <Button variant="outline-primary" onClick={handleAddFields}>
            Add More Education
          </Button>
          {education.length > 1 && (
            <Button variant="danger" onClick={handleRemoveFields}>
              Remove
            </Button>
          )}
        </Col>
      </Row>
    </Form>
  )
}

export default AddRemove
