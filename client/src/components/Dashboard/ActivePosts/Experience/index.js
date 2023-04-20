import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import Stack from "react-bootstrap/Stack"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const Experience = (props) => {
  const expData = props.ExperienceApplications

  if (expData === null) {
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
  return expData.map((each, index) => (
    <div
      className="col-lg-6 col-md-6 search-course-right rounded mt-0 p-2  p-3 mb-4"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
      }}
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
            {each.jobTitle}
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minWidth: "150px",
            }}
          >
            <p style={{ marginBottom: "15px" }}>Open</p>
            <div>
              <NavDropdown
                className="fs-4 mb-4"
                title={
                  <span style={{ fontSize: "17px" }} className="mb-3">
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
        <Link
          to="/employee/dashboard/active-posts/job/experience"
          className="nav-link"
        >
          <p className="text-start fs-10" style={{ color: "blue" }}>
            View Application's (1)
          </p>
        </Link>
      </Form.Group>
    </div>
  ))
}

export default Experience
