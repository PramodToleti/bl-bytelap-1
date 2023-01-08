import React from "react"
import { Link } from "react-router-dom"
import { Radio } from "antd"

import HomeHeader from "../HomeHeader"

import "./index.css"

class SavedJob extends React.Component {
  state = {
    selectedOption: "Internship",
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value,
    })
  }

  renderInternSavedJobs = () => (
    <div className="show-saved-jobs-container">
      <h1>3 Jobs</h1>
      <div className="job-card">One</div>
      <div className="job-card">Two</div>
    </div>
  )

  renderFresherSavedJobs = () => (
    <div className="show-saved-jobs-container">
      <h1>5 Jobs</h1>
      <div className="job-card">One</div>
      <div className="job-card">Two</div>
    </div>
  )

  renderExperienceSavedJobs = () => (
    <div className="show-saved-jobs-container">
      <h1>7 Jobs</h1>
      <div className="job-card">One</div>
      <div className="job-card">Two</div>
    </div>
  )

  renderSavedjobs = () => {
    const { selectedOption } = this.state
    switch (selectedOption) {
      case "Internship":
        return this.renderInternSavedJobs()
      case "Fresher":
        return this.renderFresherSavedJobs()
      case "Experience":
        return this.renderExperienceSavedJobs()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <HomeHeader />
        <div className="saved-job-container">
          <div className="saved-job-body">
            <Link to="/home">
              <button className="back-button">Back</button>
            </Link>
            <h1 className="saved-job-heading">Saved Job</h1>
            <div className="saved-container">
              <div className="saved-header">
                <Radio.Group
                  onChange={this.handleOptionChange}
                  value={this.state.selectedOption}
                >
                  <Radio value="Internship" className="saved-header-item">
                    Internship
                  </Radio>
                  <Radio value="Fresher" className="saved-header-item">
                    Fresher
                  </Radio>
                  <Radio value="Experience" className="saved-header-item">
                    Experience
                  </Radio>
                </Radio.Group>
              </div>
              <div className="jobs-container">{this.renderSavedjobs()}</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default SavedJob
