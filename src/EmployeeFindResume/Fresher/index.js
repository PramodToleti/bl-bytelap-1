import { ImLocation } from "react-icons/im"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useState } from "react"
import Modal from "react-bootstrap/Modal"

const Fresher = () => {
  const fresherData = JSON.parse(localStorage.getItem("registerData")).fresher

  const [lgShow, setLgShow] = useState(false)

  return (
    <>
      <div style={{ maxWidth: "680px" }}>
        {fresherData.map((data) => (
          <div className="application">
            <div className="col-lg-12 col-md-12 search-course-right  card-size mb-0 mt-2 p-4 container reveal  p-3 ">
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
                <div>
                  <p className="location">
                    <ImLocation style={{ fontSize: "20px", color: "grey" }} />{" "}
                    Indore, MP
                  </p>
                </div>
              </div>

              <div className="mt-3">
                <div>
                  <p className="text-muted">
                    <span>Cover Letter </span> : &nbsp;&nbsp;&nbsp;{" "}
                    <span className="text-muted">{data.coverLetter}</span>
                  </p>
                </div>
              </div>

              <div className="card-container-mobile">
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                  }}
                >
                  <p style={{ marginRight: "10px" }} className="text-muted">
                    Training/Certified&nbsp;&nbsp;:
                  </p>
                  <div className="mt-1">
                    {data.training.map((each) => (
                      <>
                        <p
                          className="text-muted"
                          style={{ marginBottom: "5px" }}
                        >
                          {each.title} at {each.institute}
                        </p>
                        <p style={{ fontSize: "14px" }} className="text-muted">
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
                      </>
                    ))}
                  </div>
                </div>

                <div
                  style={{ display: "flex", flexWrap: "wrap" }}
                  className="mb-1"
                >
                  <p style={{ marginRight: "10px" }} className="text-muted">
                    Portfolio &nbsp;&nbsp;&nbsp;&nbsp;:
                  </p>
                  {data.projectDetails.map((each) => (
                    <a
                      href={each.url}
                      style={{
                        color: "Blue",
                        textDecoration: "none",
                        marginTop: "3px",
                      }}
                    >
                      {each.title} &nbsp;&nbsp;&nbsp;
                    </a>
                  ))}
                </div>

                <div
                  style={{ display: "flex", flexWrap: "wrap" }}
                  className="text-muted mb-3"
                >
                  <p className="text-muted">Preferred Location&nbsp;:&nbsp; </p>
                  {data.preferredLocation.map((each) => (
                    <p className="text-muted">{each.value}, &nbsp;</p>
                  ))}
                </div>

                <div
                  style={{ display: "flex", flexWrap: "wrap" }}
                  className="text-muted perks-mobile mb-3"
                >
                  <p style={{ marginRight: "10px" }}>
                    Skills&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  </p>
                  {data.skills.length > 3 ? (
                    <>
                      <h6 className="preview-perks">{data.skills[0]}</h6>
                      <h6 className="preview-perks">{data.skills[1]}</h6>
                      <h6 className="preview-perks">{data.skills[2]} </h6> ...
                    </>
                  ) : (
                    data.skills.map((each, i) => (
                      <h6 className="preview-perks" key={i}>
                        {each}
                      </h6>
                    ))
                  )}
                </div>

                <div
                  style={{ display: "flex", flexWrap: "wrap" }}
                  className="mb-3"
                >
                  <p style={{ marginRight: "10px" }} className="text-muted">
                    Availability &nbsp;: &nbsp;{data.availability}
                  </p>
                </div>
              </div>

              <div className="card-container">
                <p className="mt-1 text-muted">Training/Certified</p>
                <div className="mt-1">:</div>
                <div className="course-f">
                  <div className="mt-1">
                    {data.training.map((each) => (
                      <>
                        <p
                          className="text-muted"
                          style={{ marginBottom: "5px" }}
                        >
                          {each.title} at {each.institute}
                        </p>
                        <p style={{ fontSize: "14px" }} className="text-muted">
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
                      </>
                    ))}
                  </div>
                </div>
                <div className="skill-header-f text-muted">
                  <p className="text-muted">Skills</p>
                </div>
                <div className="colon">:</div>
                <div className="react-f text-muted">
                  {data.skills.map((each) => (
                    <p className="preview-skills">{each}</p>
                  ))}
                </div>
                <div className="portfolio-f text-muted">
                  <p>Portfolio</p>
                </div>
                <div className="colon">:</div>
                <div className="ekart-f">
                  {data.projectDetails.map((each) => (
                    <a
                      href={each.url}
                      style={{
                        color: "Blue",
                        textDecoration: "none",
                        marginTop: "3px",
                      }}
                    >
                      {each.title} &nbsp;&nbsp;&nbsp;
                    </a>
                  ))}
                </div>

                <div className="preferred-f text-muted">
                  <p>Preferred Location &nbsp;:</p>
                </div>
                <div className="colon"></div>
                <div className="location-f text-muted">
                  {data.preferredLocation.map((each) => (
                    <span className="text-muted">{each.value}, &nbsp;</span>
                  ))}
                </div>
                <div className="available-f text-muted">
                  <p>Available</p>
                </div>
                <div className="colon-last">:</div>
                <div className="yes-f text-muted">{data.availability}</div>
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
                to="/employee/dashboard/active-posts/job/fresher/view-applicant"
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

export default Fresher
