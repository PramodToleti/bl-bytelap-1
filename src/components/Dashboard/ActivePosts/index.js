import React, { useState } from "react"

import DashboardHeader from "../DashboardHeader"
import EmployeeHome from "../../EmployeeHome"

import "./index.css"
import Internship from "./Internship"
import Fresher from "./Fresher"
import Experience from "./Experience"

function ActivePosts() {
  const [selectedOption, setSelectedOption] = useState("internship")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }

  const renderActiveJob = () => {
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
      <EmployeeHome />
      <div className="main-container">
        <div className="side-bar-container mt-4">
          <h1
            style={{
              fontWeight: "600",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Applied 147
          </h1>
          <p style={{ fontSize: "16px" }}>Interested</p>
          <p style={{ fontSize: "16px" }}>Shortlisted</p>
          <p style={{ fontSize: "16px" }}>Hire</p>
          <p style={{ fontSize: "16px" }}>Not Interested</p>
        </div>
        <div style={{ minHeight: "600px" }} className="form-container">
          <div
            className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-1 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary"
            style={{ width: "100%" }}
          >
            <p className="text-start fs-5">Dashboard</p>
            <hr></hr>
            <div>
              <DashboardHeader />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                  borderRadius: "5px",
                  minHeight: "200px",
                  padding: "10px",
                }}
              >
                <div
                  className="post-job-header"
                  style={{ width: "98%", padding: "10px", marginTop: "10px" }}
                >
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
                <br />
                <div className="active-job-container">{renderActiveJob()}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ActivePosts
