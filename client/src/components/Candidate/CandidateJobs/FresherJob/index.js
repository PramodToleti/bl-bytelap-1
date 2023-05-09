import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { RiShoppingBagFill } from "react-icons/ri"
import { MdLocationOn } from "react-icons/md"
import { FaHome } from "react-icons/fa"
import { Link, useHistory, useLocation } from "react-router-dom"
import Popup from "reactjs-popup"
import numeral from "numeral"

import PostTime from "../../../../assets/PostTime"

const FresherJob = (props) => {
  const fresherJobs = props.jobs
  const totalJobs = props.totalJobs

  const history = useHistory()
  const location = useLocation()

  if (fresherJobs === null) {
    return null
  }

  if (fresherJobs.length === 0) {
    return (
      <div style={{ minHeight: "60vh", display: "grid", placeItems: "center" }}>
        <div
          className="text-dark mb-3   div-card container reveal  pt-3 "
          style={{
            maxWidth: "620px",
            backgroundColor: "white",
            border: "1px solid #D8D8D8",
            borderRadius: "15px",
            margin: "0px",
            boxShadow: "3px 3px 3px 3px whitesmoke",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div className="header">
            <h4 className="mb-3">No Jobs Found</h4>
          </div>
        </div>
      </div>
    )
  }

  const renderCompanyImage = (file) => {
    if (file === "" || file === null || file === undefined) {
      return "https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
    } else {
      return file
    }
  }

  const renderJobs = () => {
    const filteredJobs = fresherJobs.filter(
      (job) => job.status !== "Paused" && job.status !== "Closed"
    )

    // Render job cards in reverse order
    const jobCards = [
      <div className="container mb-3">
        <span>{filteredJobs.length} Jobs</span>
      </div>,
    ]
    for (let i = filteredJobs.length - 1; i >= 0; i--) {
      const data = filteredJobs[i]
      const index = i
      jobCards.push(
        <div className="d-flex flex-row container justify-content-start">
          <div
            className="text-dark mb-3   div-card container reveal p-2  pt-3  "
            style={{
              maxWidth: "620px",
              backgroundColor: "white",
              border: "1px solid #D8D8D8",
              borderRadius: "15px",
              margin: "0px",
              boxShadow: "3px 3px 3px 3px whitesmoke",
            }}
          >
            <>
              <div className="header">
                <h4 className="mb-3">{data.jobTitle}</h4>
                <div
                  style={{
                    width: "30%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={renderCompanyImage(data.file)}
                    className="company-image"
                  />
                </div>
              </div>
              <div style={{ display: "flex", gap: "8px" }} className="mb-1">
                <FaBuilding style={{ color: "grey", fontSize: "18px" }} />
                <p style={{ color: "grey" }}>Wiro Tech Limited</p>
              </div>
            </>

            <div className="job-details-container-2">
              {data.jobTime !== "" && (
                <div className="job-card-container-fresher">
                  <MdShoppingBag className="icon-styles" />
                  <p className="details-heading">{data.jobTime}</p>
                </div>
              )}

              {data.jobType !== "" && data.jobTime !== "" && (
                <div className="job-card-container-fresher">
                  <BsFillSunFill className="icon-styles" />
                  <p className="details-heading">Day Shift</p>
                </div>
              )}

              {data.jobType !== "" && (
                <div
                  className={`job-card-container-fresher ${
                    data.jobType === "Office" ? "location-style" : ""
                  }`}
                >
                  <p
                    className={` ${
                      data.jobType !== "Office"
                        ? "home-heading"
                        : "details-heading"
                    }`}
                    style={{ whiteSpace: "nowrap" }}
                  >
                    {data.jobType === "Work from Home" ? (
                      <>
                        <FaHome
                          className="icon-styles"
                          style={{ marginTop: "9px" }}
                        />
                        <p style={{ marginTop: "20px", fontSize: "14px" }}>
                          Work from Home
                        </p>
                      </>
                    ) : data.city.length !== 0 ? (
                      <>
                        <MdLocationOn
                          style={{ fontSize: "19px", color: "grey" }}
                        />
                        {data.city.length > 3
                          ? `${data.city[0].label.split(",")[0]}, ${
                              data.city[1].label.split(",")[0]
                            }, ${data.city[2].label.split(",")[0]}  ...`
                          : data.city.map(
                              (each) => each.label.split(",")[0] + ", "
                            )}
                      </>
                    ) : (
                      data.jobType
                    )}
                  </p>
                </div>
              )}

              <div className="job-card-container-fresher">
                <RiShoppingBagFill className="icon-styles" />
                <p className="details-heading">Fresher</p>
              </div>

              {data.salaryType !== "" && (
                <div className="job-card-container-fresher">
                  <p className="details-heading">
                    <BiRupee className="icon-styles" />
                    {/*{data.salaryType === "Lac"
                      ? `${Math.floor(data.salaryRange.from)}L - ${Math.floor(
                          data.salaryRange.to
                        )}L PA`
                      : data.salaryType === "Per Month"
                      ? `${Math.floor(
                          data.salaryRange.from / 1000
                        )}k - ${Math.floor(
                          data.salaryRange.to / 1000
                        )}k / month`
                      : data.salaryType === "Fixed"
                      ? `${Math.floor(data.salaryRange)}k / month`
                        : data.salaryType}*/}
                    {data.salaryType === "Lac"
                      ? `${data.salaryRange.from}L - ${data.salaryRange.to}L PA`
                      : data.salaryType === "Per Month"
                      ? `${numeral(data.salaryRange.from * 1000).format(
                          0,
                          0
                        )} - ${numeral(data.salaryRange.to * 1000).format(
                          0,
                          0
                        )} / month`
                      : data.salaryType === "Fixed"
                      ? `${numeral(data.salaryRange).format(0, 0)} / month`
                      : data.salaryType === "Negotiable"
                      ? `${numeral(data.salaryRange.from).format(
                          0,
                          0
                        )} - ${numeral(data.salaryRange.to).format(
                          0,
                          0
                        )} /month`
                      : data.salaryType}
                  </p>
                  {data.incentives && data.salaryType === "Fixed" && (
                    <>
                      {" "}
                      <p
                        className="details-text"
                        style={{
                          color: "grey",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {" "}
                        <span className="incentives-text">+ Incentives </span>
                        <Popup
                          trigger={
                            <button
                              className="popup-button mt-1"
                              style={{ marginLeft: "0px" }}
                            >
                              {" "}
                              ?
                            </button>
                          }
                          position="right center"
                        >
                          <p>
                            This is a performance-based internship. In addition
                            to the minimum-assured stipend, you will also be
                            paid a performance-linked incentive{" "}
                            {`(₹ ${data.incentivesValue}
                          per sale)`}
                          </p>
                        </Popup>
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>

            <hr className="hr-line" style={{ marginTop: "0px" }} />

            <div className="perks-mobile">
              {data.skills.length > 5 ? (
                <>
                  <h6 className="preview-perks">{data.skills[0]}</h6>
                  <h6 className="preview-perks">{data.skills[1]}</h6>
                  <h6 className="preview-perks">{data.skills[2]} </h6>
                  <h6 className="preview-perks">{data.skills[3]} </h6>
                  <h6 className="preview-perks">{data.skills[4]} </h6> ...
                </>
              ) : (
                data.skills.map((each, i) => (
                  <h6 className="preview-perks" key={i}>
                    {each}
                  </h6>
                ))
              )}
            </div>

            <div className="perks-desktop ">
              {data.skills.length > 8 ? (
                <>
                  <h6 className="preview-perks">{data.skills[0]}</h6>
                  <h6 className="preview-perks">{data.skills[1]}</h6>
                  <h6 className="preview-perks">{data.skills[2]} </h6>
                  <h6 className="preview-perks">{data.skills[3]} </h6>
                  <h6 className="preview-perks">{data.skills[4]} </h6>
                  <h6 className="preview-perks">{data.skills[5]} </h6>
                  <h6 className="preview-perks">{data.skills[6]} </h6>
                  <h6 className="preview-perks">{data.skills[7]} </h6> ...
                </>
              ) : (
                data.skills.map((each, i) => (
                  <h6 className="preview-perks" key={i}>
                    {each}
                  </h6>
                ))
              )}
            </div>

            <div className="d-flex flex-row justify-content-between mt-2">
              <p style={{ fontSize: "11px", marginBottom: "0px" }}>
                <PostTime time={data.time} />
              </p>
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
                onClick={() => {
                  history.push(`/candidate/job-details/fresher/${data._id}`, {
                    data: data,
                  })
                }}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      )
    }

    return jobCards
  }

  return <>{renderJobs()}</>
}

export default FresherJob
