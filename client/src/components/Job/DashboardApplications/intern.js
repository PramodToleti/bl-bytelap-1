import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import { Card } from "react-bootstrap"
import Cookies from "js-cookie"
import "react-toastify/dist/ReactToastify.css"
import { useState, useEffect } from "react"

import PostTime from "../../../assets/PostTime"

const InternDashboard = ({ activeType }) => {
  const [applications, setApplications] = useState([])
  const [loading, setLoading] = useState(true)
  const [lgShow, setLgShow] = useState(false)

  activeType = activeType === "Not Interested" ? "Not-Interested" : activeType

  useEffect(() => {
    async function fetchData() {
      const token = Cookies.get("employeeToken")

      const options = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
      const response = await fetch(
        "http://localhost:5000/employee/dashboard/internship",
        options
      )
      const data = await response.json()
      if (response.ok) {
        setApplications(data)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }

    fetchData()
  }, [activeType])

  const filterApplicatons = applications.filter(
    (data) => data.dashboardType === activeType
  )

  if (filterApplicatons.length === 0 && !loading) {
    return (
      <div className="no-applications">
        <h3>No Applications Found</h3>
      </div>
    )
  }

  console.log(applications)

  const renderApplications = () => {
    return (
      <>
        <p className="mt-3">
          {filterApplicatons ? filterApplicatons.length : 0} applications
        </p>

        <div
          style={{
            height: "43rem",
            overflow: "scroll",
            paddingBottom: "50px",
            maxHeight: "500px",
          }}
          className="find-resume-container"
        >
          <div style={{ maxWidth: "680px" }}>
            {filterApplicatons.map((data, index) => (
              <div className="application mb-4">
                <Card
                  className="col-lg-5 col-md-5  main-details-card  mb-0 mt-2 p-0    card-details"
                  style={{ border: "0px" }}
                >
                  <Card.Body className="card-size">
                    <Card.Title>{data.username}</Card.Title>
                    <Card.Text>{data.jobName}</Card.Text>
                    <Card.Text className=" text-muted ">
                      CoverLetter &nbsp; : &nbsp; {data.coverLetter}{" "}
                      <Card.Text></Card.Text>
                    </Card.Text>
                    <Card.Text className="perks-mobile text-muted">
                      Skills &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp;&nbsp;{" "}
                      {data.skills.length > 3 ? (
                        <>
                          <h6 className="preview-perks">{data.skills[0]}</h6>
                          <h6 className="preview-perks">{data.skills[1]}</h6>
                          <h6 className="preview-perks">
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
                    </Card.Text>
                    <Card.Text className="perks-desktop text-muted">
                      Skills &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp;&nbsp;{" "}
                      {data.skills.map((each) => (
                        <p className="preview-skills">{each}</p>
                      ))}
                    </Card.Text>
                    <Card.Text className=" text-muted">
                      Portfolio &nbsp; &nbsp;: &nbsp;&nbsp;{" "}
                      {data.projectDetails.map((each) => (
                        <a
                          href=""
                          style={{
                            color: "Blue",
                            textDecoration: "none",
                            fontWeight: "400",
                          }}
                        >
                          {each.title} &nbsp;&nbsp;&nbsp;
                        </a>
                      ))}
                    </Card.Text>
                    <Card.Text className=" text-muted">
                      Available &nbsp; : &nbsp;&nbsp; {data.availability}
                    </Card.Text>

                    <div>
                      <div className="interested-btn-container">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className=" mt-3"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Interested
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Shortlisted
                        </Button>
                        <Button
                          variant="outline-secondary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Hire
                        </Button>{" "}
                        <Button
                          variant="outline-secondary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
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

                    <div className="interested-btn-container-desktop">
                      <div className="btns-container">
                        <Button
                          variant="outline-success"
                          size="sm"
                          className="mt-3"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Interested
                        </Button>{" "}
                        <Button
                          variant="outline-primary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Shortlisted
                        </Button>{" "}
                        <Button
                          variant="outline-secondary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
                        >
                          Hire
                        </Button>
                        <Button
                          variant="outline-secondary"
                          className=" mt-3"
                          size="sm"
                          onClick={(e) => {
                            handleActiveType(e, data)
                          }}
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

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "end",
                      }}
                    >
                      <p
                        className="mt-4"
                        style={{ color: "blue", marginBottom: "0px" }}
                        onClick={() => {
                          history.push(
                            "/employee/dashboard/active-posts/job/internship/view-applicant",
                            data
                          )
                          window.scrollTo(0, 0)
                        }}
                      >
                        View Application
                      </p>
                    </div>

                    <p style={{ fontSize: "12px", margin: "0px" }}>
                      Update: <PostTime time={data.time} />
                    </p>
                  </Card.Body>
                </Card>
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
              <Modal.Title id="example-modal-sizes-title-lg">
                Resume
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>No PDF file specified</div>
            </Modal.Body>
          </Modal>
        </div>
      </>
    )
  }

  return (
    <div>
      {loading ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        renderApplications()
      )}
    </div>
  )
}

export default InternDashboard
