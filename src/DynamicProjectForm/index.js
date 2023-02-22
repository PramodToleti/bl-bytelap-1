import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import TextArea from "antd/es/input/TextArea"

const DynamicProjectForm = (props) => {
  const [projectDetails, setProjectDetails] = useState([{ url: "", about: "" }])

  const handleAddFields = () => {
    const values = [...projectDetails]
    values.push({ url: "", about: "" })
    setProjectDetails(values)
  }

  const handleRemoveFields = (index) => {
    const values = [...projectDetails]
    values.splice(index, 1)
    setProjectDetails(values)
  }

  const onChangeUrl = (e, index) => {
    const values = [...projectDetails]
    values[index].url = e.target.value
    setProjectDetails(values)
  }

  const onChangeAboutProject = (e, index) => {
    const values = [...projectDetails]
    values[index].about = e.target.value
    setProjectDetails(values)
  }

  useEffect(() => {
    if (
      projectDetails.every((value) => value.url !== "" && value.about !== "")
    ) {
      props.handleProject(projectDetails)
    }
  }, [projectDetails, props])

  return (
    <Form>
      <Form.Label className="mb-3">Projects</Form.Label>
      {projectDetails.map((data, i) => {
        return (
          <div key={i}>
            <Row className="">
              <Form.Group className="mb-3" controlId="formBasicText">
                <Form.Control
                  type="url"
                  className="mb-3"
                  placeholder="Paste URL"
                  value={data.url}
                  onChange={(e) => onChangeUrl(e, i)}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a Valid URL
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3">
                <TextArea
                  rows={4}
                  placeholder="Roles & Responsibility"
                  value={data.about}
                  onChange={(e) => onChangeAboutProject(e, i)}
                />
              </Form.Group>
            </Row>
          </div>
        )
      })}
      <Row>
        {projectDetails.length < 2 && (
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
        {projectDetails.length > 1 && (
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
