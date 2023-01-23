import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import Col from "react-bootstrap/Col"
import NavDropdown from "react-bootstrap/NavDropdown"
import Row from "react-bootstrap/Row"
import { Link } from "react-router-dom"

import EmployeeHome from "../../EmployeeHome"
import { useState } from "react"

function Accountsetting() {
  const [activeFilter, setActiveFilter] = useState("internship")

  const renderActiveJob = () => {}

  return (
    <>
      <EmployeeHome />
      <div className="col-lg-8 col-md-8 search-course-right   mb-4 mt-5 p-2  bg-light border-secondary rounded container reveal  p-3 mb-5   rounded border border-secondary">
        <div className="col-lg-12 col-md-12 search-course-right   mb-0 mt-4 p-1   border-secondary rounded container reveal  p-2 mb-5   rounded border border-secondary">
          <Form.Group className="mb-0 mt-0 fs-10" controlId="formBasicText">
            <Stack direction="horizontal" gap={3}>
              {["radio"].map((type) => (
                <div key={`inline-${type}`} className="mb-0">
                  <Form.Check
                    inline
                    label="Internship"
                    name="group1"
                    type={type}
                    id={`inline-${type}-1`}
                  />

                  <Form.Check
                    className=""
                    inline
                    label="Fresher"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />

                  <Form.Check
                    className=""
                    inline
                    label="Experience"
                    name="group1"
                    type={type}
                    id={`inline-${type}-2`}
                  />
                </div>
              ))}
            </Stack>
          </Form.Group>
        </div>

        <Link to="/employee/dashboard/active-posts/job" className="nav-link">
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
              <p className="text-start fs-10" style={{ color: "blue" }}>
                View Application's (48)
              </p>
            </Form.Group>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Accountsetting
