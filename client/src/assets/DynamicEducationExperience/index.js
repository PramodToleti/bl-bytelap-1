import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap"
import DatePicker from "react-datepicker"

import ChooseCity from "../ChooseCity"
import ChooseField from "../ChooseField"

const DynamicEducationExperience = (props) => {
  const [showHiddenFields, setShowHiddenFields] = useState(false)

  const [degreeList, setDegreeList] = useState([
    {
      degree: "",
      field: "",
      institute: "",
      city: "",
      yearOfCompletion: "",
      schoolName: "",
      startDate: "",
      endDate: "",
      hidden: false,
    },
  ])

  console.log(degreeList)

  const handleHideFields = (index) => {
    const list = [...degreeList]
    list[index].hidden = true
    setDegreeList(list)
    setShowHiddenFields(true)
  }

  const handleShowFields = (index) => {
    const list = [...degreeList]
    list[index].hidden = false
    setDegreeList(list)
    setShowHiddenFields(false)
  }

  const handleChangeStart = (date, index) => {
    const list = [...degreeList]
    list[index].startDate = date
    setDegreeList(list)
  }

  const handleChangeEnd = (date, index) => {
    const list = [...degreeList]
    list[index].endDate = date
    setDegreeList(list)
  }

  const onChangeDegree = (e, index) => {
    const list = [...degreeList]
    list[index].degree = e.target.value

    setDegreeList(list)
    if (
      e.target.value !== "Master's" ||
      e.target.value !== "Bachelor's" ||
      e.target.value !== "Diploma" ||
      e.target.value !== "Doctorate"
    ) {
      list[index].startDate = ""
      list[index].endDate = ""
      list[index].field = ""
      list[index].city = ""
      list[index].field = ""
      list[index].institute = ""
      setDegreeList(list)
    }
  }

  const onChangeField = (e, index) => {
    const list = [...degreeList]
    list[index].field = e[0].label
    setDegreeList(list)
  }

  const onChangeCity = (e, index) => {
    const list = [...degreeList]
    list[index].city = e[0].label
    setDegreeList(list)
  }

  const onChangeInstitute = (e, index) => {
    const list = [...degreeList]
    list[index].institute = e.target.value
    setDegreeList(list)
  }

  const onChangeSchool = (e, index) => {
    const list = [...degreeList]
    list[index].schoolName = e.target.value
    setDegreeList(list)
  }

  const onChangeCompletion = (date, index) => {
    const list = [...degreeList]
    list[index].yearOfCompletion = date
    setDegreeList(list)
  }

  const handleAddFields = () => {
    setDegreeList([
      ...degreeList,
      {
        degree: "",
        field: "",
        city: "",
        yearOfCompletion: "",
        schoolName: "",
        institute: "",
        startDate: "",
        endDate: "",
        hidden: false,
      },
    ])
    setShowHiddenFields(false)
  }

  const handleRemoveFields = () => {
    const list = [...degreeList]
    list.pop()
    setDegreeList(list)
    setShowHiddenFields(false)
  }

  useEffect(() => {
    if (degreeList.every((each) => each.degree !== ""))
      props.handleDegree(degreeList)
  }, [degreeList, props])

  return (
    <Form>
      {degreeList.map((data, i) => {
        return (
          <Row key={i}>
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Select
                required
                onChange={(e) => onChangeDegree(e, i)}
                value={data.degree}
              >
                <option>Degree</option>
                <option>Master's</option>
                <option>Bachelor's</option>
                <option>Diploma</option>
                <option>High Secondary (12th)</option>
                <option>Secondary (10th)</option>
                <option>Doctorate</option>
                <option>Other</option>
              </Form.Select>
              <Form.Control.Feedback>
                Please select a degree
              </Form.Control.Feedback>
            </Form.Group>

            {(data.degree === "High Secondary (12th)" ||
              data.degree === "Secondary (10th)") && (
              <>
                <Form.Group controlId="schoolName" className="mb-3">
                  <Form.Control
                    type="text"
                    placeholder="School Name/State Board/CBSE"
                    required
                    onChange={(e) => onChangeSchool(e, i)}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a school name
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label className="mb-1">Year of Completion</Form.Label>
                  <div style={{ maxWidth: "200px" }}>
                    <DatePicker
                      dateFormat="MMM yyyy"
                      className="year-date mb-3"
                      placeholderText="MM / YYYY"
                      selected={data.yearOfCompletion}
                      showMonthYearPicker={true}
                      value={data.yearOfCompletion}
                      onChange={(e) => onChangeCompletion(e, i)}
                    />
                  </div>
                </Form.Group>
              </>
            )}

            {(data.degree === "Master's" ||
              data.degree === "Bachelor's" ||
              data.degree === "Diploma" ||
              data.degree === "" ||
              data.degree === "Doctorate") && (
              <>
                <FormGroup className="mb-3 ">
                  <ChooseField
                    onChangeField={(e) => onChangeField(e, i)}
                    value={data.field}
                  />
                  {!data.hidden && (
                    <Form.Group className="mt-3" controlId="collegeName">
                      <Form.Control
                        type="text"
                        placeholder="Institute Name"
                        required
                        value={data.institute}
                        onChange={(e) => onChangeInstitute(e, i)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your Institute
                      </Form.Control.Feedback>
                    </Form.Group>
                  )}
                </FormGroup>

                {!data.hidden && (
                  <Form.Group className="mb-3">
                    <ChooseCity
                      onChangeCity={(e) => onChangeCity(e, i)}
                      value={data.city}
                    />
                  </Form.Group>
                )}

                {!data.hidden && (
                  <Form.Group className="mb-3" style={{ width: "100%" }}>
                    <Form.Label style={{ marginBottom: "0px" }}>
                      Year of Completion
                    </Form.Label>
                    <div className="mt-3 custom-date">
                      <div className="date-container">
                        <DatePicker
                          placeholderText="MM / YYYY"
                          dateFormat="MMM yyyy"
                          showMonthYearPicker={true}
                          className="year-date mb-3"
                          selected={data.startDate}
                          value={data.startDate}
                          onChange={(date) => handleChangeStart(date, i)}
                        />

                        {data.present ? (
                          <Form.Control
                            type="text"
                            className="year-date mb-3"
                            placeholder="Present"
                            disabled
                          />
                        ) : (
                          <DatePicker
                            placeholderText="MM / YYYY"
                            className="year-date mb-3"
                            selected={data.endDate}
                            value={data.endDate}
                            onChange={(date) => handleChangeEnd(date, i)}
                            showMonthYearPicker={true}
                            dateFormat="MMM yyyy"
                          />
                        )}
                      </div>
                    </div>
                  </Form.Group>
                )}
              </>
            )}

            {degreeList.length > 1 && i !== degreeList.length - 1 && (
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
          <Button
            variant="outline-primary"
            style={{ marginRight: "8px" }}
            onClick={handleAddFields}
          >
            Add More Education
          </Button>
          <div style={{ display: "flex", gap: "10px" }}>
            {degreeList.length > 1 && (
              <>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={handleRemoveFields}
                >
                  Remove
                </Button>
                {!showHiddenFields && (
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleHideFields(degreeList.length - 1)}
                  >
                    Hide
                  </Button>
                )}
                {showHiddenFields && (
                  <Button
                    variant="outline-secondary"
                    onClick={() => handleShowFields(degreeList.length - 1)}
                  >
                    Show
                  </Button>
                )}
              </>
            )}
          </div>
        </Col>
      </Row>
    </Form>
  )
}

export default DynamicEducationExperience
