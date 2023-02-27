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
import { AiFillYoutube } from "react-icons/ai"

import "./index.css"

function FresherPostPreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)

  function renderPreview() {
    return (
      <>
        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
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
            <FaBuilding style={{ color: "grey", fontSize: "25px" }} />
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
              <RiShoppingBagFill className="icon-styles" />
              <p className="details-heading">Fresher</p>
            </div>

            <div className="job-card-container">
              <p className="details-heading">
                <BiRupee className="icon-styles" />
                {`${Math.floor(data.salaryRange.from / 1000)}L - ${Math.floor(
                  data.salaryRange.to / 1000
                )}LPA`}
              </p>
            </div>
          </div>
          <hr />
          <div className="mb-1">
            {data.skills.map((each) => (
              <h6 className="preview-skills" key={each}>
                {each}
              </h6>
            ))}
          </div>
          <div style={{ fontSize: "11px", color: "grey" }}>
            <CiStar style={{ color: "grey", fontSize: "16px" }} /> are preffered
            keyskill
          </div>
          <hr style={{ marginBottom: "8px" }} />
          <p style={{ fontSize: "12px" }}>Posted : 1 day ago</p>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Qualification:</h4>
          <p>BE, ME, BSC, MSC</p>
          <hr />
          <h4 className="mb-3">Job Description</h4>
          <p style={{ fontSize: "16px" }}>
            Selected intern's day-to-day responsibilities include:
          </p>
          {data.jobDescription !== "" && (
            <p>
              {data.jobDescription.split("\n").map((each) => (
                <li>{each}</li>
              ))}
            </p>
          )}
          <hr />

          <div>
            <h4 className="mb-3">Perks & Benefits:</h4>
            {data.perks.map((each, i) => (
              <h6 className="preview-skills" key={each}>
                {each.value}
              </h6>
            ))}
          </div>
          <hr />

          <div>
            <h4 className="mb-3">Supplemental Pay:</h4>
            {data.supplementary.map((each, i) => (
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

        <div className="row justify-content-center mb-4">
          <button type="button" className="apply-button">
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
            <BsFillShareFill style={{ color: "grey", fontSize: "18px" }} />
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
