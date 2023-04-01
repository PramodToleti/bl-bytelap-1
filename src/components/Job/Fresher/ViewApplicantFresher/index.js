import EmployeeHome from "../../../EmployeeHome"
import { HiOutlineExternalLink } from "react-icons/hi"
import { MdLocationOn } from "react-icons/md"
import { BiRupee } from "react-icons/bi"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

import "./index.css"

function ViewApplicantFresher() {
  const fresherData = JSON.parse(localStorage.getItem("registerData")).fresher

  const data = fresherData[0]

  return (
    <div style={{ padding: "15px", marginBottom: "20px" }}>
      <EmployeeHome />

      {/*Applicant*/}
      {data !== undefined && (
        <>
          {(data.jobTitle !== "" ||
            data.skills.length !== 0 ||
            data.salaryType !== "") && (
            <div
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
              style={{ width: "100%", backgroundColor: "white" }}
            >
              {data.jobTitle !== "" && (
                <>
                  <h2 className="mb-4">Nilesh</h2>
                  <h4 className="mb-3">{data.jobTitle}</h4>
                </>
              )}
              <div className="role-container mb-3">
                <div style={{ display: "flex", gap: "20px" }} className="mt-2">
                  {data.jobTitle !== "" && <h5>Fresher</h5>}
                  {data.salaryType !== "" && (
                    <div style={{ display: "flex", gap: "10px" }}>
                      <BiRupee style={{ color: "grey", fontSize: "25px" }} />
                      <p>
                        {data.salaryRange.from !== "" &&
                          data.salaryRange.to !== "" &&
                          `${data.salaryRange.from.substring(
                            0,
                            2
                          )} - ${data.salaryRange.to.substring(0, 2)}`}
                        {data.salaryType === "Lac" ? "L PA" : data.salaryType}
                      </p>
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
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
              style={{ width: "100%", backgroundColor: "white" }}
            >
              <h4 className="mb-4">Cover Letter:</h4>
              <p className="mb-3" style={{ overflowWrap: "break-word" }}>
                {data.coverLetter}
              </p>
            </div>
          )}

          {data.projectDetails.length !== 0 && (
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
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
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
                      <p style={{ fontSize: "15px" }}>
                        {new Date(each.startDate).toLocaleString("default", {
                          month: "short",
                          year: "numeric",
                        })}

                        {each.endDate === ""
                          ? " - Present"
                          : ` - ${new Date(each.endDate).toLocaleString(
                              "default",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}`}
                      </p>
                    </div>
                    {each.file !== null && (
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
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {data.achievements.length !== 0 && (
            <div
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
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
                    {each.file !== null && (
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
                    )}
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
                        ? ` - ${new Date(each.endDate).toLocaleString(
                            "default",
                            {
                              month: "short",
                              year: "numeric",
                            }
                          )}`
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
                </div>
              ))}
            </div>
          )}

          {data.languages.length !== 0 && (
            <div
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
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
              className="col-lg-6 col-md-4 search-course-right text-dark  mb-4 border    rounded container reveal  p-4  rounded border "
              style={{ width: "100%", backgroundColor: "white" }}
            >
              <div>
                <h4 className="mb-3">Available:</h4>
                <p>{data.availability}</p>
              </div>
            </div>
          )}
        </>
      )}

      {/*Btns container*/}
      <div>
        <div
          className="interested-btn-container-applicant"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button variant="success" size="sm" className=" mt-3">
            Interested
          </Button>{" "}
          <Button variant="primary" className=" mt-3" size="sm">
            Shortlisted
          </Button>{" "}
          <Button variant="danger" className=" mt-3" size="sm">
            Not interested
          </Button>{" "}
          <Button variant="light" className=" mt-3" size="sm">
            Call
          </Button>{" "}
          <Button variant="link" className=" mt-3" size="sm">
            View Resume
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ViewApplicantFresher
