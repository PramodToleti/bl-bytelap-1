import InternshipJob from "./InternshipJob"
import FresherJob from "./FresherJob"
import ExperienceJob from "./ExperienceJob"

import "./index.css"
import "reactjs-popup/dist/index.css"

const CandidateJobs = (props) => {
  const { checkedJobTypes, activeShifts, activeSchedule } = props

  const renderJobs = () => {
    switch (true) {
      case checkedJobTypes.includes("Internship"):
        return <InternshipJob />
      case checkedJobTypes.includes("Fresher"):
        return <FresherJob />
      case checkedJobTypes.includes("Experience"):
        return <ExperienceJob />
      case checkedJobTypes.includes("Internship") &&
        checkedJobTypes.includes("Fresher"):
        return (
          <>
            <InternshipJob />
            <FresherJob />
          </>
        )
      case checkedJobTypes.includes("Internship") &&
        checkedJobTypes.includes("Experience"):
        return (
          <>
            <InternshipJob />
            <ExperienceJob />
          </>
        )
      case checkedJobTypes.includes("Fresher") &&
        checkedJobTypes.includes("Experience"):
        return (
          <>
            <FresherJob />
            <ExperienceJob />
          </>
        )

      default:
        return (
          <>
            <InternshipJob />
            <FresherJob />
            <ExperienceJob />
          </>
        )
    }
  }

  return <div>{renderJobs()}</div>
}

export default CandidateJobs
