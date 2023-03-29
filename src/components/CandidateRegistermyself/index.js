import React, { useState } from "react"

import CandidateHome from "../Candidate/CandidateHome"
import Experience from "./Experience"
import Fresher from "./Fresher"

import "./index.css"
import Internship from "./Internship"

function CandidateRegistermyself() {
  let registerData = JSON.parse(localStorage.getItem("registerData"))

  if (!registerData) {
    registerData = {
      internship: [],
      fresher: [],
      experience: [],
    }
    localStorage.setItem("registerData", JSON.stringify(registerData))
  }

  const handleInternData = (data) => {
    if (
      JSON.stringify(data) !==
      JSON.stringify(
        registerData.internship[registerData.internship.length - 1]
      )
    ) {
      registerData.internship.push(data)
      localStorage.setItem("registerData", JSON.stringify(registerData))
    }
  }

  const handleFresherData = (data) => {
    if (JSON.stringify(data) !== JSON.stringify(registerData)) {
      registerData.fresher.push(data)

      localStorage.setItem("registerData", JSON.stringify(registerData))
    }
  }

  const handleExperienceData = (data) => {
    if (JSON.stringify(data) !== JSON.stringify(registerData)) {
      registerData.experience.push(data)
      localStorage.setItem("registerData", JSON.stringify(registerData))
    }
  }

  const [selectedOption, setSelectedOption] = useState("internship")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const renderForm = () => {
    switch (selectedOption) {
      case "internship":
        return <Internship handleInternData={handleInternData} />
      case "fresher":
        return <Fresher handleFresherData={handleFresherData} />
      case "experience":
        return <Experience handleExperienceData={handleExperienceData} />
      default:
        return null
    }
  }

  return (
    <>
      <CandidateHome />
      <div className="post-job">
        <div className="post-container">
          <div className="post-job-header">
            <div className="radio-buttons-container">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="internship"
                  value="internship"
                  checked={selectedOption === "internship"}
                  onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor="internship">
                  Internship
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="fresher"
                  value="fresher"
                  checked={selectedOption === "fresher"}
                  onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor="fresher">
                  Fresher
                </label>
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="options"
                  id="experience"
                  value="experience"
                  checked={selectedOption === "experience"}
                  onChange={handleOptionChange}
                />
                <label className="form-check-label" htmlFor="experience">
                  Experience
                </label>
              </div>
            </div>
          </div>
          <div className="render-form-container">{renderForm()}</div>
        </div>
      </div>
    </>
  )
}

export default CandidateRegistermyself
