import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import Stack from "react-bootstrap/Stack"
import { NavDropdown } from "react-bootstrap"
import { Link } from "react-router-dom"

const Internship = () => {
  const internData = JSON.parse(localStorage.getItem("registerData"))

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

  return (
    <div className="col-lg-6 col-md-6 search-course-right   mb-0 mt-0 p-2       border-secondary rounded  p-3 mb-0   rounded border border-secondary">
      <Form.Group
        as={Col}
        md="12"
        className="mt-0"
        controlId="validationCustom01"
      >
        <Stack direction="horizontal" gap={3}>
          <p className="text-start">Android Developer</p>
          <p className="mx-auto">Open</p>
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
        </Stack>
        <Link
          to="/employee/dashboard/active-posts/job/internship"
          className="nav-link"
        >
          <p className="text-start fs-10" style={{ color: "blue" }}>
            View Application's (1)
          </p>
        </Link>
      </Form.Group>
    </div>
  )
}

export default Internship
