import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseField from "../ChooseField"
import FieldCheckbox from "../FieldCheckbox"

const AddRemove = (props) => {
  const [education, setEducation] = useState([
    {
      qualification: "",
      field: [],
    },
  ])

  const handleAddFields = () => {
    const values = [...education]
    values.push({ qualification: "", field: [] })
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
    list[i].field = []
    setEducation(list)
  }

  const handleLocation = (e, i) => {
    const list = [...education]
    const newList = []
    e.map((each) => {
      newList.push(each.label)
    })
    list[i].field = newList
    setEducation(list)
  }

  useEffect(() => {
    education.every((each) => {
      if (each.qualification !== "" || each.field.length !== 0)
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
                <option>Bsc</option>
                <option>Diploma</option>
                <option>High Secondary (12th)</option>
                <option>Secondary (10th)</option>
                <option>Any Graduate</option>
                <option>Any Post Graduate</option>
                <option>None</option>
              </Form.Select>
            </Form.Group>
            {(data.qualification === "Master's" ||
              data.qualification === "Bachelor's" ||
              data.qualification === "Bsc" ||
              data.qualification === "Diploma") && (
              <Form.Group className="mb-3">
                <Form.Label>Field </Form.Label>
                <FieldCheckbox handleLocation={(e) => handleLocation(e, i)} />
              </Form.Group>
            )}
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
