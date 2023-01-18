import Stack from "react-bootstrap/Stack"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import EmployeeHome from "../../EmployeeHome"
import { Link } from "react-router-dom"

import DashboardHeader from "../DashboardHeader"

import "./index.css"

function ActivePosts() {
  return (
    <>
      <EmployeeHome />
      <div className="col-lg-8 col-md-8 search-course-right   mb-4 mt-5 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <p className="text-start fs-5">Dashboard</p>
        <hr></hr>
        <DashboardHeader />

        <div
          className="col-lg-8 col-md-8 search-course-right   mb-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary"
          style={{ cursor: "pointer", width: "100%" }}
        >
          <div className="col-lg-12 col-md-12 search-course-right    mb-0 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
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
                      className="ms-auto"
                      inline
                      label="Fresher"
                      name="group1"
                      type={type}
                      id={`inline-${type}-2`}
                    />

                    <Form.Check
                      className="ms-auto"
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
            <div className="col-lg-6 col-md-6 search-course-right   mb-0 mt-0 p-2 bg-light text-dark  border-secondary rounded  p-3 mb-0 bg-white rounded border border-secondary">
              <Form.Group
                as={Col}
                md="12"
                className="mt-0"
                controlId="validationCustom01"
              >
                <Stack direction="horizontal" gap={3}>
                  <p className="text-start">Android Developer</p>
                  <p className=" mx-auto">Open</p>
                  <p className="">Action</p>
                </Stack>
                <p className="text-start fs-10" style={{ color: "blue" }}>
                  View Application's (48)
                </p>
              </Form.Group>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ActivePosts
