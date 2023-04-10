import DashboardHeader from "../DashboardHeader"
import EmployeeHome from "../../EmployeeHome"

import React, { useState } from "react"

function Subscription() {
  const [selectedOption, setSelectedOption] = useState("internship")

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value)
  }
  return (
    <>
      <EmployeeHome />
      <div style={{ minHeight: "500px", margin: "10px" }}>
        <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2       border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
          <p className="text-start fs-5">Dashboard</p>
          <hr></hr>
          <div>
            <DashboardHeader />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "1px solid grey",
                borderRadius: "5px",
                minHeight: "200px",
              }}
            >
              <div className="post-job-header" style={{ width: "90%" }}>
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
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Subscription
