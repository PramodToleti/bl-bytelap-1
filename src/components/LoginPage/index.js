import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Offcanvas from "react-bootstrap/Offcanvas"
import Stack from "react-bootstrap/Stack"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import InputGroup from "react-bootstrap/InputGroup"
import Dropdown from "react-bootstrap/Dropdown"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Oval } from "react-loader-spinner"

import Theme from "../../Theme"
import CandidateJobs from "../Candidate/CandidateJobs"
import JobSearchField from "../../JobSearchField"
import JobLocationField from "../../JobLocationField"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"

function LoginPage() {
  const [activeSearch, setActiveSearch] = useState("")
  const [activeLocation, setActiveLocation] = useState("")
  const [activeShifts, setActiveShifts] = useState([])
  const [activeSchedule, setActiveSchedule] = useState([])
  const [checkedShifts, setCheckedShifts] = useState([])
  const [checkedJobTypes, setCheckedJobTypes] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const [searchDetails, setSearchDetails] = useState({
    search: "",
    location: "",
  })

  const handleSearch = (e) => {
    setActiveSearch(e)
  }

  const handleLocation = (e) => {
    setActiveLocation(e)
  }

  useEffect(() => {
    setActiveShifts(checkedShifts)
  }, [checkedShifts])

  isLoading &&
    setTimeout(() => {
      setIsLoading(false)
    }, 200)

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 mt-2">
          <Container>
            <p className="website-name">Website</p>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header className="dark-mode-active" closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Website
                </Offcanvas.Title>
              </Offcanvas.Header>

              <Offcanvas.Body className="dark-mode-active">
                <div className="justify-content-end flex-grow-1 nav-link-container">
                  <Link
                    to="/login/candidate"
                    style={{
                      textDecoration: "none",
                      marginRight: "5px",
                      color: "#333333",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Login
                  </Link>
                  <Link
                    to="/candidate/create-account/step-1"
                    style={{
                      marginRight: "8px",
                      color: "#333333",
                      textDecoration: "none",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Candidate
                  </Link>
                  <Link
                    to="/employee/home"
                    style={{
                      marginRight: "8px",
                      color: "#333333",
                      textDecoration: "none",
                      marginTop: "8px",
                      fontSize: "18px",
                    }}
                  >
                    Employer / Post Job
                  </Link>
                  <Theme />
                </div>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

      <div style={{ paddingLeft: "7px" }}>
        <div className="col-lg-12 col-md-4 search-course-right    mt-4 p-2 bg-light text-dark  border-white rounded container reveal  p-34 bg-white rounded border border-secondary">
          <Row className="mb-4">
            <Form.Group
              as={Col}
              md="5"
              className="mt-3"
              controlId="validationCustom03"
            >
              <InputGroup size="md">
                <JobSearchField handleSearch={handleSearch} />
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="4"
              className="mt-3"
              controlId="validationCustom04"
            >
              <InputGroup size="md">
                <JobLocationField handleLocation={handleLocation} />
              </InputGroup>
            </Form.Group>
            <Form.Group
              as={Col}
              md="2"
              className="mt-3"
              controlId="validationCustom04"
            >
              <div className="d-grid gap-3">
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    setSearchDetails({
                      search: activeSearch,
                      location: activeLocation,
                    })
                    setIsLoading(true)
                  }}
                >
                  Search
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
                          setIsLoading(true)
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                          setIsLoading(true)
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
                          setIsLoading(true)
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                          setIsLoading(true)
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
                          setIsLoading(true)
                        } else {
                          setCheckedJobTypes(
                            checkedJobTypes.filter(
                              (type) => type !== e.target.name
                            )
                          )
                          setIsLoading(true)
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
          <hr className="mb-3 mt-4" />
        </div>

        {isLoading ? (
          <div className="loader-container">
            <Oval
              height={50}
              width={50}
              color="blue"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="lightblue"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </div>
        ) : (
          <CandidateJobs
            searchDetails={searchDetails}
            activeSchedule={activeSchedule}
            checkedJobTypes={checkedJobTypes}
            activeShifts={activeShifts}
          />
        )}
      </div>
    </>
  )
}

export default LoginPage
