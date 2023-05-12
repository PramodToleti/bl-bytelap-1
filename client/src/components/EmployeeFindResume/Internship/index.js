import { Card } from "react-bootstrap"
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import Modal from "react-bootstrap/Modal"
import PostTime from "../../../assets/PostTime"
import Cookies from "js-cookie"

const Internship = () => {
  const [internData, setInternData] = useState([])
  const [loading, setLoading] = useState(false)

  const [lgShow, setLgShow] = useState(false)

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
        "http://localhost:5000/employee/find-resume/internship",
        options
      )

      const data = await response.json()
      if (response.ok) {
        setInternData(data)
        setLoading(false)
      } else {
        setLoading(false)
        console.log(data)
      }
      console.log(data)
    }

    fetchData()
  }, [])

  if ((internData?.length === 0 || internData === null) && !loading)
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
          {internData.map((data, index) => (
            <div className="application">
              <Card
                className="col-lg-5 col-md-5  main-details-card  mb-0 mt-2 p-0    card-details"
                style={{ border: "0px" }}
              >
                <Card.Body className="card-size">
                  <Card.Title>{data.username}</Card.Title>
                  <Card.Text>{data.jobTitle}</Card.Text>
                  <Card.Text className=" text-muted ">
                    CoverLetter &nbsp; : &nbsp;{" "}
                    <div
                      dangerouslySetInnerHTML={{
                        __html: data.coverLetter,
                      }}
                    />{" "}
                    <Card.Text></Card.Text>
                  </Card.Text>
                  <Card.Text className="perks-mobile text-muted">
                    Skills &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    &nbsp;&nbsp;{" "}
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
                  <Link
                    to="/employee/dashboard/active-posts/job/internship/view-applicant"
                    className="nav-link"
                  >
                    <div style={{ display: "flex", justifyContent: "end" }}>
                      <p
                        className="mt-4"
                        style={{ color: "blue", marginBottom: "0px" }}
                      >
                        View Application
                      </p>
                    </div>
                  </Link>
                  <p style={{ fontSize: "12px", margin: "0px" }}>
                    Update: <PostTime time={data.time} />
                  </p>
                </Card.Body>
              </Card>
            </div>
          ))}
          )
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

export default Internship
