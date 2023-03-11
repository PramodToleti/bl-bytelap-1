import HomeHeader from "./CandidateHome"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import Dropdown from "react-bootstrap/Dropdown"
import { useState, useEffect } from "react"
import CandidateJobs from "./CandidateJobs"

function Home() {
  const [activeShifts, setActiveShifts] = useState([])
  const [activeSchedule, setActiveSchedule] = useState([])
  const [checkedShifts, setCheckedShifts] = useState([])
  const [checkedJobTypes, setCheckedJobTypes] = useState([])

  useEffect(() => {
    setActiveShifts(checkedShifts)
  }, [checkedShifts])

  const InternshipJobs = JSON.parse(localStorage.getItem("internshipJob"))

  return (
    <>
      <HomeHeader />
      <div style={{ paddingLeft: "7px" }}>
        <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-white rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="5"
              className="mt-3"
              controlId="validationCustom03"
            >
              <InputGroup size="md">
                <Form.Control
                  className="border border-secondary"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Search"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="mt-3"
              controlId="validationCustom04"
            >
              <InputGroup size="md">
                <Form.Control
                  className="border border-secondary"
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="Location"
                />
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="2"
              className="mt-3"
              controlId="validationCustom04"
            >
              <div className="d-grid gap-3">
                <Button variant="primary" size="md">
                  Find Job
                </Button>
              </div>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {checkedJobTypes.length !== 0
                    ? checkedJobTypes.join(", ")
                    : "Job Type"}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Form.Check
                      type="checkbox"
                      label="Internship"
                      name="Internship"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedJobTypes([
                            ...checkedJobTypes,
                            e.target.name,
                          ])
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <Form.Check
                      type="checkbox"
                      label="Fresher"
                      name="Fresher"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedJobTypes([
                            ...checkedJobTypes,
                            e.target.name,
                          ])
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    <Form.Check
                      type="checkbox"
                      label="Experience"
                      name="Experience"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedJobTypes([
                            ...checkedJobTypes,
                            e.target.name,
                          ])
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {checkedShifts.length === 0
                    ? "Shift"
                    : checkedShifts.join(", ")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Form.Check
                      type="checkbox"
                      label="Day"
                      name="Day"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedShifts([...checkedShifts, e.target.name])
                        } else {
                          setCheckedShifts(
                            checkedShifts.filter(
                              (shift) => shift !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <Form.Check
                      type="checkbox"
                      label="Night"
                      name="Night"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedShifts([...checkedShifts, e.target.name])
                        } else {
                          setCheckedShifts(
                            checkedShifts.filter(
                              (shift) => shift !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <Form.Check
                      type="checkbox"
                      label="Rotational"
                      name="Rotational"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedShifts([...checkedShifts, e.target.name])
                        } else {
                          setCheckedShifts(
                            checkedShifts.filter(
                              (shift) => shift !== e.target.name
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    <Form.Check
                      type="checkbox"
                      label="Any"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setCheckedShifts(["Any"])
                        } else {
                          setCheckedShifts([])
                        }
                      }}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {activeSchedule.length === 0
                    ? "Schedule"
                    : activeSchedule.join(", ")}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <Form.Check
                      type="checkbox"
                      label="Work From Home"
                      value="Work From Home"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setActiveSchedule([...activeSchedule, e.target.value])
                        } else {
                          setActiveSchedule(
                            activeSchedule.filter(
                              (schedule) => schedule !== e.target.value
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <Form.Check
                      type="checkbox"
                      label="Office"
                      value="Office"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setActiveSchedule([...activeSchedule, e.target.value])
                        } else {
                          setActiveSchedule(
                            activeSchedule.filter(
                              (schedule) => schedule !== e.target.value
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    <Form.Check
                      type="checkbox"
                      label="Flexible"
                      value="Flexible"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setActiveSchedule([...activeSchedule, e.target.value])
                        } else {
                          setActiveSchedule(
                            activeSchedule.filter(
                              (schedule) => schedule !== e.target.value
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-4">
                    <Form.Check
                      type="checkbox"
                      label="Any"
                      value="Any"
                      onChange={(e) => {
                        if (e.target.checked) {
                          setActiveSchedule([...activeSchedule, e.target.value])
                        } else {
                          setActiveSchedule(
                            activeSchedule.filter(
                              (schedule) => schedule !== e.target.value
                            )
                          )
                        }
                      }}
                    />
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Stack>
          </Form.Group>
        </div>

        <CandidateJobs
          activeSchedule={activeSchedule}
          checkedJobTypes={checkedJobTypes}
          activeShifts={activeShifts}
        />
      </div>
    </>
  )
}

export default Home
