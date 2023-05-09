import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link, useHistory, useLocation } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"
import classNames from "classnames"
import Popup from "reactjs-popup"
import { Card } from "react-bootstrap"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import EmployeeHome from "../../../EmployeeHome"
import StickyContainer from "../../../../components/EmployeeFindResume/StickyContainer"
import PostTime from "../../../../assets/PostTime"

import "./index.css"
import { useState, useEffect } from "react"
import InternDashboard from "../../DashboardApplications/intern"

function ActiveJobIntern() {
  const location = useLocation()
  const history = useHistory()
  const { sticky, stickyRef } = StickyContainer()
  const [activeType, setActiveType] = useState("Applied")
  const [lgShow, setLgShow] = useState(false)
  const [activeJobs, setActiveJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [activeFilter, setActiveFilter] = useState(location.state?.data || "")
  const [loading, setLoading] = useState(false)
  const [dataChanged, setDataChanged] = useState(false)

  useEffect(() => {
    async function fetchJobs() {
      setLoading(true)
      const response = await fetch("http://localhost:5000/candidate/jobs")
      const data = await response.json()
      if (response.ok) {
        setActiveJobs(data)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }

    async function fetchApplications() {
      setLoading(true)
      const token = Cookies.get("employeeToken")
      const userId = localStorage.getItem("userId")

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userId }),
      }
      const response = await fetch(
        "http://localhost:5000/candidate/applications",
        options
      )
      const data = await response.json()
      if (response.ok) {
        const filteredData = data.filter((each) => each.type === "Internship")
        setApplications(filteredData)
        setLoading(false)
      } else {
        console.log(data)
        setLoading(false)
      }
    }

    fetchApplications()
    fetchJobs()
  }, [dataChanged])

  const handleActiveType = async (e, data) => {
    const endPoint = e.target.textContent.replace(/\s+/g, "-").toLowerCase()
    const token = Cookies.get("employeeToken")
    const userId = localStorage.getItem("userId")
    const url = `http://localhost:5000/employee/dashboard/internship/${endPoint}`

    data.userId = userId

    delete data._id

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    }

    const response = await fetch(url, options)
    const resData = await response.json()
    if (response.ok) {
      toast.success(resData.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        marginTop: "30px",
        margin: "20px",
      })
      setLoading(true)
      setDataChanged(!dataChanged)
    } else {
      toast.error(resData.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        marginTop: "30px",
        margin: "20px",
      })
    }
  }

  let internData = []

  if (activeFilter !== "") {
    for (const obj of applications) {
      if (obj.jobName === activeFilter) {
        internData.push(obj)
      } else {
        internData = internData
      }
    }
  } else {
    internData = applications
  }

  const renderApplications = () => {
    if (
      internData === undefined ||
      (internData.length === 0 && activeType === "Applied")
    ) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "20rem",
          }}
        >
          <p>
            No Applications Available. Please{" "}
            <Link
              to="/employee"
              style={{
                color: "blue",
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              Go Back
            </Link>
          </p>
        </div>
      )
    } else {
      if (activeType === "Applied") {
        return (
          <>
            <p className="mt-3">
              {internData ? internData.length : 0} applications
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
                {internData.map((data, index) => (
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
                          Skills &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                          &nbsp;&nbsp;{" "}
                          {data.skills.length > 3 ? (
                            <>
                              <h6 className="preview-perks">
                                {data.skills[0]}
                              </h6>
                              <h6 className="preview-perks">
                                {data.skills[1]}
                              </h6>
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
                          Skills &nbsp;
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
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
      } else {
        return <InternDashboard activeType={activeType} />
      }
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      <ToastContainer />
      <EmployeeHome />
      <div>
        <div className="col-lg-12 col-md-12  rounded ">
          <p
            style={{
              display: "flex",
              gap: "10px",
              marginLeft: "15px",
              marginTop: "15px",
            }}
          >
            <Link
              to="/employee/dashboard/active-posts"
              style={{ marginBottom: "0", marginBottom: "20px" }}
              className="nav-link"
            >
              Dashboard
            </Link>
            {`> CV applicant's`}
          </p>
          <div
            className={classNames("d-flex justify-content-around", { sticky })}
            ref={stickyRef}
            style={{
              minHeight: "100vh",
              backgroundColor: "#ffffff",
              width: "100%",
            }}
          >
            <div
              style={{
                height: "47rem",
                width: "",
                backgroundColor: "rgba(128, 128, 128, 0.06)",
                border: "1px solid #d8d8d8",
                borderRight: "0px",
              }}
              className="col-lg-2 col-md-2 search-course-right mr-3  mb-0 side-bar-container         container reveal  p-4   "
            >
              <p
                className={activeType === "Applied" ? "activeType" : ""}
                style={{ cursor: "pointer", marginBottom: "15px" }}
                onClick={(e) => setActiveType("Applied")}
              >
                Applied ({internData.length})
              </p>
              <p
                className={activeType === "Interested" ? "activeType" : ""}
                style={{ cursor: "pointer" }}
                onClick={(e) => setActiveType(e.target.textContent)}
              >
                Interested
              </p>
              <p
                className={
                  activeType === "Shortlisted" ? "activeType mt-4" : "mt-4"
                }
                style={{ cursor: "pointer" }}
                onClick={(e) => setActiveType(e.target.textContent)}
              >
                Shortlisted
              </p>
              <p
                className={activeType === "Hire" ? "activeType mt-4" : "mt-4"}
                style={{ cursor: "pointer" }}
                onClick={(e) => setActiveType(e.target.textContent)}
              >
                Hire
              </p>
              <p
                className={
                  activeType === "Not Interested" ? "activeType mt-4" : "mt-4"
                }
                style={{ cursor: "pointer" }}
                onClick={(e) => setActiveType(e.target.textContent)}
              >
                Not Interested
              </p>
              <hr />
              <Popup
                trigger={
                  <p className="pl-2" style={{ cursor: "pointer" }}>
                    {" "}
                    Team{" "}
                  </p>
                }
                modal
                nested
              >
                <div className="container p-4">
                  <div classname="container">
                    <div className="d-flex justify-content-center">
                      <p>Team Access</p>
                    </div>
                    <Form.Group className="mt-3 mb-4">
                      <Form.Control type="text" placeholder="Enter Email ID" />
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                      <Button variant="primary">Invite</Button>
                    </div>
                  </div>
                </div>
              </Popup>
            </div>

            <div
              style={{
                fontSize: "17px",
                fontWeight: "400",
                height: "47rem",
                border: "1px solid #d8d8d8",
                backgroundColor: "#ffff",
              }}
              className="col-lg-10 col-md-10 search-course-right   mb-0  p-2    container reveal  p-3"
            >
              <div
                className="col-lg-12 col-md-12 search-course-right   mb-0 mt-0 p-0  rounded container reveal  p-3 mb-0    rounded "
                style={{ border: "1px solid #d8d8d8" }}
              >
                <Form.Group
                  className="mb-0 mt-0 fs-10"
                  controlId="formBasicText"
                >
                  <Stack direction="horizontal" gap={3}>
                    {["radio"].map((type) => (
                      <div key={`inline-${type}`} className="mb-0">
                        <Form.Check
                          inline
                          label="Internship"
                          name="group1"
                          checked={true}
                          type={type}
                          id={`inline-${type}-1`}
                        />

                        <Link
                          to="/employee/dashboard/active-posts/job/fresher"
                          style={{ color: "#333333", cursor: "pointer" }}
                        >
                          <Form.Check
                            className=""
                            inline
                            label="Fresher"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </Link>

                        <Link
                          to="/employee/dashboard/active-posts/job/experience"
                          style={{ color: "#333333", cursor: "pointer" }}
                        >
                          <Form.Check
                            className=""
                            inline
                            label="Experience"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />
                        </Link>
                      </div>
                    ))}
                  </Stack>
                </Form.Group>
              </div>

              <Form.Group
                as={Col}
                md="6"
                className="mb-3 mt-4 "
                style={{ display: "flex", gap: "15px", alignItems: "center" }}
              >
                <Form.Select
                  value={activeFilter}
                  onChange={(e) => {
                    setActiveFilter(e.target.value)
                  }}
                >
                  <option>Select Post</option>
                  {activeJobs.map((job) => {
                    if (job.type === "Internship")
                      return <option value={job.Title}>{job.jobTitle}</option>
                  })}
                </Form.Select>

                <Form.Control type="text" placeholder="Search by Name" />

                <h5>Filter</h5>
              </Form.Group>

              <Form.Group
                as={Col}
                md="3"
                className=" mb -3 mt-4"
                style={{ width: "120px" }}
              >
                <Form.Select
                  className="custom-select"
                  onChange={(e) => setActiveType(e.target.value)}
                  value={activeType}
                >
                  <option> Applied</option>
                  <option> Interested </option>
                  <option>Shortlisted</option>
                  <option>Hire</option>
                  <option>Not Interested</option>
                </Form.Select>
              </Form.Group>

              {loading ? (
                <div className="text-center">
                  <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                renderApplications()
              )}
            </div>
          </div>
          {sticky && (
            <div
              style={{
                height: `${stickyRef.current?.clientHeight}px`,
              }}
            />
          )}
        </div>
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
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  )
}

export default ActiveJobIntern
