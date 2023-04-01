import { BsBagFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"
import { ImLocation } from "react-icons/im"

const Experience = () => {
  const experienceData = JSON.parse(
    localStorage.getItem("registerData")
  ).experience

  const [lgShow, setLgShow] = useState(false)

  return (
    <>
      <div style={{ maxWidth: "680px" }}>
        {experienceData.map((data) => (
          <div className="application">
            <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-2 p-4        container reveal  p-3 mb-5   rounded card-size">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h4>Nilesh</h4>
                  <p>{data.jobTitle}</p>
                </div>
              </div>

              <div
                className="mt-3 mb-2"
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  maxWidth: "400px",
                }}
              >
                <div>
                  <BsBagFill
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginBottom: "5px",
                    }}
                  />
                  <span className="location">
                    {" "}
                    {data.experience.years} years
                  </span>
                </div>
                <div>
                  <BiRupee
                    style={{
                      color: "grey",
                      fontSize: "20px",
                      marginBottom: "5px",
                    }}
                  />
                  <span className="location"> {data.ctc.lacs} LPA</span>
                </div>
                <div>
                  <p className="location">
                    <ImLocation
                      style={{
                        fontSize: "20px",
                        color: "grey",
                        marginBottom: "5px",
                      }}
                    />{" "}
                    Indore, MP
                  </p>
                </div>
              </div>

              <div className="card-container-mobile">
                <div className="mt-3 perks-mobile">
                  <p className="text-muted">Skill's &nbsp;&nbsp;: </p>
                  {data.skills.length > 3 ? (
                    <>
                      <h6 className="preview-perks text-muted">
                        {data.skills[0]}
                      </h6>
                      <h6 className="preview-perks text-muted">
                        {data.skills[1]}
                      </h6>
                      <h6 className="preview-perks text-muted">
                        {data.skills[2]}{" "}
                      </h6>{" "}
                      ...
                    </>
                  ) : (
                    data.skills.map((each, i) => (
                      <h6 className="preview-perks" key={i}>
                        {each}
                      </h6>
                    ))
                  )}
                </div>

                <div className="mt-3">
                  <div>
                    <p className="text-muted">
                      <span className="text-muted">Cover Letter &nbsp;:</span>{" "}
                      &nbsp;&nbsp;&nbsp;{data.coverLetter}
                    </p>
                  </div>
                </div>

                {data.employmentHistory.map((each) =>
                  each.present === true ? (
                    <div
                      className="mt-3  text-muted"
                      style={{ display: "flex" }}
                    >
                      <p className="mt-2">Current Company &nbsp;:</p>
                      &nbsp;&nbsp;&nbsp;
                      <div>
                        <p>{each.companyName}</p>
                        <p>
                          {new Date(each.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          - Present &nbsp;&nbsp;&nbsp;
                        </p>
                        <ImLocation
                          style={{
                            fontSize: "16px",
                            color: "grey",
                            marginBottom: "5px",
                          }}
                        />{" "}
                        {each.location[0].value}
                      </div>
                    </div>
                  ) : (
                    <div
                      className="mt-3  text-muted"
                      style={{ display: "flex" }}
                    >
                      <p className="mt-2" style={{ maxWidth: "115px" }}>
                        Previous Company &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      </p>
                      &nbsp;&nbsp;&nbsp;
                      <div>
                        <p>{each.companyName}</p>
                        <p>
                          {new Date(each.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {new Date(each.endDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                        </p>
                        &nbsp;&nbsp;&nbsp;
                        <ImLocation
                          style={{
                            fontSize: "16px",
                            color: "grey",
                            marginBottom: "5px",
                          }}
                        />{" "}
                        {each.location[0].value}
                      </div>
                    </div>
                  )
                )}

                <div className="mt-3 text-muted" style={{ display: "flex" }}>
                  <p>Notice Period : &nbsp; {data.availability}</p>
                </div>
              </div>

              <div className="card-container">
                <div className="skill-header-e text-muted">
                  <p>Skills</p>
                </div>
                <div className="colon">:</div>
                <div className="react-e">
                  {data.skills.map((each) => (
                    <p className="preview-skills">{each}</p>
                  ))}
                </div>

                <div className="letter-header-e text-muted">
                  <p>Cover Letter</p>
                </div>
                <div>:</div>
                <div className="letter">
                  <p className="text-muted">{data.coverLetter}</p>
                </div>

                {data.employmentHistory.map((each) =>
                  each.present === true ? (
                    <>
                      <div className="current-e text-muted">
                        <p>Current Company</p>
                      </div>
                      <div>:</div>
                      <div className="current-company text-muted">
                        <p className="text-muted">
                          {each.profile} at {each.company}
                        </p>
                        <span
                          className="text-muted"
                          style={{ fontSize: "14px" }}
                        >
                          {new Date(each.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          - Present
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <ImLocation
                          style={{
                            fontSize: "16px",
                            color: "grey",
                            marginBottom: "5px",
                          }}
                        />{" "}
                        {each.location[0].value}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="current-e text-muted">
                        <p>Previous Company</p>
                      </div>
                      <div>:</div>
                      <div className="current-company text-muted">
                        <p className="text-muted">
                          {each.profile} at {each.company}
                        </p>
                        <span className="text-muted">
                          {new Date(each.startDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}{" "}
                          -{" "}
                          {new Date(each.endDate).toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <ImLocation
                          style={{
                            fontSize: "16px",
                            color: "grey",
                            marginBottom: "5px",
                          }}
                        />{" "}
                        {each.location[0].value}
                      </div>
                    </>
                  )
                )}

                <div className="previous-e text-muted">
                  <p>Notice Period</p>
                </div>
                <div>:</div>
                <div className="previous-company text-muted">
                  {data.availability}
                </div>
              </div>

              <div className="mt-3"></div>
              <div>
                <div className="interested-btn-container">
                  <Button
                    variant="outline-success"
                    size="sm"
                    className=" mt-3"
                    onClick={(e) => handleActiveType(e)}
                  >
                    Interested
                  </Button>{" "}
                  <Button
                    variant="outline-primary"
                    className=" mt-3"
                    size="sm"
                    onClick={(e) => handleActiveType(e)}
                  >
                    Shortlisted
                  </Button>
                  <Button
                    variant="outline-secondary"
                    className=" mt-3"
                    size="sm"
                    onClick={(e) => handleActiveType(e)}
                  >
                    Hire
                  </Button>{" "}
                  <Button
                    variant="outline-secondary"
                    className=" mt-3"
                    size="sm"
                    onClick={(e) => handleActiveType(e)}
                  >
                    Not Interested
                  </Button>{" "}
                  <Button variant="light" className=" mt-3" size="sm">
                    Call
                  </Button>{" "}
                  <Button
                    variant="link"
                    className=" mt-3"
                    size="sm"
                    onClick={() => setLgShow(true)}
                  >
                    View Resume
                  </Button>
                </div>
              </div>

              <div>
                <div className="interested-btn-container-desktop">
                  <div className="btns-container">
                    <Button
                      variant="outline-success"
                      size="sm"
                      className="mt-3"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Interested
                    </Button>{" "}
                    <Button
                      variant="outline-primary"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Shortlisted
                    </Button>{" "}
                    <Button
                      variant="outline-secondary"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Hire
                    </Button>
                    <Button
                      variant="outline-secondary"
                      className=" mt-3"
                      size="sm"
                      onClick={(e) => handleActiveType(e)}
                    >
                      Not Interested
                    </Button>{" "}
                  </div>
                  <div>
                    <Button variant="light" className=" mt-3" size="sm">
                      Call
                    </Button>{" "}
                    <Button
                      variant="link"
                      className=" mt-3"
                      size="sm"
                      onClick={() => setLgShow(true)}
                    >
                      View Resume
                    </Button>
                  </div>
                </div>
              </div>

              <Link
                to="/employee/dashboard/active-posts/job/experience/view-applicant"
                className="nav-link"
              >
                <div style={{ display: "flex", justifyContent: "end" }}>
                  <p className="mt-4" style={{ color: "blue" }}>
                    View Application
                  </p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">Resume</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>No PDF file specified</div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Experience
