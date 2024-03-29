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
import numeral from "numeral"
import { Link, useHistory } from "react-router-dom"
import Modal from "react-modal"
import { ToastContainer, toast } from "react-toastify"
import { Oval } from "react-loader-spinner"

import "react-toastify/dist/ReactToastify.css"
import Cookies from "js-cookie"

// Add custom styles for the modal
const customStyles = {
  content: {
    maxWidth: "350px", // Set max width of the modal
    maxHeight: "200px", // Set max height of the modal
    margin: "auto", // Center align the modal horizontally
    borderRadius: "8px", // Add border radius to give a rounded corner look
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Add shadow for a popup effect
    display: "flex", // Add display flex for centering content and buttons
    flexDirection: "column", // Set flex direction to column for stacking content and buttons
    justifyContent: "center", // Center align content and buttons horizontally
    alignItems: "center", // Center align content and buttons vertically
    padding: "20px", // Add padding to the modal content
  },
  h2: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "30px", // Add margin bottom to the heading
  },
  buttonContainer: {
    display: "flex", // Add display flex for centering buttons
    gap: "10px", // Add gap between buttons
  },
  button: {
    backgroundColor: "#007BFF", // Set background color for the buttons
    color: "#FFF", // Set text color for the buttons
    padding: "10px 20px", // Add padding to the buttons
    borderRadius: "4px", // Add border radius to the buttons
    cursor: "pointer", // Add cursor pointer for hover effect
    border: "none", // Remove button border
    outline: "none", // Remove button outline
    transition: "background-color 0.3s", // Add transition for smooth hover effect
    display: "grid",
    placeItems: "center",
  },
  buttonNo: {
    backgroundColor: "#DC3545", // Set background color for the No button
  },
}

function InternshipJobDetails() {
  const history = useHistory()
  const data = history.location.state.data
  const [fullText, setFullText] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const token = Cookies.get("userToken")

  const jobId = history.location.pathname.split("/").pop()

  const renderCompanyImage = (file) => {
    if (file === "" || file === null || file === undefined) {
      return "https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
    } else {
      return file
    }
  }

  const onApply = async () => {
    setLoading(true)
    const userId = localStorage.getItem("userId")

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, jobId }),
    }

    const response = await fetch(
      "http://localhost:5000/candidate/internship/apply",
      options
    )

    const data = await response.json()

    if (response.ok) {
      toast.success(data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setLoading(false)
      setIsOpen(false)
    } else {
      toast.error(data, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setLoading(false)
      setIsOpen(false)
    }
    console.log(data)
  }

  const handleApplyClick = () => {
    setIsOpen(true)
  }

  const handleCloseClick = () => {
    setIsOpen(false)
  }

  const handleApply = () => {
    handleApplyClick()
  }

  function renderPreview() {
    return (
      <div
        style={{
          maxWidth: "1000px",
        }}
      >
        <ToastContainer />
        <Modal
          isOpen={isOpen}
          onRequestClose={handleCloseClick}
          contentLabel="Apply Modal"
          style={customStyles} // Pass the custom styles to the modal
          ariaHideApp={false}
        >
          <h2 style={customStyles.h2}>Do you want to apply for this job?</h2>
          <div style={customStyles.buttonContainer}>
            {token ? (
              <>
                <button onClick={onApply} style={customStyles.button}>
                  {loading ? (
                    <Oval
                      height={20}
                      width={20}
                      color="#ffffff"
                      wrapperStyle={{}}
                      wrapperClass=""
                      visible={true}
                      ariaLabel="oval-loading"
                      secondaryColor="#ffffff"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                    />
                  ) : (
                    "Yes"
                  )}
                </button>

                <button
                  onClick={handleCloseClick}
                  style={{ ...customStyles.button, ...customStyles.buttonNo }}
                >
                  No
                </button>
              </>
            ) : (
              <button style={customStyles.button}>
                <Link
                  to="/candidate/create-account/step-1"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create Account
                </Link>
              </button>
            )}
          </div>
        </Modal>
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
                  <div
                    style={{
                      width: "20%",
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
                          className="home-text details-heading-preview"
                          style={{ marginTop: "5px" }}
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
                          ? `${numeral(data.salaryRange.from).format(
                              0,
                              0
                            )} /month `
                          : `${numeral(data.salaryRange.from * 1000).format(
                              0,
                              0
                            )} - ${numeral(data.salaryRange.to * 1000).format(
                              0,
                              0
                            )} /month `}
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
                <h4 className="mb-4">Job Description</h4>
                <p style={{ fontSize: "16px" }}>
                  Selected intern's day-to-day responsibilities include:
                </p>
                {data.jobDescription !== "" && (
                  <div
                    className="parent-div mb-3"
                    dangerouslySetInnerHTML={{ __html: data.jobDescription }}
                  />
                )}
              </>
            )}

            {data.perks.length !== 0 && (
              <div className="perks-desktop mb-4">
                <h4 className="mb-3">Perks & Benefits</h4>
                {data.perks.map((each, i) => (
                  <h6 className="preview-skills" key={each}>
                    {each.value}
                  </h6>
                ))}
              </div>
            )}

            {data.languages.length !== 0 && (
              <div>
                <h4 className="mb-3">Languages</h4>
                <div className="languages-list mb-4">
                  {data.languages.map((each) => (
                    <p>{each}</p>
                  ))}
                </div>
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
              <button
                type="button"
                className="apply-button"
                onClick={() => {
                  handleApply()
                }}
              >
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
              {data.companyName}{" "}
              <HiOutlineExternalLink
                style={{ color: "blue", fontSize: "18px", cursor: "pointer" }}
                onClick={() => {
                  const url = `${data.companyWebsite}`
                  window.open(url, "_blank")
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <MdLocationOn style={{ color: "grey", fontSize: "18px" }} />{" "}
            {data.companyCity}
          </div>
          <p style={{ fontFamily: "Roboto" }}>{data.companyInfo}</p>
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
      </div>
    )
  }

  return (
    <>
      <div
        className="p-3"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {renderPreview()}
      </div>
    </>
  )
}

export default InternshipJobDetails
