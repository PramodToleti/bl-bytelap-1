import Form from "react-bootstrap/Form"
import { Col } from "react-bootstrap"
import Stack from "react-bootstrap/Stack"
import { NavDropdown } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import PostTime from "../../../../assets/PostTime"
import { useState, useEffect } from "react"

const Internship = (props) => {
  const history = useHistory()
  const internData = props.InternJobs

  if (internData.length === 0) {
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

  return internData.map((each, index) => (
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
            <p style={{ marginBottom: "15px", fontSize: "15px" }}>Open</p>
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
          className="text-start"
          style={{ color: "blue", cursor: "pointer", fontSize: "16px" }}
          onClick={() => {
            history.push("/employee/dashboard/active-posts/job/internship", {
              data: each.jobTitle,
            })
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
  ))
}

export default Internship
