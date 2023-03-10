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

function CandidateJobDetails(props) {
  const internJobs = JSON.parse(localStorage.getItem("internshipJob"))

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
                <div style={{ display: "flex", gap: "8px" }} className="mb-4">
                  <FaBuilding style={{ color: "grey", fontSize: "22px" }} />
                  <p style={{ color: "grey" }}>Wiro Tech Limited</p>
                </div>
              </>
            )}

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

              {data.jobType === "Office" && <br className="break-line" />}

              {data.jobType !== "" && (
                <div
                  className={`job-card-container ${
                    data.jobType === "Office" ? "location-style" : ""
                  }`}
                >
                  <p
                    className={` ${
                      data.jobType !== "Office"
                        ? "home-heading"
                        : "details-heading"
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
                        <MdLocationOn
                          style={{ fontSize: "20px", color: "grey" }}
                        />
                        {data.jobType}, {data.city[0].label}
                      </>
                    ) : (
                      data.jobType
                    )}
                  </p>
                </div>
              )}

              {data.jobType === "Office" && <br className="break-line" />}
              {data.jobType === "Office" && <p className="empty-element"></p>}

              {data.startDate !== "" && (
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
              )}

              {data.duration !== "" && (
                <div className="job-card-container">
                  <MdDateRange className="icon-styles" />
                  <p className="details-heading-2">
                    Duration
                    <br />
                    <p className="details-text">{data.duration} Months</p>
                  </p>
                </div>
              )}

              {data.salaryRange.from !== "" && data.salaryRange.to !== "" && (
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
                            )}k - ${Math.floor(
                              data.salaryRange.to / 1000
                            )}k /month`
                        : data.salaryType}
                    </p>
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

export default CandidateJobDetails
