import Nav from "react-bootstrap/Nav"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Dropdown from "react-bootstrap/Dropdown"

import { Link } from "react-router-dom"
import EmployeeHome from "../../components/EmployeeHome"

function Exp2() {
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
                Experience
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
              <Form.Label>Degree </Form.Label>
              <Form.Control
                required
                as="select"
                type="select"
                name="payment_method"
              >
                <option value="">Select an option</option>
                <option value="master">Master's</option>
                <option value="bachelor">Bachelor's</option>
                <option value="diploma">Diploma</option>
                <option value="h_secondary">High Secondary (12th)</option>
                <option value="secondary">Secondary (10th)</option>
                <option value="doctorate">Doctorate</option>
                <option value="other">Other</option>
              </Form.Control>
              <Form.Control.Feedback type="invalid">
                Please select your degree.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Field of study</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Information Technology"
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter field of study.
              </Form.Control.Feedback>
            </Form.Group>
            <p className="text-start">Add More</p>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>About us</Form.Label>
              <Form.Control
                required
                text="type"
                as="textarea"
                rows={8}
                placeholder=""
              />
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Skills</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Digital marketing , React "
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 mt-2" controlId="formBasicText">
              <Form.Label>Language's</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="English , Hindi "
                defaultValue=""
              />
              <Form.Control.Feedback type="invalid">
                Please enter your city.
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-grid gap-2 mt-5">
              <Link to="/employee/dashboard/experience-3">
                <Button variant="primary" size="lg" style={{ width: "100%" }}>
                  Save & Next
                </Button>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </>
  )
}

export default Exp2
