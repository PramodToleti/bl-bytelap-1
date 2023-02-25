import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { MdLocationOn } from "react-icons/md"
import { HiOutlineExternalLink } from "react-icons/hi"

import "./index.css"

function InternshipPreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)
  const [click, setClicked] = useState(false)

  const handleClick = () => {
    if (
      data.jobTitle !== "" &&
      data.jobTime !== "" &&
      data.jobType !== "" &&
      data.skills !== "" &&
      data.degree.length !== 0 &&
      data.coverLetter !== "" &&
      data.projectDetails !== "" &&
      data.training !== "" &&
      data.achievement !== "" &&
      data.availability !== "" &&
      data.languages
    ) {
      setLgShow(true)
      setClicked(false)
    } else {
      setLgShow(false)
      setClicked(true)
    }
  }

  console.log(data.degree)

  function renderPreview() {
    return (
      <>
        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h2 className="mb-4">Nilesh</h2>
          <h4 className="mb-3">{data.jobTitle}</h4>
          <div className="skills-container">
            <h4 className="mb-3">Skill's: </h4>
            <div className="mb-3">
              {data.skills.map((each) => (
                <h6 className="preview-skills" key={each}>
                  {each}
                </h6>
              ))}
            </div>
          </div>
          <MdLocationOn style={{ color: "grey", fontSize: "30px" }} />{" "}
          <span style={{ color: "grey" }}>Indore, MP</span>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Cover Letter:</h4>
          <p className="mb-3">{data.coverLetter}</p>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Projects: </h4>
          <ul className="projects-list">
            {data.projectDetails.map((each) => (
              <>
                <li>
                  <a href={each.url} style={{ textDecoration: "none" }}>
                    {each.title}
                  </a>
                  <HiOutlineExternalLink style={{ color: "grey" }} />
                </li>
                <p style={{ fontSize: "15px", marginTop: "14px" }}>
                  {each.about}
                </p>
              </>
            ))}
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Internship Training / Course</h4>
          <ul className="internships-list">
            {data.training.map((each) => (
              <li className="mb-3" style={{ width: "100%" }}>
                <div className="preview-date-container">
                  <h6 style={{ fontSize: "18px" }}>{each.training}</h6>
                  <p style={{ fontSize: "15px", marginBottom: "10px" }}>
                    {each.startDate.toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}{" "}
                    -{" "}
                    {each.endDate.toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <a
                  key={each}
                  style={{ textDecoration: "none", color: "blue" }}
                  onClick={() => {
                    const fileUrl = URL.createObjectURL(each.file)
                    window.open(fileUrl, "_blank")
                  }}
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-4">Achievements / Awards & Recognition</h4>
          <ul className="internships-list">
            {data.achievements.map((each) => (
              <li className="mb-3">
                <div className="achievements-container">
                  <h6>{each.achievement}</h6>
                </div>

                <a
                  key={each}
                  style={{ textDecoration: "none", color: "blue" }}
                  onClick={() => {
                    const fileUrl = URL.createObjectURL(each.file)
                    window.open(fileUrl, "_blank")
                  }}
                >
                  View Certificate
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Education:</h4>
          {data.degree.map((each) => (
            <div>
              <div className="preview-date-container">
                <h6>
                  {each.degree}, {each.field}
                </h6>
                <p style={{ fontSize: "15px" }}>
                  {each.startDate.toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })}
                  -
                  {each.endDate === ""
                    ? "Present"
                    : each.endDate.toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}
                </p>
              </div>
              <p>{each.institute}</p>
            </div>
          ))}
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <h4 className="mb-3">Languages:</h4>
          <div className="languages-list">
            {data.languages.map((each) => (
              <h5>{each}</h5>
            ))}
          </div>
        </div>

        <div
          className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
          style={{ width: "100%", backgroundColor: "white" }}
        >
          <div>
            <h4 className="mb-3">Available:</h4>
            <p>{data.availability}</p>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {click ? (
        <p style={{ color: "red" }}>
          *Please fill all the fields to view the preview
        </p>
      ) : (
        ""
      )}
      <Button
        variant="secondary"
        className="col-sm-2 mx-4 mt-2"
        onClick={() => {
          handleClick()
        }}
      >
        Preview
      </Button>
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

export default InternshipPreview
