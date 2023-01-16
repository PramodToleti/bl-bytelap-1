import Nav from "react-bootstrap/Nav"
import Stack from "react-bootstrap/Stack"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import Col from "react-bootstrap/Col"
import Dropdown from "react-bootstrap/Dropdown"
import { Link } from "react-router-dom"
import ChooseFile from "../../ChooseFile"

import DashboardHeader from "../../components/Dashboard/DashboardHeader"

function Intern1() {
  return (
    <div className="col-lg-12 col-md-4 search-course-right   mb-4 mt-4 p-2 bg-light text-dark  border-secondary rounded container reveal  p-3 mb-5 bg-white rounded border border-secondary">
      <p className="text-start fs-5">Dashboard</p>
      <hr></hr>
      {/*<Nav defaultActiveKey="/home" as="ul">
        <Nav.Item as="li">
          <Nav.Link href="/home">CV Alerts</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Active Post</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1">Create Job</Nav.Link>
        </Nav.Item>
  </Nav>*/}
      <div>
        <DashboardHeader />
      </div>

      <div className="col-lg-8 border-light mt-5 shadow-sm p-3 mb-5  bg-white rounded">
        <p className="text-center mb-5">
          <p className="text-center">Post job</p>
          <Dropdown>
            <Dropdown.Toggle size="lg" variant="light" id="dropdown-basic">
              Internship
            </Dropdown.Toggle>

            <Dropdown.Menu>
              1
              <Link to="/employee/dashboard/internship-1" className="nav-link">
                Internship
              </Link>
              <Link to="/employee/dashboard/fresher-1" className="nav-link">
                Fresher
              </Link>
              <Link to="/employee/dashboard/experience-1" className="nav-link">
                Experience
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </p>

        <Form action="">
          <Form.Group className="mb-3 mt-2" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Are you actively looking for job"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Company name</Form.Label>
            <Form.Control
              disabled
              type="text"
              placeholder="Demo Solution Inc"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Job Tittle</Form.Label>
            <Form.Control
              type="email"
              placeholder="software developer , digital marketing"
            />
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Looking for full time or part time </Form.Label>
            <Form.Select>
              <option> Select an option </option>
              <option> Full-Time </option>
              <option>Part-Time</option>
              <option>Both</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>What is the schedule of this internship</Form.Label>
            <Form.Select>
              <option>Select an option </option>
              <option> Office </option>
              <option>Remote</option>
              <option>Both</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2">
            <Form.Label>Duration of Internship </Form.Label>
            <Form.Select>
              <option>Select an option </option>
              <option> 1 </option>
              <option> 2 </option>
              <option> 3 </option>
              <option> 4 </option>
              <option> 5 </option>
              <option> 6 </option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>
              Which location do you prefer looking for internship ?
            </Form.Label>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>

          <Form.Group className="mb-3 mt-2" controlId="formBasicText">
            <Form.Label>Any more location </Form.Label>
            <Form.Control type="text" placeholder="Location" />
          </Form.Group>

          <Form.Group
            as={Col}
            md="12"
            className="mt-3"
            controlId="validationCustom01"
          >
            <Form.Label className="mt-2">Upload your resume </Form.Label>
            <Stack
              direction="horizontal"
              gap={3}
              style={{
                marginTop: "7px",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              <input className="d-none" type="file" />
              <ChooseFile />
              <div className="or-container">
                {" "}
                <p
                  style={{
                    marginTop: "8px",
                  }}
                >
                  OR
                </p>
              </div>
              <Link to="/create-resume">
                <button className=" btn btn-outline-secondary">Create</button>
              </Link>
            </Stack>
            <Form.Control.Feedback type="invalid">
              Please upload your resume.
            </Form.Control.Feedback>
          </Form.Group>
          <small className="text-start text-muted mt-3">
            PDF,Doc,Docx, | Max:2MB
          </small>

          <div className="d-grid gap-2 mt-5">
            <Link to="/employee/dashboard/internship-2">
              <Button variant="primary" size="lg" style={{ width: "100%" }}>
                Save & Next
              </Button>
            </Link>
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Intern1
