import InternshipJob from "./InternshipJob"
import FresherJob from "./FresherJob"
import ExperienceJob from "./ExperienceJob"

import "./index.css"
import "reactjs-popup/dist/index.css"
import { useEffect, useState } from "react"
import { Oval } from "react-loader-spinner"

const CandidateJobs = (props) => {
  const [jobs, setJobs] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const totalInternJobs = jobs.filter((job) => job.type === "Internship").length
  const totalFresherJobs = jobs.filter((job) => job.type === "Fresher").length
  const totalExperienceJobs = jobs.filter(
    (job) => job.type === "Experience"
  ).length

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
      setIsLoading(true)
      const response = await fetch("http://localhost:5000/candidate/jobs")
      const data = await response.json()
      if (data !== null) {
        setJobs(data)
        setIsLoading(false)
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
        return <InternshipJob jobs={internJobs} totalJobs={totalInternJobs} />
      case selectedOption === "Fresher":
        return <FresherJob jobs={fresherJobs} totalJobs={totalFresherJobs} />
      case selectedOption === "Experience":
        return (
          <ExperienceJob
            jobs={experienceJobs}
            totalJobs={totalExperienceJobs}
          />
        )
      default:
        return null
    }
  }

  return (
    <div>
      {!isLoading ? (
        renderJobs()
      ) : (
        <div
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Oval
            height={60}
            width={60}
            color="blue"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#ffffff"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      )}
    </div>
  )
}

export default CandidateJobs
