import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { toast } from "react-toastify"
import moment from "moment/moment"
import { Oval } from "react-loader-spinner"
import "react-datepicker/dist/react-datepicker.css"
import React, { useState, useRef } from "react"
import Row from "react-bootstrap/Row"
import { Col } from "react-bootstrap"
import ProgressBar from "react-bootstrap/ProgressBar"

import "./index.css"

import LanguageDropdown from "../../../assets/LanguageDropdown"
import ChooseJobTitle from "../../../assets/ChooseJobTitle"
import TextArea from "antd/es/input/TextArea"
import DynamicProjectForm from "../../../assets/DynamicProjectForm"
import DynamicAchievements from "../../../assets/DynamicAchievements"
import DynamicEducationJob from "../../../assets/DynamicEducationJob"
import DynamicTraining from "../../../assets/DynamicTraining"
import InternshipPreview from "../../../components/CandidateRegisterPreview/InternshipPreview"
import ChooseCity from "../../../assets/ChooseCity"
import CheckboxDropdown from "../../../assets/CheckboxDropdowm"

function Internship(props) {
  const [validated, setValidated] = useState(false)
  //Input data
  const [resumeFile, setResumeFile] = useState(null)
  const [jobTitle, setJobTitle] = useState("")
  const [jobTime, setJobTime] = useState("")
  const [jobType, setJobType] = useState("")
  const [city, setCity] = useState("")
  const [skills, setSkills] = useState([])
  const [degree, setDegree] = useState([])
  const [coverLetter, setCoverLetter] = useState("")
  const [projectDetails, setProjectDetails] = useState([])
  const [training, setTraining] = useState([])
  const [achievements, setAchievements] = useState([])
  const [languages, setLanguages] = useState([])
  const [availability, setAvailability] = useState("")
  const [custom, setCustom] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  let data = {
    jobTitle,
    jobTime,
    jobType,
    skills,
    degree,
    coverLetter,
    projectDetails,
    training,
    achievements,
    languages,
    availability,
    time: moment(),
  }

  const formRef = useRef(null)
  const fileInputRef = useRef(null)

  const handleTitle = (e) => {
    setJobTitle(e)
  }

  const handleJobTime = (e) => {
    if (e.target.value !== "Select an option") setJobTime(e.target.value)
  }

  const handleJobtype = (e) => {
    setJobType(e.target.value)
  }

  const handleSkills = (e) => {
    let skills = []
    e.map((each) => skills.push(each.value))
    setSkills(skills)
  }

  const onChangeCity = (e) => {
    setCity(e)
  }

  const handleDegree = (e) => {
    setDegree(e)
  }

  const handleCoverLetter = (e) => {
    setCoverLetter(e.target.value)
  }

  const handleProject = (projectDetails) => {
    setProjectDetails(projectDetails)
  }

  const handleTraining = (training) => {
    setTraining(training)
  }

  const handleAchievements = (achievements) => {
    setAchievements(achievements)
  }

  const handleLanguages = (e) => {
    console.log(e)
    let languages = []
    e.map((each) =>
      languages.push({ language: each.language, proficient: each.proficiency })
    )
    setLanguages(languages)
  }

  const [state, setState] = useState({
    selectedSkills: [],
  })

  const handleSelectionChange = (selected) => {
    setState({
      ...state,
      selectedSkills: selected,
    })
  }

  let now = 0
  function progressBar() {
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      skills.length !== 0 &&
      jobType !== ""
    )
      now = 20
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== ""
    )
      now = 30

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0
    )
      now = 50
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0
    )
      now = 60
    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0
    )
      now = 70

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0
    )
      now = 80

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      projectDetails.length !== 0 &&
      training.length !== 0 &&
      achievements.length !== 0 &&
      languages.length !== 0
    )
      now = 90

    if (
      jobTitle !== "" &&
      jobTime !== "" &&
      jobType !== "" &&
      skills.length !== 0 &&
      coverLetter !== "" &&
      degree.length !== 0 &&
      degree.every((degree) => {
        return (
          degree.degree !== "" &&
          (((degree.endDate !== "" || degree.present !== false) &&
            degree.institute !== "" &&
            degree.field !== "" &&
            degree.city !== "" &&
            degree.startYear !== "") ||
            (degree.schoolName !== "" && degree.yearOfCompletion !== ""))
        )
      }) &&
      /* projectDetails.length !== 0 &&
      projectDetails.every((projectDetails) => {
        return (
          projectDetails.title !== "" &&
          projectDetails.about !== "" &&
          projectDetails.url !== ""
        )
      }) &&
      training.length !== 0 &&
      training.every((training) => {
        return (
          training.title !== "" &&
          training.institute !== "" &&
          training.file !== null &&
          training.startDate !== "" &&
          training.endDate !== ""
        )
      }) &&
      achievements.length !== 0 &&
      achievements.every((achievements) => {
        return (
          achievements.achievement !== "" &&
          achievements.file !== null &&
          languages.length !== 0
        )
      }) && */
      availability !== "" &&
      languages.length !== 0
    )
      now = 100

    {
      /*const progressBarStyle = {
      width: isFixed ? "90%" : "100%",
      maxWidth: "790px",
      position: isFixed ? "fixed" : "relative",
      top: isFixed ? "20px" : null,
      zIndex: 999,
      transition: "all 0.2s ease-out",
    }*/
    }

    return (
      <>
        {/*} <div style={{ position: "relative" }}>
        <div ref={progressRef} style={{ height: "25px" }} />
        <div style={{ display: isFixed ? "block" : "none", height: "25px" }} />
        <ProgressBar now={now} label={`${now}%`} style={progressBarStyle} />
    </div> */}
        <ProgressBar
          now={now}
          label={`${now}%`}
          style={{ height: "25px", position: "sticky" }}
        />
      </>
    )
  }

  const onSuccess = (msg) => {
    setIsLoading(false)
    toast.success(msg, {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      style: {
        border: "2px solid #00ff00",
        backgroundColor: "#fff",
        marginTop: "30px",
        margin: "20px",
      },
    })
  }

  const onFailure = (msg) => {
    setIsLoading(false)
    console.log("success")
    toast.error(msg, {
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

  const onSubmitForm = async (event) => {
    setIsLoading(true)
    event.preventDefault()
    if (now === 100) {
      const trainingFiles = training.map((each) => each.file)
      const achievementsFiles = achievements.map((each) => each.file)
      const userId = localStorage.getItem("userId")
      const formData = new FormData()
      formData.append("candidate", userId)
      resumeFile && formData.append("resume", resumeFile)
      formData.append("jobTitle", jobTitle)
      formData.append("jobTime", jobTime)
      formData.append("jobType", jobType)
      formData.append("skills", JSON.stringify(skills))
      formData.append("coverLetter", coverLetter)
      formData.append("degree", JSON.stringify(degree))
      achievementsFiles &&
        achievementsFiles.forEach((file) => {
          formData.append("achievementsFiles", file)
        })
      trainingFiles &&
        trainingFiles.forEach((file) => {
          formData.append("trainingFiles", file)
        })
      projectDetails &&
        formData.append("projectDetails", JSON.stringify(projectDetails))
      formData.append("time", Date.now())
      training &&
        formData.append(
          "training",
          JSON.stringify(
            training.map((each) => ({
              title: each.title,
              institute: each.institute,
              startDate: each.startDate,
              endDate: each.endDate,
            }))
          )
        )
      achievements &&
        formData.append(
          "achievements",
          JSON.stringify(
            achievements.map((each) => ({
              achievement: each.achievement,
            }))
          )
        )
      formData.append("availability", availability)
      formData.append("languages", JSON.stringify(languages))

      const options = {
        method: "POST",
        body: formData,
      }

      const response = await fetch(
        "http://localhost:5000/candidate/internship/register",
        options
      )
      const resData = await response.json()

      if (response.ok) {
        onSuccess(resData.message)
      } else {
        onFailure(resData.message)
      }
    }

    now === 100
      ? null
      : (setIsLoading(false),
        toast.error("Please fill all the required fields", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          style: {
            textAlign: "center",
            border: "2px solid #ff0000",
            backgroundColor: "#fff",
            marginTop: "30px",
            margin: "20px",
          },
        }))
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0]
    setResumeFile(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current.click()
  }

  console.log(data)

  return (
    <>
      <ToastContainer />
      {progressBar()}
      <Button
        type="button"
        variant="outline-primary"
        className="mt-4"
        onClick={handleButtonClick}
      >
        Upload Resume
      </Button>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      <Form
        action=""
        noValidate
        validated={validated}
        onSubmit={onSubmitForm}
        style={{ width: "100%" }}
        className="p-3"
        ref={formRef}
      >
        <Row className="mb-3">
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h5>
              Job Info <span style={{ color: "red" }}>*</span>
            </h5>
            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label>Job Tittle</Form.Label>
              <ChooseJobTitle handleTitle={handleTitle} />
            </Form.Group>
            <Form.Group className="mb-3 mt-2">
              <Form.Label>
                Looking for Full time or Part time Internship?{" "}
              </Form.Label>
              <Form.Select onChange={handleJobTime}>
                <option> Select an option </option>
                <option> Full-Time </option>
                <option>Part-Time</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label> Job Type</Form.Label>
              <Form.Select onChange={handleJobtype}>
                <option>Select</option>
                <option>Office</option>
                <option>Work from Home</option>
                <option>Any</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="title">
              <Form.Label> Skills</Form.Label>
              <CheckboxDropdown
                onSelectionChange={handleSelectionChange}
                handleSkills={handleSkills}
              />
            </Form.Group>
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Cover Letter <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleCoverLetter} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Graduation <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <DynamicEducationJob handleDegree={handleDegree} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicProjectForm handleProject={handleProject} />
          </div>

          {/*<div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4 border-dark   rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>About us</Form.Label>
            <TextArea rows={6} className="mb-3" onChange={handleAboutUs} />
          </div>*/}

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label className="mb-3">Training / Course</Form.Label>
            <DynamicTraining handleTraining={handleTraining} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <DynamicAchievements handleAchievements={handleAchievements} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <LanguageDropdown handleLanguages={handleLanguages} />
          </div>

          <div
            className="col-lg-6 col-md-4 search-course-right  text-dark  mb-4  border-dark  rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <Form.Label>
              Availability <span style={{ color: "red" }}>*</span>
            </Form.Label>
            {custom !== "" ? (
              <Form.Select className="mb-3" disabled value={availability}>
                <option>Select</option>
              </Form.Select>
            ) : (
              <Form.Select
                className="mb-3"
                onChange={(e) => setAvailability(e.target.value)}
              >
                <option>Select</option>
                <option>
                  I am immediate joiner & Available For Full Time.
                </option>
                <option>I can join within one or two week . </option>
                <option>
                  I am available for Full Time From 1 Jan 2022 to 28 March 2022
                </option>
              </Form.Select>
            )}
            <Form.Control
              type="text"
              placeholder="Custom"
              className="mb-3"
              onChange={(e) => {
                setCustom(e.target.value)
                setAvailability(e.target.value)
              }}
            />
          </div>
        </Row>
        <Row className="justify-content-center">
          {/*<Button type="button" variant="secondary" className="col-sm-2 mx-4 mt-2">Preview</Button>*/}
          <InternshipPreview data={data} />
          <Button
            type="submit"
            className="col-sm-2 mt-2"
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
              "Save"
            )}
          </Button>
        </Row>
      </Form>
    </>
  )
}

export default Internship
