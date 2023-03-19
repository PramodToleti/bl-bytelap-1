import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { AiFillYoutube } from "react-icons/ai"
import { MdDateRange } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { FaHome } from "react-icons/fa"
import { Link } from "react-router-dom"
import Popup from "reactjs-popup"

import "./index.css"
import "reactjs-popup/dist/index.css"

const CandidateJobs = (props) => {
  const { checkedJobTypes, activeShifts, activeSchedule } = props

  const internJobs = JSON.parse(localStorage.getItem("internshipJob"))

  if (internJobs === null) {
    return null
  }

  return internJobs.map((data, index) => (
    <div className="d-flex flex-row container justify-content-start">
      <div
        className="text-dark mb-3   div-card rounded container reveal p-2 rounded "
        style={{
          maxWidth: "450px",
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
          <div style={{ display: "flex", gap: "8px" }} className="mb-1">
            <FaBuilding
              style={{ color: "grey", fontSize: "18px", marginTop: "4px" }}
            />
            <p style={{ color: "grey" }}>Wiro Tech Limited</p>
          </div>
        </>

        <div className="job-details-container-2">
          {data.jobTime !== "" && (
            <div className="job-card-container">
              <MdShoppingBag className="icon-styles" />
              <p className="details-heading">{data.jobTime}</p>
            </div>
          )}

          {data.jobType !== "" && data.jobTime !== "" && (
            <div className="job-card-container">
              <BsFillSunFill className="icon-styles" />
              <p className="details-heading">Day Shift</p>
            </div>
          )}

          {data.jobType !== "" && (
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
                      style={{ marginTop: "9px" }}
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
                    <MdLocationOn style={{ fontSize: "19px", color: "grey" }} />
                    {`${data.jobType}, ${data.city[0].label}`}
                  </>
                ) : (
                  data.jobType
                )}
              </p>
            </div>
          )}

          {(data.startDate !== "" || data.checked === true) && (
            <div className="job-card-container">
              <AiFillYoutube className="icon-styles" />
              <p className="details-heading-2">
                <p className="details-text">
                  {data.checked && data.startDate === ""
                    ? "Start Immediately"
                    : new Date(data.startDate).toLocaleString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                </p>
              </p>
            </div>
          )}

          {data.duration !== "" && (
            <div className="job-card-container">
              <MdDateRange className="icon-styles" />
              <p className="details-heading-2">
                <p className="details-text">{data.duration} Months</p>
              </p>
              <br />
            </div>
          )}

          {((data.salaryRange.from !== "" && data.salaryRange.to !== "") ||
            data.salaryType !== "") && (
            <div className="job-card-container">
              <BiRupee className="icon-styles" />
              <p className="details-heading-2">
                <p className="details-text">
                  {data.salaryType === "Fixed"
                    ? data.salaryRange.from === undefined
                      ? `${Math.floor(data.salaryRange / 1000)}k/month`
                      : `${Math.floor(
                          data.salaryRange.from / 1000
                        )}k - ${Math.floor(data.salaryRange.to / 1000)}k /month`
                    : data.salaryType}
                  {data.incentives && (
                    <>
                      " + Incentives"
                      <Popup
                        trigger={<button className="popup-button"> ?</button>}
                        position="right center"
                      >
                        <p>
                          This is a performance-based internship. In addition to
                          the minimum-assured stipend, you will also be paid a
                          performance-linked incentive{" "}
                          {`(₹ ${data.incentivesValue}
                          per sale)`}
                        </p>
                      </Popup>
                    </>
                  )}
                </p>
              </p>
            </div>
          )}
        </div>

        <div className="perks-mobile">
          {data.perks.map((each, i) => (
            <h6 className="preview-perks" key={each}>
              {each.value}
            </h6>
          ))}
        </div>

        <div className="perks-desktop ">
          {data.perks.map((each, i) => (
            <h6 className="preview-skills" key={each}>
              {each.value}
            </h6>
          ))}
        </div>

        <div className="d-flex flex-row justify-content-between mt-2">
          <p style={{ fontSize: "12px" }}>Just Now</p>
          <Link to={`/candidate/job-details/${index + 1}`}>
            <button
              type="button"
              style={{
                border: "0",
                background: "transparent",
                color: "blue",
                cursor: "pointer",
                marginBottom: "0px",
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
