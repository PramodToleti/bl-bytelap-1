import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { MdLocationOn } from "react-icons/md"
import { HiOutlineExternalLink } from "react-icons/hi"
import { BiRupee } from "react-icons/bi"

import "./index.css"

function ExperiencePreview(props) {
  const { data } = props
  const [lgShow, setLgShow] = useState(false)

  function renderPreview() {
    return (
      <>
        {(data.jobTitle !== "" ||
          data.experience.years !== "" ||
          data.ctc.lacs !== "" ||
          data.ctc.thousand !== "" ||
          data.checkbox !== false) && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            {data.jobTitle !== "" && <h2 className="mb-4">Nilesh</h2>}
            <h4 className="mb-3">{data.jobTitle}</h4>
            <div className="experience-container mb-3">
              {data.experience.years !== "" && <h4>Experience: </h4>}
              <div style={{ display: "flex", gap: "10px", marginTop: "2px" }}>
                {data.experience.years !== "" && (
                  <h5 className="experience-text">
                    {data.experience.years}.{data.experience.months} Years
                  </h5>
                )}
                {((data.ctc.lacs !== "" && data.ctc.thousand !== "") ||
                  data.checkbox !== false) && (
                  <div
                    style={{ display: "flex", gap: "4px", marginTop: "2px" }}
                  >
                    <BiRupee
                      style={{
                        color: "grey",
                        fontSize: "22px",
                        marginTop: "3px",
                      }}
                    />

                    {data.checkbox ? (
                      <h6
                        style={{
                          fontSize: " 14px",
                          marginBottom: "0px",
                          marginTop: "5px",
                        }}
                      >
                        Not Disclosed
                      </h6>
                    ) : (
                      <h5 style={{ fontSize: "14px", marginTop: "5px" }}>
                        {data.ctc.lacs.substring(0, 2)}.
                        {parseInt(data.ctc.thousand / 10000)}L PA
                      </h5>
                    )}
                  </div>
                )}
              </div>
            </div>
            {data.skills.length !== 0 && (
              <div className="skills-container mb-3">
                <h4 className="mb-3" style={{ marginRight: "20px" }}>
                  Skill's:{" "}
                </h4>
                {data.skills.map((each) => (
                  <h6 className="preview-skills" key={each}>
                    {each}
                  </h6>
                ))}
              </div>
            )}

            {data.jobTitle !== "" && (
              <>
                <MdLocationOn style={{ color: "grey", fontSize: "30px" }} />{" "}
                <span style={{ color: "grey" }}>Indore, MP</span>
              </>
            )}
          </div>
        )}

        {data.coverLetter !== "" && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-4">Cover Letter:</h4>
            <p className="mb-3" style={{ overflowWrap: "break-word" }}>
              {data.coverLetter}
            </p>
          </div>
        )}

        {data.employmentHistory.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-3">Experience</h4>
            <div>
              {data.employmentHistory.map((each) => (
                <>
                  <div className="preview-date-container">
                    <h6>{each.profile}</h6>

                    <p className="mobile-company">{each.company}</p>

                    {(each.profile !== "" ||
                      each.company !== "" ||
                      each.startDate !== "") && (
                      <p style={{ fontSize: "15px", marginBottom: "10px" }}>
                        {new Date(each.startDate).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -{" "}
                        {new Date(each.endDate) === "" && each.present === true
                          ? "Present"
                          : new Date(each.endDate).toLocaleString("default", {
                              month: "short",
                              year: "numeric",
                            })}
                      </p>
                    )}
                  </div>
                  <p className="desktop-company">{each.company}</p>

                  <p style={{ overflowWrap: "break-word" }}>
                    {each.responsibilities}
                  </p>
                </>
              ))}
            </div>
          </div>
        )}

        {data.projectDetails.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
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
                  <p
                    style={{
                      fontSize: "15px",
                      marginTop: "14px",
                      overflowWrap: "break-word",
                    }}
                  >
                    {each.about}
                  </p>
                </>
              ))}
            </ul>
          </div>
        )}

        {data.training.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-4">Internship Training / Course</h4>
            <ul className="internships-list">
              {data.training.map((each) => (
                <li className="mb-3" style={{ width: "100%" }}>
                  <div className="preview-date-container">
                    <div>
                      <h6 style={{ fontSize: "18px" }}>{each.title}</h6>
                      <p>{each.institute}</p>
                    </div>
                    <p style={{ fontSize: "15px", marginBottom: "10px" }}>
                      {new Date(each.startDate).toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}{" "}
                      -{" "}
                      {new Date(each.endDate).toLocaleString("default", {
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
        )}

        {data.achievements.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-4">Achievements / Awards & Recognition</h4>
            <ul className="internships-list">
              {data.achievements.map((each) => (
                <li className="mb-3">
                  <div
                    className="achievements-container"
                    style={{ maxWidth: "100%", wordBreak: "break-all" }}
                  >
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
        )}

        {data.degree.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-3">Education:</h4>
            {data.degree.map((each) => (
              <div>
                <div className="preview-date-container">
                  <div>
                    {each.degree === "Master's" ||
                    each.degree === "Bachelor's" ||
                    each.degree === "Diploma" ||
                    each.degree === "Doctorate" ? (
                      <>
                        <h6>
                          {each.degree}, {each.field}
                        </h6>
                        <p>
                          {each.institute}, {each.city}
                        </p>{" "}
                      </>
                    ) : (
                      <h6>{each.degree}</h6>
                    )}
                  </div>

                  <div className="desktop-date">
                    {(each.degree === "High Secondary (12th)" ||
                      each.degree === "Secondary (10th)") && (
                      <p>
                        {new Date(each.yearOfCompletion).toLocaleString(
                          "default",
                          {
                            month: "short",
                            year: "numeric",
                          }
                        )}
                      </p>
                    )}
                  </div>

                  <p style={{ fontSize: "15px" }}>
                    {new Date(each.startDate).toLocaleString("default", {
                      month: "short",
                      year: "numeric",
                    })}

                    {each.endDate === "" &&
                    (each.degree === "Master's" ||
                      each.degree === "Bachelor's" ||
                      each.degree === "Diploma" ||
                      each.degree === "Doctorate")
                      ? " - Present"
                      : each.endDate !== ""
                      ? ` - ${new Date(each.endDate).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}`
                      : ""}
                  </p>
                </div>
                {(each.degree === "High Secondary (12th)" ||
                  each.degree === "Secondary (10th)") && (
                  <p>{each.schoolName}</p>
                )}
                <div className="mobile-date">
                  {(each.degree === "High Secondary (12th)" ||
                    each.degree === "Secondary (10th)") && (
                    <p>
                      {each.yearOfCompletion.toLocaleString("default", {
                        month: "short",
                        year: "numeric",
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {data.languages.length !== 0 && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <h4 className="mb-3">Languages:</h4>
            <div className="languages-list">
              {data.languages.map((each) => (
                <p>{each}</p>
              ))}
            </div>
          </div>
        )}

        {data.availability !== "" && (
          <div
            className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-3  rounded border "
            style={{ width: "100%", backgroundColor: "white" }}
          >
            <div>
              <h4 className="mb-3">Available:</h4>
              <p>{data.availability}</p>
            </div>
          </div>
        )}
      </>
    )
  }

  return (
    <>
      <Button
        variant="secondary"
        className="col-sm-2 mx-4 mt-2"
        onClick={() => setLgShow(true)}
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

export default ExperiencePreview
