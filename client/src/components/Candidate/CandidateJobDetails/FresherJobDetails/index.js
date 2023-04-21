import React, { useState } from "react"
import { FaHome } from "react-icons/fa"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { RiShoppingBagFill } from "react-icons/ri"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BsFillShareFill } from "react-icons/bs"
import Popup from "reactjs-popup"
import numeral from "numeral"
import { useHistory } from "react-router-dom"

const FresherJobDetails = (props) => {
  const history = useHistory()
  const data = history.location.state.data
  const [fullText, setFullText] = useState(false)

  const renderPreview = () => {
    return (
      <>
        {(data.jobTitle !== "" ||
          data.jobTime !== "" ||
          data.jobType !== "" ||
          data.salaryType !== "" ||
          data.skills.length !== 0) && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
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

                <div style={{ display: "flex", gap: "8px" }} className="mb-1">
                  <FaBuilding style={{ color: "grey", fontSize: "25px" }} />
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
                    }}
                  >
                    {data.jobType === "Work from Home" ? (
                      <>
                        <FaHome
                          className="icon-styles"
                          style={{ marginTop: "9px" }}
                        />
                        <p className="home-text details-heading-preview">
                          Work from Home
                        </p>
                      </>
                    ) : data.city.length !== 0 ? (
                      <>
                        <MdLocationOn
                          style={{ fontSize: "19px", color: "grey" }}
                          className="preview-icons"
                        />
                        {data.city.length > 3 && !fullText ? (
                          <div
                            style={{
                              wordBreak: "break-word",
                              maxWidth: "288px",
                            }}
                          >
                            {`${data.city[0].label.split(",")[0]}, ${
                              data.city[1].label.split(",")[0]
                            }, ${data.city[2].label.split(",")[0]} ...`}
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
                              {each.label.split(",")[0]}
                              {index !== data.city.length - 1 ? ", " : ""}
                            </span>
                          ))
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
                <p className="details-heading-preview">Fresher</p>
              </div>

              {data.salaryType !== "" && (
                <div className="job-card-container-fresher">
                  <p className="details-heading-preview">
                    <BiRupee className="icon-styles" />
                    {data.salaryType === "Lac"
                      ? `${data.salaryRange.from}L - ${data.salaryRange.to}L PA`
                      : data.salaryType === "Per Month"
                      ? `${numeral(data.salaryRange.from * 1000).format(
                          0,
                          0
                        )} - ${data.salaryRange.to * 1000} / month`
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
                          marginBottom: "5px",
                        }}
                      >
                        {" "}
                        <span className="incentives-text">+ Incentives </span>
                        <Popup
                          trigger={
                            <button className="popup-button mt-1"> ?</button>
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

            {data.skills.length !== 0 && (
              <>
                <div className="mb-1">
                  {data.skills.map((each) => (
                    <h6 className="preview-skills" key={each}>
                      {each}
                    </h6>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {(data.education.length !== 0 ||
          data.jobDescription !== "" ||
          data.perks.length !== 0 ||
          data.perks.length !== 0 ||
          data.supplementary.length !== 0 ||
          data.languages.length !== 0) && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            {data.education.length !== 0 && (
              <>
                <h4 className="mb-3">Qualification:</h4>
                {data.education.map((each) => (
                  <p className="mb-4">
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
              </>
            )}
            {data.jobDescription !== "" && (
              <>
                <h4 className="mb-3">Job Description</h4>

                <div
                  className="parent-div mb-4"
                  dangerouslySetInnerHTML={{ __html: data.jobDescription }}
                />
              </>
            )}

            {data.perks.length !== 0 && (
              <>
                <div className="mb-4">
                  <h4 className="mb-3">Perks & Benefits:</h4>
                  {data.perks.map((each, i) => (
                    <h6 className="preview-skills" key={each}>
                      {each.value}
                    </h6>
                  ))}
                </div>
              </>
            )}

            {data.supplementary.length !== 0 && (
              <>
                <div className="mb-4">
                  <h4 className="mb-3">Supplemental Pay:</h4>
                  {data.supplementary.map((each, i) => (
                    <h6 className="preview-skills" key={each}>
                      {each.value}
                    </h6>
                  ))}
                </div>
              </>
            )}

            {data.languages.length !== 0 && (
              <>
                <div className="mb-4">
                  <h4 className="mb-3">Languages</h4>
                  <div className="languages-list">
                    {data.languages.map((each) => (
                      <p>{each}</p>
                    ))}
                  </div>
                </div>
              </>
            )}

            {data.openings !== "" && (
              <div>
                <h4 className="mb-3">Number of openings:</h4>
                <h5>{data.openings !== "" && `${data.openings}+`}</h5>
              </div>
            )}
          </div>
        )}

        {(data.perks.length !== 0 ||
          data.languages.length !== 0 ||
          data.openings !== "" ||
          data.jobTitle !== "" ||
          data.jobTime !== "" ||
          data.jobType !== "" ||
          data.perks.length !== 0) && (
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

export default FresherJobDetails
