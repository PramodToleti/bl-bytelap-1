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
import { Link, Redirect } from "react-router-dom"
import { Oval } from "react-loader-spinner"
import Cookies from "js-cookie"

import Theme from "../../assets/Theme"
import CandidateJobs from "../Candidate/CandidateJobs"
import JobSearchField from "../../assets/JobSearchField"
import JobLocationField from "../../assets/JobLocationField"

import "./index.css"
import "bootstrap/dist/css/bootstrap.min.css"
import CandidateFooter from "../Candidate/CandidateFooter"

function LoginPage() {
  const [accepted, setAccepted] = useState(false)
  const [activeSearch, setActiveSearch] = useState("")
  const [activeLocation, setActiveLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [selectedOption, setSelectedOption] = useState("Internship")
  const [duration, setDuration] = useState([])
  const [timePeriod, setTimePeriod] = useState([])
  const [workPlace, setWorkPlace] = useState([])
  const [checkedShifts, setCheckedShifts] = useState([])
  const [yearsOfExperience, setYearsOfExperience] = useState(null)

  const jwtToken = Cookies.get("userToken")
  if (jwtToken) {
    return <Redirect to="/candidate" />
  }

  const handleDropdownSelect = (e) => {
    setSelectedOption(e.target.textContent)
    setDuration([])
    setTimePeriod([])
    setWorkPlace([])
    setCheckedShifts([])
    setYearsOfExperience(null)
  }

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

  isLoading &&
    setTimeout(() => {
      setIsLoading(false)
    }, 200)

  //Cookies

  useEffect(() => {
    if (Cookies.get("acceptedCookies")) {
      setAccepted(true)
    }
  }, [])

  const acceptCookies = () => {
    Cookies.set("acceptedCookies", true, { expires: 30 })
    setAccepted(true)
  }

  const declineCookies = () => {
    Cookies.remove("acceptedCookies")
    setAccepted(false)
  }

  const renderDropDown = () => {
    switch (selectedOption) {
      case "Internship":
        return (
          <>
            {/* Duration */}
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-secondary">
                Duration
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {Array(6)
                  .fill(null)
                  .map((_, index) => (
                    <Dropdown.Item key={index} href="#/action-1">
                      <Form.Check
                        type="checkbox"
                        label={`${index + 1} Months`}
                        name="Duration"
                        checked={duration.includes(`${index + 1} Months`)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setDuration([...duration, `${index + 1} Months`])
                          } else {
                            setDuration(
                              duration.filter(
                                (option) => option !== `${index + 1} Months`
                              )
                            )
                          }
                        }}
                      />
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>

            {/* Time Period */}
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-secondary">
                Job Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Full Time"
                    name="Full Time"
                    checked={timePeriod.includes("Full Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Full Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Full Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Part Time"
                    name="Part Time"
                    checked={timePeriod.includes("Part Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Part Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Part Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Work Place */}
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="outline-secondary"
                id="dropdown-basic"
              >
                Work Place
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Work From Home"
                    value="Work From Home"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Work From Home"])
                      } else {
                        setWorkPlace(
                          workPlace.filter(
                            (option) => option !== "Work From Home"
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
                        setWorkPlace([...workPlace, "Office"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Office")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Form.Check
                    type="checkbox"
                    label="Hybrid"
                    value="Hybrid"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Hybrid"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Hybrid")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )

      case "Fresher":
        return (
          <>
            {/* Time Period */}
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-secondary">
                Job Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Full Time"
                    name="Full Time"
                    checked={timePeriod.includes("Full Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Full Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Full Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Part Time"
                    name="Part Time"
                    checked={timePeriod.includes("Part Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Part Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Part Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Shifts */}
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="outline-secondary"
                id="dropdown-basic"
              >
                Shift
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
              </Dropdown.Menu>
            </Dropdown>

            {/* Work Place */}
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="outline-secondary"
                id="dropdown-basic"
              >
                Work Place
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Work From Home"
                    value="Work From Home"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Work From Home"])
                      } else {
                        setWorkPlace(
                          workPlace.filter(
                            (option) => option !== "Work From Home"
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
                        setWorkPlace([...workPlace, "Office"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Office")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Form.Check
                    type="checkbox"
                    label="Hybrid"
                    value="Hybrid"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Hybrid"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Hybrid")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </>
        )

      case "Experience":
        return (
          <>
            {/* Time Period */}
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-secondary">
                Job Type
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Full Time"
                    name="Full Time"
                    checked={timePeriod.includes("Full Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Full Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Full Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Part Time"
                    name="Part Time"
                    checked={timePeriod.includes("Part Time")}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setTimePeriod([...timePeriod, "Part Time"])
                      } else {
                        setTimePeriod(
                          timePeriod.filter((option) => option !== "Part Time")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Shifts */}
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="outline-secondary"
                id="dropdown-basic"
              >
                Shift
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Day Shift"
                    name="Day Shift"
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
                    label="Night Shift"
                    name="Night Shift"
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
              </Dropdown.Menu>
            </Dropdown>

            {/* Work Place */}
            <Dropdown>
              <Dropdown.Toggle
                size="sm"
                variant="outline-secondary"
                id="dropdown-basic"
              >
                Work Place
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  <Form.Check
                    type="checkbox"
                    label="Work From Home"
                    value="Work From Home"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Work From Home"])
                      } else {
                        setWorkPlace(
                          workPlace.filter(
                            (option) => option !== "Work From Home"
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
                        setWorkPlace([...workPlace, "Office"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Office")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                  <Form.Check
                    type="checkbox"
                    label="Hybrid"
                    value="Hybrid"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setWorkPlace([...workPlace, "Hybrid"])
                      } else {
                        setWorkPlace(
                          workPlace.filter((option) => option !== "Hybrid")
                        )
                      }
                    }}
                  />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            {/* Experience */}
            <Dropdown>
              <Dropdown.Toggle size="sm" variant="outline-secondary">
                Year of Exp
              </Dropdown.Toggle>
              <Dropdown.Menu>
                {Array(8)
                  .fill(null)
                  .map((_, i) => (
                    <Dropdown.Item key={i}>
                      <p
                        onClick={() => {
                          setYearsOfExperience(i + 1)
                        }}
                        style={{ marginBottom: "0px" }}
                      >
                        {i + 1}
                      </p>
                    </Dropdown.Item>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
          </>
        )

      default:
        null
    }
  }

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="" expand={expand} className="mb-3 nav-bar">
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
            <Stack direction="horizontal" gap={3} style={{ flexWrap: "wrap" }}>
              {/* Type */}
              <Dropdown>
                <Dropdown.Toggle
                  size="sm"
                  variant="outline-secondary"
                  id="dropdown-basic"
                >
                  {selectedOption}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    eventKey="Internship"
                    onClick={(e) => handleDropdownSelect(e)}
                  >
                    Internship
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="Fresher"
                    onClick={(e) => handleDropdownSelect(e)}
                  >
                    Fresher
                  </Dropdown.Item>
                  <Dropdown.Item
                    eventKey="Experience"
                    onClick={(e) => handleDropdownSelect(e)}
                  >
                    Experience
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              {renderDropDown()}
            </Stack>
          </Form.Group>

          <div
            className="container"
            style={{ paddingBottom: "20px", marginBottom: "20px" }}
          >
            <hr
              className="mb-3 mt-3"
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                width: "100%",
                margin: 0,
              }}
            />
          </div>
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
            selectedOption={selectedOption}
            duration={duration}
            timePeriod={timePeriod}
            workPlace={workPlace}
            checkedShifts={checkedShifts}
            yearsOfExperience={yearsOfExperience}
          />
        )}
      </div>

      <CandidateFooter isRegistered={false} />

      {!accepted && (
        <div className="accept-cookies">
          <p>
            We use cookies to ensure you get the best experience on our website.
            By continuing to browse the site, you agree to our{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span> &{" "}
            <span style={{ color: "blue" }}>Terms & Conditions</span>
          </p>
          <div className="d-flex justify-content-center">
            <div style={{ display: "flex", gap: "20px" }}>
              <Button variant="primary" onClick={acceptCookies}>
                Got it
              </Button>
              <Button variant="secondary" onClick={declineCookies}>
                Decline
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginPage
