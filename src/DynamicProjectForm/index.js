import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col } from "react-bootstrap"
import TextArea from "antd/es/input/TextArea"

import "./index.css"

const DynamicProjectForm = (props) => {
  const [showHiddenFields, setShowHiddenFields] = useState(false)
  const [projectDetails, setProjectDetails] = useState([
    { title: "", url: "", about: "", hidden: false, isValid: true },
  ])

  console.log(projectDetails)

  const handleHideFields = (index) => {
    const list = [...projectDetails]
    list[index].hidden = true
    setProjectDetails(list)
    setShowHiddenFields(true)
  }

  const handleShowFields = (index) => {
    const list = [...projectDetails]
    list[index].hidden = false
    setProjectDetails(list)
    setShowHiddenFields(false)
  }

  const handleAddFields = () => {
    const values = [...projectDetails]
    values.push({ title: "", url: "", about: "" })
    setProjectDetails(values)
  }

  const handleRemoveFields = () => {
    const values = [...projectDetails]
    values.pop()
    setProjectDetails(values)
  }

  const onChangeTitle = (e, index) => {
    const values = [...projectDetails]
    values[index].title = e.target.value
    setProjectDetails(values)
  }

  const onChangeUrl = (e, index) => {
    const values = [...projectDetails]
    values[index].url = e.target.value
    const regexUrlPattern = /^(?:(?:https?):\/\/)?(?:www\.)?[^\s/$.?#].[^\s]*$/i

    values[index].isValid = regexUrlPattern.test(e.target.value)
    setProjectDetails(values)
  }

  const onChangeAboutProject = (e, index) => {
    const values = [...projectDetails]
    values[index].about = e.target.value
    setProjectDetails(values)
  }

  useEffect(() => {
    if (
      projectDetails.every(
        (value) => value.title !== "" && value.url !== "" && value.about !== ""
      )
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
              <Form.Group className="mb-3" controlId="projetcTitle">
                <Form.Control
                  type="text"
                  placeholder="Project Title"
                  required
                  value={data.title}
                  onChange={(e) => onChangeTitle(e, i)}
                />
                <Form.Control.Feedback type="invalid">
                  Please enter the project name
                </Form.Control.Feedback>
              </Form.Group>
              {!data.hidden && (
                <Form.Group className="mb-3" controlId="formBasicText">
                  <Form.Control
                    type="url"
                    className={data.isValid ? "" : "danger"}
                    placeholder="Paste URL"
                    value={data.url}
                    onChange={(e) => onChangeUrl(e, i)}
                    isInvalid={!data.isValid}
                  />
                  {!data.isValid && (
                    <p className="err-msg">* Please Provide a Valid URL</p>
                  )}
                </Form.Group>
              )}
              {!data.hidden && (
                <Form.Group className="mb-3">
                  <TextArea
                    rows={4}
                    placeholder="Roles & Responsibility"
                    value={data.about}
                    onChange={(e) => onChangeAboutProject(e, i)}
                  />
                </Form.Group>
              )}

              {projectDetails.length > 1 && i !== projectDetails.length - 1 && (
                <hr
                  className="separator mt-4 mb-4"
                  style={{
                    border: "1px solid #000000",
                    backgroundColor: "#000000",
                  }}
                />
              )}
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
            <div style={{ display: "flex", gap: "10px" }}>
              <Button variant="danger" onClick={handleRemoveFields}>
                Remove
              </Button>
              {!showHiddenFields && (
                <Button
                  variant="outline-secondary"
                  onClick={() => handleHideFields(projectDetails.length - 1)}
                >
                  Hide
                </Button>
              )}
              {showHiddenFields && (
                <Button
                  variant="outline-secondary"
                  onClick={() => handleShowFields(projectDetails.length - 1)}
                >
                  Show
                </Button>
              )}
            </div>

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
