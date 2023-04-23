import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import Stack from "react-bootstrap/Stack"
import { NavDropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"

const Internship = (props) => {
  const history = useHistory()
  const internData = props.InternApplications

  const jobApplications = {}

  const jobTitles = []

  internData.forEach((job) => {
    const jobTitle = job.jobTitle

    if (jobApplications.hasOwnProperty(jobTitle)) {
      jobApplications[jobTitle] = [...jobApplications[jobTitle], job]
    } else {
      jobApplications[jobTitle] = [job]
    }
  })

  for (const [key, value] of Object.entries(jobApplications)) {
    jobTitles.push({ key, no: value.length })
  }

  if (internData === null) {
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

  console.log(internData)

  return jobTitles.map((each, index) => (
    <div
      className="col-lg-6 col-md-6 search-course-right   mt-0 p-2  rounded  p-3  mb-4 rounded  "
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
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
          <p className="text-start" style={{ marginBottom: "15px" }}>
            {each.key}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: "130px",
            }}
          >
            <p style={{ marginBottom: "15px", fontSize: "15px" }}>Open</p>
            <div>
              <NavDropdown
                className="fs-3 mb-4"
                title={
                  <span style={{ fontSize: "15px" }} className="mb-3">
                    Action
                  </span>
                }
                id={`offcanvasNavbarDropdown-expand-sm`}
              >
                <Link
                  to="#action3"
                  className="nav-link"
                  style={{ marginLeft: "9px", marginBottom: "8px" }}
                >
                  Edit Post
                </Link>
                <Link
                  to="#action3"
                  className="nav-link"
                  style={{ marginLeft: "9px", marginBottom: "8px" }}
                >
                  View Post
                </Link>
                <Link
                  to="#action3"
                  className="nav-link"
                  style={{ marginLeft: "9px", marginBottom: "8px" }}
                >
                  Delete
                </Link>
              </NavDropdown>
            </div>
          </div>
        </div>

        <p
          className="text-start fs-10"
          style={{ color: "blue" }}
          onClick={() => {
            history.push("/employee/dashboard/active-posts/job/internship")
            localStorage.setItem(
              "internData",
              JSON.stringify(jobApplications[each.key])
            )
          }}
        >
          {`View Application's (${each.no})`}
        </p>
      </Form.Group>
    </div>
  ))
}

export default Internship
