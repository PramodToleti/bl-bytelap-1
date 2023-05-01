import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import { RiShoppingBagFill } from "react-icons/ri"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BsFillShareFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import numeral from "numeral"

import "./index.css"

function FresherPostPreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)
  const [fullText, setFullText] = useState(false)

  function renderPreview() {
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
                  <p className="details-heading">{data.jobTime}</p>
                </div>
              )}

              {data.jobType !== "" && data.jobTime !== "" && (
                <div className="job-card-container-preview">
                  <BsFillSunFill className="icon-styles" />
                  <p className="details-heading">Day Shift</p>
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
                        <p className="home-text details-heading">
                          Work from Home
                        </p>
                      </>
                    ) : data.city !== "" ? (
                      <>
                        <MdLocationOn
                          style={{ fontSize: "19px", color: "grey" }}
                          className="preview-icons"
                        />
                        <div
                          style={{ wordBreak: "break-word" }}
                          className="details-heading"
                        >
                          <div className="">{data.city}</div>
                        </div>
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
          data.perks.length !== 0 ||
          data.supplementary.length !== 0 ||
          data.languages.length !== 0) && (
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

                    {each.field !== ""
                      ? `${each.qualification} in(${each.field})`
                      : each.qualification}
                  </p>
                ))}
                <hr />
              </>
            )}

            {data.jobDescription !== "" && (
              <>
                <h4 className="mb-3">Job Description</h4>
                <p style={{ fontSize: "17px" }}>
                  Selected intern's day-to-day responsibilities include:
                </p>
                {data.jobDescription !== "" && (
                  <div
                    className="parent-div"
                    dangerouslySetInnerHTML={{ __html: data.jobDescription }}
                  />
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

export default FresherPostPreview
