import { ImLocation } from "react-icons/im"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import PostTime from "../../../assets/PostTime"
import { BsBagFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import Cookies from "js-cookie"

const Fresher = () => {
  const [fresherData, setFresherData] = useState([])
  const [lgShow, setLgShow] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      const userId = localStorage.getItem("userId")
      const token = Cookies.get("employeeToken")

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      }

      const response = await fetch(
        "http://localhost:5000/employee/find-resume/fresher",
        options
      )

      const data = await response.json()
      if (response.ok) {
        setFresherData(data)
        setLoading(false)
      } else {
        setLoading(false)
        console.log(data)
      }
      console.log(data)
    }

    fetchData()
  }, [])

  if ((fresherData?.length === 0 || fresherData === null) && !loading)
    return (
      <div
        className="no-data"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "50vh",
        }}
      >
        <h4>No Data Found</h4>
      </div>
    )

  return (
    <>
      {loading ? (
        <div
          className="no-data"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "50vh",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: "680px" }}>
          {fresherData.map((data) => (
            <div className="application">
              <div className="col-lg-12 col-md-12 search-course-right  card-size mb-0 mt-2  container reveal  p-2 find-resume-card">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <h4>{data.username}</h4>
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
                        marginRight: "5px",
                      }}
                    />
                    <span className="location">Fresher</span>
                  </div>
                  <div>
                    <BiRupee
                      style={{
                        color: "grey",
                        fontSize: "20px",
                        marginBottom: "5px",
                      }}
                    />
                    {data.salaryType !== "Lac" ? (
                      <span className="location"> {data.salaryType} </span>
                    ) : (
                      <span className="location">
                        {" "}
                        {data.salaryRange.from} - {data.salaryRange.to} LPA
                      </span>
                    )}
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

                <div className="mt-3 mb-2">
                  <div>
                    <p className="text-muted">
                      <span>Cover Letter </span> : &nbsp;&nbsp;&nbsp;{" "}
                      <span className="text-muted ">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: data.coverLetter,
                          }}
                        />{" "}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="card-container-mobile mt-3">
                  <div
                    style={{ display: "flex", flexWrap: "wrap" }}
                    className="text-muted perks-mobile mb-2"
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
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "10px",
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        marginRight: "10px",
                      }}
                      className="text-muted"
                    >
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
                          <p
                            style={{ fontSize: "14px" }}
                            className="text-muted"
                          >
                            {new Date(each.startDate).toLocaleString(
                              "default",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}{" "}
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
                    style={{ display: "flex", gap: "10px" }}
                    className="mt-3 mb-3"
                  >
                    <div className="text-muted" style={{ width: "250px" }}>
                      <p>
                        Preferred Location &nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;:
                      </p>
                    </div>
                    <div className="text-muted">
                      {data.preferredLocation.map((each) => (
                        <span
                          className="text-muted"
                          style={{ fontSize: "16px" }}
                        >
                          {each.value}, &nbsp;
                        </span>
                      ))}
                    </div>
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
                  <p className="mt-1 text-muted training-f">
                    Training/Certified
                  </p>
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
                          <p
                            style={{ fontSize: "14px" }}
                            className="text-muted"
                          >
                            {new Date(each.startDate).toLocaleString(
                              "default",
                              {
                                month: "short",
                                year: "numeric",
                              }
                            )}{" "}
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
                      <span className="text-muted" style={{ fontSize: "16px" }}>
                        {each.value}, &nbsp;
                      </span>
                    ))}
                  </div>
                  <div className="available-f text-muted">
                    <p>Available</p>
                  </div>
                  <div className="colon-last">:</div>
                  <div className="yes-f text-muted">
                    <p className="text-muted">{data.availability}</p>
                  </div>
                </div>

                <div></div>
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
                <p style={{ fontSize: "12px", margin: "0px" }}>
                  Update: <PostTime time={data.time} />
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

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
