import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import Stack from "react-bootstrap/Stack"
import { NavDropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import Modal from "react-modal"
import { Oval } from "react-loader-spinner"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Cookies from "js-cookie"

import PostTime from "../../../../assets/PostTime"

const customStyles = {
  content: {
    maxWidth: "350px", // Set max width of the modal
    maxHeight: "200px", // Set max height of the modal
    margin: "auto", // Center align the modal horizontally
    borderRadius: "8px", // Add border radius to give a rounded corner look
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)", // Add shadow for a popup effect
    display: "flex", // Add display flex for centering content and buttons
    flexDirection: "column", // Set flex direction to column for stacking content and buttons
    justifyContent: "center", // Center align content and buttons horizontally
    alignItems: "center", // Center align content and buttons vertically
    padding: "20px", // Add padding to the modal content
  },
  h2: {
    textAlign: "center",
    fontSize: "22px",
    marginBottom: "30px", // Add margin bottom to the heading
  },
  buttonContainer: {
    display: "flex", // Add display flex for centering buttons
    gap: "10px", // Add gap between buttons
  },
  button: {
    backgroundColor: "#007BFF", // Set background color for the buttons
    color: "#FFF", // Set text color for the buttons
    padding: "10px 20px", // Add padding to the buttons
    borderRadius: "4px", // Add border radius to the buttons
    cursor: "pointer", // Add cursor pointer for hover effect
    border: "none", // Remove button border
    outline: "none", // Remove button outline
    transition: "background-color 0.3s", // Add transition for smooth hover effect
    display: "grid",
    placeItems: "center",
  },
  buttonNo: {
    backgroundColor: "#DC3545", // Set background color for the No button
  },
}

