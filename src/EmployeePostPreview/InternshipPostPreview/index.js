import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { FaBuilding } from "react-icons/fa"
import { MdShoppingBag } from "react-icons/md"
import { BsFillSunFill } from "react-icons/bs"
import { FaHome } from "react-icons/fa"
import { AiFillYoutube } from "react-icons/ai"
import { MdDateRange } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { CiStar } from "react-icons/ci"
import { BsFillShareFill } from "react-icons/bs"
import { MdLocationOn } from "react-icons/md"

import "./index.css"

function InternshipPostPreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)
  const [click, setClicked] = useState(false)

  const handleClick = () => {
    if (
      data.jobTitle !== "" &&
      data.jobTime !== "" &&
      data.jobType !== "" &&
      data.city !== "" &&
      data.duration !== "" &&
      data.checked !== "" &&
      data.startDate !== "" &&
      data.endDate !== "" &&
      data.skills !== "" &&
      data.responsibilities !== "" &&
      data.salaryType !== "" &&
      data.salaryRange !== "" &&
      data.perks !== "" &&
      data.languages !== "" &&
      data.openings !== "" &&
      data.location !== "" &&
      data.education
    ) {
      setLgShow(true)
      setClicked(false)
    } else {
      setLgShow(false)
      setClicked(true)
    }
  }

  function renderPreview() {
    return (
      <>
        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border div-card   rounded container reveal  p-2  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
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
                      style={{ marginTop: "8px" }}
                    />
                    <p
                      style={{
                        marginTop: "10px",
                        fontSize: "10px",
                        color: "grey",
                      }}
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
                <p style={{ fontSize: "10px" }}>
                  {data.checked
                    ? "Immediate"
                    : data.startDate.toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}
                </p>
              </p>
            </div>

            <div className="job-card-container">
              <MdDateRange className="icon-styles" />
              <p className="details-heading-2">
                Duration
                <br />
                <p style={{ fontSize: "10px" }}>{data.duration} Months</p>
              </p>
            </div>

            <div className="job-card-container">
              <BiRupee className="icon-styles" />
              <p className="details-heading-2">
                Salary
                <br />
                <p style={{ fontSize: "10px" }}>
                  {data.salaryRange.from === undefined
                    ? `${Math.floor(data.salaryRange / 1000)}k/month`
                    : `${Math.floor(
                        data.salaryRange.from / 1000
                      )}k - ${Math.floor(data.salaryRange.to / 1000)}k /month`}
                </p>
              </p>
            </div>
          </div>

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
            <div style={{ fontSize: "11px", color: "grey" }}>
              <CiStar style={{ color: "grey", fontSize: "16px" }} /> are
              preffered keyskill
            </div>

            <hr style={{ marginBottom: "8px" }} />
            <p style={{ fontSize: "12px" }}>Posted : 1 day ago</p>
          </div>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border  div-card  rounded container reveal  p-2  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Job Description</h4>
          <p style={{ fontSize: "16px" }}>
            Selected intern's day-to-day responsibilities include:
          </p>
          {data.responsibilities !== "" && (
            <p>
              {data.responsibilities.split("\n").map((each) => (
                <li>{each}</li>
              ))}
            </p>
          )}

          <div className="perks-desktop">
            <hr />
            <h4 className="mb-3">Perks & Benefits</h4>
            {data.perks.map((each, i) => (
              <h6 className="preview-skills" key={each}>
                {each.value}
              </h6>
            ))}
          </div>
          <hr />
          <div>
            <h4 className="mb-3">Languages</h4>
            <div className="languages">
              {data.languages.map((each) => (
                <h5>{each}</h5>
              ))}
            </div>
          </div>
          <hr />
          <div>
            <h4 className="mb-3">Number of openings:</h4>
            <h5>{data.openings !== "" && `${data.openings}+`}</h5>
          </div>
        </div>

        <div className="row justify-content-end mb-3 mt-3">
          <div className="col-auto">
            <BsFillShareFill style={{ color: "grey", fontSize: "18px" }} />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="row justify-content-center">
        {click ? (
          <p style={{ color: "red" }}>
            *Please fill all the fields to view the preview
          </p>
        ) : (
          ""
        )}
        <Button
          variant="secondary"
          className="mt-2"
          style={{ width: "110px" }}
          onClick={() => {
            handleClick()
          }}
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

export default InternshipPostPreview
