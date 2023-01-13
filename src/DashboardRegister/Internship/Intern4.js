import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "react-router-dom"

import EmployeeHome from "../../components/EmployeeHome"

function Intern4() {
  return (
    <>
      <EmployeeHome />
      <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
        <p className="text-start fs-5">Dashboard</p>
        <hr></hr>
        <Nav defaultActiveKey="/home" as="ul">
          <Nav.Item as="li">
            <Nav.Link href="/home">CV Alerts</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Active Post</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1">Create Job</Nav.Link>
          </Nav.Item>
        </Nav>

        <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
          <p className="text-center mb-5">
            <p className="text-center">Create job</p>
            <Dropdown>
              <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
                Internship
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Link
                  to="/employee/dashboard/internship-1"
                  className="nav-link"
                >
                  Internship
                </Link>
                <Link to="/employee/dashboard/fresher-1" className="nav-link">
                  Fresher
                </Link>
                <Link
                  to="/employee/dashboard/experience-1"
                  className="nav-link"
                >
                  Experience
                </Link>
              </Dropdown.Menu>
            </Dropdown>
          </p>

          <Form action="">
            <Form.Group className="mb-3 mt-2">
              <Form.Label>Select Job Deadline</Form.Label>
              <Form.Select>
                <option>Select an option </option>
                <option>12 days</option>
                <option>24 days</option>
                <option>36 days</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Custom Question </Form.Label>
              <Form.Control
                required
                type="text"
                placeholder=" "
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>
            <p>Add More</p>

            <div className="d-grid gap-2 mt-5">
              <Link to="/employee">
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Save
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Intern4
