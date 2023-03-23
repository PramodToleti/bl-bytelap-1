import InternshipJob from "./InternshipJob"
import FresherJob from "./FresherJob"
import ExperienceJob from "./ExperienceJob"

import "./index.css"
import "reactjs-popup/dist/index.css"

const CandidateJobs = (props) => {
  const { searchDetails, checkedJobTypes, activeShifts, activeSchedule } = props

  const { search, location } = searchDetails

  const activeSearchStr = search
  const activeLocationStr = location

  const internshipJobs = JSON.parse(localStorage.getItem("internshipJob"))
  const fresherJobs = JSON.parse(localStorage.getItem("fresherJob"))
  const experienceJobs = JSON.parse(localStorage.getItem("experienceJob"))

  const filteredJobsIntern = (internshipJobs || []).filter((eachJob) => {
    if (
      (activeSearchStr === "" ||
        eachJob.jobTitle
          .toLowerCase()
          .includes(activeSearchStr.toLowerCase())) &&
      (activeLocationStr === "" ||
        eachJob.location.some(
          (loc) => loc.value.toLowerCase() === activeLocationStr.toLowerCase()
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
          (loc) => loc.value.toLowerCase() === activeLocationStr.toLowerCase()
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
          (loc) => loc.value.toLowerCase() === activeLocationStr.toLowerCase()
        ))
    ) {
      return eachJob
    }
  })

  const renderJobs = () => {
    switch (true) {
      case checkedJobTypes.includes("Internship") &&
        !(
          checkedJobTypes.includes("Fresher") ||
          checkedJobTypes.includes("Experience")
        ):
        return <InternshipJob jobs={filteredJobsIntern} />
      case checkedJobTypes.includes("Fresher") &&
        !(
          checkedJobTypes.includes("Experience") ||
          checkedJobTypes.includes("Internship")
        ):
        return <FresherJob jobs={filteredJobsFresher} />
      case checkedJobTypes.includes("Experience") &&
        !(
          checkedJobTypes.includes("Fresher") ||
          checkedJobTypes.includes("Internship")
        ):
        return <ExperienceJob jobs={filteredJobsExperience} />
      case checkedJobTypes.includes("Internship") &&
        checkedJobTypes.includes("Fresher"):
        return (
          <>
            <InternshipJob jobs={filteredJobsIntern} />
            <FresherJob jobs={filteredJobsFresher} />
          </>
        )
      case checkedJobTypes.includes("Internship") &&
        checkedJobTypes.includes("Experience"):
        return (
          <>
            <InternshipJob jobs={filteredJobsIntern} />
            <ExperienceJob jobs={filteredJobsExperience} />
          </>
        )
      case checkedJobTypes.includes("Fresher") &&
        checkedJobTypes.includes("Experience"):
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

  return <div>{renderJobs()}</div>
}

export default CandidateJobs
