import React, { useState } from "react"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { RiShoppingBagFill } from "react-icons/ri"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BsFillShareFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import Popup from "reactjs-popup"
import numeral from "numeral"
import { Link, useHistory } from "react-router-dom"
import Modal from "react-modal"
import { ToastContainer, toast } from "react-toastify"
import { Oval } from "react-loader-spinner"
import Cookies from "js-cookie"

import "react-toastify/dist/ReactToastify.css"

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

const ExperienceJobDetails = (props) => {
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
      "http://localhost:5000/candidate/experience/apply",
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
      console.log(data)
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

  const renderPreview = () => {
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
          data.experience.years !== "" ||
          data.experience.month !== "" ||
          data.salaryType !== "") && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
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
                      </>
                    ) : (
                      data.jobType
                    )}
                  </p>
                </div>
              )}

              {(data.experience.years !== "" ||
                data.experience.month !== "") && (
                <div className="job-card-container-experience">
                  <RiShoppingBagFill className="icon-styles" />
                  <p className="details-heading-preview">{`${data.experience.years} - ${data.experience.month} Yrs`}</p>
                </div>
              )}

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
                <hr />
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
          data.supplementary.length !== 0 ||
          data.languages.length !== 0 ||
          data.openings !== "") && (
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
              <div className="mb-4">
                <h4 className="mb-3">Number of openings:</h4>
                <h5>{data.openings !== "" && `${data.openings}+`}</h5>
              </div>
            )}
          </div>
        )}

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

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <h4>About</h4>
            <div style={{ fontSize: "16px", fontFamily: "Roboto" }}>
              {data.companyName}{" "}
              <HiOutlineExternalLink
                style={{ color: "grey", fontSize: "18px" }}
                onClick={() => {
                  const url = data.companyWebsite
                  window.open(url, "_blank")
                }}
              />
            </div>
          </div>
          <div className="mb-3">
            <MdLocationOn style={{ color: "grey", fontSize: "18px" }} />
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

export default ExperienceJobDetails
