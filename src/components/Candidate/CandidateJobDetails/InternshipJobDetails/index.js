import React, { useState } from "react"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { MdDateRange } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { BsFillShareFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"
import { HiOutlineExternalLink } from "react-icons/hi"
import Popup from "reactjs-popup"

function InternshipJobDetails(props) {
  const internJobs = JSON.parse(localStorage.getItem("internshipJob"))
  const [fullText, setFullText] = useState(false)

  const { match } = props
  const { id } = match.params

  const data = internJobs[id - 1]

  function renderPreview() {
    return (
      <>
        {(data.jobTitle !== "" ||
          data.jobTime !== "" ||
          data.jobType !== "" ||
          data.duration !== "" ||
          data.salaryRange.from !== "" ||
          data.perks.length !== 0 ||
          data.salaryRange.to !== "" ||
          data.checked !== false ||
          data.startDate !== "") && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border div-card   rounded container reveal  p-2  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            {data.jobTitle !== "" && (
              <>
                <div className="header">
                  <h4 className="mb-3">{data.jobTitle}</h4>
                  <img
                    src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
                    className="company-image"
                  />
                </div>
                <div style={{ display: "flex", gap: "8px" }} className="mb-2">
                  <FaBuilding style={{ color: "grey", fontSize: "22px" }} />
                  <p style={{ color: "grey" }}>Wiro Tech Limited</p>
                </div>
              </>
            )}

            <div className="job-details-container-preview">
              {data.jobTime !== "" && (
                <div className="job-card-container-preview">
                  <MdShoppingBag className="icon-styles" />
                  <p className="details-heading-preview">{data.jobTime}</p>
                </div>
              )}

              {data.jobType !== "" && data.jobTime !== "" && (
                <div className="job-card-container-preview">
                  <BsFillSunFill className="icon-styles" />
                  <p className="details-heading-preview">Day Shift</p>
                </div>
              )}

              {data.jobType !== "" && (
                <div
                  className={`job-card-container-preview ${
                    data.jobType === "Office" ? "location-style" : ""
                  }`}
                >
                  <p
                    className={` ${
                      data.jobType !== "Office"
                        ? "home-heading"
                        : "details-heading-preview"
                    }`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      wordBreak: "break-word",
                    }}
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
                          className="home-text details-heading-preview"
                        >
                          Work from Home
                        </p>
                      </>
                    ) : data.city.length !== 0 ? (
                      <>
                        <MdLocationOn
                          style={{ fontSize: "19px", color: "grey" }}
                          className="preview-icons"
                        />
                        <div style={{ wordBreak: "break-word" }}>
                          {data.city.length > 3 && !fullText ? (
                            <div
                              style={{
                                wordBreak: "break-word",
                                maxWidth: "295px",
                              }}
                            >
                              {`${data.city[0].label}, ${data.city[1].label}, ${data.city[2].label} ...`}
                              {!fullText && (
                                <span
                                  style={{
                                    color: "blue",
                                    fontSize: "12px",
                                    margin: "0px",
                                    cursor: "pointer",
                                    marginTop: "4px",
                                    marginLeft: "4px",
                                  }}
                                  onClick={() => setFullText(true)}
                                >
                                  View More{" "}
                                </span>
                              )}
                            </div>
                          ) : (
                            data.city.map((each, index) => (
                              <span key={index}>
                                {each.label}
                                {index !== data.city.length - 1 ? ", " : ""}
                              </span>
                            ))
                          )}
                        </div>
                      </>
                    ) : (
                      data.jobType
                    )}
                  </p>
                </div>
              )}

              {(data.startDate !== "" || data.checked === true) && (
                <div className="job-card-container-preview">
                  <AiFillYoutube className="icon-styles" />
                  <p className="details-heading-2">
                    <p className="sub-headings details-heading-preview">
                      Start Date
                    </p>
                    <p className="details-text details-text-preview">
                      {data.checked && data.startDate === ""
                        ? "Immediate"
                        : new Date(data.startDate).toLocaleString("en-US", {
                            month: "short",
                            year: "numeric",
                          })}
                    </p>
                  </p>
                </div>
              )}

              {data.duration !== "" && (
                <div className="job-card-container-preview">
                  <MdDateRange className="icon-styles" />
                  <p className="details-heading-2">
                    <p className="sub-headings details-heading-preview">
                      Duration
                    </p>
                    <p className="details-text details-text-preview">
                      {data.duration} Months
                    </p>
                  </p>
                  <br />
                </div>
              )}

              {((data.salaryRange.from !== "" && data.salaryRange.to !== "") ||
                data.salaryType !== "") && (
                <div className="job-card-container-preview">
                  <BiRupee className="icon-styles" />
                  <p className="details-heading-2">
                    <p
                      className="sub-headings details-heading-preview"
                      style={{ marginBottom: "0px" }}
                    >
                      Salary
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                      }}
                    >
                      <p className="details-text details-text-preview">
                        {data.salaryType === "Fixed"
                          ? data.salaryRange.from === undefined
                            ? `${Math.floor(data.salaryRange / 1000)}k/month `
                            : `${Math.floor(
                                data.salaryRange.from / 1000
                              )}k - ${Math.floor(
                                data.salaryRange.to / 1000
                              )}k /month `
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
                            <span className="incentives-text">
                              + Incentives{" "}
                            </span>
                            <Popup
                              trigger={
                                <button className="popup-button mt-1">
                                  {" "}
                                  ?
                                </button>
                              }
                              position="right center"
                            >
                              <p>
                                This is a performance-based internship. In
                                addition to the minimum-assured stipend, you
                                will also be paid a performance-linked incentive{" "}
                                {`(₹ ${data.incentivesValue}
                          per sale)`}
                              </p>
                            </Popup>
                          </p>
                        </>
                      )}
                    </div>
                  </p>
                </div>
              )}
            </div>

            {(data.perks.length !== 0 ||
              data.skills.length !== 0 ||
              data.jobType !== "" ||
              data.duration !== "" ||
              data.jobTime !== "") && <hr style={{ marginTop: "0px" }} />}

            <div className="perks-mobile">
              {data.perks.map((each, i) => (
                <h6 className="preview-perks" key={each}>
                  {each.value}
                </h6>
              ))}
            </div>

            <div className="job-skill-container">
              <div className="mb-1">
                {data.skills.map((each) => (
                  <h6 className="preview-skills" key={each}>
                    {each}
                  </h6>
                ))}
              </div>
            </div>

            <p className="posted-text">Posted: 1 day ago</p>
          </div>
        )}
        {(data.responsibilities !== "" ||
          data.languages.length !== 0 ||
          data.education.length !== 0 ||
          data.openings !== "") && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border  div-card  rounded container reveal  p-2  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            {data.education.length !== 0 && (
              <>
                <h4 className="mb-3">Qualification:</h4>
                {data.education.map((each) => (
                  <p>
                    {each.qualification === "Any Graduate"
                      ? "UG : "
                      : each.qualification === "Any Post Graduate"
                      ? "PG : "
                      : ""}
                    {each.field.length !== 0
                      ? `${each.qualification} in
                        (${each.field.map((each) => `${each}, `)})`
                      : each.qualification}
                  </p>
                ))}
                <hr />
              </>
            )}

            {data.responsibilities !== "" && (
              <>
                <h4 className="mb-3">Job Description</h4>
                <p style={{ fontSize: "16px" }}>
                  Selected intern's day-to-day responsibilities include:
                </p>
                {data.responsibilities !== "" && (
                  <p style={{ overflowWrap: "break-word" }}>
                    {data.responsibilities}
                  </p>
                )}
              </>
            )}

            {data.perks.length !== 0 && (
              <div className="perks-desktop">
                <hr />
                <h4 className="mb-3">Perks & Benefits</h4>
                {data.perks.map((each, i) => (
                  <h6 className="preview-skills" key={each}>
                    {each.value}
                  </h6>
                ))}
                <hr />
              </div>
            )}

            {data.languages.length !== 0 && (
              <div>
                <h4 className="mb-3">Languages</h4>
                <div className="languages-list">
                  {data.languages.map((each) => (
                    <p>{each}</p>
                  ))}
                </div>
                <hr />
              </div>
            )}

            {data.openings !== "" && (
              <div>
                <h4 className="mb-3">Number of openings:</h4>
                <h5>{data.openings !== "" && `${data.openings}+`}</h5>
              </div>
            )}
          </div>
        )}

        {(data.responsibilities !== "" ||
          data.perks.length !== 0 ||
          data.languages.length !== 0 ||
          data.openings !== "" ||
          data.jobTitle !== "" ||
          data.jobTime !== "" ||
          data.jobType !== "" ||
          data.duration !== "" ||
          data.salaryRange.from !== "" ||
          data.perks.length !== 0 ||
          data.salaryRange.to !== "") && (
          <>
            <div className="row justify-content-center mb-4">
              <button type="button" className="apply-button">
                Apply
              </button>
            </div>
          </>
        )}

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <h4>About</h4>
            <div style={{ fontSize: "16px", fontFamily: "Roboto" }}>
              Wiro Tech Limited{" "}
              <HiOutlineExternalLink
                style={{ color: "grey", fontSize: "18px" }}
              />
            </div>
          </div>
          <div className="mb-3">
            <MdLocationOn style={{ color: "grey", fontSize: "18px" }} /> Indore,
            MP
          </div>
          <p style={{ fontFamily: "Roboto" }}>
            Wiro Tech Limited is the best IT company in Indore. Wiro Tech
            Limited is the fastest growing and best IT company in Indore. We are
            the top-rated developers in technology....
          </p>
        </div>

        <div className="row justify-content-end mb-3 mt-3">
          <div className="col-auto">
            <BsFillShareFill
              style={{
                color: "grey",
                fontSize: "18px",
                marginRight: "5px",
              }}
            />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="p-3">{renderPreview()}</div>
    </>
  )
}

export default InternshipJobDetails
