import React, { useState, useEffect } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { ToastContainer } from "react-toastify"
import { toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import moment from "moment/moment"
import { Typeahead } from "react-bootstrap-typeahead"

import CheckboxDropdown from "../../../assets/CheckboxDropdowm"
import ChooseCity from "../../../assets/ChooseCity"
import PerksDropdown from "../../../assets/PerksDropdown"
import SupplementaryDropdown from "../../../assets/SupplementaryDropdown"
import ChooseJobTitle from "../../../assets/ChooseJobTitle"
import AddRemove from "../../../assets/AddRemove"
import LanguageDropdown from "../../../assets/LanguageDropdown"
import ExperiencePostPreview from "../../../components/EmployeePostPreview/ExperiencePostPreview"
import LocationDropdown from "../../../assets/LocationCheckbox"
import Draft from "../../../assets/Draft"

import "./index.css"
import "react-datepicker/dist/react-datepicker.css"
import "react-toastify/dist/ReactToastify.css"

function Experience() {
  const [validated, setValidated] = useState(false)
  const [selectedYears, setSelectedYears] = useState([])
  const [selectedMonths, setSelectedMonths] = useState([])
  //Input data
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState([])
  const [shift, setShift] = useState("")
  const [skills, setSkills] = useState([])
  const [jobDescription, setDescription] = useState("")
  const [experience, setExperience] = useState({
    years: "",
    month: "",
  })
  const [salaryType, setSalaryType] = useState("")
  const [salaryRange, setSalaryRange] = useState({ from: "", to: "" })
  const [incentives, setIncentives] = useState(false)
  const [incentivesValue, setIncentivesValue] = useState("")
  const [supplementary, setSupplemantary] = useState([])
  const [perks, setPerks] = useState([])
  const [languages, setLanguages] = useState([])
  const [openings, setOpenings] = useState("")
  const [location, setLocation] = useState([])
  const [education, setEducation] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    jobTitle,
    jobTime,
    jobType,
    city,
    shift,
    skills,
    jobDescription,
    experience,
    salaryType,
    salaryRange,
    incentives,
    incentivesValue,
    supplementary,
    perks,
    languages,
    openings,
    location,
    education,
    time: Date.now(),
  }

  const onSuccess = (message) => {
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

    /* setTimeout(() => {
      window.location.reload()
    }, 1000) */
  }

  const onFailure = (message) => {
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
      shift !== "" &&
      skills.length !== 0 &&
      jobDescription !== "" &&
      experience.years !== "" &&
      experience.month !== "" &&
      (salaryType !== "" || salaryRange !== "") &&
      supplementary.length !== 0 &&
      perks.length !== 0 &&
      languages.length !== 0 &&
      openings !== "" &&
      location.length !== 0 &&
      education.length !== 0
    ) {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }

      const response = await fetch(
        "http://localhost:5000/employee/job/experience",
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

  const handleYearChange = (selected) => {
    const yearsLabel = selected[0]?.label || ""
    const yearsValue = selected[0]?.value || ""
    setSelectedYears([{ label: `${yearsLabel} Years`, value: yearsValue }])
  }

  const handleMonthChange = (selected) => {
    const monthsLabel = selected[0]?.label || ""
    const monthsValue = selected[0]?.value || ""
    setSelectedMonths([{ label: `${monthsLabel} Years`, value: monthsValue }])
  }

  const yearOptions = Array.from({ length: 15 }, (_, index) => ({
    label: `${index + 1}`,
    value: index + 1,
  }))

  const monthOptions = Array.from({ length: 15 }, (_, index) => ({
    label: `${index + 1}`,
    value: index + 1,
  }))

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

  const handleSupplementary = (e) => {
    setSupplemantary(e)
  }

  const handlePerks = (e) => {
    setPerks(e)
  }

  const handleLanguages = (e) => {
    let languages = []
    e.map((each) => languages.push(each))
    setLanguages(languages)
  }

  const handleLocation = (e) => {
    setLocation(e)
  }

  const handleEducation = (e) => {
    setEducation(e)
  }

  const handleDescription = (e) => {
    setDescription(e)
  }

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }

  const renderSalaryType = () => {
    switch (salaryType) {
      case "Lac":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="1 lac"
                    min="0"
                    max="99"
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
                    placeholder="3 lac"
                    min="0"
                    max="99"
                    oninput="validity.valid||(value=''); if(value>99) value='99'; if(value<0) value='0';"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Per Month":
        return (
          <Form.Group className="mb-3">
            <Row>
              <Col xs={6}>
                <Form.Group className="mb-3 mt-2">
                  <Form.Label>From</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="10k"
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
                    placeholder="20k"
                    onChange={(e) =>
                      setSalaryRange({ ...salaryRange, to: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form.Group>
        )
      case "Fixed":
        return (
          <Form.Group className="mb-3 mt-2">
            <Form.Control
              type="number"
              placeholder="20k/Month"
              onChange={(e) => setSalaryRange({ from: e.target.value, to: "" })}
            />
          </Form.Group>
        )
      case "Not Disclosed":
        return <Form.Group className="mb-3 mt-2"></Form.Group>

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
      className="col-lg-6 col-md-4 search-course-right  mb-4 mt-4 p-2    rounded container reveal  p-4 mb-5 rounded border "
      style={{ width: "100%", background: "white" }}
    >
      <ToastContainer style={{ padding: "15px" }} />
      <Form action="" noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle for Experience</Form.Label>
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
              <option> Office </option>
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
            <Form.Label>
              What is the Shift to this Experience Position
            </Form.Label>
            <Form.Select onChange={(e) => setShift(e.target.value)}>
              <option>Select an option</option>
              <option>Day</option>
              <option>Night</option>
              <option>Rotational</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <AddRemove handleEducation={handleEducation} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Skills</Form.Label>
            <CheckboxDropdown handleSkills={handleSkills} />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Job description</Form.Label>
            <Draft handleDescription={handleDescription} />
          </Form.Group>

          <Row className="mb-3">
            <Form.Label>Experience</Form.Label>
            <Col xs={6}>
              <Form.Group
                controlId="experience-years"
                className="col-sm-5 mb-2"
              >
                <Form.Label>From</Form.Label>
                <Typeahead
                  id="year-typeahead"
                  options={yearOptions}
                  placeholder="Year"
                  onChange={handleYearChange}
                  selected={selectedYears}
                  filterBy={() => true}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid year
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
            <Col xs={6}>
              <Form.Group
                controlId="experience-months"
                className="col-sm-5 mb-2"
              >
                <Form.Label>To</Form.Label>
                <Typeahead
                  id="month-typeahead"
                  options={monthOptions}
                  placeholder="Year"
                  onChange={handleMonthChange}
                  selected={selectedMonths}
                  filterBy={() => true}
                />
                <Form.Control.Feedback type="invalid">
                  Please Enter a valid month
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationCustom03">
              <Form.Label>Salary Range</Form.Label>
              <Form.Select onChange={(e) => setSalaryType(e.target.value)}>
                <option>Select</option>
                <option>Lac</option>
                <option> Per Month </option>
                <option>Fixed</option>
                <option>Not Disclosed</option>
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

          <SupplementaryDropdown handleSupplementary={handleSupplementary} />
          <PerksDropdown handlePerks={handlePerks} />

          <LanguageDropdown handleLanguages={handleLanguages} />

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Number of opening</Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setOpenings(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>
              Which location do you prefer looking for intern's ? (optional)
            </Form.Label>
            <LocationDropdown handleLocation={handleLocation} />
          </Form.Group>
        </Row>

        <ExperiencePostPreview data={data} />
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

export default Experience
