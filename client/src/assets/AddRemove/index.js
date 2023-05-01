import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import ChooseDegree from "../ChooseDegree"
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

  const onChangeDegree = (e, i) => {
    const list = [...education]
    list[i].qualification = e
    list[i].field = []
    setEducation(list)
  }

  const onChangeField = (e, i) => {
    const list = [...education]
    list[i].field = e
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
              <ChooseDegree onChangeDegree={(e) => onChangeDegree(e, i)} />
            </Form.Group>
            {(data.qualification === "Master's" ||
              data.qualification === "Bachelor's" ||
              data.qualification === "Bsc" ||
              data.qualification === "Diploma") && (
              <Form.Group className="mb-3">
                <Form.Label>Field </Form.Label>
                <ChooseField onChangeField={(e) => onChangeField(e, i)} />
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
