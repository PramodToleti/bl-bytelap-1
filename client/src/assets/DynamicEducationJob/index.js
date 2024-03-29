import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.css"
import { Form, Button, Row, Col, FormGroup } from "react-bootstrap"
import DatePicker from "react-datepicker"

import ChooseCity from "../ChooseCity"
import ChooseField from "../ChooseField"

import "./index.css"
import ChooseDegree from "../ChooseDegree"
import ChooseInstitute from "../ChooseInstitute"

const DynamicEducationJob = (props) => {
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
      present: false,
    },
  ])

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

  const handlePresent = (e, i) => {
    const list = [...degreeList]
    list[i].present = e.target.checked
    setDegreeList(list)
    const values = [...degreeList]
    if (values[i].present === true) {
      values[i].endDate = ""
      setDegreeList(values)
    }
  }

  const onChangeDegree = (e, index) => {
    const list = [...degreeList]
    list[index].degree = e

    setDegreeList(list)
    if (
      e !== "Master's" ||
      e !== "Bachelor's" ||
      e !== "Diploma" ||
      e !== "Doctorate"
    ) {
      list[index].startDate = ""
      list[index].endDate = ""
      list[index].field = ""
      list[index].city = ""
      list[index].field = ""
      list[index].institute = ""
      list[index].present = false
      setDegreeList(list)
    }
  }

  const onChangeField = (e, index) => {
    const list = [...degreeList]
    list[index].field = e
    setDegreeList(list)
  }

  const onChangeCity = (e, index) => {
    const list = [...degreeList]
    list[index].city = e
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

  const onChangeInstitute = (e, index) => {
    const list = [...degreeList]
    list[index].institute = e
    setDegreeList(list)
  }

  const handleAddFields = () => {
    setDegreeList([
      ...degreeList,
      {
        degree: "",
        field: "",
        city: "",
        schoolName: "",
        yearOfCompletion: "",
        institute: "",
        startDate: "",
        endDate: "",
        present: false,
      },
    ])
  }

  const handleRemoveFields = () => {
    const list = [...degreeList]
    list.pop()
    setDegreeList(list)
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
              <ChooseDegree
                onChangeDegree={(e) => onChangeDegree(e, i)}
                value={data.field}
              />
            </Form.Group>

            {!data.hidden &&
              (data.degree === "Higher Secondary (12th Pass)" ||
                data.degree === "Secondary (10th Pass)") && (
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

            {!data.hidden &&
              (data.degree === "Master's" ||
                data.degree === "Bachelor's" ||
                data.degree === "Diploma" ||
                data.degree === "") && (
                <>
                  <FormGroup className="mb-3 ">
                    <ChooseField
                      onChangeField={(e) => onChangeField(e, i)}
                      value={data.field}
                    />
                    <Form.Group className="mt-3" controlId="collegeName">
                      <ChooseInstitute
                        value={data.institute}
                        onChangeInstitute={(e) => onChangeInstitute(e, i)}
                      />
                      <Form.Control.Feedback type="invalid">
                        Please enter your Institute
                      </Form.Control.Feedback>
                    </Form.Group>
                  </FormGroup>
                  <Form.Group className="mb-3">
                    <ChooseCity
                      onChangeCity={(e) => onChangeCity(e, i)}
                      value={data.city}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" style={{ width: "100%" }}>
                    <Form.Label style={{ marginBottom: "0px" }}>
                      Year of Completion
                    </Form.Label>
                    <div className="mt-3 custom-date">
                      <div className="date-container">
                        <DatePicker
                          dateFormat="MMM yyyy"
                          className="year-date mb-3"
                          selected={data.startDate}
                          value={data.startDate}
                          onChange={(date) => handleChangeStart(date, i)}
                          showMonthYearPicker={true}
                          placeholderText="MM / YYYY"
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
                            dateFormat="MMM yyyy"
                            placeholderText="MM / YYYY"
                            showMonthYearPicker={true}
                            className="year-date mb-3"
                            selected={data.endDate}
                            value={data.endDate}
                            onChange={(date) => handleChangeEnd(date, i)}
                          />
                        )}
                      </div>
                      <Form.Check
                        type="checkbox"
                        label="Present"
                        id="checkbox"
                        className="custom-control-input ml-1 mt-2"
                        checked={data.present}
                        onChange={(e) => handlePresent(e, i)}
                      />
                    </div>
                  </Form.Group>
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
        {degreeList.length < 2 && (
          <Col className="mb-3 d-flex justify-content-end">
            <Col className="mb-2 d-flex justify-content-end">
              <Button
                variant="outline-primary"
                className="ml-auto"
                onClick={handleAddFields}
              >
                Add More
              </Button>
            </Col>
          </Col>
        )}

        {degreeList.length > 1 && (
          <Col className=" mb-3 d-flex justify-content-between">
            <div style={{ display: "flex", gap: "10px" }}>
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

export default DynamicEducationJob
