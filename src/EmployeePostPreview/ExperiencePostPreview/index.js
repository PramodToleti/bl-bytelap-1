import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { CiStar } from "react-icons/ci"
import { RiShoppingBagFill } from "react-icons/ri"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BsFillShareFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"

import "./index.css"

function ExperiencePostPreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)

  function renderPreview() {
    return (
      <>
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
                  <img
                    src="https://res.cloudinary.com/dlpgowt5s/image/upload/v1677222848/Screenshot_20230224_124108_e09oie.png"
                    className="company-image"
                  />
                </div>

                <div style={{ display: "flex", gap: "8px" }} className="mb-4">
                  <FaBuilding style={{ color: "grey", fontSize: "25px" }} />
                  <p style={{ color: "grey" }}>Wiro Tech Limited</p>
                </div>
              </>
            )}

            <div
              className="job-details-container-2"
              style={{ marginBottom: "0px" }}
            >
              {data.jobTime !== "" && (
                <div className="job-card-container">
                  <MdShoppingBag className="icon-styles" />
                  <p className="details-heading">{data.jobTime}</p>
                </div>
              )}

              {data.shift !== "" && (
                <div className="job-card-container">
                  <BsFillSunFill className="icon-styles" />
                  <p className="details-heading">{data.shift}</p>
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
                      <>
                        <MdLocationOn
                          style={{ fontSize: "20px", color: "grey" }}
                        />
                        {data.jobType}
                      </>
                    )}
                  </p>
                </div>
              )}

              {data.jobType === "Office" && <br className="break-line" />}
              {data.jobType === "Office" && <p className="empty-element"></p>}

              {(data.experience.years !== "" ||
                data.experience.month !== "") && (
                <div className="job-card-container">
                  <RiShoppingBagFill className="icon-styles" />
                  <p className="details-heading">{`${data.experience.years} - ${data.experience.month} Yrs`}</p>
                </div>
              )}

              {data.salaryType !== "" && (
                <div className="job-card-container">
                  <p className="details-heading">
                    <BiRupee className="icon-styles" />
                    {data.salaryType === "Lac"
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
                      : data.salaryType}
                  </p>
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

            {data.jobDescription !== "" && (
              <>
                <h4 className="mb-3">Job Description</h4>
                <div>
                  {data.jobDescription !== "" && (
                    <p style={{ overflowWrap: "break-word" }}>
                      {data.jobDescription}
                    </p>
                  )}
                </div>
                <hr />
              </>
            )}

            {data.perks.length !== 0 && (
              <>
                <div>
                  <h4 className="mb-3">Perks & Benefits:</h4>
                  {data.perks.map((each, i) => (
                    <h6 className="preview-skills" key={each}>
                      {each.value}
                    </h6>
                  ))}
                </div>
                <hr />
              </>
            )}

            {data.supplementary.length !== 0 && (
              <>
                <div>
                  <h4 className="mb-3">Supplemental Pay:</h4>
                  {data.supplementary.map((each, i) => (
                    <h6 className="preview-skills" key={each}>
                      {each.value}
                    </h6>
                  ))}
                </div>
                <hr />
              </>
            )}

            {data.languages.length !== 0 && (
              <>
                <div>
                  <h4 className="mb-3">Languages</h4>
                  <div className="languages-list">
                    {data.languages.map((each) => (
                      <p>{each}</p>
                    ))}
                  </div>
                </div>
                <hr />
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

        {data.education.length !== 0 ||
          data.jobDescription !== "" ||
          data.perks.length !== "" ||
          data.supplementary.length !== "" ||
          data.languages.length !== "" ||
          data.openings !== "" ||
          ((data.jobTitle !== "" ||
            data.jobTime !== "" ||
            data.jobType !== "" ||
            data.experience.years !== "" ||
            data.experience.month !== "" ||
            data.salaryType !== "") && (
            <>
              <div className="row justify-content-center mb-4">
                <button type="button" className="apply-button">
                  Apply
                </button>
              </div>
            </>
          ))}

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
            <MdLocationOn style={{ color: "grey", fontSize: "18px" }} /> Pune,
            MH
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
      <div className="row justify-content-center w-100">
        <Button
          variant="secondary"
          className="mt-2"
          style={{ width: "110px" }}
          onClick={() => setLgShow(true)}
        >
          Preview
        </Button>
      </div>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>{renderPreview()}</Modal.Body>
      </Modal>
    </>
  )
}

export default ExperiencePostPreview
