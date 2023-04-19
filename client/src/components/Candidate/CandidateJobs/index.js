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

  const internshipJobs = JSON.parse(localStorage.getItem("internshipJob"))
  const fresherJobs = JSON.parse(localStorage.getItem("fresherJob"))
  const experienceJobs = JSON.parse(localStorage.getItem("experienceJob"))

  const internships = internshipJobs?.length ?? 0
  const freshers = fresherJobs?.length ?? 0
  const experiences = experienceJobs?.length ?? 0

  const totalJobs = internships + freshers + experiences

  const filteredJobsIntern = (internshipJobs || []).filter((eachJob) => {
    if (
      (activeSearchStr === "" ||
        eachJob.jobTitle
          .toLowerCase()
          .includes(activeSearchStr.toLowerCase())) &&
      (activeLocationStr === "" ||
        eachJob.location.some(
          (loc) => loc.label.toLowerCase() === activeLocationStr.toLowerCase()
        ))
    ) {
      return eachJob
    }
  })

  const filteredJobsFresher = (fresherJobs || []).filter((eachJob) => {
    if (
      (activeSearchStr === "" ||
        eachJob.jobTitle
          .toLowerCase()
          .includes(activeSearchStr.toLowerCase())) &&
      (activeLocationStr === "" ||
        eachJob.location.some(
          (loc) => loc.label.toLowerCase() === activeLocationStr.toLowerCase()
        ))
    ) {
      return eachJob
    }
  })

  const filteredJobsExperience = (experienceJobs || []).filter((eachJob) => {
    if (
      (activeSearchStr === "" ||
        eachJob.jobTitle
          .toLowerCase()
          .includes(activeSearchStr.toLowerCase())) &&
      (activeLocationStr === "" ||
        eachJob.location.some(
          (loc) => loc.label.toLowerCase() === activeLocationStr.toLowerCase()
        ))
    ) {
      return eachJob
    }
  })

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

  console.log(jobs)

  const renderJobs = () => {
    switch (true) {
      case selectedOption === "Internship" &&
        !(selectedOption === "Fresher" || selectedOption === "Experience"):
        return <InternshipJob jobs={filteredJobsIntern} />
      case selectedOption === "Fresher" &&
        !(selectedOption === "Experience" || selectedOption === "Internship"):
        return <FresherJob jobs={filteredJobsFresher} />
      case selectedOption === "Experience" &&
        !(selectedOption === "Fresher" || selectedOption === "Internship"):
        return <ExperienceJob jobs={filteredJobsExperience} />
      case selectedOption === "Internship" && selectedOption === "Fresher":
        return (
          <>
            <InternshipJob jobs={filteredJobsIntern} />
            <FresherJob jobs={filteredJobsFresher} />
          </>
        )
      case selectedOption === "Internship" && selectedOption === "Experience":
        return (
          <>
            <InternshipJob jobs={filteredJobsIntern} />
            <ExperienceJob jobs={filteredJobsExperience} />
          </>
        )
      case selectedOption === "Fresher" && selectedOption === "Experience":
        return (
          <>
            <FresherJob jobs={filteredJobsFresher} />
            <ExperienceJob jobs={filteredJobsExperience} />
          </>
        )

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
        <span>{totalJobs} Jobs</span>
      </div>
      {renderJobs()}
    </div>
  )
}

export default CandidateJobs
