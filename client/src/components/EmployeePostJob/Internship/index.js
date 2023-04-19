import React, { useEffect, useState } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import DatePicker from "react-datepicker"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import moment from "moment/moment"

import PerksDropdown from "../../../assets/PerksDropdown"
import LanguageDropdown from "../../../assets/LanguageDropdown"
import LocationDropdown from "../../../assets/LocationCheckbox"
import ChooseJobTitle from "../../../assets/ChooseJobTitle"
import AddRemove from "../../../assets/AddRemove"
import CheckboxDropdown from "../../../assets/CheckboxDropdowm"
import ChooseCity from "../../../assets/ChooseCity"
import InternshipPostPreview from "../../../components/EmployeePostPreview/InternshipPostPreview"
import Draft from "../../../assets/Draft"

import "react-datepicker/dist/react-datepicker.css"
import "./index.css"

function Internship() {
  const [validated, setValidated] = useState(false)
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState([])
  const [duration, setDuration] = useState("")
  const [skills, setSkills] = useState([])
  const [startDate, setStartDate] = useState("")
  const [responsibilities, setResponsibilities] = useState("")
  const [salaryType, setSalaryType] = useState("")
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" })
  const [incentives, setIncentives] = useState("")
  const [incentivesValue, setIncentivesValue] = useState("")
  const [perks, setPerks] = useState([])
  const [languages, setLanguages] = useState([])
  const [openings, setOpenings] = useState("")
  const [location, setLocation] = useState([])
  const [education, setEducation] = useState([])
  const [checked, setChecked] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    jobTitle,
    jobTime,
    jobType,
    shift: "Day Shift",
    city,
    duration,
    checked,
    skills,
    startDate,
    jobDescription: responsibilities,
    salaryType,
    salaryRange,
    incentives,
    incentivesValue,
    perks,
    languages,
    openings,
    location,
    education,
    time: moment(),
  }

  const handleTitle = (e) => {
    setJobTitle(e)
  }

  const onChangeCity = (e) => {
    setCity(e)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
  }

  const handlePerks = (e) => {
    setPerks(e)
  }

  const handleLanguages = (e) => {
    let languages = []
    e.map((each) => languages.push(each.value))
    setLanguages(languages)
  }

  const handleLocation = (e) => {
    setLocation(e)
  }

  const handleEducation = (e) => {
    setEducation(e)
  }

  const handleDescription = (e) => {
    setResponsibilities(e)
  }

  const handleChangeDate = (e) => {
    setStartDate(e)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const onSuccess = (message) => {
    setIsLoading(false)
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        border: "2px solid #00ff00",
        backgroundColor: "#fff",
        marginTop: "30px",
        margin: "20px",
      },
    })

    setTimeout(() => {
      window.location.reload()
    }, 1000)
  }

  const onFailure = (message) => {
    setIsLoading(false)
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      style: {
        border: "2px solid #ff0000",
        backgroundColor: "#fff",
        marginTop: "30px",
        margin: "20px",
      },
    })
  }

  const handlePostJob = async () => {
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      (jobType !== "" || city.length !== 0) &&
      duration !== "" &&
      (checked !== false || startDate !== "") &&
      skills.length !== 0 &&
      responsibilities !== "" &&
      (salaryType !== "" || salaryRange !== "") &&
      perks.length !== 0 &&
      languages.length !== 0 &&
      openings !== "" &&
      location.length !== 0 &&
      education.length !== 0
    ) {
      setIsLoading(true)
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }

      const response = await fetch(
        "http://localhost:5000/employee/job/internship",
        options
      )
      const resData = await response.json()
      if (response.ok) {
        onSuccess(resData.message)
      } else {
        onFailure(resData.message)
      }
    } else {
      toast.error("Please fill all the fields!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: { border: "2px solid #ff0000", backgroundColor: "#fff" },
      })
    }
  }

  const renderSalaryType = () => {
    switch (salaryType) {
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control
              type="number"
              placeholder="5k/Month"
              /* onKeyDown={(e) => {
                if (e.target.value.length > 4) {
                  e.preventDefault()
                }
              }} */
              onChange={(e) => setSalaryRange({ from: e.target.value, to: "" })}
            />
          </Form.Group>
        )
      case "Negotiable":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="5000"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, from: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>To</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10,000/month"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )

      default:
        return null
    }
  }

  return (
    <div
      className="col-lg-6 col-md-4 search-course-right   mb-4 mt-4 p-4  rounded container reveal mb-5 rounded border "
      style={{ width: "100%", background: "white" }}
    >
      <ToastContainer style={{ padding: "15px" }} />
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Internship</Form.Label>
            <ChooseJobTitle handleTitle={handleTitle} />
          </Form.Group>
          <Form.Group className="mb-3 mt-2">
            <Form.Label>Full time or Part time </Form.Label>
            <Form.Select onChange={(e) => setJobTime(e.target.value)}>
              <option> Select an option </option>
              <option> Full-Time </option>
              <option>Part-Time</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job Type</Form.Label>
            <Form.Select onChange={(e) => setJobType(e.target.value)}>
              <option>Select an option</option>
              <option>Office</option>
              <option>Work from Home</option>
            </Form.Select>
          </Form.Group>
          {jobType === "Office" && (
            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <ChooseCity onChangeCity={onChangeCity} />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>
          )}

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Duration of Internship </Form.Label>
            <Form.Select onChange={(e) => setDuration(e.target.value)}>
              <option>Select an option </option>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
              <option> 6 </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>What is the Shift to this Job Position</Form.Label>
            <Form.Control type="text" placeholder="Day Shift" disabled />
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Internship Start Date</Form.Label>
            <Form.Check
              type="checkbox"
              label="Immediate Joiner (within next 30 days)"
              checked={checked}
              className="mb-3"
              onChange={(e) => {
                setStartDate("")
                setChecked(e.target.checked)
              }}
            />

            <div className="mt-3 custom-date">
              <p style={{ marginTop: "8px" }}>Custom Date: </p>

              <div style={{ display: "flex", gap: "15px" }}>
                {!checked ? (
                  <Form.Group className="mb-3">
                    <DatePicker
                      placeholderText="Date"
                      selected={startDate}
                      className="year-date"
                      onChange={(e) => handleChangeDate(e)}
                    />
                  </Form.Group>
                ) : (
                  <Form.Group className="mb-3">
                    <DatePicker
                      placeholderText="Date"
                      selected={startDate}
                      className="year-date"
                      disabled={true}
                    />
                  </Form.Group>
                )}
              </div>
            </div>
          </Form.Group>

          <AddRemove handleEducation={handleEducation} />

          <Form.Group>
            <Form.Label>Intern's Skills</Form.Label>
            <CheckboxDropdown handleSkills={handleSkills} />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Intern's responsibilities</Form.Label>
            <Draft handleDescription={handleDescription} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Salary Range</Form.Label>
              <Form.Select onChange={(e) => setSalaryType(e.target.value)}>
                <option>Select</option>
                <option> Fixed </option>
                <option>Negotiable</option>
              </Form.Select>
            </Form.Group>
          </Row>

          {renderSalaryType()}

          {salaryType === "Fixed" && (
            <Form.Group
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <Form.Check
                onChange={() => {
                  setIncentives(!incentives)
                }}
              />
              <Form.Label>Incentives</Form.Label>
            </Form.Group>
          )}

          {incentives && (
            <Form.Group className="mb-3 mt-2">
              <Form.Control
                type="number"
                onChange={(e) => setIncentivesValue(e.target.value)}
              />
            </Form.Group>
          )}

          <PerksDropdown handlePerks={handlePerks} />

          <LanguageDropdown handleLanguages={handleLanguages} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setOpenings(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>
              Which location do you prefer looking for intern's ? (optional)
            </Form.Label>
            <LocationDropdown handleLocation={handleLocation} />
          </Form.Group>
        </Row>

        <InternshipPostPreview data={data} />
        <div className="save-container">
          <Button variant="success">Save Draft</Button>
          <Button
            variant="primary"
            onClick={handlePostJob}
            style={{ display: "grid", placeItems: "center" }}
          >
            {isLoading ? (
              <Oval
                height={20}
                width={20}
                color="#ffffff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#ffffff"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            ) : (
              "Post Job"
            )}
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default Internship
