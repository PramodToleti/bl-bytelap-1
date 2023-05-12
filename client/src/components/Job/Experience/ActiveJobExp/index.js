import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import { Link, useLocation } from "react-router-dom"
import { ImLocation } from "react-icons/im"
import Modal from "react-bootstrap/Modal"
import classNames from "classnames"
import { BsBagFill } from "react-icons/bs"
import { BiRupee } from "react-icons/bi"
import Popup from "reactjs-popup"
import Cookies from "js-cookie"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import EmployeeHome from "../../../EmployeeHome"
import StickyContainer from "../../../../components/EmployeeFindResume/StickyContainer"
import PostTime from "../../../../assets/PostTime"

import "./index.css"
import { useState, useEffect } from "react"
import ExperienceDashboard from "../../DashboardApplications/experience"

function ActiveJobExp() {
  const location = useLocation()
  const { sticky, stickyRef } = StickyContainer()
  const [activeType, setActiveType] = useState("Applied")
  const [lgShow, setLgShow] = useState(false)
  const [activeJobs, setActiveJobs] = useState([])
  const [applications, setApplications] = useState([])
  const [activeFilter, setActiveFilter] = useState(location.state?.data || "")
  const [loading, setLoading] = useState(false)
  const [dataChanged, setDataChanged] = useState(false)

  const handleActiveType = async (e, data) => {
    const endPoint = e.target.textContent.replace(/\s+/g, "-").toLowerCase()
    const token = Cookies.get("employeeToken")
    const userId = localStorage.getItem("userId")
    const url = `http://localhost:5000/employee/dashboard/experience/${endPoint}`

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
        const filteredData = data.filter((each) => each.type === "Experience")
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

  let experienceData = []

  if (activeFilter !== "") {
    for (const obj of applications) {
      if (obj.jobName === activeFilter) {
        experienceData.push(obj)
      } else {
        experienceData = experienceData
      }
    }
  } else {
    experienceData = applications
  }

  console.log(experienceData)

  const renderApplications = () => {
    if (
      experienceData === undefined ||
      (experienceData.length === 0 && activeType === "Applied")
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
                color: "black",
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
              {experienceData
                ? `${
                    experienceData.filter(
                      (data) => data.dashboardType === undefined
                    ).length
                  }`
                : 0}{" "}
              applications
            </p>
            <div
              style={{
                height: "43rem",
                overflow: "scroll",
                paddingBottom: "50px",
                maxHeight: "550px",
              }}
              className="find-resume-container"
            >
              <div style={{ maxWidth: "680px" }}>
                {experienceData.map(
                  (data) =>
                    data.dashboardType === undefined && (
                      <div className="application">
                        <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-2 p-4        container reveal  p-3 mb-5   rounded card-size">
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                            }}
                          >
                            <div>
                              <h4>{data.username}</h4>
                              <p>{data.jobName}</p>
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
                              <span className="location">
                                {" "}
                                {data.ctc.lacs} LPA
                              </span>
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
                              <p className="text-muted">
                                Skill's &nbsp;&nbsp;:{" "}
                              </p>
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
                                  <span className="text-muted">
                                    Cover Letter &nbsp;:
                                  </span>{" "}
                                  &nbsp;&nbsp;&nbsp;
                                  <div
                                    className="parent-div"
                                    dangerouslySetInnerHTML={{
                                      __html: data.coverLetter,
                                    }}
                                  />
                                </p>
                              </div>
                            </div>

                            {data.employementHistory.map((each) =>
                              each.present === true ? (
                                <div
                                  className="mt-3  text-muted"
                                  style={{ display: "flex" }}
                                >
                                  <p className="mt-2">
                                    Current Company &nbsp;:
                                  </p>
                                  &nbsp;&nbsp;&nbsp;
                                  <div>
                                    <p>{each.companyName}</p>
                                    <p>
                                      {new Date(each.startDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}{" "}
                                      - Present &nbsp;&nbsp;&nbsp;
                                    </p>
                                    <ImLocation
                                      style={{
                                        fontSize: "16px",
                                        color: "grey",
                                        marginBottom: "5px",
                                      }}
                                    />{" "}
                                    {each.location[0].label}
                                  </div>
                                </div>
                              ) : (
                                <div
                                  className="mt-3  text-muted"
                                  style={{ display: "flex" }}
                                >
                                  <p
                                    className="mt-2"
                                    style={{ maxWidth: "115px" }}
                                  >
                                    Previous Company
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                                  </p>
                                  &nbsp;&nbsp;&nbsp;
                                  <div>
                                    <p>{each.companyName}</p>
                                    <p>
                                      {new Date(each.startDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}{" "}
                                      -{" "}
                                      {new Date(each.endDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}{" "}
                                    </p>
                                    &nbsp;&nbsp;&nbsp;
                                    <ImLocation
                                      style={{
                                        fontSize: "16px",
                                        color: "grey",
                                        marginBottom: "5px",
                                      }}
                                    />{" "}
                                    {each.location[0].label}
                                  </div>
                                </div>
                              )
                            )}

                            <div
                              style={{ display: "flex", gap: "10px" }}
                              className="mt-3"
                            >
                              <div
                                className="text-muted"
                                style={{ width: "250px" }}
                              >
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
                                    {each.label}, &nbsp;
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div
                              className="mt-3 text-muted"
                              style={{ display: "flex" }}
                            >
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
                              <p className="text-muted">
                                <div
                                  style={{
                                    maxWidth: "450px",
                                    overflow: "hidden",
                                    wordWrap: "break-word",
                                  }}
                                  dangerouslySetInnerHTML={{
                                    __html: data.coverLetter,
                                  }}
                                />
                              </p>
                            </div>

                            {data.employementHistory.map((each) =>
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
                                      {new Date(each.startDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}{" "}
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
                                    {each.location[0].label}
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
                                      {new Date(each.startDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}{" "}
                                      -{" "}
                                      {new Date(each.endDate).toLocaleString(
                                        "default",
                                        {
                                          month: "short",
                                          year: "numeric",
                                        }
                                      )}
                                    </span>
                                    &nbsp;&nbsp;&nbsp;
                                    <ImLocation
                                      style={{
                                        fontSize: "16px",
                                        color: "grey",
                                        marginBottom: "5px",
                                      }}
                                    />{" "}
                                    {each.location[0].label}
                                  </div>
                                </>
                              )
                            )}

                            <div className="preferred-e text-muted">
                              <p>Preferred Location </p>
                            </div>
                            <div className="colon">:</div>
                            <div className="location-e text-muted">
                              {data.preferredLocation.map((each) => (
                                <span
                                  className="text-muted"
                                  style={{ fontSize: "16px" }}
                                >
                                  {each.label}, &nbsp;
                                </span>
                              ))}
                            </div>

                            <div className="notice-e text-muted">
                              <p>Notice Period</p>
                            </div>
                            <div>:</div>
                            <div className="notice-company text-muted">
                              <p className="text-muted">{data.availability}</p>
                            </div>
                          </div>

                          <div className="mt-3"></div>
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
                              <Button
                                variant="light"
                                className=" mt-3"
                                size="sm"
                              >
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
                                <Button
                                  variant="light"
                                  className=" mt-3"
                                  size="sm"
                                >
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

                          <div
                            style={{ display: "flex", justifyContent: "end" }}
                          >
                            <p
                              className="mt-4"
                              style={{ color: "blue" }}
                              onClick={() => {
                                history.push(
                                  "/employee/dashboard/active-posts/job/experience/view-applicant",
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
                        </div>
                      </div>
                    )
                )}
              </div>
            </div>
          </>
        )
      } else {
        return <ExperienceDashboard activeType={activeType} />
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
                Applied{" "}
                {experienceData
                  ? `(${
                      experienceData.filter(
                        (data) => data.dashboardType === undefined
                      ).length
                    })`
                  : 0}
              </p>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <p
                  className={activeType === "Interested" ? "activeType" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setActiveType(e.target.textContent)}
                >
                  Interested
                </p>
                {`(${
                  experienceData.filter(
                    (each) => each.dashboardType === "Interested"
                  ).length
                })`}
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <p
                  className={activeType === "Shortlisted" ? "activeType" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setActiveType(e.target.textContent)}
                >
                  Shortlisted
                </p>
                {`(${
                  experienceData.filter(
                    (each) => each.dashboardType === "Shortlisted"
                  ).length
                })`}
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <p
                  className={activeType === "Hire" ? "activeType" : ""}
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setActiveType(e.target.textContent)}
                >
                  Hire
                </p>
                {`(${
                  experienceData.filter((each) => each.dashboardType === "Hire")
                    .length
                })`}
              </div>
              <div
                style={{ display: "flex", gap: "10px", marginBottom: "15px" }}
              >
                <p
                  className={
                    activeType === "Not Interested" ? "activeType" : ""
                  }
                  style={{ cursor: "pointer" }}
                  onClick={(e) => setActiveType(e.target.textContent)}
                >
                  Not Interested
                </p>
                {`(${
                  experienceData.filter(
                    (each) => each.dashboardType === "Not-Interested"
                  ).length
                })`}
              </div>
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
                        <Link
                          to="/employee/dashboard/active-posts/job/internship"
                          style={{ color: "#333333", cursor: "pointer" }}
                        >
                          <Form.Check
                            inline
                            label="Internship"
                            name="group1"
                            checked={false}
                            type={type}
                            id={`inline-${type}-1`}
                          />
                        </Link>

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
                            checked={false}
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
                            checked={true}
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
                  <option>All Posts</option>
                  {activeJobs.map((job) => {
                    if (job.type === "Experience")
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

export default ActiveJobExp
