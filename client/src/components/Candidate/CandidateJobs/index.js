import InternshipJob from "./InternshipJob"
import FresherJob from "./FresherJob"
import ExperienceJob from "./ExperienceJob"

import "./index.css"
import "reactjs-popup/dist/index.css"
import { useEffect, useState } from "react"

const CandidateJobs = (props) => {
  const [jobs, setJobs] = useState([])

  const {
    searchDetails,
    selectedOption,
    duration,
    timePeriod,
    workPlace,
    checkedShifts,
    yearsOfExperience,
  } = props

  const { search = "", location = "" } = searchDetails || {}

  const activeSearchStr = search || ""
  const activeLocationStr = location || ""

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:5000/candidate/jobs")
      const data = await response.json()
      if (data !== null) {
        setJobs(data)
      }
    }
    fetchData()
  }, [])

  const internJobs = jobs.filter((job) => {
    // Filter by type
    if (job.type !== "Internship") {
      return false
    }

    // Filter by job title
    if (
      activeSearchStr !== "" &&
      job.jobTitle.toLowerCase() !== activeSearchStr.toLowerCase()
    ) {
      return false
    }

    // Filter by location
    if (
      activeLocationStr !== "" &&
      job.location
        .map((each) => each.label.toLowerCase())
        .includes(activeLocationStr.toLowerCase()) === false
    ) {
      return false
    }

    return true
  })

  const fresherJobs = jobs.filter((job) => {
    // Filter by type
    if (job.type !== "Fresher") {
      return false
    }

    // Filter by job title
    if (
      activeSearchStr !== "" &&
      job.jobTitle.toLowerCase() !== activeSearchStr.toLowerCase()
    ) {
      return false
    }

    // Filter by location
    if (
      activeLocationStr !== "" &&
      job.location
        .map((each) => each.label.toLowerCase())
        .includes(activeLocationStr.toLowerCase()) === false
    ) {
      return false
    }

    return true
  })

  const experienceJobs = jobs.filter((job) => {
    // Filter by type
    if (job.type !== "Experience") {
      return false
    }

    // Filter by job title
    if (
      activeSearchStr !== "" &&
      job.jobTitle.toLowerCase() !== activeSearchStr.toLowerCase()
    ) {
      return false
    }

    // Filter by location
    if (
      activeLocationStr !== "" &&
      job.location
        .map((each) => each.label.toLowerCase())
        .includes(activeLocationStr.toLowerCase()) === false
    ) {
      return false
    }

    return true
  })

  const renderJobs = () => {
    switch (true) {
      case selectedOption === "Internship":
        return <InternshipJob jobs={internJobs} />
      case selectedOption === "Fresher":
        return <FresherJob jobs={fresherJobs} />
      case selectedOption === "Experience":
        return <ExperienceJob jobs={experienceJobs} />

      default:
        return (
          <>
            <InternshipJob jobs={filteredJobsIntern} />
            <FresherJob jobs={filteredJobsFresher} />
            <ExperienceJob jobs={filteredJobsExperience} />
          </>
        )
    }
  }

  return (
    <div>
      <div className="container mb-3">
        <span>{jobs.length} Jobs</span>
      </div>
      {renderJobs()}
    </div>
  )
}

export default CandidateJobs
