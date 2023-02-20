import React, { useState } from "react"

import CandidateHome from "../Candidate/CandidateHome"
import Experience from "./Experience"
import Fresher from "./Fresher"

import "./index.css"
import Internship from "./Internship"

function CandidateRegistermyself() {
  const [selectedOption, setSelectedOption] = useState("internship")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const renderForm = () => {
    switch (selectedOption) {
      case "internship":
        return <Internship />
      case "fresher":
        return <Fresher />
      case "experience":
        return <Experience />
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
