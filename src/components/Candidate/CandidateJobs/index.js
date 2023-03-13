import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { AiFillYoutube } from "react-icons/ai"
import { MdDateRange } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"

const CandidateJobs = (props) => {
  const { checkedJobTypes, activeShifts, activeSchedule } = props

  let jobsData

  console.log(checkedJobTypes)

  const internJobs = JSON.parse(localStorage.getItem("internshipJob"))

  console.log(internJobs)

  return internJobs.map((data, index) => (
    <div className="d-flex flex-row container justify-content-start">
      <div
        className="text-dark mb-4   div-card rounded container reveal p-2 rounded "
        style={{
          maxWidth: "500px",
          backgroundColor: "white",
          border: "1px solid grey",
          margin: "0px",
        }}
      >
        <>
          <div className="header">
            <h4 className="mb-3">{data.jobTitle}</h4>
            <img
              src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
              className="company-image"
            />
          </div>
          <div style={{ display: "flex", gap: "8px" }} className="mb-4">
            <FaBuilding style={{ color: "grey", fontSize: "22px" }} />
            <p style={{ color: "grey" }}>Wiro Tech Limited</p>
          </div>
        </>

        <div className="job-details-container-2">
          <div className="job-card-container">
            <MdShoppingBag className="icon-styles" />
            <p className="details-heading">{data.jobTime}</p>
          </div>

          <div className="job-card-container">
            <BsFillSunFill className="icon-styles" />
            <p className="details-heading">Day Shift</p>
          </div>

          {data.jobType === "Office" && <br className="break-line" />}

          <div
            className={`job-card-container ${
              data.jobType === "Office" ? "location-style" : ""
            }`}
          >
            <p
              className={` ${
                data.jobType !== "Office" ? "home-heading" : "details-heading"
              }`}
            >
              {data.jobType === "Work from Home" ? (
                <>
                  <FaHome
                    className="icon-styles"
                    style={{ marginTop: "4px" }}
                  />
                  <p
                    style={{
                      color: "grey",
                    }}
                    className="home-text"
                  >
                    Work from Home
                  </p>
                </>
              ) : data.city.length !== 0 ? (
                <>
                  <MdLocationOn style={{ fontSize: "20px", color: "grey" }} />
                  {data.jobType}, {data.city[0].label}
                </>
              ) : (
                data.jobType
              )}
            </p>
          </div>

          {data.jobType === "Office" && <br className="break-line" />}
          {data.jobType === "Office" && <p className="empty-element"></p>}

          <div className="job-card-container">
            <AiFillYoutube className="icon-styles" />
            <p className="details-heading-2">
              Start Date
              <br />
              <p className="details-text">
                {data.checked && data.startDate === "" ? "Immediate" : ""}
              </p>
            </p>
          </div>

          <div className="job-card-container">
            <MdDateRange className="icon-styles" />
            <p className="details-heading-2">
              Duration
              <br />
              <p className="details-text">{data.duration} Months</p>
            </p>
          </div>

          <div className="job-card-container">
            <BiRupee className="icon-styles" />
            <p className="details-heading-2">
              Salary
              <br />
              <p className="details-text">
                {data.salaryType === "Fixed"
                  ? data.salaryRange.from === undefined
                    ? `${Math.floor(data.salaryRange / 1000)}k/month`
                    : `${Math.floor(
                        data.salaryRange.from / 1000
                      )}k - ${Math.floor(data.salaryRange.to / 1000)}k /month`
                  : data.salaryType}
              </p>
            </p>
          </div>
        </div>

        <hr style={{ marginTop: "0px" }} />

        <div className="perks-mobile">
          {data.perks.map((each, i) => (
            <h6 className="preview-perks" key={each}>
              {each.value}
            </h6>
          ))}
        </div>

        <div className="perks-desktop">
          {data.perks.map((each, i) => (
            <h6 className="preview-skills" key={each}>
              {each.value}
            </h6>
          ))}
        </div>
        <div className="d-flex flex-row justify-content-between mt-3">
          <p style={{ fontSize: "12px" }}>Just Now</p>
          <Link to={`/candidate/job-details/${index + 1}`}>
            <button
              type="button"
              style={{
                border: "0",
                background: "transparent",
                color: "blue",
                cursor: "pointer",
              }}
              key={index}
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  ))
}

export default CandidateJobs