const Experience = (props) => {
  const history = useHistory()
  const expData = props.ExperienceJobs
  const handleDataChange = props.handleDataChange
  const [isStatusOpen, setIsStatusOpen] = useState(false)
  const [isPauseOpen, setIsPauseOpen] = useState(false)
  const [isCloseOpen, setIsCloseOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [id, setJobId] = useState("")

  if (expData.length === 0) {
    return (
      <div style={{ display: "grid", placeItems: "center" }}>
        <p>
          Not Jobs Available. Please{" "}
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
  }

  const handleCloseClick = () => {
    setIsStatusOpen(false)
    setIsPauseOpen(false)
    setIsCloseOpen(false)
    setIsDeleteOpen(false)
  }

  const handleApplyClick = () => {
    setIsDeleteOpen(true)
  }

  const handleCloseStatus = () => {
    setIsCloseOpen(true)
  }

  const handleOpenClick = () => {
    setIsStatusOpen(true)
  }

  const handlePauseClick = () => {
    setIsPauseOpen(true)
  }

  const handleOpenStatus = (jobDetails) => {
    handleOpenClick()
    const jobId = jobDetails._id
    setJobId(jobId)
  }

  const handlePausePost = (jobDetails) => {
    handlePauseClick()
    const jobId = jobDetails._id
    setJobId(jobId)
  }

  const handleClosePost = (jobDetails) => {
    handleCloseStatus()
    const jobId = jobDetails._id
    setJobId(jobId)
  }

  const handleDeletePost = (jobDetails) => {
    handleApplyClick()
    const jobId = jobDetails._id
    setJobId(jobId)
  }

  const onOpen = async () => {
    setLoading(true)
    const jobId = id
    const token = Cookies.get("employeeToken")
    const response = await fetch(
      `http://localhost:5000/employee/job/dashboard/open/${jobId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      setIsStatusOpen(false)
      toast.success("Job Opened Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setTimeout(() => {
        handleDataChange()
      }, 1000)
    } else {
      setLoading(false)
      setIsStatusOpen(false)
      toast.error(data.message, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  const onPause = async () => {
    setLoading(true)
    const jobId = id
    const token = Cookies.get("employeeToken")
    const response = await fetch(
      `http://localhost:5000/employee/job/dashboard/pause/${jobId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      setIsPauseOpen(false)
      toast.success("Job Paused Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setTimeout(() => {
        handleDataChange()
      }, 1000)
    } else {
      setLoading(false)
      setIsPauseOpen(false)
      toast.error("Error Pausing Job", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  const onClose = async () => {
    setLoading(true)
    const jobId = id
    const token = Cookies.get("employeeToken")
    const response = await fetch(
      `http://localhost:5000/employee/job/dashboard/close/${jobId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      setIsCloseOpen(false)
      toast.success("Job Closed Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })

      setTimeout(() => {
        handleDataChange()
      }, 1000)
    } else {
      setLoading(false)
      setIsCloseOpen(false)
      toast.error("Error Closing Job", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  const onDelete = async () => {
    setLoading(true)
    const jobId = id
    const token = Cookies.get("employeeToken")
    const response = await fetch(
      `http://localhost:5000/employee/job/dashboard/delete/${jobId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    )
    const data = await response.json()
    if (response.ok) {
      setLoading(false)
      setIsDeleteOpen(false)
      toast.success("Job Deleted Successfully", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #00ff00",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
      setTimeout(() => {
        handleDataChange()
      }, 1000)
    } else {
      setLoading(false)
      setIsDeleteOpen(false)
      toast.error("Error Deleting Job", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          border: "2px solid #ff0000",
          backgroundColor: "#fff",
          marginTop: "30px",
          margin: "20px",
        },
      })
    }
  }

  const renderStatus = (status) => {
    switch (status) {
      case "Open":
        return (
          <p
            style={{
              marginBottom: "15px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {status}{" "}
            <span
              className="open-status"
              style={{ marginLeft: "2px", marginRight: "10px" }}
            ></span>
          </p>
        )
      case "Paused":
        return (
          <p
            style={{
              marginBottom: "15px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {status}{" "}
            <span
              className="pause-status"
              style={{ marginLeft: "2px", marginRight: "10px" }}
            ></span>
          </p>
        )
      case "Closed":
        return (
          <p
            style={{
              marginBottom: "15px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {status}{" "}
            <span
              className="close-status"
              style={{ marginLeft: "2px", marginRight: "10px" }}
            ></span>
          </p>
        )
      default:
        return (
          <p
            style={{
              marginBottom: "15px",
              fontSize: "15px",
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {status}{" "}
            <span
              className="open-status"
              style={{ marginLeft: "2px", marginRight: "10px" }}
            ></span>
          </p>
        )
    }
  }

  return expData.map((each, index) => {
    return (
      <>
        <ToastContainer />
        <Modal
          isOpen={isStatusOpen}
          onRequestClose={handleCloseClick}
          contentLabel="Apply Modal"
          style={customStyles} // Pass the custom styles to the modal
          ariaHideApp={false}
        >
          <h2 style={customStyles.h2}>Do you want to Open this job?</h2>
          <div style={customStyles.buttonContainer}>
            <>
              <button onClick={() => onOpen()} style={customStyles.button}>
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "Yes"
                )}
              </button>

              <button
                onClick={handleCloseClick}
                style={{ ...customStyles.button, ...customStyles.buttonNo }}
              >
                No
              </button>
            </>
          </div>
        </Modal>
        <Modal
          isOpen={isPauseOpen}
          onRequestClose={handleCloseClick}
          contentLabel="Apply Modal"
          style={customStyles} // Pass the custom styles to the modal
          ariaHideApp={false}
        >
          <h2 style={customStyles.h2}>Do you want to Pause this job?</h2>
          <div style={customStyles.buttonContainer}>
            <>
              <button onClick={() => onPause()} style={customStyles.button}>
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "Yes"
                )}
              </button>

              <button
                onClick={handleCloseClick}
                style={{ ...customStyles.button, ...customStyles.buttonNo }}
              >
                No
              </button>
            </>
          </div>
        </Modal>
        <Modal
          isOpen={isDeleteOpen}
          onRequestClose={handleCloseClick}
          contentLabel="Apply Modal"
          style={customStyles} // Pass the custom styles to the modal
          ariaHideApp={false}
        >
          <h2 style={customStyles.h2}>Do you want to delete this job?</h2>
          <div style={customStyles.buttonContainer}>
            <>
              <button onClick={() => onDelete()} style={customStyles.button}>
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "Yes"
                )}
              </button>

              <button
                onClick={handleCloseClick}
                style={{ ...customStyles.button, ...customStyles.buttonNo }}
              >
                No
              </button>
            </>
          </div>
        </Modal>
        <Modal
          isOpen={isCloseOpen}
          onRequestClose={handleCloseClick}
          contentLabel="Apply Modal"
          style={customStyles} // Pass the custom styles to the modal
          ariaHideApp={false}
        >
          <h2 style={customStyles.h2}>Do you want to Close this job?</h2>
          <div style={customStyles.buttonContainer}>
            <>
              <button onClick={() => onClose()} style={customStyles.button}>
                {loading ? (
                  <Oval
                    height={20}
                    width={20}
                    color="#ffffff"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel="oval-loading"
                    secondaryColor="#ffffff"
                    strokeWidth={2}
                    strokeWidthSecondary={2}
                  />
                ) : (
                  "Yes"
                )}
              </button>

              <button
                onClick={handleCloseClick}
                style={{ ...customStyles.button, ...customStyles.buttonNo }}
              >
                No
              </button>
            </>
          </div>
        </Modal>
        <div
          className="col-lg-6 col-md-6 search-course-right rounded mt-0 mb-4"
          style={{
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            padding: "22px",
          }}
          key={index}
        >
          <Form.Group
            as={Col}
            md="12"
            className="mt-0"
            controlId="validationCustom01"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p
                className="text-start"
                style={{
                  marginBottom: "15px",
                  marginRight: "4px",
                  fontWeight: "600",
                }}
              >
                {each.jobTitle}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  minWidth: "125px",
                }}
              >
                {renderStatus(each.status)}
                <div>
                  <NavDropdown
                    className="fs-4 mb-4"
                    title={
                      <span style={{ fontSize: "15px" }} className="mb-3">
                        Action
                      </span>
                    }
                    id={`offcanvasNavbarDropdown-expand-sm`}
                  >
                    <Link
                      to="#action3"
                      className={`nav-link${
                        each.status === "Closed" ? " disabled-link" : ""
                      }`}
                      style={{ marginLeft: "9px", marginBottom: "8px" }}
                      onClick={() => {
                        if (each.status === "Closed") {
                          this.removeEventListener("click", arguments.callee)
                          return false
                        }
                        handleOpenStatus(each)
                      }}
                    >
                      Open{" "}
                      {each.status === "Open" && (
                        <span className="open-status"> </span>
                      )}
                    </Link>
                    <Link
                      to="#action3"
                      className={`nav-link${
                        each.status === "Closed" ? " disabled-link" : ""
                      }`}
                      style={{ marginLeft: "9px", marginBottom: "8px" }}
                      onClick={() => {
                        if (each.status === "Closed") {
                          this.removeEventListener("click", arguments.callee)
                          return false
                        }
                        handlePausePost(each)
                      }}
                    >
                      Pause{" "}
                      {each.status === "Paused" && (
                        <span className="pause-status"> </span>
                      )}
                    </Link>
                    <Link
                      to="#action3"
                      className="nav-link"
                      style={{ marginLeft: "9px", marginBottom: "8px" }}
                      onClick={() => handleClosePost(each)}
                    >
                      Close{" "}
                      {each.status === "Closed" && (
                        <span className="close-status"> </span>
                      )}
                    </Link>

                    <Link
                      to="#action3"
                      className="nav-link"
                      style={{ marginLeft: "9px", marginBottom: "8px" }}
                      onClick={() => handleDeletePost(each)}
                    >
                      Delete
                    </Link>
                  </NavDropdown>
                </div>
              </div>
            </div>

            <p
              className="text-start"
              style={{ color: "blue", cursor: "pointer", fontSize: "16px" }}
              onClick={() => {
                history.push(
                  "/employee/dashboard/active-posts/job/experience",
                  {
                    data: each.jobTitle,
                  }
                )
              }}
            >
              {each.applications === undefined
                ? "View Application's (0)"
                : `View Application's (${each.applications.length})`}
            </p>
          </Form.Group>
          <p
            style={{
              fontSize: "13px",
              marginTop: "10px",
              marginBottom: "0px",
              color: "#000",
            }}
          >
            {<PostTime time={each.time} />}
          </p>
        </div>
      </>
    )
  })
}

export default Experience
